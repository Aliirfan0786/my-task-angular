import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  repeatPass: string = 'none';
  constructor(private http: HttpClient) {}
ngOnit(): void {

}
alertWithSuccess(){
  if (this.pwd == this.rpwd){
  Swal.fire ("thank you", 'you Signup successfully','success') }
  // else {
  //   Swal.fire ('error',"Passwords do not Match",'warning');
  // }

}
 registerForm = new FormGroup({
  firstname: new FormControl("",[Validators.required,Validators.minLength(3),
  Validators.pattern("[a-zA-Z].*")]),
  lastname: new FormControl("",[Validators.required,Validators.minLength(3),
    Validators.pattern("[a-zA-Z].*")]),
  email: new FormControl("",[Validators.required,Validators.email]),
  mobile: new FormControl("",[Validators.required,Validators.minLength(10),
  Validators.maxLength(10),Validators.pattern("[0-9].*")]),
  Gender: new FormControl("",Validators.required),
  State: new FormControl(""),
  pwd: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15),]),
  rpwd: new FormControl(""),



 });
 

 registerSubmitted(){
  console.log(this.registerForm.value)

  


 }  // if (this.pwd.value == this.rpwd.value){
  //   console.log("submited")
  //   this.repeatPass = 'none'
  // }else{
  //    this.repeatPass = 'inline'
    
  // }
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
 get State(): FormControl{
  return this.registerForm.get("State")as FormControl;
 }
 
 get pwd(): FormControl{
  return this.registerForm.get("pwd")as FormControl;
 }
 get rpwd(): FormControl{
  return this.registerForm.get("rpwd")as FormControl;
 }

}

