import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PollComponent } from './poll/poll.component';
import { PollDashboardComponent } from './poll/poll-dashboard/poll-dashboard.component';
import { PollNewComponent } from './poll/poll-new/poll-new.component';
import { PollShowComponent } from './poll/poll-show/poll-show.component';
import { PollDestroyComponent } from './poll/poll-destroy/poll-destroy.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: PollComponent, children: [
    	{path: '', component: PollDashboardComponent},
    	{path: 'create', component: PollNewComponent},
        { path: 'poll/:id', component: PollShowComponent },
        { path: 'show/:id', component: PollShowComponent },
        { path: 'destroy/:id', component: PollDestroyComponent },

    ]},
];

export const routing = RouterModule.forRoot(APP_ROUTES);