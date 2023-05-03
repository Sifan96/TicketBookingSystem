import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShowTimeService } from 'src/app/services/show-time.service';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.css']
})
export class ShowTimeComponent implements OnInit {


  showTimeForm! : FormGroup
  constructor(private fb : FormBuilder, private showtime : ShowTimeService) { }

  ngOnInit(): void {
    this.showTimeForm = this.fb.group({
     showtime: [''],
     quantity: [''],
     date: ['']

    })
  }

  onTime(){
    console.log(this.showTimeForm.value)
    this.showtime.addTime(this.showTimeForm.value)
    .subscribe({
      next:(res=>{
        alert(res.message)
    }),
    error:(err=>{
      alert(err?.error.message)
    })
    
  })
}
  onQuantity(){
    console.log(this.showTimeForm.value)
    this.showtime.addNumberofSeat(this.showTimeForm.value)
    .subscribe({
      next:(res=>{
        alert(res.message)
    }),
    error:(err=>{
      alert(err?.error.message)
    })
    
  })
}
onDate(){
  console.log(this.showTimeForm.value)
  this.showtime.addDate(this.showTimeForm.value)
  .subscribe({
    next:(res=>{
      alert(res.message)
  }),
  error:(err=>{
    alert(err?.error.message)
  })
  
})
}


}
