import { Component, OnInit } from '@angular/core';
import { Item } from '../../Item';
import { ProductsService } from '../../services/products.service';
import { BagService } from '../../services/bag.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-menuof-god',
  templateUrl: './menuof-god.component.html',
  styleUrls: ['./menuof-god.component.css']
})
export class MenuofGodComponent implements OnInit {
  products: Item[]= []
  title=""
  items= this.bagService.items
  totalAmount = 0;
  isLoggedIn: boolean=false;
  username: any;

 
  constructor(private productService: ProductsService, private bagService: BagService, private tokenStorage: TokenService){
    // private cartService: CartService


  }
  ngOnInit(): void {
    this.totalAmount = this.bagService.totAmount;
    this.getAllItems()

    this.isLoggedIn = !!this.tokenStorage.getToken()
    if(this.isLoggedIn){
      const user = this.tokenStorage.getUser()
      this.username = user.username
      console.log(this.username)
    }
  }
  // addToBag(item: Item ) {
  
  //   this.bagService.addToCart(item);
  //   // window.alert('Your product has been added to the cart!');
  //   //console.log(this.items)
  //   //localStorage.setItem("items",JSON.stringify(this.items))
  //   this.bagService.Total();
  //   //this.getTotal();
  // }

 addToCart(item: Item) {
    this.bagService.addToCart(item);
    this.bagService.Total();
    console.log(item)
    
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
}