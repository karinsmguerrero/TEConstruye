import { TestBed } from '@angular/core/testing';

import { UploadImageManagementService } from './upload-image-management.service';

describe('UploadImageManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadImageManagementService = TestBed.get(UploadImageManagementService);
    expect(service).toBeTruthy();
  });
});
