import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',    
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };
  onSubmit() {
    console.log('Formulario enviado', this.contact);
    // Aquí puedes agregar la lógica para enviar los datos a tu servidor
  }
}
