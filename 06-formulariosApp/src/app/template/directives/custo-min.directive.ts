import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validators } from "@angular/forms";


@Directive({

    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustoMinDirective,
        multi: true
    }]
})
export class CustoMinDirective {

    @Input() minimo !: number;

    constructor() {}

    validate( control: FormControl) {
        const inputValue = control.value;

        return (inputValue < this.minimo)
            ? { 'customMin': true }
            : null;
        
    }
}