import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateform from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  SignUpForm!:FormGroup
  router: any;
  renderer: any;
  constructor(private fb:FormBuilder,private auth:AuthService,){

  }
  ngOnInit():void{
    
    this.SignUpForm = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required,],
      role:['',],
    });    
  }

  onSignup(){
    if(this.SignUpForm.valid){
  
  this.auth.signUp(this.SignUpForm.value).subscribe({
    next:(res)=>{
      alert("Your account has been created successfully.");
      this.SignUpForm.reset(); // Réinitialise le formulaire
    },
    error:(err)=>{
      alert(err?.error.message)
    }
  })
  
      //send to database
      console.log(this.SignUpForm.value);
    }else{
      validateform.validateAllFormFields(this.SignUpForm);
      alert("your form is invalid ")
      
  
    }
    
    }
}
