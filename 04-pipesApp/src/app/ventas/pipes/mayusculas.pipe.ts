import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
   
    transform(value: string, flag: boolean = true): string {
        return (flag)
            ? value.toUpperCase()
            : value.toLowerCase()
    }

}