import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { pageHasChangesGuard } from './page-has-changes.guard';

describe('pageHasChangesGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pageHasChangesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
