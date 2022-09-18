import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTrackerPageComponent } from './components/task-tracker-page/task-tracker-page.component';
import { TasksListComponent } from './components/task-tracker-page/tasks-list/tasks-list.component';
import { AddTaskComponent } from './components/task-tracker-page/add-task/add-task.component';
import { HeaderComponent } from './components/task-tracker-page/header/header.component';
import { DisplayDateComponent } from './components/task-tracker-page/header/display-date/display-date.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTrackerPageComponent,
    TasksListComponent,
    AddTaskComponent,
    HeaderComponent,
    DisplayDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
