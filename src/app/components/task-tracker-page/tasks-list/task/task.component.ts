import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/interface/ITask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  @Input() task: ITask | undefined;

  ngOnInit(): void {
  }

}
