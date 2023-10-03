import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingPageComponent } from './closing-page.component';

describe('ClosingPageComponent', () => {
  let component: ClosingPageComponent;
  let fixture: ComponentFixture<ClosingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosingPageComponent]
    });
    fixture = TestBed.createComponent(ClosingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export { ClosingPageComponent };
