import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Create Authentication 

  private baseUrl:string = "https://localhost:7036/api/UserControllers/"

  constructor(private http : HttpClient) { }

  register(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj)

  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authendication`,loginObj)
  }
}
