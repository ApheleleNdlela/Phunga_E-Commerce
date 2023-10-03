import { Component, OnInit } from '@angular/core';
// import { CartService } from '../services/cart.service';

@Component({
selector: 'app-empty-bag',
templateUrl: './empty-bag.component.html',
styleUrls: ['./empty-bag.component.css']
})
export class EmptyBagComponent implements OnInit {

constructor() {}

ngOnInit() {
// this.cartService.getCart().subscribe(cart => {
// if (cart.items.length === 0) {
// this.isCartEmpty = true;
// } else {
// this.isCartEmpty = false;
// }
// });
 }

amountTab() {
  // return this.cartService.getCart().pipe(
  //   // Calculate the total amount of the cart
  //   map(cart => cart.totalAmount),
  //   // Format the amount as a currency
  //   map(amount => `${amount} USD`)
  // );
}

}
