import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealConfirmationModalComponent } from './deal-confirmation-modal.component';

describe('DealConfirmationModalComponent', () => {
  let component: DealConfirmationModalComponent;
  let fixture: ComponentFixture<DealConfirmationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealConfirmationModalComponent]
    });
    fixture = TestBed.createComponent(DealConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
