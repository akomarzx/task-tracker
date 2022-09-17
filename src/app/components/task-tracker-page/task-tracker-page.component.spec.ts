import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTrackerPageComponent } from './task-tracker-page.component';

describe('TaskTrackerPageComponent', () => {
  let component: TaskTrackerPageComponent;
  let fixture: ComponentFixture<TaskTrackerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTrackerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTrackerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
