import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, Subscription, switchMap } from 'rxjs';
import { DateService } from 'src/app/services/date-service/date.service';
import { TasksService } from 'src/app/services/task-service/tasks.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnDestroy {
  constructor(private taskService: TasksService, private dateService: DateService, private router: Router) {
    this.formGroup = new FormGroup({
      'taskDate': new FormControl(null, [Validators.required]),
      'taskContent': new FormControl(null, [Validators.required, Validators.maxLength(100)]),
    })
  }
  formGroup: FormGroup;

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  onAddTask() {
    this.taskService.addNewTask(this.formGroup.value);
    this.router.navigate(['/', 'tasks']);
  }
  onBack() {
    this.router.navigate(['/', 'tasks']);
  }
}
