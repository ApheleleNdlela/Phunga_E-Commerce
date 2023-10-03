import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BagService } from 'src/app/services/bag.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  //count = JSON.parse(`${localStorage.getItem('Count')}`)
  cartCount = new BehaviorSubject<any>(0);
  cartTotal = new BehaviorSubject<any>(0); 
  //cartCount = ;
  //cartTotal = JSON.parse(`${localStorage.getItem('TotalAmount')}`)
  isLoggedIn = false
  username = "";
  isAdmin=false
  
  constructor(private cartService: BagService, private tokenStorage: TokenService) { }
  
  
  ngOnInit(): void {
    this.cartCount = this.cartService.getCount();
    this.cartTotal = this.cartService.getTotal();
    this.isLoggedIn = !!this.tokenStorage.getToken()

    if(this.isLoggedIn){
    const user = this.tokenStorage.getUser()
    this.username = user.username
    this.isAdmin = user.isAdmin
    console.log(this.username)
  }
  localStorage.setItem('CartCount', JSON.stringify(this.cartCount))
  localStorage.setItem('TotalAmount',JSON.stringify(this.cartTotal))

  }

  

  logout(): void{
    this.tokenStorage.signOut()
    window.location.reload()
  }
}
