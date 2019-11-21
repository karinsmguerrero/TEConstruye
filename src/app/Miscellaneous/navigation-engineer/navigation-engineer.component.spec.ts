import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationEngineerComponent } from './navigation-engineer.component';

describe('NavigationEngineerComponent', () => {
  let component: NavigationEngineerComponent;
  let fixture: ComponentFixture<NavigationEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
