import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ApiModule} from './api.module';
import {AppRoutingModule} from "./app-routing.module";
import {ListGamesComponent} from './list-games/list-games.component';
import {HttpClientModule} from "@angular/common/http";
import {ViewGameComponent} from './view-game/view-game.component';
import {NewGameComponent} from './new-game/new-game.component';
import {NotFoundComponent} from './not-found/not-found.component';

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
    HttpClientModule,
    AppRoutingModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
