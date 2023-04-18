import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import ValidateForm from 'src/app/helper/validateform';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private auth: AuthService) { } //, private fb:FormBuilder

  ngOnInit(): void {
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
      ValidateForm.validateAllFormFileds(this.loginForm)
    }


    }

  }
 




 


