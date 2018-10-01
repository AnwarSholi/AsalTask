import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExpensesComponent } from './button-expenses.component';

describe('ButtonExpensesComponent', () => {
  let component: ButtonExpensesComponent;
  let fixture: ComponentFixture<ButtonExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
