import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-bottom-page',
  templateUrl: './bottom-page.component.html',
  styleUrls: ['./bottom-page.component.css']
})
export class BottomPageComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {
    console.log('Damned');
    // this.auth.userProfile$.pipe(
    //   tap(result => {
    //     console.log(JSON.stringify(result));
    //   })
    // );
    // const username = JSON.parse(localStorage.getItem('profile')).name;
    // console.log(username);
  }
}
