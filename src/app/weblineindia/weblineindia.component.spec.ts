import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeblineindiaComponent } from './weblineindia.component';

describe('WeblineindiaComponent', () => {
  let component: WeblineindiaComponent;
  let fixture: ComponentFixture<WeblineindiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeblineindiaComponent]
    });
    fixture = TestBed.createComponent(WeblineindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
