import { Component, OnInit } from '@angular/core';
import { BagService } from 'src/app/services/bag.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {



  cartTotal= JSON.parse(`${localStorage.getItem('items')}`)


  constructor(private bagService: BagService, )  {}
  ngOnInit(): void {
    this.cartTotal = this.bagService.getTotal();
  }



  
  // totalItems = JSON.parse(`${localStorage.getItem('items')}`)
  
  // items: any

  

  

  
  // calcTotal() {
  //   this.total = 0
  //   this.items.forEach((item: {qty: number, price: number}) => {
  //     this.total+= (item.qty * item.price)

  //     console.log(this.total)
  //   });
  //   localStorage.setItem('items', JSON.stringify(this.items))
  //   localStorage.setItem('totalAmount',JSON.stringify(this.total))
}
