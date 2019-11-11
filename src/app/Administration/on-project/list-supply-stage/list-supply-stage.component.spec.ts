import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSupplyStageComponent } from './list-supply-stage.component';

describe('ListSupplyStageComponent', () => {
  let component: ListSupplyStageComponent;
  let fixture: ComponentFixture<ListSupplyStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSupplyStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSupplyStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
