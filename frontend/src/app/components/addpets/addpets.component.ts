import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { ProductsService } from '../../services/products.service'
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpets',
  templateUrl: './addpets.component.html',
  styleUrls: ['./addpets.component.css']
})
export class AddpetsComponent implements OnInit {

  petsForm = new FormGroup({
    onwer: new FormControl('',[Validators.required]),
    petsname: new FormControl('',[Validators.required]),
    petsgender: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required]),
    file: new FormControl('',[Validators.required]),
    img: new FormControl('',[Validators.required]),
    info: new FormControl('',[Validators.required]),
  });

  previewLoaded: boolean =false;
  token: string;
  onweracc : String
  constructor(public local: LocalStorageService,private router: Router,private ps: ProductsService) { 
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

  savepets(){
    console.log(this.petsForm.value)
    this.petsForm.patchValue({
      onwer: this.onweracc
    });
    this.ps.AddPets(this.petsForm.value).subscribe(
        data=>{
          console.log(data)
          alert('Pets added successfully');
          this.petsForm.reset();
        },
        err =>{
          console.log(err);
        });
  }

  resetForm(){
    this.petsForm.reset();
    this.previewLoaded = false;
  }

  onChangeImg(e:any){
    if(e.target.files.length > 0){
      const file = e.target.files[0];
      var pattern = /image-*/;
      const reader = new FileReader();
      if(!file.type.match(pattern)){
        alert('invalid format');
        this.petsForm.reset();
      }else{
        reader.readAsDataURL(file);
        reader.onload =() =>{
          this.previewLoaded =true;
          this.petsForm.patchValue({
            img: reader.result
          });
        };
      }
    }
  }




}
