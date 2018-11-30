import { Component,  Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: []
})
export class TarjetasComponent {

 @Input() items: any [] = [];

  constructor( private router: Router) { }

  verArtista(item: any) {
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    // Se indica la página a la que se quiere ir y el parámetro
    this.router.navigate([ '/artist', artistaId ]);
  }

}
