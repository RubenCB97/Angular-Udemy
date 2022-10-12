import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'rubén';
  nombreUper: string = 'RUBÉN';
  nombreCompleto: string = 'rUbÉn coSTa';

  fecha: Date = new Date();
}
