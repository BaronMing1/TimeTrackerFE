import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-sprint',
  templateUrl: './app-sprint.component.html',
  styleUrls: ['./app-sprint.component.css']
})
export class AppSprintComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.auth.userProfile$) {
      //if (!this.auth.user$) {
      this.router.navigate(['/']);
    } else {
      console.log('User info:::' + this.auth.isAuthenticated$);
      // console.log(this.auth.isLoggedIn$);
      console.warn('User  test');
      console.log(this.auth.isAuthenticated$);
      console.warn('User  logged in!');
    }
    if (!this.auth.isAuthenticated$) {
      console.warn('User -- isAuthenticated');
      console.log(this.auth.isAuthenticated$);
    }
    // if (!this.auth.isLoggedIn$) {
    //   console.warn('User -- isLoggedIn');
    //   console.log(this.auth.isLoggedIn$);
    // }
  }
}
