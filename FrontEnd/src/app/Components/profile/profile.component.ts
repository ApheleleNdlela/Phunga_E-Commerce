import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BagService } from 'src/app/services/bag.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userProfile:any={
    username:"",
    role:'',
    email:"",
    password:''
  }
  myCart:any
  isLoggedIn: boolean= false;
  
  constructor(private tokenStorage :TokenService, private router: Router, private cartService: BagService){}
  
  ngOnInit(): void {
    //this.getShops()
   this.cartService.getUserCart().subscribe((data)=>{
    this.myCart = data.products
    console.log(data.products)
   })
    this.isLoggedIn = !!this.tokenStorage.getToken()
    if(this.isLoggedIn){
      const user = this.tokenStorage.getUser()
      const {username, roles, email, password} = user
      this.userProfile.username = username;
      this.userProfile.role = roles;
      this.userProfile.email = email;
      this.userProfile.password = password;
      
      

      
    } 
    if(!this.isLoggedIn){
      this.router.navigate(['/login'])
    }

    //throw new Error('Method not implemented.');
  }
}
