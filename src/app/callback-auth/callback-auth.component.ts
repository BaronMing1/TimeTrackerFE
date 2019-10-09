import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';

@Component({
  selector: 'app-callback-auth',
  templateUrl: './callback-auth.component.html',
  styleUrls: ['./callback-auth.component.css']
})
export class CallbackAuthComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.handleAuthCallback();
  }

}
