import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {


  token: string;
  onweracc : String
  mybookings: any


  constructor(public local: LocalStorageService,private router: Router,private ps: ProductsService) { 
    this.onLoading()
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

  onLoading(){
    try{
      this.ps.getbookings().subscribe(
        data=>{
          this.mybookings = data;
          console.log(data)
        },
        err =>{
          console.log(err)
        });
      }catch(error){
        console.log(error)
      }
    }
  

  ngOnInit(): void {
  }

  delete(id:any){
    console.log(id)
    this.ps.deleteBookings(id).subscribe(
        data=>{
          console.log(data)
        },
        err =>{
          console.log(err);
        })
      alert('Bookings Deletion successfully');
}

  signout(){
    this.local.clear();
    this.router.navigate(['/signin']);
  }

}
