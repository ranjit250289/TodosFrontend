import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    console.log('Before login  --> ' + this.isUserLoggedIn());
    if(username==="fastfeast" && password==="dummy"){
      sessionStorage.setItem('authenticaterUser', username);
      console.log('After login  --> ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
