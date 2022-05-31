import {Component, OnInit} from '@angular/core';
import {Submission} from "./submission";
import {FormControl, NgForm} from "@angular/forms";
import * as $ from "jquery";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  model: Submission = new Submission('', '', '', '', null, null, null)

  submitted: boolean = false

  submitUrl: string = environment.apiBasePath + "/submit_game";

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    $('#myform').submit()
  }

}
