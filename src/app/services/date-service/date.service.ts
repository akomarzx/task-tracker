import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() {
  }
  currentDate$ = new BehaviorSubject<Date>(new Date());
}
