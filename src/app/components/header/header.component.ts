import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router) {}


 buscarPelicula(texto: string) {
    if (texto.length !== 0) {
        console.log(texto);
        this.router.navigate(['buscar', texto]);
    } else {
      return;
   }
   
 }


}
