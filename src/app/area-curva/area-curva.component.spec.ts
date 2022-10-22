import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCurvaComponent } from './area-curva.component';

describe('AreaCurvaComponent', () => {
  let component: AreaCurvaComponent;
  let fixture: ComponentFixture<AreaCurvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaCurvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaCurvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
