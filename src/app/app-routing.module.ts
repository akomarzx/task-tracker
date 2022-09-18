import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/task-tracker-page/add-task/add-task.component';
import { TaskTrackerPageComponent } from './components/task-tracker-page/task-tracker-page.component';
import { TasksListComponent } from './components/task-tracker-page/tasks-list/tasks-list.component';

const routes: Routes = [
  {path: '' , component: TaskTrackerPageComponent, children :[
    {path: 'tasks', component: TasksListComponent},
    {path : 'new', component: AddTaskComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
