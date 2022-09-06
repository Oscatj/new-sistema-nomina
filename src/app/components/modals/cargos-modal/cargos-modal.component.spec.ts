import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosModalComponent } from './cargos-modal.component';

describe('CargosModalComponent', () => {
  let component: CargosModalComponent;
  let fixture: ComponentFixture<CargosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
