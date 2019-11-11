import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetStageComponent } from './budget-stage.component';

describe('BudgetStageComponent', () => {
  let component: BudgetStageComponent;
  let fixture: ComponentFixture<BudgetStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
