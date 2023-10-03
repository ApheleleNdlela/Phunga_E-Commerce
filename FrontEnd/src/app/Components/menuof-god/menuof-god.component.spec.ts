import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuofGodComponent } from './menuof-god.component';

describe('MenuofGodComponent', () => {
  let component: MenuofGodComponent;
  let fixture: ComponentFixture<MenuofGodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuofGodComponent]
    });
    fixture = TestBed.createComponent(MenuofGodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
