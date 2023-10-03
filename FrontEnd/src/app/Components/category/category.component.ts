import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories:{id:number,name:string}[] =[
    {name: 'Hot Beverages', id: 1},
    {name: 'Cold Beverages', id: 2},
    {name: 'Muffins', id: 3},
    {name: 'sandwiches', id: 4},
    {name: 'Cakes', id: 5}
   
  ]


  constructor() { 


  }

  ngOnInit() {
  }
  

}