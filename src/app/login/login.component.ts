import {Component, OnInit} from '@angular/core';
import {AuthenticateService} from "../util/authenticate.service";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  private user?: SocialUser;

  constructor(private authService: AuthenticateService) { }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
