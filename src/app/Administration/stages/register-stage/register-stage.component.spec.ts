import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStageComponent } from './register-stage.component';

describe('RegisterStageComponent', () => {
  let component: RegisterStageComponent;
  let fixture: ComponentFixture<RegisterStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
