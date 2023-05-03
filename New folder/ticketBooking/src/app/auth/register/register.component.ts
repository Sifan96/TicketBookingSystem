import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCardLgImage } from '@angular/material';
import validateform from 'src/app/helper/validateform';
import ValidateForm from 'src/app/helper/validateform';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  registerForm! : FormGroup;
  constructor(private fb:FormBuilder, private auth:AuthService) { }  //, private fb:FormBuilder

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // registerForm = new FormGroup({
  //   firstname: new FormControl("",[
  //     Validators.required,
  //     Validators.minLength(2),
  //     Validators.pattern('[a-zA-Z].*')
  //   ]),
  //   lastname: new FormControl("",[
  //     Validators.required,
  //     Validators.minLength(2),
  //     Validators.pattern('[a-zA-Z].*')
  //   ]),
  //   phonenumber: new FormControl("",[
  //     Validators.required,
  //     Validators.pattern('[0-9]*'),
  //     Validators.minLength(10),
  //     Validators.maxLength(10)
    
  //   ]),
  //   email: new FormControl("",[Validators.required,Validators.email]),

  //   pasword: new FormControl("",[
  //     Validators.required,
  //     Validators.minLength(5),
  //     Validators.maxLength(15)
  //   ])
  // });

  registerSubmited(){
    if(this.registerForm.valid){
    //console.log(this.registerForm.value)
     // console.log(this.registerForm.value)
      this.auth.registerUser(this.registerForm.value)
     .subscribe({      
       next:(res=>{
         alert(res.message)
       }),
       error:(err=>{
         alert(err?.error.message)     })
   })
   console.log(this.registerForm.value)
  }else{
    validateform.validateAllFormFileds(this.registerForm)


  }


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
  

    
  //     this.auth
  //     .registerUser([
  //     this.registerForm.value.firstname,
  //     this.registerForm.value.lastname,
  //     this.registerForm.value.phonenumber,
  //     this.registerForm.value.email,
  //     this.registerForm.value.pasword
  //  ])
  //  .subscribe((res) => {
  //   if(res == 'Success'){
  //     this.displayMsg = 'Account Create Succesfully!';
  //     this.isAccountCreated = true;
  //   }else if(res == 'AlreadyExist'){
  //     this.displayMsg = 'Account Already Exist , Try Another Mail'
  //     this.isAccountCreated = false;
  //   }else {
  //     this.displayMsg = 'Somthing Went Wrong'
  //     this.isAccountCreated = false
  //   }


    
  //   })
  // }
  // else{
  //   this.repeatPass = 'inline'
  // }

  


  // }
  // validateAllFormFileds(registerForm: FormGroup<{ firstname: FormControl<string | null>; lastname: FormControl<string | null>; phonenumber: FormControl<string | null>; email: FormControl<string | null>; pasword: FormControl<...>; }>) {
  //   throw new Error('Method not implemented.');
  // }

    
// }
//   validateAllFormFileds(registerForm: FormGroup<any>) {
//     throw new Error('Method not implemented.');
//   }
// }