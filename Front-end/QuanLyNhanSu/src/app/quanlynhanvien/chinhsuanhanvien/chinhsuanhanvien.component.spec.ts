import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsuanhanvienComponent } from './chinhsuanhanvien.component';

describe('ChinhsuanhanvienComponent', () => {
  let component: ChinhsuanhanvienComponent;
  let fixture: ComponentFixture<ChinhsuanhanvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChinhsuanhanvienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChinhsuanhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
