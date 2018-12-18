import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [],
})
export class DataComponent implements OnInit {
  forma: FormGroup;
  nombrecompleto: FormGroup;
  usuario: Object = {
    nombrecompleto: {
      nombre: 'José María',
      apellido: 'Rodas',
    },
    correo: 'email@correo.com',
    pasatiempos: ['correr', 'dormir', 'comer'],
  };
  // FormControl recibe los siguiente parámetros:
  // 1- valor por defecto
  // 2- validadores (1 solo, o un array de validators)
  // 3- Validadores asíncronos
  constructor() {
    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl('', Validators.required),
      }),
      correo: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
      pasatiempos: new FormArray([new FormControl('Correr', Validators.required)]),
      username: new FormControl('', Validators.required, this.existeUsuario),
      password1: new FormControl('', Validators.required),
      password2: new FormControl(),
    });

    // this.forma.setValue(this.usuario);

    // Cuando se ejecuta aquí la función this.noIgual() se encuentra en otro contexto donde "this" es undefined
    // por ese motivo hay que realizar un bind para indicarle cúal será el valor de this
    this.forma.controls['password2'].setValidators([Validators.required, this.noIgual.bind(this.forma)]);

    // Creamos un observador para que esté pendiente de los cambios del formulario

    // Con esto se estaría pendiente de TODOS los cambios
    // this.forma.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });
    // Con esto se estaría pendiente solo de los cambios del control que queramos
    this.forma.controls['username'].valueChanges.subscribe((data) => {
      console.log(data);
    });
    // De esta forma estamos pendiente del estado del formulario
    this.forma.controls['username'].statusChanges.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {}

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(new FormControl('', Validators.required));
  }

  noIgual(control: FormControl): { [s: string]: boolean } {
    // al hacer el bind en el validador y asignarle el valor de this del método noIgual como this.forma
    // ya simplemente como llamar a this.controls, hacemos referencia a la forma.
    const forma: any = this;
    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true,
      };
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'jmrodas') {
          resolve({ existe: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promesa;
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    // this.forma.reset({
    //   nombrecompleto: {
    //     nombre: '',
    //     apellido: '',
    //   },
    //   correo: '',
    // });
  }
}
