import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(hardcodedAuthenticationService: HardcodedAuthenticationService) {
    hardcodedAuthenticationService.logout();
  }

}
