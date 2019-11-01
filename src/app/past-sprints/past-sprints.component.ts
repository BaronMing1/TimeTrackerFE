import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Sprint } from '../models/sprint';
import { DataService } from '../services/data.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { utils } from '../utils/utils';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-past-sprints',
  templateUrl: './past-sprints.component.html',
  styleUrls: ['./past-sprints.component.css']
})
export class PastSprintsComponent implements OnInit {
  pastSprint: Sprint;
  // dataSource$: Observable<Sprint[]>;
  dataSource$ = new MatTableDataSource([]);
  private login_info: any;

  displayedColumns = ['user', 'name', 'status', 'description', 'duration'];
  httphome: HttpClient = {} as HttpClient;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private pastSprintService: DataService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    // this.pastSprint = this.route.snapshot.data['pastSprint'];
    this.loadData();
    this.login_info = utils.validateLogin(this.auth);
    if (this.login_info) {
    }
  }

  addData(newSprint: Sprint) {
    // this.dataSource$.data.push;
    // const data = this.dataSource$.data;
    // data.push(newSprint);
    // this.dataSource$.data = data;
  }

  loadData() {
    // const https$: Observable<
    //   Sprint[]
    // > = this.pastSprintService.findAllPastSprint();
    // const result$ = https$.pipe(shareReplay());
    // result$.subscribe();
    // this.dataSource$ = result$;
    // console.log('result', result$);
    this.pastSprintService.findAllPastSprint('s.lajeunesse').subscribe((past: any) => {
      this.dataSource$.data = past;
      console.log('past', past);
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        console.log(`Just: ${result}`);
        const myService = new DataService(this.httphome);
        await myService.deleteAll('s.lajeunesse');
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'DeleteAll_Dialog.html'
})
export class DialogContentExampleDialog {}
