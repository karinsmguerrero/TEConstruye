import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecresComponent } from './tecres.component';

describe('TecresComponent', () => {
  let component: TecresComponent;
  let fixture: ComponentFixture<TecresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
