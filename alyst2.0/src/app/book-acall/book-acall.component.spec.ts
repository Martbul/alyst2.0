import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAcallComponent } from './book-acall.component';

describe('BookAcallComponent', () => {
  let component: BookAcallComponent;
  let fixture: ComponentFixture<BookAcallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookAcallComponent]
    });
    fixture = TestBed.createComponent(BookAcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
