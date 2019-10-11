import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule, MatTableModule } from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppSprintComponent } from './app-sprint/app-sprint.component';
import { CallbackAuthComponent } from './callback-auth/callback-auth.component';
import { ProfileComponent } from './profile/profile.component';
import { PastSprintsComponent } from './past-sprints/past-sprints.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    WelcomeComponent,
    AppSprintComponent,
    CallbackAuthComponent,
    ProfileComponent,
    PastSprintsComponent,
    NewSprintComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
