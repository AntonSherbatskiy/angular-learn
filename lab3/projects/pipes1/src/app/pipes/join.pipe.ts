import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'join'
})
export class JoinPipe implements PipeTransform {
    transform(array: any[], start?: number, end?: number): string {
        let result = array;

        if (start !== undefined) {
            if (end !== undefined) {
                result = array.slice(start, end);
            } else {
                result = array.slice(start, result.length);
            }
        }

        return result.join(", ");
    }
}
