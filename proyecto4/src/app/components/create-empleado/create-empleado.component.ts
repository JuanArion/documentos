import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';


@Component({
  selector: 'app-create-empleados',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadosComponent implements OnInit{
  createEmpleado: FormGroup;
  submitted=false;
  constructor(private fb:FormBuilder, private _empleadoService: EmpleadoService, private router: Router){
    this.createEmpleado=this.fb.group({
      Nomnbre:['',Validators.required],
      Apellidos:['',Validators.required],
      Documento:['',Validators.required],
      Salario:['',Validators.required]
    })
  }

ngOnInit(): void {

}
agregarEmpleado(){
  this.submitted=true;
  if(this.createEmpleado.invalid){
    return
  }
  const empleado: any = {
    Nombre: this.createEmpleado.value.Nombre,
    Apellido: this.createEmpleado.value.Apellido,
    Documento: this.createEmpleado.value.Documento,
    Salario: this.createEmpleado.value.Salario,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date()
  }
  this._empleadoService.agregarEmpleado(empleado).then(() => {
      console.log('El Empleado Fue Agregado orrectamente');
      this.router.navigate(['/list-empleado'])
  }).catch((Error: any)=> {
    console.error(Error);
})
}
}
