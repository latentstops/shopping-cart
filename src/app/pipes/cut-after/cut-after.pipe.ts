import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'cutAfter'
})
export class CutAfterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value.substr(0, args) + (args < value.length ? '...' : '');
    }

}
