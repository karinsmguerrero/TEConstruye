import { TestBed } from '@angular/core/testing';

import { StageTypeManagementService } from './stage-type-management.service';

describe('StageTypeManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StageTypeManagementService = TestBed.get(StageTypeManagementService);
    expect(service).toBeTruthy();
  });
});
