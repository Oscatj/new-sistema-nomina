import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path:'registro',component: RegistroComponent},
  {path:'index',component: IndexComponent},
  {path:'**',pathMatch:'full',redirectTo:'registro'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
