import { TestBed } from '@angular/core/testing';

import { GithubRestService } from './github-rest.service';

describe('GithubRestService', () => {
  let service: GithubRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
