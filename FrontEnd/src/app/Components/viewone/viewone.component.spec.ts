import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoneComponent } from './viewone.component';

describe('ViewoneComponent', () => {
  let component: ViewoneComponent;
  let fixture: ComponentFixture<ViewoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewoneComponent]
    });
    fixture = TestBed.createComponent(ViewoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
