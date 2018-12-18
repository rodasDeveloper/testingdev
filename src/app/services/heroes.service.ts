import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  fireUrl = 'https://heroesapp-f03ef.firebaseio.com/heroes.json';
  baseUrl = 'https://heroesapp-f03ef.firebaseio.com/heroes/';

  constructor(private http: HttpClient) {}

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'aplication/json',
    });
    return this.http.post(this.fireUrl, body, { headers }).pipe(
      map((res) => {
        console.log(res);
        return res;
      }),
    );
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'aplication/json',
    });
    const url = `${this.baseUrl}/${key$}.json`;
    return this.http.put(url, body, { headers }).pipe(
      map((res) => {
        console.log(res);
        return res;
      }),
    );
  }

  getHeroe(key$: string) {
    const url = `${this.baseUrl}/${key$}.json`;
    return this.http.get(url);
  }

  getHeroes() {
    return this.http.get(this.fireUrl);
  }

  borrarHeroe(key$: string) {
    const url = `${this.baseUrl}/${key$}.json`;
    return this.http.delete(url);
  }
}
