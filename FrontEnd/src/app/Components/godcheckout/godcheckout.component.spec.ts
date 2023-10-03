import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodcheckoutComponent } from './godcheckout.component';

describe('GodcheckoutComponent', () => {
  let component: GodcheckoutComponent;
  let fixture: ComponentFixture<GodcheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GodcheckoutComponent]
    });
    fixture = TestBed.createComponent(GodcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
