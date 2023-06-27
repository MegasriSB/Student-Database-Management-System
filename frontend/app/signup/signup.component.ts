import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform: FormGroup;
  message:string ='';
  isProcess:boolean= false;
  className='d-none'
  sign1:string ="assets/images/Sign up-pana.png";
  constructor(private auth: AuthService, private fb:FormBuilder){
    this.signupform= this.fb.group({
      'username':['',Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.required]
    })
  }
  ngOnInit(){

  }

  signup(){
    this.isProcess= true;
    const data = this.signupform.value;
    delete data['confirm']
    this.auth.signup(data).subscribe(res=>{
if(res.success){
  this.isProcess=false;
  this.message="Sign-Up Successfull";
  this.className='alert alert-success'
}
else{
  this.isProcess=false;
  this.message= res.message;
  this.className='alert alert-danger'
}
      // this.signupform.reset();
    },
    err =>{
      this.isProcess=false;
      this.message= err;
      this.className='alert alert-danger'
    }
    );
  }
}
