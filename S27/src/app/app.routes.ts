import { Routes } from '@angular/router';
import { TDFComponent } from './components/Forms/tdf/tdf.component';
import { ReactiveFComponent } from './components/Forms/reactive-f/reactive-f.component';
import { AComponent } from './components/service/a/a.component';
import { BComponent } from './components/service/b/b.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './components/Decorators/Input/products/products.component';
export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"electronics",component:ProductsComponent},
    {path:"tdf",component:TDFComponent},
    {path:"rf",component:ReactiveFComponent},
   

];
