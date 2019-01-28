// import
import {NgModule} from '@angular/core';

// module
import{ BrowserModule } from '@angular/platform-browser';

//component
import { appComponent } from './app.component';
import { productComponent}  from './Product/products.component'

 
// decorator
@NgModule({
// all module
imports:[BrowserModule],

// all components and pipes
declarations:[
                appComponent,
                productComponent    
            ],

// only and only first component
bootstrap:[appComponent],

//all services
providers:[]
})

// export
export class appModule{

}