import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../Item';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-admin-update-item',
  templateUrl: './admin-update-item.component.html',
  styleUrls: ['./admin-update-item.component.css']
})
export class AdminUpdateItemComponent implements OnInit{
  @Input() product!: Item

  constructor( private productService: ProductsService){}

  ngOnInit(): void {
    console.log(this.product)
  }

  update(id: any){
    this.productService.updateItem(this.product, id).subscribe({
      next: data => {
        console.log(data)
        window.location.reload()
      },
      error: e => {
        console.error(e.error)
      }
    })
  }


}
