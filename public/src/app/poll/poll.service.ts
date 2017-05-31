import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class PollService {

  constructor(private _http: Http) { }

  addPoll(formData){
    console.log(formData);   
    return this._http.post('/api/addpoll', formData)
    .map( (questions: Response) => questions.json()).toPromise()
  }

  getPolls(){
    return this._http.get('/api/polls')
    .map( (questions: Response) => questions.json() )
    .toPromise();
  }

  showPoll(id){
    // console.log(id);
    return this._http.get('/api/poll/show/' + id)
    .map( (current_user: Response) => current_user.json())
    .toPromise() 
  }

  destroyPoll(id){
    return this._http.delete('/api/poll/destroy/' + id)
    .map( (users: Response) => users.json())
    .toPromise()
  }

  getCurrent(){
    return this._http.get('/api/current')
      .map( (messages:Response) => messages.json())
      .toPromise()
  }
}
