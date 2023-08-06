import {Component} from '@angular/core';
import {AuthenticateService} from "./util/authenticate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'recepten-web';

  constructor(private authService:AuthenticateService) {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
