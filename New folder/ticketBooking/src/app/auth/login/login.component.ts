import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import validateform from 'src/app/helper/validateform';
import ValidateForm from 'src/app/helper/validateform';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  loginForm! : FormGroup
  constructor(private fb:FormBuilder , private auth:AuthService) { } //, private fb:FormBuilder

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onLogin(){
    if (this.loginForm.valid){
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message)
        },
        error:(err)=>{
          alert(err?.error.message)
        }
     } )
      console.log(this.loginForm)
    }else {
      console.log("Form is not valid")
     validateform.validateAllFormFileds(this.loginForm);
      alert("Your Form is Invalid")
    }



    }

    // private validateAllFormFields(formGroup: FormGroup){
    //   Object.keys(formGroup.controls).forEach(field =>{
    //     const control = formGroup.get(field);
    //     if (control instanceof FormGroup){
    //       control.markAsDirty({onlySelf:true});
    //     }else if (control instanceof FormGroup){
    //       this.validateAllFormFields(control)
    //     }
    //   })
    // }

  
  }




 


