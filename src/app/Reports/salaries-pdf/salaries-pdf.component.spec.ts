import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalariesPdfComponent } from './salaries-pdf.component';

describe('SalariesPdfComponent', () => {
  let component: SalariesPdfComponent;
  let fixture: ComponentFixture<SalariesPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalariesPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalariesPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
