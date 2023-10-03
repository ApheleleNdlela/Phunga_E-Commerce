import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyBagComponent } from './empty-bag.component';

describe('EmptyBagComponent', () => {
  let component: EmptyBagComponent;
  let fixture: ComponentFixture<EmptyBagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyBagComponent]
    });
    fixture = TestBed.createComponent(EmptyBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
