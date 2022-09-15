import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  
  tiposEmail : string [] = ['Personal', 'Laboral', 'Otro'];
  defaultTipoEmil : string = 'Elija una opcion';

  estadosEmail : string [] = ['Activo', 'Inactivo'];
  defaultEstadoEmail : string = 'Elija una opcion';

  get correos (){
    return this.formDatosContacto.get('correos') as FormArray;
  }
  get telefonos (){
    return this.formDatosContacto.get('telefonos') as FormArray;
  }
  get redes (){
    return this.formDatosContacto.get('redes') as FormArray;
  }

  formDatosContacto: FormGroup;

  constructor(private fb : FormBuilder,
              private router : Router) {
      this.formDatosContacto = this.fb.group ({
        email : ['', Validators.required],
        calleNo : ['', Validators.required],
        municipio : ['', Validators.required],
        provincia : ['', Validators.required],
        referencia : ['', Validators.required],
        noTel : ['', Validators.required],
        tipoTel : ['', Validators.required],
        estadoTel : ['', Validators.required],
        usuarioRed : ['', Validators.required],
        tipoRed : ['', Validators.required],
        estadoRed : ['', Validators.required],
        tipoEmail: ['', Validators.required],
        estadoEmail: ['', Validators.required],
        correos: this.fb.array([]),
        telefonos: this.fb.array([]),
        redes: this.fb.array([])
      })

  
      this.formDatosContacto.controls['tipoTel'].setValue(this.defaultTipoTel, 
        {onlySelf: true});   
      this.formDatosContacto.controls['estadoTel'].setValue(this.defaultEstadoTel, 
        {onlySelf: true});    
      this.formDatosContacto.controls['tipoRed'].setValue(this.defaultTipoRed, 
        {onlySelf: true});
      this.formDatosContacto.controls['estadoRed'].setValue(this.defaultEstadoRed, 
        {onlySelf: true});   
      this.formDatosContacto.controls['tipoEmail'].setValue(this.defaultTipoEmil, 
        {onlySelf: true});
      this.formDatosContacto.controls['estadoEmail'].setValue(this.defaultEstadoEmail, 
        {onlySelf: true});      
      
      
    }

  ngOnInit(): void {
  }
  agregarCorreo (){
    const correoFormGroup = this.fb.group({
      nombre: '',
      tipo: '',
      estado: ''
    })
    this.correos.push(correoFormGroup);
  }
  removerCorreo(indice: number){
    this.correos.removeAt(indice);
  }

  agregarTelefono (){
    const telefonoFormGroup = this.fb.group({
      nombre: '',
      tipo: '',
      estado: ''
    })
    this.telefonos.push(telefonoFormGroup);
  }
  removerTelefono(indice: number){
    this.telefonos.removeAt(indice);
  }

  agregarRed (){
    const redFormGroup = this.fb.group({
      nombre: '',
      tipo: '',
      estado: ''
    })
    this.redes.push(redFormGroup);
  }
  removerRed(indice: number){
    this.redes.removeAt(indice);
  }
  agregarContacto(){

    const contacto : DatosConctacto = {
      email :  this.formDatosContacto.get('emailP')?.value,
      calleNo : this.formDatosContacto.get('calleNo')?.value,
      municipio : this.formDatosContacto.get('municipio')?.value,
      provincia : this.formDatosContacto.get('provincia')?.value,
      referencia : this.formDatosContacto.get('referencia')?.value,
      noTel : this.formDatosContacto.get('noTel')?.value,
      tipoTel : this.formDatosContacto.get('tipoTel')?.value,
      estadoTel : this.formDatosContacto.get('estadoTel')?.value,
      usuarioRed : this.formDatosContacto.get('usuarioRed')?.value,
      tipoRed : this.formDatosContacto.get('tipoRed')?.value,
      estadoRed : this.formDatosContacto.get('estadoRed')?.value,
      tipoEmail: this.formDatosContacto.get('tipoEmail')?.value,
      estadoEmail: this.formDatosContacto.get('estadoEmail')?.value

    }
    console.log(contacto);
    this.router.navigate(['/app-datos-laborales']);
  }
}
