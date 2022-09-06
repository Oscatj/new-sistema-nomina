import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandaModalComponent } from './tanda-modal.component';

describe('TandaModalComponent', () => {
  let component: TandaModalComponent;
  let fixture: ComponentFixture<TandaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TandaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TandaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
