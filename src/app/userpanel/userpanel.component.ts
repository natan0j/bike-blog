import { FileUploadService } from './../file-upload.service';

import { EventService } from './../addEvent.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Event } from '../event';
import * as moment from 'moment';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
  
})
export class UserpanelComponent implements OnInit {
  [x: string]: any;
  events?: Event[];
  currentEvent?: Event;
  currentIndex = -1;
  title = '';
  today: number = Date.now();
  mainEvent = {name: 'Tour De France', date: '7/01/22'}
  now = moment(this.today)
  end = moment(this.mainEvent.date)
  duration = moment.duration(this.end.diff(this.now));
  days = Math.floor(this.duration.asDays());
  hours = Math.floor(this.duration.asHours());
  fullPost: any []= [];
  constructor(private eventService: EventService, private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.retrieveEvents();
    this.retrievePhotos();
  }
  ngOnChange(): void {
    this.retrieveEvents();
    this.retrievePhotos();
  }
  retrieveEvents(){
    this.eventService.getAll().snapshotChanges().pipe(
      map(changes => changes.map(c =>
        ({key: c.payload.key, ...c.payload.val()})
        )
    )
    ).subscribe(data =>{ this.events = data;
    });
    console.log(this.fullPost);
  }
  retrievePhotos(){
    this.uploadService.getFiles(6).snapshotChanges().pipe(
      map(change => 
        change.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe(fileUploads => {
        this.fileUploads = fileUploads;
      });
  }


}
