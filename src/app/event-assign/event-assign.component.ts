import { Event } from './../event';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from '../addEvent.service';
@Component({
  selector: 'app-event-assign',
  templateUrl: './event-assign.component.html',
  styleUrls: ['./event-assign.component.css']
})
export class EventAssignComponent implements OnInit  {
  @Output() emitEvent = new EventEmitter<Event>();
  submitted = false;
  event: Event = new Event();
  imageUrl: string;
  constructor(private eventService: EventService) {}
ngOnInit(): void {
  
}
 onSubmit(form: NgForm){
   this.eventService.create(form.value).then(()=>form.reset());
   console.log('Created new item successfully!');
   this.submitted = true;
   this.emitEvent.emit(form.value)
  }
  saveEvent(): void {
    this.eventService.create(this.event).then(()=>{
      console.log('Created new item successfully!');
      this.submitted = true;
    })
  }
  newEvent(): void {
    this.submitted = false;
    this.event = new Event();
  }
  clickImage(): void {
    this.event.image = 'halo'
  }
}