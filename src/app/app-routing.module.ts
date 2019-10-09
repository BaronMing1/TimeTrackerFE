import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSprintComponent } from './app-sprint/app-sprint.component';
import { CallbackAuthComponent } from './callback-auth/callback-auth.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'app-sprint',
    component: AppSprintComponent
  },
  {
    path: 'callbackAuth',
    component: CallbackAuthComponent
    },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
