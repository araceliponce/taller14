import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHijo1Component } from './c-hijo1.component';

describe('CHijo1Component', () => {
  let component: CHijo1Component;
  let fixture: ComponentFixture<CHijo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CHijo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CHijo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
