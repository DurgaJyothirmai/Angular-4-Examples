import { TestBed, inject } from '@angular/core/testing';

import { PostexampleService } from './postexample.service';

describe('PostexampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostexampleService]
    });
  });

  it('should be created', inject([PostexampleService], (service: PostexampleService) => {
    expect(service).toBeTruthy();
  }));
});
