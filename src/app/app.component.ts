import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/services/auth.service';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'timeTrackerFE';
  user$: Observable<User>;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.localAuthSetup();
    this.auth.handleAuthCallback();
  }
}
