import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  logged:any; 
  isLogged:boolean; 
  status: string = 'offline';
  constructor(
    private _flashMessagesService: FlashMessagesService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.user = this.authService.getUser();
  }
  ngOnInit() {
  }

  logout() {
    console.log('logout clicked1');
   this.authService.setUserStatus(this.status);  
    console.log('logout clicked');
    return this.authService.logout()
    .then(resolve =>{
      console.log(resolve);
  
      this.router.navigate(['login']);
    })
    .catch(error => {
      console.log(error);
    });
  }

}
