import { TestBed } from '@angular/core/testing';

import { AanvragenService } from './aanvragen.service';

describe('AanvragenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AanvragenService = TestBed.get(AanvragenService);
    expect(service).toBeTruthy();
  });
});
