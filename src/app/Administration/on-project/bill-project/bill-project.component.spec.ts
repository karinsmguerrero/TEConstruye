import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillProjectComponent } from './bill-project.component';

describe('BillProjectComponent', () => {
  let component: BillProjectComponent;
  let fixture: ComponentFixture<BillProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
