/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieService } from './movie.service';

describe('Service: Movie', () => {
  const myServiceSpy = jasmine.createSpyObj('MyService', ['someMethod']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService]
    });
  });

  it('should ...', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));

  it('should do something', () => {
    // Seu teste aqui
    expect('teste').toEqual('MovieService');
});

});
