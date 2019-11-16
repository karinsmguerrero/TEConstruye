import { TestBed } from '@angular/core/testing';

import { BudgetManagementService } from './budget-management.service';

describe('BudgetManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BudgetManagementService = TestBed.get(BudgetManagementService);
    expect(service).toBeTruthy();
  });
});
