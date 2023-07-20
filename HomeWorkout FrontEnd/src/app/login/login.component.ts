import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginErrorMsg:string=''
  constructor(private loginfb:FormBuilder,private api:ApiService,private loginRouter:Router){}

loginform=this.loginfb.group({
  email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

})


  login(){
    if(this.loginform.valid){
      console.log(this.loginform.value);
      let Email=this.loginform.value.email ;
      let Password=this.loginform.value.password;
      this.api.login(Email,Password).subscribe((result:any)=>{
        alert(result.message);
        //redirect to home page 
        this.loginRouter.navigateByUrl('/home')

      },(result:any)=>{//response 401
          //errormessage
          this.loginErrorMsg=result.error.message
          //settimeout
          setTimeout(() => {
            this.loginform.reset()
            this.loginErrorMsg="Incorrect Email or Password"
          }, 1000);
      })
    }
    else{
      alert('Invalid Data')
    }
  }
}





