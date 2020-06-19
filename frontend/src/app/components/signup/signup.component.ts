import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   

  authForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phonenumber: new FormControl('',[Validators.required])
  });


  constructor(private router: Router, private auth: AuthService) { 
    this.authForm.reset();
  }

  ngOnInit(): void {
  }

  signup(){
    console.log(this.authForm.value);
    this.auth.signUp(this.authForm.value).subscribe(
      data=>{
        console.log(data)
        alert('Sign up Successfully');
        this.authForm.reset();
      },
      err =>{
        console.log(err);
      });

  }
}
