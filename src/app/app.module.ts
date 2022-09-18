import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTrackerPageComponent } from './components/task-tracker-page/task-tracker-page.component';
import { TasksListComponent } from './components/task-tracker-page/tasks-list/tasks-list.component';
import { AddTaskComponent } from './components/task-tracker-page/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTrackerPageComponent,
    TasksListComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
