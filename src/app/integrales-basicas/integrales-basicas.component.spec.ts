import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralesBasicasComponent } from './integrales-basicas.component';

describe('IntegralesBasicasComponent', () => {
  let component: IntegralesBasicasComponent;
  let fixture: ComponentFixture<IntegralesBasicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegralesBasicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegralesBasicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
