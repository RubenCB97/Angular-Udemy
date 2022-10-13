import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  //i18nSelect
  nombre: string = 'Ruben';
  genero: string = 'masculino';
 
  invitacionMap = {
    'masculino': 'conocerlo',
    'femenino': 'conocerla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro','Marcos','Luis'];
  
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 cliente esperando',
    'other': 'tenemos # cliente esperando' 
     
  }

  cambiarClientes() {
    this.genero === 'masculino' ?
      (this.genero = 'femenino' , this.nombre = 'María')
      : (this.genero = 'masculino', this.nombre = 'Rubén')
  }


  borrarClientes() {
    this.clientes.pop();
    console.log(this.clientes);
  }

  //KeyValue Pipe
  persona = {
    nombe: 'Rubén',
    edad: 25,
    direccion: 'España'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa ');
    }, 3500);
  })
}
