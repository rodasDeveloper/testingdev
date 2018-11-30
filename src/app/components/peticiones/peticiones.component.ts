import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styles: []
})
export class PeticionesComponent implements OnInit {

  paises:any[]= [];

  constructor( private http: HttpClient) {
    //Prepara a angular para recibir peticiones de un subscriptor
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (data:any) => {

      this.paises = data;
      console.log(data);
    })

   }

  ngOnInit() {
  }

}
