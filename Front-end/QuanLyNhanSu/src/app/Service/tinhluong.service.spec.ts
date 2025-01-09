import { TestBed } from '@angular/core/testing';

import { TinhluongService } from './tinhluong.service';

describe('TinhluongService', () => {
  let service: TinhluongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TinhluongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
