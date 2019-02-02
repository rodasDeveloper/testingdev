import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  populares: any;
  cartelera: any;
  infantiles: any;

  constructor(public ps: PeliculasService) {
    // Populares
    this.ps.getPopulares().subscribe((data) => {
      this.populares = data;
      console.log('POPULARES : ', data);
    });

    // Cartelera
    this.ps.getCartelera().subscribe((data) => {
      this.cartelera = data;
      console.log('CARTELERA : ', data);
    });

    // Infantiles
    this.ps.getInfantiles('ES').subscribe((data) => {
      this.infantiles = data;
      console.log('INFANTILES : ', data);
    });
  }

  ngOnInit() {}
}
