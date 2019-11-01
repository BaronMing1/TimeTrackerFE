import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressSprintComponent } from './in-progress-sprint.component';

describe('InProgressSprintComponent', () => {
  let component: InProgressSprintComponent;
  let fixture: ComponentFixture<InProgressSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
