import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-tracker-page',
  templateUrl: './task-tracker-page.component.html',
  styleUrls: ['./task-tracker-page.component.css']
})
export class TaskTrackerPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.router.navigate(['/', 'tasks']);
  }
}
