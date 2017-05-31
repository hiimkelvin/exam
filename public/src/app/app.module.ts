import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { LoginService } from './login/login.service';
import { PollService } from './poll/poll.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PollComponent } from './poll/poll.component';
import { PollDashboardComponent } from './poll/poll-dashboard/poll-dashboard.component';
import { PollNewComponent } from './poll/poll-new/poll-new.component';
import { PollShowComponent } from './poll/poll-show/poll-show.component';
import { PollDestroyComponent } from './poll/poll-destroy/poll-destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PollComponent,
    PollDashboardComponent,
    PollNewComponent,
    PollShowComponent,
    PollDestroyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService, PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
