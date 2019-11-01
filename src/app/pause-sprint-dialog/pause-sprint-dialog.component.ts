import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pause-sprint-dialog',
  templateUrl: './pause-sprint-dialog.component.html',
  styleUrls: ['./pause-sprint-dialog.component.css']
})
export class PauseSprintDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PauseSprintDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmMessage: string;
  ngOnInit() {}
}
