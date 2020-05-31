/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CovidIndiaService } from './covid-india.service';

describe('Service: CovidIndia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CovidIndiaService]
    });
  });

  it('should ...', inject([CovidIndiaService], (service: CovidIndiaService) => {
    expect(service).toBeTruthy();
  }));
});
