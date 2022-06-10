import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PersonasComponent } from './components/Empleados/personas/personas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelComponent } from './components/panel/panel.component';
import { NominaComponent } from './components/Nomina/nomina/nomina.component';
import { ListaPersonasComponent } from './components/Empleados/lista-personas/lista-personas.component';
import { DatosPersonalesComponent } from './components/Empleados/datos-personales/datos-personales.component';
import { DatosContactoComponent } from './components/Empleados/datos-contacto/datos-contacto.component';
import { DatosLaboralesComponent } from './components/Empleados/datos-laborales/datos-laborales.component';
import { BancosComponent } from './components/maestros/bancos/bancos.component';
import { HorariosComponent } from './components/maestros/horarios/horarios.component';
import { EmpresasComponent } from './components/maestros/empresas/empresas.component';
import { UsuariosComponent } from './components/maestros/usuarios/usuarios.component';
import { DepartamentosComponent } from './components/maestros/departamentos/departamentos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { TandaComponent } from './components/maestros/tanda/tanda.component';
import { CargosComponent } from './components/maestros/cargos/cargos.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    PersonasComponent,
    NavbarComponent,
    IndexComponent,
    FooterComponent,
    PanelComponent,
    NominaComponent,
    ListaPersonasComponent,
    DatosPersonalesComponent,
    DatosContactoComponent,
    DatosLaboralesComponent,
    BancosComponent,
    HorariosComponent,
    EmpresasComponent,
    UsuariosComponent,
    DepartamentosComponent,
    PerfilComponent,
    TandaComponent,
    CargosComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    AppRoutingModule,
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
