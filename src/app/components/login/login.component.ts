import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mUsername:String = "";
  mPassword:String = "";
 
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickSubmit(){
    if (this.mUsername == "piyanut@support.com" && this.mPassword == "1234"){
      this.router.navigate(["/room"])
    }else{
      window.alert("Login Failed");
    }
  }

}
