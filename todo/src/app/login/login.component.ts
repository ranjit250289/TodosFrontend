import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {HardcodedAuthenticationService} from './../service/hardcoded-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'fastfeast'
  password = ''
  errormessage = 'Invalid Credential'
  invalidlogin = false

  constructor(private router : Router, private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      //Redirect to Welocme page
      this.router.navigate(['welcome', this.username])
      this.invalidlogin=false

    }else{
      this.invalidlogin=true
    }
  }

}
