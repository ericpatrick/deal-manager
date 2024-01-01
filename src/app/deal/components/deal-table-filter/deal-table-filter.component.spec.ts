import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealTableFilterComponent } from './deal-table-filter.component';

describe('DealTableFilterComponent', () => {
  let component: DealTableFilterComponent;
  let fixture: ComponentFixture<DealTableFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealTableFilterComponent]
    });
    fixture = TestBed.createComponent(DealTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
