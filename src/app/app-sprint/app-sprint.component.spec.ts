import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSprintComponent } from './app-sprint.component';

describe('AppSprintComponent', () => {
  let component: AppSprintComponent;
  let fixture: ComponentFixture<AppSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
