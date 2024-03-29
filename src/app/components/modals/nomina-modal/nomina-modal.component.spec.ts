import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaModalComponent } from './nomina-modal.component';

describe('NominaModalComponent', () => {
  let component: NominaModalComponent;
  let fixture: ComponentFixture<NominaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
