import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListGamesComponent} from "./list-games/list-games.component";
import {ViewGameComponent} from "./view-game/view-game.component";
import {NewGameComponent} from "./new-game/new-game.component";
import {NotFoundComponent} from "./not-found/not-found.component";


export const routes: Routes = [
  {path: "", component: ListGamesComponent},
  {path: "new", component: NewGameComponent},
  // { path: "my", component: ListCodesComponent, canActivate: [AuthGuard] },
  {path: "game/:uid", component: ViewGameComponent},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
