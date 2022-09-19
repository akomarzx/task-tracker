import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from 'src/app/interface/ITask';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskList$: BehaviorSubject<ITask[]>;
  private taskList: ITask[]
  constructor() {
    this.taskList = []
    this.taskList$ = new BehaviorSubject<ITask[]>(this.taskList)
  }

  addNewTask(task: ITask) {
    this.taskList$.next([...this.taskList$.getValue(), task]);
  }
}
