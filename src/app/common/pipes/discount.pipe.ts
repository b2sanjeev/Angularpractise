import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'discount'
})

export class DiscountPipe implements PipeTransform{
    transform(value : number, discountprize : number){
        if (discountprize)
        value = value - discountprize;
        else
        value = value - 2;
        return value;
    }
}