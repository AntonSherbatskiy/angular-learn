import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'format'
})
export class FormatPipe implements PipeTransform {

    transform = (num: number): string => num.toString().replace(".", ",");

}
