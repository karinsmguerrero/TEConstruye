import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuppliesComponent } from './list-supplies.component';

describe('ListSuppliesComponent', () => {
  let component: ListSuppliesComponent;
  let fixture: ComponentFixture<ListSuppliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSuppliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
