import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxqrComponent } from './ngxqr.component';

describe('NgxqrComponent', () => {
  let component: NgxqrComponent;
  let fixture: ComponentFixture<NgxqrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxqrComponent]
    });
    fixture = TestBed.createComponent(NgxqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
