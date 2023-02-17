import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsEditComponent } from './tickets-edit.component';

describe('TicketsEditComponent', () => {
  let component: TicketsEditComponent;
  let fixture: ComponentFixture<TicketsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
