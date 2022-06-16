import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { url } from 'inspector';
import { EventService } from '../addEvent.service';
import { Event } from '../event';
@Component({
  selector: 'app-event-assign',
  templateUrl: './event-assign.component.html',
  styleUrls: ['./event-assign.component.css']
})
export class EventAssignComponent implements OnInit  {
  submitted = false;
  event: Event = new Event();
  constructor(private eventService: EventService) {}
ngOnInit(): void {
  
}
 onSubmit(form: NgForm){
   this.eventService.create(form.value).then(()=>form.reset());
   console.log('Created new item successfully!');
   this.submitted = true;
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
}