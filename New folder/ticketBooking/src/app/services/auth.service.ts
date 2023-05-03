import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  numberofSeat(value: any) {
    throw new Error('Method not implemented.');
  }
  showTime: any;
  addShowTime(value: any) {
    throw new Error('Method not implemented.');
  }

  // Create Authentication 

  private baseUrl:string = "https://localhost:7036/api/"

  constructor(private http : HttpClient) { }

  registerUser(userObj:any){
    return this.http.post<any>(`${this.baseUrl}User/register`,userObj);

    }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}User/authenticate`,loginObj);
  }



}