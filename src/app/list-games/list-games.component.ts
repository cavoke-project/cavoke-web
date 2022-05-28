import {Component, OnInit} from '@angular/core';
import {DefaultService} from "../api/default.service";
import {GameInfo} from "../model/gameInfo";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  games: Observable<GameInfo[]>

  constructor(public api: DefaultService) {
    this.games = api.listGames()
  }

  ngOnInit(): void {
  }

}
