import { Component,ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateform from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService){

  }
  ngOnInit():void{
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })}


  onLogin(){
    if(this.loginForm.valid){
  
  this.auth.signIn(this.loginForm.value).subscribe({
    next:(res)=>{
      alert('Login Successfully')
      this.loginForm.reset(); // Réinitialise le formulaire

    },
    error:(err)=>{
      alert(err.error.message)
    }
  })
      //send to database
      console.log(this.loginForm.value);
    }else{
      validateform.validateAllFormFields(this.loginForm);
      alert("your form is invalid ")
    }
    
    }
}
