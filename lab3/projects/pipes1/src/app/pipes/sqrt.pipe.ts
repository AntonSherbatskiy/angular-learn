import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {
    transform = (num: number): number => Math.sqrt(num);
}
