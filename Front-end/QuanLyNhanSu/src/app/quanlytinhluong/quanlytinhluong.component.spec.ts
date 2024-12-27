import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlytinhluongComponent } from './quanlytinhluong.component';

describe('QuanlytinhluongComponent', () => {
  let component: QuanlytinhluongComponent;
  let fixture: ComponentFixture<QuanlytinhluongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuanlytinhluongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanlytinhluongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
