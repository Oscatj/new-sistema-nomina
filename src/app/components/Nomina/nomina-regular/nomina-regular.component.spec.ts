import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaRegularComponent } from './nomina-regular.component';

describe('NominaRegularComponent', () => {
  let component: NominaRegularComponent;
  let fixture: ComponentFixture<NominaRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominaRegularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominaRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
