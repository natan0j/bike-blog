import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { formatDate } from '@angular/common';
import * as moment from 'moment';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {

  today: number = Date.now();
  events: Event[] = [
    {name: 'Wyścig Podlasia', date: '2/22/22'}
  ]
  now = moment(this.today)
  end = moment(this.events[0].date)
  duration = moment.duration(this.end.diff(this.now));
  days = Math.floor( this.duration.asDays());
  options: Options = {
    floor: 0,
    ceil: 70,
    readOnly: true,
    translate: (value: number): string => {
      return ''
    }
  };
}
