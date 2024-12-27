import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyphongbanComponent } from './quanlyphongban.component';

describe('QuanlyphongbanComponent', () => {
  let component: QuanlyphongbanComponent;
  let fixture: ComponentFixture<QuanlyphongbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuanlyphongbanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanlyphongbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
