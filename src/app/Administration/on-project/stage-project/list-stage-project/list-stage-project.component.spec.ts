import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStageProjectComponent } from './list-stage-project.component';

describe('ListStageProjectComponent', () => {
  let component: ListStageProjectComponent;
  let fixture: ComponentFixture<ListStageProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStageProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
