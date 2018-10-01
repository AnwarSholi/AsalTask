import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCloseComponent } from './title-close.component';

describe('TitleCloseComponent', () => {
  let component: TitleCloseComponent;
  let fixture: ComponentFixture<TitleCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
