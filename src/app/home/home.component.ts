import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';

import Swal from 'sweetalert2';
import { ApiService } from '../shared/api.service';







 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})


export class HomeComponent  implements OnInit {
  data:any

  
  
  formbuilder: any;
  window: any;
closeModal: any;
  

  
   
  
  


  
  
  constructor(private api : ApiService) {}
  ngOnInit(): void {
  }

  
ngOnit(): void {
  
  

}
 


 registerForm = new FormGroup({
  firstname: new FormControl("",[Validators.required,Validators.minLength(3),
  Validators.pattern("[a-zA-Z].*")]),
  lastname: new FormControl("",[Validators.required,Validators.minLength(3),
    Validators.pattern("[a-zA-Z].*")]),
  email: new FormControl("",[Validators.required,Validators.email]),
  contact: new FormControl("",[Validators.required,Validators.minLength(10),
  Validators.maxLength(10),Validators.pattern("[0-9].*")]),
  gender: new FormControl("",Validators.required),
  //state
  password: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15),]),
  



 });
 

 alertWithSuccess(){
  
  if(this.registerForm.valid){
    this.api.postUser(this.registerForm.value)
    .subscribe({
      next:(_response :any)=> {
        Swal.fire('Thank you', 'you submitted successfully','success')
        let ref = document.getElementById('cancel')
        ref?.click();
        this.registerForm.reset();
        
        
        
        
        
       
        
      },
      error:()=>{
        // alert("Something Went Wrong!")
        Swal.fire('error','something went wrong','error')  
        let ref = document.getElementById('cancel')
        ref?.click();
        
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
  return this.registerForm.get("contact")as FormControl;
 }
 get gender(): FormControl{
  return this.registerForm.get("gender")as FormControl;
 }
 //State
 
 get password(): FormControl{
  return this.registerForm.get("password")as FormControl;
 }


}



