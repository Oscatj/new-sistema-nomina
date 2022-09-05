import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarNominaComponent } from './actualizar-nomina.component';

describe('ActualizarNominaComponent', () => {
  let component: ActualizarNominaComponent;
  let fixture: ComponentFixture<ActualizarNominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarNominaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
