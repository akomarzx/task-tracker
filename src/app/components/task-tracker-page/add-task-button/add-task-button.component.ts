import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task-button',
  templateUrl: './add-task-button.component.html',
  styleUrls: ['./add-task-button.component.css']
})
export class AddTaskButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClick() {
    this.router.navigate(['/', 'new']);
  }
}
