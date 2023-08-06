import {Component, inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AuthenticateService} from "../util/authenticate.service";

@Component({
  selector: 'app-recipe-navigation',
  templateUrl: './recipe-navigation.component.html',
  styleUrls: ['./recipe-navigation.component.less']
})
export class RecipeNavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private authService: AuthenticateService = inject(AuthenticateService);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isLoggedIn() {
    return this.authService.isLoggedIn()
  }

}
