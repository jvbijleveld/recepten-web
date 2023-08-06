import {Injectable} from "@angular/core";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Injectable()
export class AuthenticateService {
  private USER_KEY: string = "auth-data";

  constructor(private authService: SocialAuthService) {
    this.authService.authState.subscribe((user: SocialUser) => {
      window.sessionStorage.removeItem(this.USER_KEY);
      window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
    });
  }

  isLoggedIn(): boolean {
      const user= this.getUser();
      return (user !== null && user.idToken !== undefined);
  }

  getUser(): SocialUser | null {
    var userData = window.sessionStorage.getItem(this.USER_KEY);
    if (userData) {
      return JSON.parse(userData);
    }
    return null
  }

  getToken(): string | undefined {
    return this.getUser()?.idToken;
  }

  signOut(): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    this.authService.signOut();
  }

}
