import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { Event } from '../event';
@Component({
  selector: 'app-event-assign',
  templateUrl: './event-assign.component.html',
  styleUrls: ['./event-assign.component.css']
})
export class EventAssignComponent  {
  constructor (private  httpClient: HttpClient) {}
  events: Event[] = [];
  eventName = 'Wyscig Bialegostoku';
  eventDate = '2022-04-02T15:00';

  createEvent() {
    const event: Event = {
      name: this.eventName,
      date: this.eventDate
    }
    this.events.push(event);
    this.httpClient.post('https://cyclerjb-default-rtdb.europe-west1.firebasedatabase.app/events.json', this.events)
    .subscribe(response => console.log(response));
  }
}
