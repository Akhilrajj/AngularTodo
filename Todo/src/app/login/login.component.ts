import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='Admin';
  password:string='1234';
  constructor(private router:Router,private hardcodedAuthenticationService:HardcodedAuthenticationService) { }
  ngOnInit() {
  }
  Login(){
    if(this.hardcodedAuthenticationService.auhnticate(this.username,this.password)){
      this.router.navigate(['home',this.username])
    }
    else{
      alert("Invalid Credentials")
    }
  }

}
