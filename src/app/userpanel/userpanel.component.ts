import { EventService } from './../addEvent.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Event } from '../event';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
  
})
export class UserpanelComponent implements OnInit {
  events?: Event[];
  currentEvent?: Event;
  currentIndex = -1;
  title = '';
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.retrieveEvents();
  }
  ngOnChange(): void {
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

}
