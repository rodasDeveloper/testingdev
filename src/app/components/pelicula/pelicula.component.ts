import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [],
})
export class PeliculaComponent implements OnInit {
  pelicula: any;
  back = '';
  busqueda = '';

  constructor(public ps: PeliculasService, public route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.back = params['pag'];
      if (params['busqueda']) {
        this.busqueda = params['busqueda'];
      }
      this.ps.getPelicula(params['id']).subscribe((data) => {
        this.pelicula = data;
      });
    });
  }

  ngOnInit() {}
}
