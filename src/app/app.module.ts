import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component'; // Importa AppComponent
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Importa FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Define AppComponent como el componente bootstrap
})
export class AppModule { }