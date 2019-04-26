import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BikingService {

  //creates all the bike data
  constructor(private http:HttpClient) { }

  // service retrives json data from http url with get request

  GetBikeData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsoblob/0c2bb7e3-67f9-11e9-bbf2-837d4691e6ec');
  }
}
