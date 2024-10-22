import { Routes } from '@angular/router';
import { TDFComponent } from './components/Forms/tdf/tdf.component';
import { ReactiveFComponent } from './components/Forms/reactive-f/reactive-f.component';
import { AComponent } from './components/service/a/a.component';
import { BComponent } from './components/service/b/b.component';
import { HomeComponent } from './pages/home/home.component';

import { ProductsComponent } from './components/Decorators/Input/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { FormsComponent } from './components/Forms/forms/forms.component';
export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"products",component:ProductsComponent},

   {path:"forms",component:FormsComponent,children:[
    {path:"tdf",component:TDFComponent},
    {path:"reactivef",component:ReactiveFComponent}
   ]},

    {path:"productdetails/:id",component:ProductdetailsComponent},
];
