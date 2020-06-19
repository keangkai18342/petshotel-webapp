import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  signin(){
    console.log(this.authForm.value);
    if(this.authForm.value.username == "admin" && this.authForm.value.password == "admin"){
      this.router.navigate(['/adminhome']);
    }
    else{
      this.auth.signIn(this.authForm.value).subscribe(
        data => {
          if(data.status == true){
            alert('Login Success !!');
            this.router.navigate(['/products']);
          }else{
            alert('Username or Password is incorrect!');
          }
        },
        err => {
          console.log(err);
          alert('Username or Password is incorrect!');
        });
    }
    
  }

  signup(){
    this.router.navigate(['/signup']);
  }
}


