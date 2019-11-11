import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnProjectComponent } from './on-project.component';

describe('OnProjectComponent', () => {
  let component: OnProjectComponent;
  let fixture: ComponentFixture<OnProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
