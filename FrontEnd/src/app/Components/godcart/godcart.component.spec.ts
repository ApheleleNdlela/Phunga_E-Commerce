import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodcartComponent } from './godcart.component';

describe('GodcartComponent', () => {
  let component: GodcartComponent;
  let fixture: ComponentFixture<GodcartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GodcartComponent]
    });
    fixture = TestBed.createComponent(GodcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
