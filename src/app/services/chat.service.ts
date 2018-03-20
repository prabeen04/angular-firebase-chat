import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/observable';
import * as firebase from 'firebase/app';
import { ChatMessage } from '../models/chat.message.model';

@Injectable()
export class ChatService {
  user: any;
  photoURL: any;
  messages: FirebaseListObservable<any[]>;
  message: ChatMessage;
  userName: Observable<string>
  constructor(private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }

      this.getUser().subscribe(a => {
        this.userName = a.displayName;
        this.photoURL = a.photoURL;
        console.log(a.displayName);
      });
    });
  }


  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path);
  }

  getUsers() {
    const path = '/users';
    return this.db.list(path);
  }

  getMessages() {
    this.messages = this.db.list('/messages') as FirebaseListObservable<any[]>;
    return this.messages;
  }

  sendMessage(message: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.messages = this.getMessages();
    const name = this.user.displayName;
    this.messages.push({
      email: email,
      username: name,
      message: message,
      timesent: timestamp
    });
  }

  getTimeStamp() {
    const now = new Date();
    console.log(now);
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();
    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();
    console.log(date + ' ' + time);
    return (date + ' ' + time);
  }

}
