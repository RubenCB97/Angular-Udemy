import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayus: boolean = true;
  ordenarPor: string = 'nombre';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo
    },
  ]

  cambiarMayus() {
    this.enMayus === true
      ? this.enMayus = false
      : this.enMayus = true
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
    console.log(valor);
  }

}
