import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
//import * as firebase from 'firebase';

@Injectable()
 export class FirebaseService {
    listings: FirebaseListObservable<any[]>;
    listing: FirebaseObjectObservable<any>;
    // folder: any;
     constructor(private af: AngularFireDatabase){

     }

     getListings(){
        this.listings = this.af.list('https://prabeen-b85c7.firebaseio.com/listings') as FirebaseListObservable<Listing[]>;
        console.log(this.listings);
        return this.listings;
     }

     getListingDetails(id){
      this.listing = this.af.object('/listings/'+id) as FirebaseObjectObservable<Listing>
      return this.listing;
    }

     addListing(listing){
       console.log(listing);
       return this.af.list('https://prabeen-b85c7.firebaseio.com/listings').push(listing);
      
      // Create root ref
      // let storageRef = firebase.storage().ref();
      // for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      //   let path = `/${this.folder}/${selectedFile.name}`;
      //   let iRef = storageRef.child(path);
      //   iRef.put(selectedFile).then((snapshot) => {
      //     listing.image = selectedFile.name;
      //     listing.path = path;
      //     return this.listings.push(listing);
      //   });
      // }
    }

 }

 interface Listing{
  $key?:string;
  title?:string;
  type?:string;
 // image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}
  