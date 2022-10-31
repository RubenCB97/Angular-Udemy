import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  texto1: string = 'Ruben Costa';
  color: string = 'red';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',Validators.required]
  })
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }
  tieneErrror(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.texto1 = 'RubenCB';
  }
  cambiarColor() {
    this.color =  "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
;
  }
}
