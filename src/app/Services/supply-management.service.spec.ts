import { TestBed } from '@angular/core/testing';

import { SupplyManagementService } from './supply-management.service';

describe('SupplyManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplyManagementService = TestBed.get(SupplyManagementService);
    expect(service).toBeTruthy();
  });
});
