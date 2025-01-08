import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XoanhanvienComponent } from './xoanhanvien.component';

describe('XoanhanvienComponent', () => {
  let component: XoanhanvienComponent;
  let fixture: ComponentFixture<XoanhanvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XoanhanvienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XoanhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
