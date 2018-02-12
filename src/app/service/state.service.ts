import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StateService {

  constructor(private http: Http) { }
  getState(){
    this.http.get("http://localhost:3000/states") .map(response => response.json()).subscribe(data=>{
      	console.log(data);
        return data;
      	}
      );
  }
  

}
