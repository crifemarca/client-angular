import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTicketsComponent } from './usuario-tickets.component';

describe('UsuarioTicketsComponent', () => {
  let component: UsuarioTicketsComponent;
  let fixture: ComponentFixture<UsuarioTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
