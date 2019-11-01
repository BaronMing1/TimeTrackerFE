import { Component, OnInit } from '@angular/core';
import { Sprint } from '../models/sprint';
import { SprintService } from '../services/sprint.service';
import { Subscription } from 'rxjs';
import { PauseSprintDialogComponent } from '../pause-sprint-dialog/pause-sprint-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import * as _request from 'superagent';
import { PastSprintsComponent } from '../past-sprints/past-sprints.component';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  providers: [PastSprintsComponent],
  selector: 'app-in-progress-sprint',
  templateUrl: './in-progress-sprint.component.html',
  styleUrls: ['./in-progress-sprint.component.css']
})
export class InProgressSprintComponent implements OnInit {
  dialogRef: MatDialogRef<PauseSprintDialogComponent>;
  sprintServiceSubscription: Subscription;
  newSprintSubscription: Subscription;
  http: HttpClient = {} as HttpClient;

  constructor(
    private sprintService: SprintService,
    private pastSprint: PastSprintsComponent,
    public dialog: MatDialog
  ) {
    this.sprintServiceSubscription = sprintService
      .getCommand()
      .subscribe(message => {
        if (message === 'newSprint') {
          this.progress();
        }
      });
  }
  newSprint: Sprint;

  ngOnInit() {}

  title = 'materialApp';
  color = 'primary';
  mode = 'determinate';
  value = 0;
  timer = null;
  pause = false;
  pauseTimeSec = 0;
  percentage$: number;
  count$: number;

  progress(): void {
    this.newSprint = JSON.parse(localStorage.getItem('newSprint'));
    console.log('FIRE');
    console.log(this.newSprint.sprintType.duration);
    this.count$ = 0;
    this.newSprint.startedAt = new Date();
    this.timer = window.setInterval(async () => {
      if (!this.pause) {
        this.count$ += 1;
        this.value = this.count$ * (100 / this.newSprint.sprintType.duration);
        this.percentage$ = this.value / 100; // (1000 * this.count$) / this.value;
      }
      if (this.count$ >= this.newSprint.sprintType.duration) {
        console.log('FIRE2');
        clearInterval(this.timer);
        const finishedAt: Date = new Date();
        this.newSprint.finishedAt = finishedAt;
        this.newSprint.sprintType.status = 'Completed';
        const rep = new DataService(this.http);
        await rep.sendInformation(this.newSprint);
        this.sprintService.navigationNew();
        this.pastSprint.loadData();
        // this.pastSprint.ngOnInit();
      }
    }, 1000);
  }

  /**
   * Set on hold the sprint
   */
  holdSprint(): void {
    this.pause = true;
    // const pauseTime = new Date();
    // this.pauseTimeSec =
    //   pauseTime.getHours() * 3600 +
    //   pauseTime.getMinutes() * 60 +
    //   pauseTime.getSeconds();
  }

  /**
   * Resume the paused sprint
   */
  resumeSprint(): void {
    this.pause = false;
  }

  public async sendInformation_Old(document: Sprint): Promise<number> {
    const request: _request.SuperAgentRequest = _request.post(
      'http://localhost:3000/newSprint'
    );

    request
      .set('Cache-properties', '*')
      .set('Content-Type', 'application/json')
      // .query({ lean: 1, _lid: maximo.username, _lpwd: maximo.password })
      .send(`${JSON.stringify(document)} `);

    const response: _request.Response = await request.catch((err: any) => {
      // Right now it's Impossible to try to get a 500 in debug mode.
      return 500;
    });
    const statusResponse = response.status;
    return statusResponse;
  }

  openConfirmationDialog() {
    this.dialogRef = this.dialog.open(PauseSprintDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage =
      'Voulz-vous arrêtez le sprint ?';

    this.dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        // do confirmation actions
        console.log('le resultat:' + result);
        const finishedAt: Date = new Date();
        this.newSprint.finishedAt = finishedAt;
        this.newSprint.sprintType.status = 'Cancelled';
        this.newSprint.progress = this.percentage$;
        const rep = new DataService(this.http);
        await rep.sendInformation(this.newSprint);
        this.sprintService.navigationNew();
        // this.pastSprint.addData(this.newSprint);
        this.pastSprint.loadData();
      } else {
        this.resumeSprint();
      }
      this.dialogRef = null;
    });
  }
}
