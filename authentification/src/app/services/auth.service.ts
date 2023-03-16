import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl:string ="https://localhost:7224/api/Auth/"
  constructor(private  http: HttpClient) { }

    signUp(userobj:any){
      return this.http.post<any>(`${this.baseUrl}register`,userobj);
    }

    signIn(userobj:any){
      return this.http.post<any>(`${this.baseUrl}login`,userobj);
    }
}