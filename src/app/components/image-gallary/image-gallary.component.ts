import { Component, OnInit } from '@angular/core';
import { PixabayService } from '../../services/pixabay.service';

@Component({
  selector: 'app-image-gallary',
  templateUrl: './image-gallary.component.html',
  styleUrls: ['./image-gallary.component.css']
})
export class ImageGallaryComponent implements OnInit {
   images: any;
   query: string ;
  imageProcessing: boolean = false;
  constructor(private pixabayService: PixabayService) { }

  ngOnInit() {
    //this.data = this.pixabayService.getData();
    //this.images = this.getImages(this.query);
    //console.log(this.images);
  }
  getPixabayImages(query){
    this.imageProcessing = true;    
    this.pixabayService.getImages(this.query)
      .subscribe(
        //data => console.log(data)
       data =>this.handleSuccess(data),
        error =>this.handleError(error)
      );
  }
  handleSuccess(data){
    this.imageProcessing = false;       
    console.log(data);
    this.images = data.hits;
  }

  handleError(error){
    console.log(error);    
  }
}
