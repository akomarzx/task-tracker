import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from 'src/app/interface/ITask';

let list: ITask[] = [
  { taskContent: 'Task1', taskDate: new Date() },
  { taskContent: 'Task2', taskDate: new Date() }, { taskContent: 'Task1', taskDate: new Date() },
  { taskContent: 'Task2', taskDate: new Date() }, { taskContent: 'Task1', taskDate: new Date() },
  { taskContent: 'Task2', taskDate: new Date() }, { taskContent: 'Task1', taskDate: new Date() },
  { taskContent: 'Task2', taskDate: new Date() }, { taskContent: 'Task1', taskDate: new Date() },
  { taskContent: 'Task2', taskDate: new Date() },
]

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskList$: BehaviorSubject<ITask[]>;

  constructor() {
    this.taskList$ = new BehaviorSubject<ITask[]>(list)
  }

  addNewTask(task: ITask) {
    this.taskList$.next([...this.taskList$.getValue(), task]);
  }
}
