import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { NominaComponent } from './components/Nomina/nomina/nomina.component';
import { ListaPersonasComponent } from './components/Empleados/lista-personas/lista-personas.component';
import { UsuariosComponent } from './components/maestros/usuarios/usuarios.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BancosComponent } from './components/maestros/bancos/bancos.component';
import { HorariosComponent } from './components/maestros/horarios/horarios.component';
import { DepartamentosComponent } from './components/maestros/departamentos/departamentos.component';
import { CargosComponent } from './components/maestros/cargos/cargos.component';
import { DatosPersonalesComponent } from './components/Empleados/datos-personales/datos-personales.component';
import { DatosContactoComponent } from './components/Empleados/datos-contacto/datos-contacto.component';
import { DatosLaboralesComponent } from './components/Empleados/datos-laborales/datos-laborales.component';
import { NominaModalComponent } from './components/modals/nomina-modal/nomina-modal.component';
import { ActualizarNominaComponent } from './components/modals/actualizar-nomina/actualizar-nomina.component';
import { HorarioComponent } from './components/modals/horario/horario.component';
import { TandaModalComponent } from './components/modals/tanda-modal/tanda-modal.component';
import { BancoModalComponent } from './components/modals/banco-modal/banco-modal.component';
import { DepartModalComponent } from './components/modals/depart-modal/depart-modal.component';
import { CargosModalComponent } from './components/modals/cargos-modal/cargos-modal.component';
import { UsuarioModalComponent } from './components/modals/usuario-modal/usuario-modal.component';

const routes: Routes = [
  {path:'index',component: IndexComponent},
  {path: 'nomina', component: NominaComponent},
  {path: 'listaPersonas', component: ListaPersonasComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'bancos', component: BancosComponent},
  {path: 'horarios', component: HorariosComponent},
  {path: 'departamentos', component: DepartamentosComponent},
  {path: 'cargo', component: CargosComponent},
  {path: 'app-datos-personales', component: DatosPersonalesComponent},
  {path: 'app-datos-contacto', component: DatosContactoComponent},
  {path: 'app-datos-laborales', component: DatosLaboralesComponent},
  {path: 'nomina-modal', component: NominaModalComponent},
  {path: 'app-actualizar', component: ActualizarNominaComponent},
  {path: 'horario', component: HorarioComponent},
  {path: 'tanda', component: TandaModalComponent},
  {path: 'bancoModal', component: BancoModalComponent},
  {path: 'departModal', component: DepartModalComponent},
  {path: 'cargoModal', component: CargosModalComponent},
  {path: 'usuarioModal', component: UsuarioModalComponent},
  {path:'**',pathMatch:'full',redirectTo:'index'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
