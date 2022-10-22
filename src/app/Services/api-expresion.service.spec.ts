import { TestBed } from '@angular/core/testing';

import { ApiExpresionService } from './api-expresion.service';

describe('ApiExpresionService', () => {
  let service: ApiExpresionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiExpresionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
