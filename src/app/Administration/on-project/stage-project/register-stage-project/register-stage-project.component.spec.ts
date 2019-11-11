import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStageProjectComponent } from './register-stage-project.component';

describe('RegisterStageProjectComponent', () => {
  let component: RegisterStageProjectComponent;
  let fixture: ComponentFixture<RegisterStageProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterStageProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
