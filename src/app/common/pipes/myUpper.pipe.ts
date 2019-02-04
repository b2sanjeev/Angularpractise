import {Pipe, PipeTransform} from '@angular/core';
import { pipe } from '@angular/core/src/render3';

@Pipe({
    name: 'myUpper'
})

export class MyUpperPipe implements PipeTransform{
    transform(value : string, kind : string){
        if( kind === 'upper'){
            value = value.toUpperCase();
        }else{
            value = value.toLowerCase();
        }
        return value;
    }
}
