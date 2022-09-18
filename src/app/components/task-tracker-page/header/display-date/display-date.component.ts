import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateService } from 'src/app/services/date-service/date.service';

@Component({
  selector: 'app-display-date',
  templateUrl: './display-date.component.html',
  styleUrls: ['./display-date.component.css']
})
export class DisplayDateComponent implements OnInit, OnDestroy {

  constructor(private dateService: DateService) { }
  currentDate: Date | undefined;
  currentDateSub: Subscription | undefined;

  ngOnInit(): void {
    this.dateService.currentDate$
      .subscribe(arg => this.currentDate = arg);
  }
  ngOnDestroy(): void {
    this.currentDateSub?.unsubscribe();
  }
}
