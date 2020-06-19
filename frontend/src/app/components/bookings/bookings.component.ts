import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  
  token: string;
  onweracc : String
  bookingsForm = new FormGroup({
    onwer: new FormControl('',[Validators.required]),
    petsname: new FormControl('',[Validators.required]),
    fristday: new FormControl('',[Validators.required]),
    lastday: new FormControl('',[Validators.required]),
    detail: new FormControl('',[Validators.required]),
    status: new FormControl('',[Validators.required])
  });

  constructor(public local: LocalStorageService,private router: Router,private ps: ProductsService ) { 
    try{
      this.token = this.local.get('user').token;
      this.onweracc = this.local.get('user').result.username;
      this.ps.getAllProducts(this.token).subscribe(
        data => {
        },
        err => {
          this.router.navigate(['/signin']);
        }
      );
    } catch (error) {
      this.router.navigate(['/signin']);
    }
  }

  ngOnInit(): void {
  }
  
  signout(){
    this.local.clear();
    this.router.navigate(['/signin']);
  }

  savebookings(){
    console.log(this.bookingsForm.value)
      this.bookingsForm.patchValue({
        onwer: this.onweracc
      });
      this.bookingsForm.patchValue({
        status: "peding"
      });

      console.log(this.bookingsForm.value)
      this.ps.addbookings(this.bookingsForm.value).subscribe(
          data=>{
            console.log(data)
            alert('Bookings added successfully');
            this.bookingsForm.reset();
          },
          err =>{
            console.log(err);
          });
    
  }

}
