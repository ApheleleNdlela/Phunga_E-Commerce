import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


   export class RegisterComponent implements OnInit {
   form: any = {
      username: '',
      email: '',
      password: ''
    };

    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    constructor(private authService: AuthService, private location: Location) { }
    ngOnInit(): void {
    }
    SignUp(): void {
      const { username, email, password } = this.form;
      console.log(username, email, password)
      this.authService.register(username, email, password).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessful = true;
          // this.isSignUpFailed = true;
          
          this.location.back()
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    }
  
    previousPage(): void {
      setTimeout(()=>{
        this.location.back();
      }, 5000)
    }
  
  }




    //