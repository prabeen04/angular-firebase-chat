import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {
  listings: any;
  notListing: boolean = true;
  constructor(private firebaseService: FirebaseService) {

    //  this.listings = firebaseService.getListings();

    //   console.log(this.listings);

    // this.listings = this.db.list('/listings');
    // console.log(this.listings);
  }

  ngOnInit() {

    this.firebaseService.getListings().subscribe(listings => {
      console.log(listings);
      this.listings = listings;
      this.notListing = false;
    })
  }
}