import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTrackerPageComponent } from './components/task-tracker-page/task-tracker-page.component';

const routes: Routes = [
  {path: '' , component: TaskTrackerPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
