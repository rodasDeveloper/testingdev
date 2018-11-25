import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: []
})
export class HeroeCardComponent implements OnInit {
  //Indica a angular que la propiedad puede venir definida desde fuera
  @Input() heroe:any ={}
  @Input() index:number;

// Emite un evento desde el hijo que el padre estará escuchando
  @Output() hereoSelecionado:EventEmitter<number>

  constructor(private router:Router) {

    this.hereoSelecionado = new EventEmitter();

  }

  ngOnInit() {
  }

  verHeroe(){
    // console.log(this.index);
      this.router.navigate(['/heroe', this.index]);
    // this.hereoSelecionado.emit(this.index);
  }
}
