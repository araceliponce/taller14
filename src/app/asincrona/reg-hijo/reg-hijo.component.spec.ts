import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegHijoComponent } from './reg-hijo.component';

describe('RegHijoComponent', () => {
  let component: RegHijoComponent;
  let fixture: ComponentFixture<RegHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
