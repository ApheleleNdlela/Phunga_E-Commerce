import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Item } from '../../Item';
import { BagService } from '../../services/bag.service';

@Component({
  selector: 'app-viewone',
  templateUrl: './viewone.component.html',
  styleUrls: ['./viewone.component.css']
})
export class ViewoneComponent implements OnInit{
  product:any
  items= this.bagService.items
  // bagService: any;
  constructor( private route: ActivatedRoute, private bagService : BagService, private productService: ProductsService ){
  
  }
  ngOnInit(): void {
    this.getItem()
  }


  addToCart(product: Item) {
    this.bagService.addToCart(product);
    // window.alert('Your product has been added to the cart!');
    console.log(this.product)
    localStorage.setItem("items",JSON.stringify(this.items))
  }


  getItem(): void {
    const id = this.route.snapshot.params['id']
    // console.log(id)
    this.productService.getOne(id).subscribe(item => this.product = item);
  }

}
