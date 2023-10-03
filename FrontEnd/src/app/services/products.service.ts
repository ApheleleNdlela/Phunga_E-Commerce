import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../Item';
import { Observable, catchError, map } from 'rxjs';


const apiUrl = 'https://mvc-phunga-git-main-aphelelendlela.vercel.app/v1/items/'

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  Url: any;
  items:Item[]=[];
  

  constructor(private http: HttpClient) { }

 
  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(apiUrl)
      
  };
  
  getOne(id:any): Observable<Item> {
    return this.http.get<Item>(apiUrl+ id)
  }

  deleteOne(id: any):Observable<any>{
    return this.http.delete<any>(apiUrl + id)
  }

  updateItem(item: Item, id: any) {

    const url = apiUrl+id;
  
    return this.http.put(url, item);
   
  }

  

  addItem(data: Item) {
    return this.http.post(apiUrl, data)
  }
 

}
