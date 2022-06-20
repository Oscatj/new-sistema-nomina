import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNominaRegularComponent } from './formulario-nomina-regular.component';

describe('FormularioNominaRegularComponent', () => {
  let component: FormularioNominaRegularComponent;
  let fixture: ComponentFixture<FormularioNominaRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNominaRegularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNominaRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
