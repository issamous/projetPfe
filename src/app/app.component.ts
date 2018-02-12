import { Component , OnInit} from '@angular/core';
import { StateService } from './service/state.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   list: any[]= [
     {
      "origin":'Bizerte, Tunisie',
      "destination":'Manouba, Tunisie'
     },
     {
      "origin":'Manouba, Tunisie',
      "destination":'Béja, Tunisie'
     },
     {
      "origin":'Béja, Tunisie',
      "destination":'Jendouba, Tunisie'
     },
     {
      "origin":'Jendouba, Tunisie',
      "destination":'tataouine, Tunisie'
     }
  ];
  ngOnInit() {
   
  }

  title: string = 'My first AGM project';
  latHome: number = 48.151839;
lngHome: number = 13.831726;
latComp: number = 48.329500;
lngComp: number = 14.319765;
titleComp: string = "dynatrace";

lat: number = (this.latComp + this.latHome) * 3;
lng: number = (this.lngComp + this.lngHome) * 3;

 }
