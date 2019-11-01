import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule, MatTableModule } from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppSprintComponent } from './app-sprint/app-sprint.component';
import { CallbackAuthComponent } from './callback-auth/callback-auth.component';
import { ProfileComponent } from './profile/profile.component';
import {
  PastSprintsComponent,
  DialogContentExampleDialog
} from './past-sprints/past-sprints.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';
import { BottomPageComponent } from './bottom-page/bottom-page.component';
import { InProgressSprintComponent } from './in-progress-sprint/in-progress-sprint.component';
import { PauseSprintDialogComponent } from './pause-sprint-dialog/pause-sprint-dialog.component';

import {
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSliderModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DialogContentExampleDialog,
    TopMenuComponent,
    WelcomeComponent,
    AppSprintComponent,
    CallbackAuthComponent,
    ProfileComponent,
    PastSprintsComponent,
    NewSprintComponent,
    BottomPageComponent,
    InProgressSprintComponent,
    PauseSprintDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  entryComponents: [PauseSprintDialogComponent, DialogContentExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
