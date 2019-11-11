import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyStageComponent } from './supply-stage.component';

describe('SupplyStageComponent', () => {
  let component: SupplyStageComponent;
  let fixture: ComponentFixture<SupplyStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
