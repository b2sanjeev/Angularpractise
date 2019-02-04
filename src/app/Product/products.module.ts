//import
import {NgModule} from '@angular/core';
//Modules
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, } from '@angular/common/http';

//Component
import {productComponent} from './products.component';
import {productConstantService} from '../common/services/index';
import {MyUpperPipe} from '../common/pipes/myUpper.pipe';
import {DiscountPipe} from '../common/pipes/discount.pipe';

import { from } from 'rxjs';
import { ProducService } from '../common/services/product.service';
import { productSearchPipe } from '../common/pipes/productSearch.pipe';
import { starComponent } from '../StarComponent/star.component';
import { sharedComponent } from '../shared/shared.component';


//decorator
@NgModule({
    //all Modules
imports:[
    BrowserModule,
    FormsModule,
    HttpClientModule,
],


// all components and pipe
declarations:[
    productComponent,
    MyUpperPipe,
    DiscountPipe,
    productSearchPipe,
    starComponent,
    sharedComponent
],

// only and only first component
bootstrap:[
productComponent
],
exports:[productComponent],
//all services
providers: [
    productConstantService,
    ProducService
    ]

})

//export
export class productModule{

}
