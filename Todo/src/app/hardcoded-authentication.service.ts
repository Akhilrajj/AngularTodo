import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  
  auhnticate(username:string, password:string) {
    if (username === 'Admin' && password === "1234") {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    else{
      return false;
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }
  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }

}
