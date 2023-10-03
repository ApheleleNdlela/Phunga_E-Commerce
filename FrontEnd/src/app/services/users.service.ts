import { Injectable } from '@angular/core';
import { User } from '../User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// const auth_api = 'https://mvc-phunga-git-main-aphelelendlela.vercel.app/api/auth'
const User_api = 'https://mvc-phunga-git-main-aphelelendlela.vercel.app/v2/users/'


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Url: any;
  user:User[]=[];
  constructor(private http: HttpClient) { }

  
  register(user: User) { 
    this.user.push(user);
  }
 
  login(id:any): Observable<User> {
    return this.http.get<User>(User_api+ '/signin')
  }

  // login(user: User) {
  //   this.user.push(user)
  //   return this.http.get<User>(auth_api+ '/signin')
  // }

  deleteOne(id: any):Observable<any>{
    return this.http.get<any>(User_api + '/:id')
  }

}
