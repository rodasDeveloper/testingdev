import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen',
})
export class PeliculaImagenPipe implements PipeTransform {
  transform(pelicula: any, poster: boolean = false): any {
    const imgPath = 'https://image.tmdb.org/t/p/w300';

    if (pelicula.backdrop_path && !poster) {
      return imgPath + pelicula.backdrop_path;
    } else if (pelicula.poster_path) {
      return imgPath + pelicula.poster_path;
    } else {
      return 'assets/img/NoImageAvailable.gif';
    }
  }
}
