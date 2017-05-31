import { Component, OnInit } from '@angular/core';
import { PollService } from './../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll-dashboard',
  templateUrl: './poll-dashboard.component.html',
  styleUrls: ['./poll-dashboard.component.css']
})
export class PollDashboardComponent implements OnInit {

  polls: Array<any>;
  user: any;

  constructor(
    private _pollService: PollService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getAllPolls();
    this.getCurrentUser();
  }

  getAllPolls(){
  	this._pollService.getPolls()
  		.then( poll => {
  			console.log(poll);
  			this.polls = poll})
  		.catch( response => console.log(response) )
  }

  getCurrentUser(){
    this._pollService.getCurrent()
      .then((user)=> this.user = user)
      .catch((err) => this._router.navigate(['/login']))
  }
}
