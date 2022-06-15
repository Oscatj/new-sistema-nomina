import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaExtraordinariaComponent } from './nomina-extraordinaria.component';

describe('NominaExtraordinariaComponent', () => {
  let component: NominaExtraordinariaComponent;
  let fixture: ComponentFixture<NominaExtraordinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominaExtraordinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominaExtraordinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
