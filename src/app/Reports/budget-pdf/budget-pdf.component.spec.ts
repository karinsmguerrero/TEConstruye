import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPdfComponent } from './budget-pdf.component';

describe('BudgetPdfComponent', () => {
  let component: BudgetPdfComponent;
  let fixture: ComponentFixture<BudgetPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
