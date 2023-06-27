import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor( private fb:FormBuilder, private auth:AuthService, private router:Router){
    this.loginform= this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.required]
    })
  }
  ngOnInit(){

  }
  login(){
    // alert("Login Successfull!");
    const data = this.loginform.value
    this.auth.signin(data).subscribe((res)=>{
      if(res.success){
        localStorage.setItem('token',res.token)
this.router.navigate(['/result'])
      }
      else{
        alert(res.message)
      }
    },err=>{
      alert(err)
    })
  }
  piclogin:string ="assets/images/im.jpg";
}
