import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mypets',
  templateUrl: './mypets.component.html',
  styleUrls: ['./mypets.component.css']
})
export class MypetsComponent implements OnInit {

  mypets:any ;
  token: string;
  updatePets = new FormGroup({
    info: new FormControl('',[Validators.required]),
  });

  
  constructor(public local: LocalStorageService,private router: Router,private ps: ProductsService) {
    this.onLoading();
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
      this.ps.getPets().subscribe(
        data=>{
          this.mypets = data;
        },
        err =>{
          console.log(err)
        });
      }catch(error){
        console.log(error)
      }
    }

    delete(id:any){
        console.log(id)
        this.ps.deletePets(id).subscribe(
            data=>{
              console.log(data)
            },
            err =>{
              console.log(err);
            })
          alert('Pets Deletion successfully');
    }

    update(id:any){
      console.log(this.updatePets.value)
      this.ps.updatePets(id,this.updatePets.value).subscribe(
        data=>{
          console.log(data)
        },
        err =>{
          console.log(err);
        })
      alert('Pets Updated successfully');
    }

}
