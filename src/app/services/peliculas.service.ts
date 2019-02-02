import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private apikey = '1a2cf63e4191dfeaba8fc668af392d98';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  private callBack = 'callback=JSONP_CALLBACK';
  private imgPath = 'https://image.tmdb.org/t/p/w300';

  constructor(private http: HttpClient) {}

  // ------------------------------------------------------
  // Methods
  // ------------------------------------------------------
  private getURL(request: string, language: string): string {
    return `${this.urlMoviedb}${request}&api_key=${this.apikey}&language=${language}`;
  }

  private getResults(url: string) {
    // console.log('REST ', url);

    return this.http.jsonp(url, this.callBack).pipe(map((res: any) => res.results));
  }

  public getPopulares() {
    const request = '/discover/movie?sort_by=popularity.desc';
    const url = this.getURL(request, 'es');

    return this.getResults(url);
  }

  public buscarPelicula(texto: string) {
    // const request = `/search/movie?query=${texto}%sort_by=popularity.desc`;
    const request = `/search/movie?`;
    const url = `${this.urlMoviedb}${request}&api_key=${this.apikey}&language=es&query=${texto}`;

    return this.getResults(url);
  }

  public getImage(path: string) {
    return `${this.imgPath}${path}`;
  }

  public getCartelera() {
    const sinceDate = new Date();
    const fromDate = new Date();
    sinceDate.setDate(fromDate.getDate() + 7); // añadimos una semana

    const fromStr = `${fromDate.getFullYear()}-${fromDate.getMonth() + 1}-${fromDate.getDay()}`;
    const sinceStr = `${sinceDate.getFullYear()}-${sinceDate.getMonth() + 1}-${sinceDate.getDay()}`;

    const request = `/discover/movie?primary_release_date.gte=${fromStr}&primary_release_date.lte=${sinceStr}`;
    // const request = `/movie/now_playing`;
    const url = this.getURL(request, 'es');

    return this.getResults(url);
  }

  public getInfantiles(pais: string) {
    const request = `/discover/movie?certification_country=${pais}&certification.lte=G&sort_by=popularity.desc`;
    const url = this.getURL(request, 'es');

    return this.getResults(url);
  }

  public getPelicula(id: string) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}&language=es`;

    return this.http.jsonp(url, this.callBack).pipe(map((res: any) => res));
  }
}
