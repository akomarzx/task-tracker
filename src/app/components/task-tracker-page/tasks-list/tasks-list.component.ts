import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/interface/ITask';
import { TasksService } from 'src/app/services/task-service/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit, OnDestroy {

  constructor(private taskService: TasksService) { }

  taskList: ITask[] = [];
  taskListSub: Subscription | undefined

  ngOnInit(): void {
    this.taskListSub = this.taskService.taskList$
      .subscribe(arg => this.taskList = arg);

  }
  
  ngOnDestroy(): void {
    this.taskListSub?.unsubscribe();
  }
}
