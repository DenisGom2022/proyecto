import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivadasComponent } from './derivadas.component';

describe('DerivadasComponent', () => {
  let component: DerivadasComponent;
  let fixture: ComponentFixture<DerivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerivadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
