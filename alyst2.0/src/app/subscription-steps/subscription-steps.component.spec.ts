import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionStepsComponent } from './subscription-steps.component';

describe('SubscriptionStepsComponent', () => {
  let component: SubscriptionStepsComponent;
  let fixture: ComponentFixture<SubscriptionStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionStepsComponent]
    });
    fixture = TestBed.createComponent(SubscriptionStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
