import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interface/ITask';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor() { }

  taskList: ITask[] = [{taskDate: new Date() , taskContent: "Test1"}, {taskDate: new Date() , taskContent: "Test2"}];
  ngOnInit(): void {
  }

}
