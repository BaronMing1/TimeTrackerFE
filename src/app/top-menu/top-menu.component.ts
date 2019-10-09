import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  navigateMenu(tag) {
    if (tag === 'home') {
      this.router.navigate(['/']);
    }
    if (tag === 'profile') {
      this.router.navigate(['/profile']);
    }
    if (tag === 'sprint') {
      this.router.navigate(['/app-sprint']);
    }
  }
}
