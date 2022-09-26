import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from 'model/orders';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersUrl: string;
  private baseURL:string;
  constructor(private http: HttpClient) {
    //need to change this link
    this.ordersUrl = 'http://localhost:8080/api/v1/orders';
    this.baseURL='http://localhost:3001/fuelorder';
  }

  public findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  public save(order: Order) {
    console.log(order);
    return this.http.post<Order>(this.ordersUrl, order);
  }

  // public getOrder(id:string){
  //   console.log(id);
  // }

  public getOrder(id: string): Observable<Orders>{
    return this.http.get<Orders>(`${this.baseURL}/${id}`);
  }

  public getOrderId(id:string): Observable<Orders>{
     return this.http.get<Orders>(`${this.baseURL}/${id}`);
  }
}
