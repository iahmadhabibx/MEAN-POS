import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SHARED_DATA } from '../shared/sharedData';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private Authentication = SHARED_DATA.authentication;
  constructor() { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.Authentication.isLogin;
  }

}
