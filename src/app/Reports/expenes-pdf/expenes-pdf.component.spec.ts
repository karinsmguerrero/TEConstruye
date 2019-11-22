import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenesPdfComponent } from './expenes-pdf.component';

describe('ExpenesPdfComponent', () => {
  let component: ExpenesPdfComponent;
  let fixture: ComponentFixture<ExpenesPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenesPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenesPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
