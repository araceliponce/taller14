import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHijo2Component } from './c-hijo2.component';

describe('CHijo2Component', () => {
  let component: CHijo2Component;
  let fixture: ComponentFixture<CHijo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CHijo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CHijo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
