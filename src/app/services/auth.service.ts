import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { User } from '../models/user.model';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  authState: any;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user = this.afAuth.authState;
  }
  getUser() {
    return this.user;
  }

  get currentUserId(): string {
    console.log(this.authState.user.uid);
    return this.authState !== null ? this.authState.user.uid : '';

  }

  login() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(user => {
        console.log(user)
        this.authState = user;
        console.log(this.authState.user.uid);
        const id = this.authState.user.uid;
        const email = this.authState.user.email;
        const displayName = this.authState.user.displayName;
        const photoURL = this.authState.user.photoURL;
        const status = 'online';
        //this.setUserStatus('online');
        this.setUserData(id, email, displayName, photoURL, status);
      })
      .catch(error => console.log(error))
      ;
    // this._flashMessagesService.show('You have logged in successfully',
    //   { cssClass: 'alert-success', timeout: 1000 });
  }

  logout() {
    return this.afAuth.auth.signOut()
    .then(function(){
      console.log('you have logged out successfully');    
    });
   // this._flashMessagesService.show('You have logged out successfully!', { cssClass: 'alert-success', timeout: 1000 });
  }

  setUserData(id: string, email: string, displayName: string, photoURL: string, status: string): void {
    console.log(email + '' + displayName, status + 'from setUserData');
    const path = `/users/`+id;
    const data = {
      email: email,
      displayName: displayName,
      photoURL: photoURL,
      status: status
    };

    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }

  // setUserOffline(){
  //   console.log('uid: ');
  //   console.log('sdsdsd');
  // }
  setUserStatus(status: string): void {
    console.log('inside setuserstatus');
    const path = `users/${this.currentUserId}`;
    console.log(path);

    const data = {
      status: 'offline'
    };
    this.db.object(path).update(data)
    .catch(error => console.log(error));
  }
}
