import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SHARED_DATA } from '../shared/sharedData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate, CanActivateChild {
  private Authentication = SHARED_DATA;
  canActivate() {
    let loginToken = localStorage.getItem("angularToken");
    this.Authentication.authentication.isLogin = loginToken ? true : false;
    return this.Authentication.authentication.isLogin;
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate();
  }
}
