import { Component} from '@angular/core';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  islogedIn: boolean = false;
  constructor(public hardcoded: HardcodedAuthenticationService) {
  }
  ngOnInit() {
    this.islogedIn = this.hardcoded.isUserLoggedIn();
  }

}
