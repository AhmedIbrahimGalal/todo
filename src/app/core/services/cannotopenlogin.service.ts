import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CannotopenloginService implements CanActivate {

  constructor(private authService:AuthService, private router: Router) { }

  canActivate(_route: ActivatedRouteSnapshot, _state:RouterStateSnapshot) {

    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/tasklist'])
      return false;
    }
    return true;
  }
}
