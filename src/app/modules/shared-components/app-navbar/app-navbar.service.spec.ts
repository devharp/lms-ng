import { TestBed } from '@angular/core/testing';

import { AppNavbarService } from './app-navbar.service';

describe('AppNavbarService', () => {
  let service: AppNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
