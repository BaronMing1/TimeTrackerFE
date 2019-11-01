import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseSprintDialogComponent } from './pause-sprint-dialog.component';

describe('PauseSprintDialogComponent', () => {
  let component: PauseSprintDialogComponent;
  let fixture: ComponentFixture<PauseSprintDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PauseSprintDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseSprintDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
