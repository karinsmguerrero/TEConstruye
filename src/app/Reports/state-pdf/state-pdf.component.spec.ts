import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePdfComponent } from './state-pdf.component';

describe('StatePdfComponent', () => {
  let component: StatePdfComponent;
  let fixture: ComponentFixture<StatePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
