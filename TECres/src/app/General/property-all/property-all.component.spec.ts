import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyALLComponent } from './property-all.component';

describe('PropertyALLComponent', () => {
  let component: PropertyALLComponent;
  let fixture: ComponentFixture<PropertyALLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyALLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyALLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
