import { TestBed, inject } from '@angular/core/testing';

import { TooltipServiceService } from './tooltip-service.service';

describe('TooltipServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TooltipServiceService]
    });
  });

  it('should be created', inject([TooltipServiceService], (service: TooltipServiceService) => {
    expect(service).toBeTruthy();
  }));
});
