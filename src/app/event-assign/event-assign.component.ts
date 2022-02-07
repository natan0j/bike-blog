import { Component } from '@angular/core';
import { Event } from '../event';
@Component({
  selector: 'app-event-assign',
  templateUrl: './event-assign.component.html',
  styleUrls: ['./event-assign.component.css']
})
export class EventAssignComponent  {

  events: Event[] = [];
  eventName = 'Wyscig Bialegostoku';
  eventDate = '2022-04-02';

  createEvent() {
    const event: Event = {
      name: this.eventName,
      date: this.eventDate
    }
    this.events.push(event);
  }
}
