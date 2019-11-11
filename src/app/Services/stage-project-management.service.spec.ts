import { TestBed } from '@angular/core/testing';

import { StageProjectManagementService } from './stage-project-management.service';

describe('StageProjectManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StageProjectManagementService = TestBed.get(StageProjectManagementService);
    expect(service).toBeTruthy();
  });
});
