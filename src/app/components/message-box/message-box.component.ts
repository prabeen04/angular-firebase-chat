import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  message: string;
  placeholder: string = '';
  constructor(private chatService: ChatService, private authService: AuthService) { }

  ngOnInit() {
   this.authService.getUser().subscribe((user)=>{
    this.placeholder = user.displayName;
   });
  }

  sendMessage(){
    console.log(this.message + 'is this');
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  handleSubmit(e){
    if(e.keyCode === 13){
      this.sendMessage();
    }
  }
}
