import { TestBed } from '@angular/core/testing';

import { SavePersonaService } from './save-persona.service';

describe('SavePersonaService', () => {
  let service: SavePersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavePersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
