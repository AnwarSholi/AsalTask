import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMonthNamesComponent } from './header-month-names.component';

describe('HeaderMonthNamesComponent', () => {
  let component: HeaderMonthNamesComponent;
  let fixture: ComponentFixture<HeaderMonthNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMonthNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMonthNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
