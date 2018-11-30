import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  TOKEN = 'Bearer BQCaND0uw6cLd_2_zodbjDaehHjlaDXT5DPZkatTJOldd3dI67qsxqOa9wM8Xkb08R3p1up8KbI3Azjo2qM';

  constructor( private http: HttpClient) { }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : this.TOKEN
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data =>  data['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?query=${termino}&type=artist&market=ES&offset=0&limit=15`)
      .pipe( map( data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
    .pipe( map( data => data['tracks']));
  }






}
