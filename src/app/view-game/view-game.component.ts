import {Component, OnInit} from '@angular/core';
import {map, mergeMap, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {GameInfo} from "../model/gameInfo";
import {DefaultService} from "../api/default.service";
import {GameStatistics} from "../model/gameStatistics";

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css']
})
export class ViewGameComponent implements OnInit {
  uid: Observable<string>;
  gameInfo: Observable<GameInfo>;
  gameStatistics: Observable<GameStatistics>;

  constructor(public api: DefaultService, public route: ActivatedRoute) {
    this.uid = route.params.pipe(map((p) => p['uid']));
    this.gameInfo = this.uid.pipe(
      mergeMap(
        (uid) => api.configGame(uid)
      )
    );
    this.gameStatistics = this.uid.pipe(
      mergeMap(
        (uid) => api.gameStatistics(uid)
      )
    );
  }

  ngOnInit(): void {
  }

}
