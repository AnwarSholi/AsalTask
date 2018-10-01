import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoriesCalculateComponent } from './all-categories-calculate.component';

describe('AllCategoriesCalculateComponent', () => {
  let component: AllCategoriesCalculateComponent;
  let fixture: ComponentFixture<AllCategoriesCalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCategoriesCalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCategoriesCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
