import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosConctacto } from 'src/app/models/DatosContacto';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.css']
})
export class DatosContactoComponent implements OnInit {

  tiposTel : string [] = ['Personal', 'Residencial', 'Laboral'];
  defaultTipoTel : string = 'Elija una opcion';

  estadosTel : string [] = ['Activo', 'Inactivo'];
  defaultEstadoTel : string = 'Elija una opcion';

  tiposRed : string [] = ['Facebook', 'Instagram', 'Twiter'];
  defaultTipoRed : string = 'Elija una opcion';

  estadosRed : string [] = ['Activo', 'Inactivo'];
  defaultEstadoRed : string = 'Elija una opcion';

  formDatosContacto: FormGroup;

  constructor(private fb : FormBuilder,
              private router : Router) {
      this.formDatosContacto = this.fb.group ({
        emailP : ['', Validators.required],
        emailE : ['', Validators.required],
        calleNo : ['', Validators.required],
        municipio : ['', Validators.required],
        provincia : ['', Validators.required],
        referencia : ['', Validators.required],
        noTel : ['', Validators.required],
        tipoTel : ['', Validators.required],
        estadoTel : ['', Validators.required],
        usuario : ['', Validators.required],
        tipoRed : ['', Validators.required],
        estadoRed : ['', Validators.required]
      })
      this.formDatosContacto.controls['tipoTel'].setValue(this.defaultTipoTel, 
        {onlySelf: true});   
      this.formDatosContacto.controls['estadoTel'].setValue(this.defaultEstadoTel, 
        {onlySelf: true});    
      this.formDatosContacto.controls['tipoRed'].setValue(this.defaultTipoRed, 
        {onlySelf: true});
      this.formDatosContacto.controls['estadoRed'].setValue(this.defaultEstadoRed, 
        {onlySelf: true});   
    }

  ngOnInit(): void {
  }

  agregarContacto(){

    const contacto : DatosConctacto = {
      emailP :  this.formDatosContacto.get('email')?.value,
      emailE : this.formDatosContacto.get('emailE')?.value,
      calleNo : this.formDatosContacto.get('calleNo')?.value,
      municipio : this.formDatosContacto.get('municipio')?.value,
      provincia : this.formDatosContacto.get('provincia')?.value,
      referencia : this.formDatosContacto.get('referencia')?.value,
      noTel : this.formDatosContacto.get('noTel')?.value,
      tipoTel : this.formDatosContacto.get('tipoTel')?.value,
      estadoTel : this.formDatosContacto.get('estadorTel')?.value,
      usuarioRed : this.formDatosContacto.get('usuarioRed')?.value,
      tipoRed : this.formDatosContacto.get('tipoRed')?.value,
      estadoRed : this.formDatosContacto.get('estadoRed')?.value
    }
    console.log(contacto);
    this.router.navigate(['/app-datos-laborales']);
  }
}
