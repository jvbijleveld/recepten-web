import {Injectable} from "@angular/core";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Injectable()
export class AuthenticateService {
  user: SocialUser | null;

  constructor(private authService: SocialAuthService)
  {
    this.user = null;
    this.authService.authState.subscribe((user: SocialUser) => {
      console.log(user);
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    if (this.user?.idToken) {
      return true;
    }
    return false;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) =>
      console.log(x)
    );
  }

  signOut(): void {
    this.authService.signOut();
  }

}
