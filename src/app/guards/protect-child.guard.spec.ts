import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { protectChildGuard } from './protect-child.guard';

describe('protectChildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => protectChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
