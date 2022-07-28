import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclersComponent } from './cyclers.component';

describe('CyclersComponent', () => {
  let component: CyclersComponent;
  let fixture: ComponentFixture<CyclersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyclersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
