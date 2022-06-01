import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PersonasComponent } from './components/personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
