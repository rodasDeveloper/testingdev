import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] =[];
  //Se ejecuta al principio del todo
  constructor( private _heroesService:HeroesService,
                private router:Router    ) {
   }

  //Se usa cuando la página ya está renderizada
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx]);
  }

}
