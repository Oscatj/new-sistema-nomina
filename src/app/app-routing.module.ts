import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PersonasComponent } from './components/Empleados/personas/personas.component';
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

const routes: Routes = [
  {path:'registro',component: RegistroComponent},
  {path:'index',component: IndexComponent},
  {path: 'personas', component: PersonasComponent},
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
  {path:'**',pathMatch:'full',redirectTo:'index'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
