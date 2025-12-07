import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaDescripcion } from './ia-descripcion';

describe('IaDescripcion', () => {
  let component: IaDescripcion;
  let fixture: ComponentFixture<IaDescripcion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IaDescripcion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IaDescripcion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
