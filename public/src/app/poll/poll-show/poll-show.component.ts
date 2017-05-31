import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PollService } from './../poll.service';

@Component({
  selector: 'app-poll-show',
  templateUrl: './poll-show.component.html',
  styleUrls: ['./poll-show.component.css']
})
export class PollShowComponent implements OnInit {

  poll_id: String;
  polls: Array<any>;

  constructor(
    private _route: ActivatedRoute,
    private _pollService: PollService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.poll_id = param.id;
    })
    this.showPoll(this.poll_id);
    // console.log(this.user_id);  
  }

  showPoll(id){
    // console.log(id);
    this._pollService.showPoll(id)
    .then( current_poll => {
    this.polls = current_poll
    console.log(current_poll);
    })
    .catch( err => console.log(err))
  }
}
