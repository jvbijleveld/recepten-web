import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RecipeNavigationComponent } from './recipe-navigation/recipe-navigation.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HttpClientModule} from "@angular/common/http";
import {RecipesService} from "./recipes/recipes.service";
import {ApiService} from "./util/api.service";
import { RecipeComponent } from './recipes/recipe/recipe.component';
import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthService, SocialAuthServiceConfig,
  SocialLoginModule
} from "@abacritt/angularx-social-login";
import {AuthenticateService} from "./util/authenticate.service";
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './recipes/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeNavigationComponent,
    RecipesComponent,
    RecipeComponent,
    LoginComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    ApiService,
    RecipesService,
    AuthenticateService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('139305887902-hv95atfouv29nc40ua4ltsod0timampk.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
