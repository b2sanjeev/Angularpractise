import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from "../Interfaces/product.model";

@Pipe({
    name: 'prductSearch'
})

export class productSearchPipe implements PipeTransform{
    transform(value : IProduct, userInput : string){
        userInput = userInput ? userInput.toLowerCase() : null;
        return userInput ? value.filter(
            (product: IProduct)=>(
                product.productName.toLowerCase().indexOf(userInput) !== -1) ||(
                product.productCode.indexOf(userInput) !== -1) ||
                (product.description.indexOf(userInput) !== -1) ||
                (product.price.toString().indexOf(userInput) !== -1)  ||
                (product.starRating.toString().indexOf(userInput) !== -1)
                ): value;
       // return value;
    }
}


