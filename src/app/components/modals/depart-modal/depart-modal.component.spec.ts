import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartModalComponent } from './depart-modal.component';

describe('DepartModalComponent', () => {
  let component: DepartModalComponent;
  let fixture: ComponentFixture<DepartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
