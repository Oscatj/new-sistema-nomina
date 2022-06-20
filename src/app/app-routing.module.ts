import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NominaComponent } from './components/Nomina/nomina/nomina.component';
import { ListaPersonasComponent } from './components/Empleados/lista-personas/lista-personas.component';
import { UsuariosComponent } from './components/maestros/usuarios/usuarios.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BancosComponent } from './components/maestros/bancos/bancos.component';
import { HorariosComponent } from './components/maestros/horarios/horarios.component';
import { DepartamentosComponent } from './components/maestros/departamentos/departamentos.component';
import { EmpresasComponent } from './components/maestros/empresas/empresas.component';
import { TandaComponent } from './components/maestros/tanda/tanda.component';
import { CargosComponent } from './components/maestros/cargos/cargos.component';
import { DatosPersonalesComponent } from './components/Empleados/datos-personales/datos-personales.component';
import { DatosContactoComponent } from './components/Empleados/datos-contacto/datos-contacto.component';
import { DatosLaboralesComponent } from './components/Empleados/datos-laborales/datos-laborales.component';
import { NominaRegularComponent } from './components/Nomina/nomina-regular/nomina-regular.component';
import { NominaExtraordinariaComponent } from './components/Nomina/nomina-extraordinaria/nomina-extraordinaria.component';
import { NominaLiquidacionComponent } from './components/Nomina/nomina-liquidacion/nomina-liquidacion.component';
import { FormularioNominaRegularComponent } from './components/Nomina/nomina-regular/formulario-nomina-regular/formulario-nomina-regular.component';

const routes: Routes = [
  {path:'registro',component: RegistroComponent},
  {path:'index',component: IndexComponent},
  {path: 'nomina', component: NominaComponent},
  {path: 'listaPersonas', component: ListaPersonasComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'bancos', component: BancosComponent},
  {path: 'horarios', component: HorariosComponent},
  {path: 'departamentos', component: DepartamentosComponent},
  {path: 'empresas', component: EmpresasComponent},
  {path: 'tanda', component: TandaComponent},
  {path: 'cargo', component: CargosComponent},
  {path: 'app-datos-personales', component: DatosPersonalesComponent},
  {path: 'app-datos-contacto', component: DatosContactoComponent},
  {path: 'app-datos-laborales', component: DatosLaboralesComponent},
  {path: 'app-nomina-regular', component: NominaRegularComponent},
  {path: 'app-nomina-extraordinaria', component: NominaExtraordinariaComponent},
  {path: 'app-nomina-liquidacion', component: NominaLiquidacionComponent},
  {path: 'app-formulario-nomina-regular', component: FormularioNominaRegularComponent},
  {path:'**',pathMatch:'full',redirectTo:'index'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
