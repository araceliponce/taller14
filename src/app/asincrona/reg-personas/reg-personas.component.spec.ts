import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPersonasComponent } from './reg-personas.component';

describe('RegPersonasComponent', () => {
  let component: RegPersonasComponent;
  let fixture: ComponentFixture<RegPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
