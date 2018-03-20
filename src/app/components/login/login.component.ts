import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;
  logged: any;
  constructor(
    private authService: AuthService,
    private _flashMessagesService: FlashMessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }
  ngOnInit() {
  }
  loginWithGoogle() {
   this.authService.login()
    .then(resolve => {
      console.log(resolve);
      this.router.navigate(['chat']);
      
    })
    .catch(error => console.log(error));
  }

  logout() {
    return this.authService.logout();
  }

}
