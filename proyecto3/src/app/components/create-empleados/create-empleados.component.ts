import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadosService } from 'src/app/services/empleados.service';


@Component({
  selector: 'app-create-empleados',
  templateUrl: './create-empleados.component.html',
  styleUrls: ['./create-empleados.component.css']
})
export class CreateEmpleadosComponent implements OnInit{
  createEmpleado: FormGroup;
  submitted=false;
  constructor(private fb:FormBuilder,
             private EmpleadosService: EmpleadosService,
             private router:Router,
             private toastr: ToastrService){
    this.createEmpleado=this.fb.group({
      NOMBRE:['',Validators.required],
      APELLIDO:['',Validators.required],
      DOCUMENTO:['',Validators.required],
      SALARIO:['',Validators.required],
    })
  }
ngOnInit(): void {
    
}
agregarEmpleado(): void{
  this.submitted=true;
  if(this.createEmpleado.invalid){
    return
  }
const empleado: any ={
  NOMBRE: this.createEmpleado.value.NOMBRE,
  APELLIDO: this.createEmpleado.value.APELLIDO,
  DOCUMENTO: this.createEmpleado.value.DOCUMENTO,
  SALARIO: this.createEmpleado.value.SALARIO,
  fechaCreacion: new Date(),
  fechaActualizacion: new Date(),
}
this.EmpleadosService.agregarEmpleado(empleado).then(()=>{
  this.toastr.success('El empleado fue agregado con exito', 'Bien!. empleado registrado')
  console.log('se agrego con exito el empleado');
  this.router.navigate(['/list-empleados'])
}).catch(error=>{
  console.log(error);
})
}
}
