import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanio">Toca los botones + / - para modificar el tamaño</p>
    <button class="btn btn-primary" (click)="tamanio = tamanio + 5"><i class="fa fa-plus"></i></button>
    <button class="btn btn-primary" (click)="tamanio = tamanio - 5"><i class="fa fa-minus"> </i></button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamanio = 20;

  constructor() {}

  ngOnInit() {}
}
