import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuppliesComponent } from './register-supplies.component';

describe('RegisterSuppliesComponent', () => {
  let component: RegisterSuppliesComponent;
  let fixture: ComponentFixture<RegisterSuppliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSuppliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
