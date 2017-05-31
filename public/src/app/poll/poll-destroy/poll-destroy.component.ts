import { PollService } from './../poll.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-poll-destroy',
  templateUrl: './poll-destroy.component.html',
  styleUrls: ['./poll-destroy.component.css']
})
export class PollDestroyComponent implements OnInit {
  poll = {};

  constructor(
    private _pollService: PollService,
    private _route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.poll = param.id;
    })
    this.destroyPoll(this.poll);
  }

  destroyPoll(id){
    // console.log(id);
    this._pollService.destroyPoll(id)
    // .then( current_user => this.user = current_user)
    .then(() => this.router.navigate(['/dashboard']))
    .catch( err => console.log(err))
  }

}
