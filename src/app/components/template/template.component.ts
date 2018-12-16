import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// cuando queremos que el componente solo escuche: [ngModel]
// cuando queremos que el componente escuche y emita: [(ngModel)]

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
    `
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
    `
  ]
})
export class TemplateComponent {
  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises = [
    {
      codigo: 'CRI',
      nombre: 'Costa Rica'
    },
    {
      codigo: 'ESP',
      nombre: 'España'
    }
  ];

  sexos: string[] = ['Hombre', 'Mujer', 'Sin definir'];

  constructor() {}

  guardar(forma: NgForm) {
    console.log('Formulario enviado');
    console.log('ngForm', forma.controls);
    console.log('Valor Forma', forma.value);
    console.log('Usuario', this.usuario);
  }
}
