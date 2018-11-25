import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, mostrar: boolean): string {
    let password = value;

    if(!mostrar){
      let  passwordArray = value.split("");
      for(let i=0; i<passwordArray.length; i++){
      password = password.replace(passwordArray[i], '*');
      }
    }
        return password;
  }

}
