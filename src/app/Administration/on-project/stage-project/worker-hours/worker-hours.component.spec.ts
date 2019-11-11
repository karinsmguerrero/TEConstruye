import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerHoursComponent } from './worker-hours.component';

describe('WorkerHoursComponent', () => {
  let component: WorkerHoursComponent;
  let fixture: ComponentFixture<WorkerHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
