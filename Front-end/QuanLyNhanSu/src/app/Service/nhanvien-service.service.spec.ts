import { TestBed } from '@angular/core/testing';

import { NhanvienServiceService } from './nhanvien-service.service';

describe('NhanvienServiceService', () => {
  let service: NhanvienServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NhanvienServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
