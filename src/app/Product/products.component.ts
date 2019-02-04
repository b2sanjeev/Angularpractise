// import
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {productConstantService} from '../common/services/index';
import {IProduct} from '../common/Interfaces/product.model';
import { ProducService } from '../common/services/product.service';

//decorators
@Component({
selector:'app-product',
templateUrl: './products.component.html',
styleUrls : ['./products.component.css']
})


//export
export class productComponent {
//title: string = ' Bajooka Product'

showImage : boolean = true;
searchData : string ;
imageWidth :  number = 100;
products : IProduct[];
message : string;

constructor(private ProductConstantservice:productConstantService, 
    private _productService :ProducService){

}

ngOnInit(): void {
    this.products = this._productService.getProductService();
}
toggleImage():void{
    this.showImage = !this.showImage;
}

onDataRecive(Recivemessage: string): void {

    this.message = ' ' + Recivemessage;

}

}