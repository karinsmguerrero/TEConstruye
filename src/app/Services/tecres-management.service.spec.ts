import { TestBed } from '@angular/core/testing';

import { TecresManagementService } from './tecres-management.service';

describe('TecresManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TecresManagementService = TestBed.get(TecresManagementService);
    expect(service).toBeTruthy();
  });
});
