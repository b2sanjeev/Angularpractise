// import
import {NgModule} from '@angular/core';

// module
import{ BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
//component
import { appComponent } from './app.component';
import { productModule} from './Product/products.module';
import { bodyComponent} from './Body/body.component';
import {productConstantService} from './common/services/index';

 
// decorator
@NgModule({
// all module
imports:[
        BrowserModule,
        productModule
        ],

// all components and pipes
declarations:[
                appComponent,
                bodyComponent
            ],

// only and only first component
bootstrap:[appComponent],

//all services
providers:[productConstantService
]
})

// export
export class appModule{

}