import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkerStageComponent } from './list-worker-stage.component';

describe('ListWorkerStageComponent', () => {
  let component: ListWorkerStageComponent;
  let fixture: ComponentFixture<ListWorkerStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWorkerStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWorkerStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
