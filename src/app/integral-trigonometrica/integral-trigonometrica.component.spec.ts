import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralTrigonometricaComponent } from './integral-trigonometrica.component';

describe('IntegralTrigonometricaComponent', () => {
  let component: IntegralTrigonometricaComponent;
  let fixture: ComponentFixture<IntegralTrigonometricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegralTrigonometricaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegralTrigonometricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
