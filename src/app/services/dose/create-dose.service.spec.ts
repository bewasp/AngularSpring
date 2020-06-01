import { TestBed, inject } from '@angular/core/testing';

import { CreateDoseService } from './create-dose.service';

describe('CreateDoseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateDoseService]
    });
  });

  it('should be created', inject([CreateDoseService], (service: CreateDoseService) => {
    expect(service).toBeTruthy();
  }));
});
