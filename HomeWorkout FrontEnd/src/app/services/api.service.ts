import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // baseUrl='https://homeworkout-ol90.onrender.com'
  baseUrl='http://localhost:5000'


  //api call for register 
  register(name:any,gender:any,age:any,height:any,weight:any,email:any,password:any){

    const body={
      name,gender,age,height,weight,email,password
    }
    return this.http.post(`${this.baseUrl}/register`,body)

    // return this.http.post('http://localhost:5000/register',body)

  }


  //api call for login 
  login(email:any,password:any){
    const body={
      email,
      password
    }
    return this.http.post(`${this.baseUrl}/login`,body)

    // return this.http.post('http://localhost:5000/login',body)
  }
}
