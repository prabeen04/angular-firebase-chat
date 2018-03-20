import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  isOnline: boolean = false;
  users = [];
  showSpinner: boolean = false;
  
  constructor(private chatService: ChatService) { 
    this.showLoadingSpinner();        
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
