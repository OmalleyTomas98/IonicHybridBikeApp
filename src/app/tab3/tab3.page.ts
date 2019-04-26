import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page 
{
   //page names
   name: string ="Track   Page";

   constructor(private geolocation: Geolocation) {}

   data:string = '';
   Page3name:string = 'Track Page';
   locate() 
   {

    // fidns the users longitude and latitude using service geo loaction 
     this.geolocation.getCurrentPosition().then((resp) => {
       // resp.coords.latitude
       // resp.coords.longitude
       this.data ='Lat: ' + resp.coords.latitude + '<br>'+ 'Lng:'+resp.coords.longitude
      }).catch((error) => {
        console.log('Error getting location', error);
      });
      
   }
}


