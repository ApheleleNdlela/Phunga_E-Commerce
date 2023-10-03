import { Component, OnInit} from '@angular/core';
import { BagService } from '../../services/bag.service';
import { Item } from '../../Item';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-godcart',
  templateUrl: './godcart.component.html',
  styleUrls: ['./godcart.component.css']
})

export class GodcartComponent implements OnInit{

  //items = JSON.parse(localStorage.getItem('CartItems') || '[]')
  totalAmount = this.bagService.totAmount
  userId: any;
  items : any
  //cartTotal: any;
  
  // totalAmount: this.bagService.totAmount

  constructor(private bagService:  BagService, private tokenStorage: TokenService){}
  ngOnInit(): void {
   //this.items
   this.getAllItem()
   this.calcTotal()
   const user = this.tokenStorage.getUser()
   this.userId = user.id
  }


  getAllItem(){
    
    this.items = this.bagService.getAllItems()
    window.sessionStorage.setItem("cart", JSON.stringify(this.items))
  }
  
  
    
    // localStorage.setItem('CartItems', JSON.stringify(this.items))
    // localStorage.setItem('TotalAmount',JSON.stringify(this.totalAmount))



  // delete(i:number){
  //   this.items.splice(i,1);
  //   this.calcTotal();

  //   localStorage.setItem('CartItems', JSON.stringify(this.items))
  //   localStorage.setItem('TotalAmount',JSON.stringify(this.totalAmount))
  // }
  delete(index:any,e:Event) {
    console.log(this.items[index].quantity)

    this.bagService.cartItemcount.next(this.bagService.cartItemcount.value - this.items[index].quantity)
    this.items.splice(index, 1);
    this.calcTotal();
    localStorage.setItem('CartItems', JSON.stringify(this.items))
  }

  // incrementQuantity(quantity: any, i: number) {
  //   quantity++;
  //   item.calcTotal = item.price 
  //   this.items[i].quantity  = quantity
  //   this.calcTotal()
  // }
  increment(qty: any, index: number){
    qty++
    this.items[index].quantity = qty
    this.items.length
    this.bagService.cartItemcount.next(this.bagService.cartItemcount.value + 1)
    this.bagService.cartTotal.next(this.bagService.cartTotal.value + this.totalAmount)

    this.calcTotal();
  }
//   decrementQuantity(quantity: any, i: number){
//     if (quantity > 1) {
//       this.items[i].quantity--;
//     }
//     this.calcTotal()

// }

decrementQuantity(qty: any, index: number){
    
  if(qty > 1){
    qty--
  this.items[index].quantity = qty
  this.items.length;
  this.bagService.cartItemcount.next(this.bagService.cartItemcount.value - 1)
  //this.cartService.cartTotal.next(this.cartService.cartTotal.value - this.totalAmount)

  this.calcTotal();
  }
  
}
qntUpdate($event: any) { 
  this.calcTotal();
}

calcTotal() {
  //   this.totalAmount = 0
  //   this.items.forEach((item: {quantity: number, price: number}) => {
  //   this.totalAmount += (item.quantity)

  //   return this.items.reduce((acc: any, products: { num: any; }) => (acc += products.num), 0);
  // });

  this.totalAmount = 0
    this.items.forEach((item: { quantity: number; price: number; }) => {
      this.totalAmount += (item.quantity * item.price);
      //this.bagService.cartTotal.next(this.totalAmount);
      //console.log(this.cartTotal)
      localStorage.setItem('Total',JSON.stringify(this.totalAmount))
    })
    
    this.bagService.cartTotal.next(this.totalAmount);
    localStorage.setItem('CartItems', JSON.stringify(this.items))
    localStorage.setItem('Total',JSON.stringify(this.totalAmount))

}
// 


// postToCart(){
//   let pid;
//   let userId = this.userId
//   this.items.forEach((items:{id:any})=>{
//     pid = items.id
//     console.log(pid)
//     this.bagService.sendToCart({pid, userId}).subscribe({
//     next(data){
//       console.log(data)
//     },
//   })
//   })
// console.log(this.items[0].id)
//  pid = this.items[0].id
// userId = this.userId  
// console.log(this.userId)


  

}