import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ProductsService } from '../services/products.service';
import { BagService } from '../services/bag.service';
import { TokenService } from 'src/app/services/token.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


const apiUrl = 'https://mvc-phunga-git-main-aphelelendlela.vercel.app/v1/items/'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {


  userProfile:any={
    username:"",
    email:"",
    password:'',
    isAdmin:""
  }
  myCart:any
  isLoggedIn: boolean= false;
  
  constructor( private router: Router, private cartService: BagService,  private productService: ProductsService, 
    private bagService: BagService, 
    private tokenStorage: TokenService,){}
  
 
  products: Item[]= []
  product?: Item
  title=""
  items= this.bagService.items
  totalAmount = 0;

  username: any;

  newItem: Item = {
    price: 0,
    itemname: "",
    category: "",
    details: "",
    picture: "",
    quantity: 1,
    id: ""
  }

  selected = false

 
 
  ngOnInit(): void {
    this.cartService.getUserCart().subscribe((data)=>{
      this.myCart = data.products
      console.log(data.products)
     })
      this.isLoggedIn = !!this.tokenStorage.getToken()
      if(this.isLoggedIn){
        const user = this.tokenStorage.getUser()
        const {username, isAdmin, email, password} = user
        this.userProfile.username = username;
        this.userProfile.isAdmin = isAdmin;
        this.userProfile.email = email;
        this.userProfile.password = password;
        
        
  
        
      } 
      if(!this.isLoggedIn){
        this.router.navigate(['/login'])
      }
    this.totalAmount = this.bagService.totAmount;
    this.getAllItems()

    this.isLoggedIn = !!this.tokenStorage.getToken()
    if(this.isLoggedIn){
      const user = this.tokenStorage.getUser()
      this.username = user.username
      console.log(this.username)
    }
  }

  delete(id:any){
    this.productService.deleteOne(id).subscribe({
      next: data => {
        console.log(data)
        this.reload()
      },
      error: e => {
        console.error(e.error)
      }
    })
  }

  add(){
    this.productService.addItem(this.newItem).subscribe({
      next: data => {
        console.log(data)
        this.selected = false
        this.reload()
      },
      error: e => {
        console.error(e.error.message)
      }
    })
  }

  selectAdd(){
    this.selected = true
  }

  reload(){
    window.location.reload()
  }

 
  getAllItems(){
    this.productService.getAllItems().subscribe((data)=>{
      this.products = data
      console.log(data)
    })
  }
  getTotal(){
    this.bagService.getAllItems();
  }

//   /** PUT: update the hero on the server */

  


}

