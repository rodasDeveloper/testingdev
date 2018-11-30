import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): any {

    if (!images || images.length < 1) {
      return 'assets/img/noimage.png';
    } else {
      return images[0].url;
    }
  }

}
