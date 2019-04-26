    
import { Component, OnInit } from '@angular/core';
import {BikingService} from '../biking.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{


  yourname: string='Build Page';
  bikes:any = [];
  weather:any = [];
  constructor(private dataService:BikingService){}

  ngOnInit(){
      this.dataService.GetBikeData().subscribe((data)=>{
          this.bikes = data.bikes;
      });

    
  }
}