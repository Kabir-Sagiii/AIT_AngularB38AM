import { AuthService } from "../auth.service"
import {inject} from "@angular/core"

export const ActivateRoute = ()=>{
  var auth=  inject(AuthService)
   return auth.isLoggedIn
}