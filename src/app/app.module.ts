import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ApiModule} from './api.module';
import {AppRoutingModule} from "./app-routing.module";
import {ListGamesComponent} from './list-games/list-games.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ViewGameComponent} from './view-game/view-game.component';
import {NewGameComponent} from './new-game/new-game.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import {AuthHttpInterceptor, AuthModule} from "@auth0/auth0-angular";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    ListGamesComponent,
    ViewGameComponent,
    NewGameComponent,
    NotFoundComponent
  ],
    imports: [
        BrowserModule,
        // AuthModule.forRoot({
        //   domain: "cavoke.eu.auth0.com",
        //   clientId: "3aoNB3XQLtBLDSwx7eftAed4YbyLXO69",
        //   useRefreshTokens: true,
        //   cacheLocation: "localstorage",
        //   audience: "https://develop.api.cavoke.wlko.me",
        //   httpInterceptor: {
        //     allowedList: [`${environment.apiBasePath}/*`],
        //   },
        // }),
        HttpClientModule,
        AppRoutingModule,
        ApiModule,
        FormsModule,
    ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthHttpInterceptor,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
