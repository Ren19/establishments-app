import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosestablecimientosComponent } from './datosestablecimientos.component';

describe('DatosestablecimientosComponent', () => {
  let component: DatosestablecimientosComponent;
  let fixture: ComponentFixture<DatosestablecimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosestablecimientosComponent]
    });
    fixture = TestBed.createComponent(DatosestablecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
