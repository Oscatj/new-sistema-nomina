import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaLiquidacionComponent } from './nomina-liquidacion.component';

describe('NominaLiquidacionComponent', () => {
  let component: NominaLiquidacionComponent;
  let fixture: ComponentFixture<NominaLiquidacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominaLiquidacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominaLiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
