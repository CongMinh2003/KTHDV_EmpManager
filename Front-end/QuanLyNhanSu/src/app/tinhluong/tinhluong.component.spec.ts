import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhluongComponent } from './tinhluong.component';

describe('TinhluongComponent', () => {
  let component: TinhluongComponent;
  let fixture: ComponentFixture<TinhluongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TinhluongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinhluongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
