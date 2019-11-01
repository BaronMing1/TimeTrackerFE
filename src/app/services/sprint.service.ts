import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SprintService {
  pastSprintPage = false;
  finished = true;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  private subjectCommand = new Subject<any>();

  sendCommand(command: string) {
    this.subjectCommand.next(command);
  }

  getCommand() {
    return this.subjectCommand.asObservable();
  }

  navigationPast() {
    this.pastSprintPage = true;
    this.change.emit(this.pastSprintPage);
  }

  navigationNew() {
    this.pastSprintPage = false;
    this.change.emit(this.pastSprintPage);
  }
}
