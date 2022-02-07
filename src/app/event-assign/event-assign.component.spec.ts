import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAssignComponent } from './event-assign.component';

describe('EventAssignComponent', () => {
  let component: EventAssignComponent;
  let fixture: ComponentFixture<EventAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
