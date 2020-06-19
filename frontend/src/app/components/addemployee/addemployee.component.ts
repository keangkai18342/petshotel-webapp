import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  token: string;

  empForm = new FormGroup({
    fristname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),   
    phone: new FormControl('',[Validators.required]), 
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

  signout(){
    this.local.clear();
    this.router.navigate(['/signin']);
  }

  addemp(){
    console.log(this.empForm.value);
    this.ps.addEmp(this.empForm.value).subscribe(
      data=>{
        console.log(data)
        alert('Add Employee Success');
        this.empForm.reset();
      },
      err =>{
        console.log(err);
      });
  }


  ngOnInit(): void {
  }

}
