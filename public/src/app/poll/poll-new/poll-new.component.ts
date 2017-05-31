import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PollService } from './../poll.service';

@Component({
  selector: 'app-poll-new',
  templateUrl: './poll-new.component.html',
  styleUrls: ['./poll-new.component.css']
})
export class PollNewComponent implements OnInit {

  errors: any;

  constructor(
    private _pollService: PollService, 
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  addPoll(formData){
    console.log(formData);
  	this._pollService.addPoll(formData.value)
  		.then( () => this.router.navigate(['/dashboard']))
  		.catch( err => this.errors = err )
  }
}
