import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ChatService } from '../../services/chat.service';
import { ChatMessage } from '../../models/chat.message.model';

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.css']
})
export class ChatFeedComponent implements OnInit {
 messages: any;
 users = [] ;
 showSpinner: boolean = false;
 
  constructor(private chatService: ChatService) { 
    this.showLoadingSpinner();    
    this.messages = chatService.getMessages() ;
  }

  ngOnInit() {
    this.chatService.getUsers().subscribe(users =>{
      console.log('inside user list');
      console.log(users);
      this.users = users;
      this.hideLoadingSpinner();
      
    });
  }
  showLoadingSpinner() {
    this.showSpinner = true;
}

hideLoadingSpinner() {
    this.showSpinner = false;
}
}
