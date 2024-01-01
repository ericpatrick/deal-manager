import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealTableComponent } from './deal-table.component';

describe('DealTableComponent', () => {
  let component: DealTableComponent;
  let fixture: ComponentFixture<DealTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealTableComponent]
    });
    fixture = TestBed.createComponent(DealTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
