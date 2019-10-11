import { Component, OnInit } from '@angular/core';
import { Sprint } from '../models/sprint';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { utils } from '../utils/utils';

@Component({
  selector: 'app-past-sprints',
  templateUrl: './past-sprints.component.html',
  styleUrls: ['./past-sprints.component.css']
})
export class PastSprintsComponent implements OnInit {
  pastSprint: Sprint;
  dataSource = new MatTableDataSource([]);
  private login_info: any;

  displayedColumns = ['user', 'description', 'duration'];
  constructor(
    private route: ActivatedRoute,
    private pastSprintService: DataService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.pastSprint = this.route.snapshot.data['pastSprint'];
    this.pastSprintService.findAllPastSprint().subscribe((past$: any) => {
      this.dataSource.data = past$;
      console.log('past', past$);
    });
    this.login_info = utils.validateLogin(this.auth);
    if (this.login_info) {
    }
  }
}
