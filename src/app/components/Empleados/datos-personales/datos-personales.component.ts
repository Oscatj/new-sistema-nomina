import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosPersonales } from 'src/app/models/DatosPersonales';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  sexos: string[] = ['Masculino', 'Femenino'];
  defaultSexo: string = 'Elija una opcion';

  estadosCiviles: string[] = ['Soltero', 'Casado', 'Union libre', 'Divorciado', 'Viudo'];
  defaultEstadoCivil: string = 'Elija una ipcion';

  formDatosPersonales: FormGroup;

  constructor(private fb : FormBuilder,
              private router : Router) {
    this.formDatosPersonales = this.fb.group ({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        apodo: ['', Validators.required],
        noIdentidad: ['', Validators.required],
        sexo: new FormControl(RequiredValidator),
        estadoCivil: ['', Validators.required],
        fechaN: ['', Validators.required],
    })
    this.formDatosPersonales.controls['sexo'].setValue(this.defaultSexo, 
      {onlySelf: true});
    this.formDatosPersonales.controls['estadoCivil'].setValue(this.defaultEstadoCivil, {onlySelf: true});
   }

  ngOnInit(): void {
    
  }
  agregarPersona(){

    const persona: DatosPersonales = {
        nombre: this.formDatosPersonales.get('nombre')?.value,
        apellido: this.formDatosPersonales.get('apellido')?.value,
        apodo: this.formDatosPersonales.get('apodo')?.value,
        noIdentidad: this.formDatosPersonales.get('noIdentidad')?.value,
        sexo: this.formDatosPersonales.get('sexo')?.value,
        estadoCivil: this.formDatosPersonales.get('estadoCivil')?.value,
        fechaN: this.formDatosPersonales.get('fechaN')?.value

    }
    console.log(persona);
    this.router.navigate(['/app-datos-contacto']);
  }
}
