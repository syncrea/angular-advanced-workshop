import { TestBed } from '@angular/core/testing';

import { MicroApp2Service } from './micro-app2.service';

describe('MicroApp2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroApp2Service = TestBed.get(MicroApp2Service);
    expect(service).toBeTruthy();
  });
});
