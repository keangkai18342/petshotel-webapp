import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { ProductsService } from '../../services/products.service'
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addabout',
  templateUrl: './addabout.component.html',
  styleUrls: ['./addabout.component.css']
})
export class AddaboutComponent implements OnInit {

  token: string;

  aboutForm = new FormGroup({
    foodname: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    details: new FormControl('',[Validators.required]),   
  });

  constructor(public local: LocalStorageService,private router: Router,private ps: ProductsService) { 

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

  addfood(){
    console.log(this.aboutForm.value);
    this.ps.AddFood(this.aboutForm.value).subscribe(
      data=>{
        console.log(data)
        alert('Add Food Success');
        this.aboutForm.reset();
      },
      err =>{
        console.log(err);
      });
  }

}
