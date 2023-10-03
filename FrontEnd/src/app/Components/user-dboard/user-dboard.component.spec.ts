import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDBoardComponent } from './user-dboard.component';

describe('UserDBoardComponent', () => {
  let component: UserDBoardComponent;
  let fixture: ComponentFixture<UserDBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDBoardComponent]
    });
    fixture = TestBed.createComponent(UserDBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
