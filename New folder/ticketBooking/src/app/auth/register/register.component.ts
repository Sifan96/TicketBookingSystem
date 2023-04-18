import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import ValidateForm from 'src/app/helper/validateform';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;

  constructor(private auth: AuthService) { }  //, private fb:FormBuilder

  ngOnInit(): void {
  }

  onRegister(){
    if (this.registerForm.valid){
      console.log(this.registerForm.value)

      this.auth.login(this.registerForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message)
        },
        error:(err)=>{
          alert(err?.error.message)}
        })
        console.log(this.registerForm)
      }else {
        ValidateForm.validateAllFormFileds(this.registerForm)
      }


  }

    }
