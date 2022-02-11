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
    {name: 'Podlasie Race', date: '2/20/22 18:00'}
  ]
  now = moment(this.today)
  end = moment(this.events[0].date)
  duration = moment.duration(this.end.diff(this.now));
  days = Math.floor(this.duration.asDays());
  hours = Math.floor(this.duration.asHours());
  options: Options = {
    floor: 0,
    ceil: 70,
    readOnly: true,
    translate: (value: number): string => {
      return ''
    }
  };
}
