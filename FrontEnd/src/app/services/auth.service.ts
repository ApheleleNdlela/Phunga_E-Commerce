import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// const User_api = 'https://mvc-phunga-git-main-aphelelendlela.vercel.app/v2/users/';
const auth_api = 'https://mvc-phunga-git-main-aphelelendlela.vercel.app/api/auth/'
// const auth_api = "http://localhost:3200/"
// const authy = 'http://localhost:8080/api/auth/'

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable({


  providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string):
   Observable<any> {
    return this.http.post(  auth_api + 'signin', {
      username,
      password
    }, httpOptions);
  }
  register(username: any, email: any, password: any):
  Observable<any> {
    return this.http.post( auth_api +'signup', {
      username,
      email,
      password
    }, httpOptions);
  }}