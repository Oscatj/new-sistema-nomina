import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelComponent } from './components/panel/panel.component';
import { NominaComponent } from './components/Nomina/nomina/nomina.component';
import { BancosComponent } from './components/maestros/bancos/bancos.component';
import { HorariosComponent } from './components/maestros/horarios/horarios.component';
import { UsuariosComponent } from './components/maestros/usuarios/usuarios.component';
import { DepartamentosComponent } from './components/maestros/departamentos/departamentos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CargosComponent } from './components/maestros/cargos/cargos.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { NominaModalComponent } from './components/modals/nomina-modal/nomina-modal.component';
import { ListaPersonasComponent } from './components/Empleados/lista-personas/lista-personas.component';
import { DatosPersonalesComponent } from './components/Empleados/datos-personales/datos-personales.component';
import { DatosContactoComponent } from './components/Empleados/datos-contacto/datos-contacto.component';
import { DatosLaboralesComponent } from './components/Empleados/datos-laborales/datos-laborales.component';
import { ActualizarNominaComponent } from './components/modals/actualizar-nomina/actualizar-nomina.component';
import { HorarioComponent } from './components/modals/horario/horario.component';
import { TandaModalComponent } from './components/modals/tanda-modal/tanda-modal.component';
import { BancoModalComponent } from './components/modals/banco-modal/banco-modal.component';
import { DepartModalComponent } from './components/modals/depart-modal/depart-modal.component';
import { CargosModalComponent } from './components/modals/cargos-modal/cargos-modal.component';
import { UsuarioModalComponent } from './components/modals/usuario-modal/usuario-modal.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    FooterComponent,
    PanelComponent,
    NominaComponent,
    BancosComponent,
    HorariosComponent,
    UsuariosComponent,
    DepartamentosComponent,
    PerfilComponent,
    CargosComponent,
    HistoricoComponent, 
    ListaPersonasComponent,
    DatosPersonalesComponent,
    DatosContactoComponent,
    DatosLaboralesComponent,
    NominaModalComponent,
    ActualizarNominaComponent,
    HorarioComponent,
    TandaModalComponent,
    BancoModalComponent,
    DepartModalComponent,
    CargosModalComponent,
    UsuarioModalComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatGridListModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatListModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
