import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  constructor(public _ps: PeliculasService) {
    this._ps.getPopulares().subscribe((data) => console.log(data));
  }
}
