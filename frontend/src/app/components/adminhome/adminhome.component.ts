import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {


  token: string;
  onweracc : String
  mybookings: any


  constructor(public local: LocalStorageService,private router: Router,private ps: ProductsService) { 
     this.onLoading()
  }
 
  ngOnInit(): void {
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

    
  signout(){
    this.local.clear();
    this.router.navigate(['/signin']);
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

}
