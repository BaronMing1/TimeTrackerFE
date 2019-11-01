import { Component, OnInit, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { Sprint } from '../models/sprint';
import { FormsModule, NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppModule } from '../app.module';
import { Observable } from 'rxjs';
import { SprintService } from '../services/sprint.service';
import { SprintType } from '../models/sprintType';
declare function fetch(url: string);

// platformBrowserDynamic().bootstrapModule(AppModule);
@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
@NgModule({
  declarations: [NewSprintComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [NewSprintComponent]
})
export class NewSprintComponent implements OnInit {
  myForm: FormGroup;

  formInfo = {
    selectedOption: 'Very short (5min)',
    description: '',
    notify: false
  };

  options: String[] = [
    'Instant (5s)',
    'Very short (5min)',
    'Short (15min)',
    'Pomodoro (25min)',
    'Long (45min)',
    'Very long (60min)'
  ];

  optionsvalue: number[] = [5, 300, 900, 1500, 2700, 3600];

  //  selectedOption = 'Very short (5min)';
  modelNewSprint: Sprint = {} as Sprint;
  constructor(fb: FormBuilder, private sprintService: SprintService) {
    this.myForm = fb.group({
      // title: ['This is the title', [Validators.minLength(5)]],
      progress: 0,
      description: ['description goes here', [Validators.required]]
    });
  }
  ngOnInit() {}

  // Get the values from the form & save them in the local storage
  saveNewSprint(form: NgForm) {
    console.log(form);
    console.log(form.value);
    console.log(this.formInfo);
    const newSprint: Sprint = {} as Sprint;
    newSprint.notify = this.formInfo.notify;
    newSprint.description = this.formInfo.description;
    newSprint.createdAt = new Date();
    newSprint.progress = 0;
    newSprint.user = '';
    newSprint.sprintType = {} as SprintType;

    let countItem = 0;
    for (let item of this.options) {
      console.log(countItem);
      console.log(item);
      console.log(this.formInfo.selectedOption);
      if (item == this.formInfo.selectedOption) {
        newSprint.sprintType.duration = this.optionsvalue[countItem];
        newSprint.sprintType.name = this.formInfo.selectedOption;
        newSprint.sprintType.unit = 'min-test';
      }
      countItem = countItem + 1;
    }
    console.log(newSprint);
    localStorage.setItem('newSprint', JSON.stringify(newSprint));
    this.sprintService.sendCommand('newSprint');
    this.sprintService.navigationPast();
    // this.sendInformation(newSprint);
    // result$.subscribe(
    //   result$ => console.log("result:",result$),
    //   error = > console.log("Error",error),
    //   () => console.log('completed!');
    //   )
    // )

    // const params = form.value;
    // const now: Date = new Date();
    // params[
    //   'createdAt'
    // ] = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
    // params[
    //   'startedAt'
    // ] = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    // params['user'] = this.formInfo;
    // localStorage.setItem('sprint', JSON.stringify(params));
    // this.model = {
    //   duration: 'Pomodoro (25 min)',
    //   description: null,
    //   notification: false
    // };
    // this.sprintNavService.finishedSprint();
  }
}
