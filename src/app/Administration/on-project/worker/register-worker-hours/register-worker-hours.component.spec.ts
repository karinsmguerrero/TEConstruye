import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWorkerHoursComponent } from './register-worker-hours.component';

describe('RegisterWorkerHoursComponent', () => {
  let component: RegisterWorkerHoursComponent;
  let fixture: ComponentFixture<RegisterWorkerHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWorkerHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWorkerHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
