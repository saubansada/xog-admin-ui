import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private _authService: AuthenticationService, private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const currentUser = this._authService.currentUserValue;

    let res: boolean = false;

    if (currentUser != null) {

      let userRoles = (currentUser.roles ?? "").split(","); 

      res = next.data.roles && next.data.roles.some((ai: any) => userRoles.includes(ai)); 
    }
     
    if (res == false) {

      this._router.navigate(['/auth/login']);
    }
    
    return res;
  }
}