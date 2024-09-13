import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class stingType{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(
    private http:HttpClient
  ) { }

  callApli(){
   // console.log("call api");
    return this.http.get<stingType>("http://localhost:8080/bean-hello-world");
  }
  callApi(name:any){
    //console.log("call api");
    return this.http.get<stingType>(`http://localhost:8080/bean-hello-world/${name}`);
  }
}
