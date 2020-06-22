import { TestBed } from '@angular/core/testing';

import { ReponseAccordingToTimeService } from './reponse-according-to-time.service';

describe('ReponseAccordingToTimeService', () => {
  let service: ReponseAccordingToTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReponseAccordingToTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
