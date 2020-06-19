import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-abount',
  templateUrl: './abount.component.html',
  styleUrls: ['./abount.component.css']
})
export class AbountComponent implements OnInit {

  about:any ;
  token: string;
  

  constructor(public local: LocalStorageService,private router: Router,private ps: ProductsService) { 
    this.onLoading()

    try{
      this.token = this.local.get('user').token;
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

  onLoading(){
    try{
      this.ps.getFood().subscribe(
        data=>{
          this.about = data;
          console.log(data)
        },
        err =>{
          console.log(err)
        });
      }catch(error){
        console.log(error)
      }
    }



}
