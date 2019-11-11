import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSupplyStageComponent } from './register-supply-stage.component';

describe('RegisterSupplyStageComponent', () => {
  let component: RegisterSupplyStageComponent;
  let fixture: ComponentFixture<RegisterSupplyStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSupplyStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSupplyStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
