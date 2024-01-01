import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealListComponent } from './deal.component';

describe('DealListComponent', () => {
  let component: DealListComponent;
  let fixture: ComponentFixture<DealListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealListComponent]
    });
    fixture = TestBed.createComponent(DealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
