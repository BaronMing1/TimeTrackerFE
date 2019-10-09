import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackAuthComponent } from './callback-auth.component';

describe('CallbackAuthComponent', () => {
  let component: CallbackAuthComponent;
  let fixture: ComponentFixture<CallbackAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
