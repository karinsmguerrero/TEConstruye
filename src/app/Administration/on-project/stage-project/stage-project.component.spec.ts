import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageProjectComponent } from './stage-project.component';

describe('StageProjectComponent', () => {
  let component: StageProjectComponent;
  let fixture: ComponentFixture<StageProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
