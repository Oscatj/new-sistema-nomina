import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoModalComponent } from './banco-modal.component';

describe('BancoModalComponent', () => {
  let component: BancoModalComponent;
  let fixture: ComponentFixture<BancoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
