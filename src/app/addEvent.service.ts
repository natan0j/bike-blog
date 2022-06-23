import { Injectable } from "@angular/core";

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'
import { Observable } from "rxjs";
import { Event } from "./event";
import { FileUpload } from "./file.model";
@Injectable({
    providedIn: 'root'
}) export class EventService {
    private dbPath = '/events';
    private dbImage = '/uploads'
    eventArray: any[] = [];
    eventsRef: AngularFireList<Event>
    imagesRef: AngularFireList<FileUpload>
    constructor(private db: AngularFireDatabase ){
        this.eventsRef = db.list(this.dbPath);
        this.imagesRef = db.list(this.dbImage); 
    }

    create(event: Event):any {
      return this.eventsRef.push(event);  
    }
    getAll(): AngularFireList<Event> {
        return this.eventsRef;
      }
    update(key: string, value: any): Promise<void> {
        return this.eventsRef.update(key, value);
    }
    delete(key: string): Promise<void> {
        return this.eventsRef.remove(key);
      }
      deleteAll(): Promise<void> {
        return this.eventsRef.remove();
      }
}