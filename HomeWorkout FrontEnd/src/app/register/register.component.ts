import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerErrorMsg:string=''

  constructor(private registerfb:FormBuilder,private api:ApiService,private registerRouter:Router){}

    registerform=this.registerfb.group({
      name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      gender:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      age:['',[Validators.required,Validators.pattern('[0-9]*')]],
      height:['',[Validators.required,Validators.pattern('[0-9]*')]],
      weight:['',[Validators.required,Validators.pattern('[0-9]*')]],
      email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

    })

    register(){

if(this.registerform.valid){
  console.log(this.registerform.value);
  let Name=this.registerform.value.name
  let Gender=this.registerform.value.gender
  let Age=this.registerform.value.age
  let Height=this.registerform.value.height
  let Weight=this.registerform.value.weight 
  let Email=this.registerform.value.email 
  let Password=this.registerform.value.password

  this.api.register(Name,Gender,Age,Height,Weight,Email,Password).subscribe((result:any)=>{
      alert(result.message)
      this.registerRouter.navigateByUrl('/login')
  },(result:any)=>{
  this.registerErrorMsg=result.error.message  //already registered
  })
  //timeout 
  setTimeout(() => {
    this.registerform.reset();
    this.registerErrorMsg="Please provide a different Email"
  }, 3000);

  // alert('Reg works');
}
else{
  alert('Insufficient Data')
}


    }
}
