import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenesplantasComponent } from './almacenesplantas.component';

describe('AlmacenesplantasComponent', () => {
  let component: AlmacenesplantasComponent;
  let fixture: ComponentFixture<AlmacenesplantasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlmacenesplantasComponent]
    });
    fixture = TestBed.createComponent(AlmacenesplantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
