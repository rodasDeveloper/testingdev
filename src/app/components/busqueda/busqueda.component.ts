import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

heroes:Heroe[]=[];
search:string;

  constructor(private _heroesService:HeroesService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.heroes = this._heroesService.buscarHeroes(params['search']);
      this.search = params['search'];
    });

  }

}
