import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowTimeService {

  private baseUrl:string = "https://localhost:7036/api/"

  constructor(private http : HttpClient) { }

  addTime(showTimeObj:any){
    return this.http.post<any>(`${this.baseUrl}ShowTime`,showTimeObj);
  }

  addNumberofSeat(numberofSeatObj:any){
    return this.http.post<any>(`${this.baseUrl}Seat`,numberofSeatObj);
  }

  addDate(dateObj:any){
    return this.http.post<any>(`${this.baseUrl}Seat`,dateObj);
  }
}
