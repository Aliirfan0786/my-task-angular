import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';

import Swal from 'sweetalert2';
import { ApiService } from '../shared/api.service';
import { datamodel } from './model';






 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})


export class HomeComponent  implements OnInit {
  data:undefined|datamodel[]

  
  formbuilder: any;
  
   
  
  


  
  
  constructor(private api : ApiService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
ngOnit(): void {
  
  

}
 

// alertWithSuccess(){

//   if(this.pwd.valid){
//     Swal.fire('Thank you', 'you submitted successfully','success')
//   }

// }
// employeModelobj:employeModal = new employeModal();

//
 registerForm = new FormGroup({
  firstname: new FormControl("",[Validators.required,Validators.minLength(3),
  Validators.pattern("[a-zA-Z].*")]),
  lastname: new FormControl("",[Validators.required,Validators.minLength(3),
    Validators.pattern("[a-zA-Z].*")]),
  email: new FormControl("",[Validators.required,Validators.email]),
  mobile: new FormControl("",[Validators.required,Validators.minLength(10),
  Validators.maxLength(10),Validators.pattern("[0-9].*")]),
  Gender: new FormControl("",Validators.required),
  //state
  password: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15),]),
  // rpwd: new FormControl(""),



 });
 

 alertWithSuccess(){
  if(this.registerForm.valid){
    this.api.postUser(this.registerForm.value)
    .subscribe({
      next:(_response :any)=> {
        Swal.fire('Thank you', 'you submitted successfully','success')
        this.registerForm.reset();
      },
      error:()=>{
        alert("Something Went Wrong!")
      }
    })
  }
 }
 

 
  
 

 registerSubmitted(){
  console.log(this.registerForm.value)

  


 }  
  
 get firstname(): FormControl{
  return this.registerForm.get("firstname")as FormControl;
 }
 get lastname(): FormControl{
  return this.registerForm.get("lastname")as FormControl;
 }
 get email(): FormControl{
  return this.registerForm.get("email")as FormControl;
 }
 get mobile(): FormControl{
  return this.registerForm.get("mobile")as FormControl;
 }
 get Gender(): FormControl{
  return this.registerForm.get("Gender")as FormControl;
 }
 //State
 
 get pwd(): FormControl{
  return this.registerForm.get("password")as FormControl;
 }
//  get rpwd(): FormControl{
//   return this.registerForm.get("rpwd")as FormControl;
//  }

}
