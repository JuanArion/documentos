import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpleadosComponent } from './create-empleado.component';

describe('CreateEmpleadoComponent', () => {
  let component: CreateEmpleadosComponent;
  let fixture: ComponentFixture<CreateEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmpleadosComponent]
    });
    fixture = TestBed.createComponent(CreateEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
