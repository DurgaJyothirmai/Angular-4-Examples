import { TestBed, inject } from '@angular/core/testing';

import { MapExampleService } from './map-example.service';

describe('MapExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapExampleService]
    });
  });

  it('should be created', inject([MapExampleService], (service: MapExampleService) => {
    expect(service).toBeTruthy();
  }));
});
