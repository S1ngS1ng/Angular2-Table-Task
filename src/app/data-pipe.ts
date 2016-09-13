import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'dataFilter',
    pure: false
})

export class DataPipe implements PipeTransform {
    transform(values: Array<any>, args:any[]):any {
        return values.filter((value) => {
            return value[args[0]] === args[1];
        });
    }
}
