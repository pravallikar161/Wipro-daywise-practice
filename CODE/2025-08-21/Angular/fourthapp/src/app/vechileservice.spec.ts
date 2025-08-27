import { TestBed } from '@angular/core/testing';

import { Vechileservice } from './vechileservice';

describe('Vechileservice', () => {
  let service: Vechileservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vechileservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
