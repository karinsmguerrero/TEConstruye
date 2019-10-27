import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEngineerComponent } from './list-engineer.component';

describe('ListEngineerComponent', () => {
  let component: ListEngineerComponent;
  let fixture: ComponentFixture<ListEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
