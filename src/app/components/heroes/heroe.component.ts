import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {
  private heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel',
  };
  nuevo = false;
  id: string;

  constructor(private heroeservice: HeroesService, private router: Router, private actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe((parametros) => {
      this.id = parametros['id'];
      if (this.id !== 'nuevo') {
        this.heroeservice.getHeroe(this.id).subscribe((heroe) => (this.heroe = heroe));
      }
    });
  }

  ngOnInit() {}

  guardar() {
    console.log(this.heroe);
    this.nuevo = this.id === 'nuevo';
    if (this.nuevo) {
      this.heroeservice.nuevoHeroe(this.heroe).subscribe(
        (data) => {
          this.router.navigate(['/heroe', data.name]);
        },
        (error) => console.log(error),
      );
    } else {
      this.heroeservice.actualizarHeroe(this.heroe, this.id).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error),
      );
    }
  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: 'Marvel',
    });
  }
}
