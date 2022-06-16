import { Component, OnInit } from '@angular/core';
import { EventService } from '../addEvent.service';
import { Event } from '../event';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events?: Event[];
  currentEvent?: Event;
  currentIndex = -1;
  title = '';

  constructor(private eventService: EventService) { }
  ngOnInit(): void {
    this.retrieveEvents();
  }
 
  retrieveEvents(){
    this.eventService.getAll().snapshotChanges().pipe(
      map(changes => changes.map(c =>
        ({key: c.payload.key, ...c.payload.val()})
        )
    )
    ).subscribe(data =>{ this.events = data;
    });
  }
  setActiveEvent(event: Event, index: number){
    this.currentEvent = event;
    this.currentIndex = index;
  }
  refreshList(): void {
    this.currentEvent = undefined;
    this.currentIndex = -1;
    this.retrieveEvents();
  }
}
