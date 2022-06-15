import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatosLaborales } from 'src/app/models/DatosLaborales';

@Component({
  selector: 'app-datos-laborales',
  templateUrl: './datos-laborales.component.html',
  styleUrls: ['./datos-laborales.component.css']
})
export class DatosLaboralesComponent implements OnInit {
  
  departamentos : string [] = ['Sistemas', 'Contabilidad'];
  defaultDep : string = 'Elija una opcion';

  cargos : string [] = ['SQA', 'Desarrollador'];
  defaultCargo : string = 'Elija una opcion';

  //T-TR es Tanda Turno regular y T-TI es tanda turno irregular
  horarios : string [] = ['T-TR 1', 'T-TR 2', 'T-TR 3', 'T-TI 1'];
  defaultHorario : string = 'Elija una opcion';

  nombresCtas : string [] = ['BHD', 'BPD', 'BRRD'];
  defaultNombresCta : string = 'Elija una opcion';

  tiposCtas : string [] = ['Ahorro', 'Corriente'];
  defaultTiposCtas : string = 'Elija una opcion';

  formDatosLaborales : FormGroup;

  constructor(private fb : FormBuilder,
              private router : Router,
              private toastr: ToastrService) {
                this.formDatosLaborales = this.fb.group ({
                fechaIngreso : ['', Validators.required],
                departamento : ['', Validators.required],
                cargo : ['', Validators.required],
                horario : ['', Validators.required],
                nombreCta : ['', Validators.required],
                noCta : ['', Validators.required],
                tipoCta : ['', Validators.required],
                })
              this.formDatosLaborales.controls['departamento'].setValue(this.defaultDep, {onlySelf: true});
              this.formDatosLaborales.controls['cargo'].setValue(this.defaultCargo, {onlySelf: true});
              this.formDatosLaborales.controls['horario'].setValue(this.defaultHorario, {onlySelf: true});
              this.formDatosLaborales.controls['nombreCta'].setValue(this.defaultNombresCta, {onlySelf: true});
              this.formDatosLaborales.controls['tipoCta'].setValue(this.defaultTiposCtas, {onlySelf: true});
   }

  ngOnInit(): void {
  }

  agregarDatosLaborales(){
    const datosLaborales : DatosLaborales = {
      fechaIngreso : this.formDatosLaborales.get('fechaIngreso')?.value,
      departamento : this.formDatosLaborales.get('departamento')?.value,
      cargo : this.formDatosLaborales.get('cargo')?.value,
      horario : this.formDatosLaborales.get('horario')?.value,
      nombreCta : this.formDatosLaborales.get('nombreCta')?.value,
      noCta : this.formDatosLaborales.get('noCta')?.value,
      tipoCta : this.formDatosLaborales.get('tipoCta')?.value
    }
    console.log(datosLaborales);
    this.toastr.success('Empleado creado con Exito', 'Registro Completado!');
    this.router.navigate(['/']);
  }

}


