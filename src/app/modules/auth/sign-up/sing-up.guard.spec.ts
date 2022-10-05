import { TestBed } from '@angular/core/testing';

import { SingUpGuard } from './sing-up.guard';

describe('SingUpGuard', () => {
  let guard: SingUpGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SingUpGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
