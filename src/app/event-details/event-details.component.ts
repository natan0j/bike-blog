import { EventService } from './../addEvent.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '../event';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  @Input() event?: Event;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentEvent: Event = {
    name: '',
    date: '',
    description: '',
    image: ''
  };
  message = '';
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.message = '';
  }
  ngOnChanges() {
    this.message = '';
    this.currentEvent = {...this.event};
  }
 updateEvent(): void {
  const data = {
    name: this.currentEvent.name,
    date: this.currentEvent.date,
    image: this.currentEvent.image
  };
  if (this.currentEvent.key) {
    this.eventService.update(this.currentEvent.key, data)
      .then(() => this.message = 'The event was updated successfully!')
      .catch(err => console.log(err));
  }
}
 deleteEvent() {
  if (this.currentEvent.key){
    this.eventService.delete(this.currentEvent.key)
    .then(()=>{
      this.refreshList.emit();
      this.message = 'Event updated successfully';
    }).catch(err =>console.log(err));
  }
 }
}
