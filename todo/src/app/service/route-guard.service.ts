import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot} from '@angular/router';
import { RouterStateSnapshot} from '@angular/router';
import { Router } from '@angular/router';


import { HardcodedAuthenticationService} from './../service/hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private router: Router, private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;
  }
}
