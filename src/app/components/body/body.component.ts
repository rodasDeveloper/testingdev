import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

  nombre:string = 'José María';
  nombre2 = "josé maría rODas morales"
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI= Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre:"Logan",
    clave:"Wolverine",
    edad:500,
    direccion:{
      calle:"Primera",
      casa:"19"
    }
  }

  valorDePromesa = new Promise((resolve, reject) =>{

    setTimeout(()=>resolve('Llegó la promesa'), 1500);

  })

  fecha = new Date();
  video = "fJ9rUzIMcZQ";
  mostrar:boolean = true;


}
