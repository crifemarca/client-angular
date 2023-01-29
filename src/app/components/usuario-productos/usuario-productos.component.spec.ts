import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioProductosComponent } from './usuario-productos.component';

describe('UsuarioProductosComponent', () => {
  let component: UsuarioProductosComponent;
  let fixture: ComponentFixture<UsuarioProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
