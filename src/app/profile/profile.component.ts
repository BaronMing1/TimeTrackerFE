import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { state } from '@angular/animations';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {
    if (this.auth.isAuthenticated$) {
      console.log('user OK');
      this.auth.getUser$().subscribe(val => console.log(val));
      // this.auth.userProfile$.pipe(
      //   map(loggedIn => {
      //     if (!loggedIn) {
      //       this.auth.login();
      //     }
      //   })
      // )
      console.log(JSON.parse(JSON.stringify(this.auth.userProfile$)));
      console.log('user OK2');
      // console.log(this.auth.isLoggedIn$);
    } else {
      console.warn('User not logged in!');
    }
  }
}
