import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { NgClass } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MasonryModule } from 'angular2-masonry';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MdButtonModule,
         MdToolbarModule,
         MdCheckboxModule,
         MdIconModule,
         MdCardModule,
         MdInputModule,
         MdMenuModule,
        } from '@angular/material';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ImageGallaryComponent } from './components/image-gallary/image-gallary.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FireComponent } from './components/fire/fire.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { ListingComponent } from './components/listing/listing.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatFeedComponent } from './components/chat-feed/chat-feed.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TravellComponent } from './components/travell/travell.component';

import { PixabayService } from './services/pixabay.service';
import { FirebaseService } from './services/firebase.service';
import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';
import { AuthGuard} from './guards/auth.guard';



export const routes: Routes = [
  { path: '', component: ImageGallaryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'fire', component: FireComponent},
  {path:'listing/:id', component:ListingComponent},  
  {path: 'add-item', component: AddListingComponent, canActivate: [AuthGuard]},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ImageGallaryComponent,
    NavbarComponent,
    FireComponent,
    AddListingComponent,
    ListingComponent,
    ChatComponent,
    ChatFeedComponent,
    UserListComponent,
    MessageBoxComponent,
    LoginComponent,
    SignupComponent,
    TravellComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MasonryModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdMenuModule 
  ],
  providers: [PixabayService, FirebaseService, ChatService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
