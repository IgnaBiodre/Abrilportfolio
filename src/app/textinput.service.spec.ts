import { TestBed } from '@angular/core/testing';

import { TextinputService } from './textinput.service';

describe('TextinputService', () => {
  let service: TextinputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextinputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
