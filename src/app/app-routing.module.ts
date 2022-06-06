import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PersonasComponent } from './components/Empleados/personas/personas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NominaComponent } from './components/Nomina/nomina/nomina.component';

const routes: Routes = [
  {path:'registro',component: RegistroComponent},
  {path:'index',component: IndexComponent},
  {path: 'personas', component: PersonasComponent},
  {path: 'nomina', component: NominaComponent},
  {path:'**',pathMatch:'full',redirectTo:'index'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
