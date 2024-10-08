import { Injectable } from '@angular/core';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService
    ,private router:Router
  ) {

   }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuthenticationService.isUserLoggedIn()){
       return true;
     }
     else{
      this.router.navigate(['login']);
     return false;
     }
     

   }
}
  
