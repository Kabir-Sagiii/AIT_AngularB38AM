import { Routes } from '@angular/router';
import {PipesComponent} from './Pipes/pipes/pipes.component'
import { TDFComponent } from './forms/tdf/tdf.component';
import { HomeComponent } from './routing/home/home.component';
import { ProfileComponent } from './routing/profile/profile.component';
import { ContactusComponent } from './routing/contactus/contactus.component';
import { LoginComponent } from './routing/login/login.component';
import { ProductcardComponent } from './Path-Query-Parameters/productcard/productcard.component';
import { GithubHomeComponent } from './Github/github-home/github-home.component';
import { PagenoutfoundComponent } from './routing/pagenoutfound/pagenoutfound.component';
import { EducationalComponent } from './routing/educational/educational.component';
import { ProfessionalComponent } from './routing/professional/professional.component';
import { ProductsComponent } from './Path-Query-Parameters/products/products.component';
import { ProductdetailsComponent } from './Path-Query-Parameters/productdetails/productdetails.component';
import { ElectronicsComponent } from './Path-Query-Parameters/electronics/electronics.component';
import { ActivateRoute } from './Route-Guard/canActivate/CanActivate';
import { ReactiveFComponent } from './forms/reactive-f/reactive-f.component';
import { MymaterialComponent } from './Angular-Material/mymaterial/mymaterial.component';
import { CartComponent } from './httpClient/cart/cart.component';
import { MyProductsComponent } from './httpClient/my-products/my-products.component';
export const routes: Routes = [
   
     {path:"",component:MyProductsComponent},
     {path:"products",component:ProductsComponent},
     {path:"cart",component:CartComponent},
     {path:"tdf",component:TDFComponent},
     {path:"material",component:MymaterialComponent},
     {path:"reactiveform",component:ReactiveFComponent},
     {path:"electronics",component:ElectronicsComponent,
          canActivate:[ActivateRoute]},

          {path:"pipe",component:PipesComponent,
               },

     {path:"profile",canActivateChild:[ActivateRoute],component:ProfileComponent,children:[
          {path:'education',component:EducationalComponent},
          {path:'professional',component:ProfessionalComponent},
     ]},


     {path:"contact",component:ContactusComponent,canDeactivate:[(contactuse:ContactusComponent)=>{
          return contactuse.allowUserToLeave()
     }]},

     {path:"login",component:LoginComponent},
     {path:"productdetails/:id",component:ProductdetailsComponent},
     {path:"**",component:PagenoutfoundComponent},
     
];
