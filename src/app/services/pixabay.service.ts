import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { environment } from "../../environments/environment";

import 'rxjs/add/operator/map';
@Injectable()
export class PixabayService{
    pixabayURL = environment.PIXABAY_URL; 
    pixabayKEY = environment.PIXABAY_KEY; 
    constructor(private _http: Http){}

    getImages(query){
        return this._http.get(this.pixabayURL+this.pixabayKEY+'&q='+query)
        .map(res => res.json());
    }
}