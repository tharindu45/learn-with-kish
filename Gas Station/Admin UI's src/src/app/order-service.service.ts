import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Order } from './order';
import { Orders } from './orders';
@Injectable()
export class OrderService {

  private ordersUrl: string;
  private ordersOutUrl: string;
  private baseURL: string;

  constructor(private http: HttpClient) {
    //need to change this link
    this.ordersUrl = 'http://localhost:8080/api/v1/orders';
    this.ordersOutUrl='http://localhost:3001/fuelorder';
    this.baseURL='http://localhost:3001/fuelorder/today';
  }

  public findAll(): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.ordersOutUrl}`);
  }

  public save(order: Order) {
   
    return this.http.post<Order>(this.ordersUrl, order);
  }

  public getOrderId(date:Date): Observable<Orders>{
    
    return this.http.get<Orders>(`${this.baseURL}/${date}`);
  }

  public getOrdersById(id:string): Observable<Orders>{
    
    return this.http.get<Orders>(`${this.ordersOutUrl}/${id}`);
  }
  public updateOrderStatus(id:string){

    this.http.patch<any>(`${this.ordersOutUrl}/${id}`,"Update this").subscribe((data) => {
      console.log("hi this is put request", data);
    });
  }
  public deleteOrder(id :string): Observable<Object>{
    return this.http.delete(`${this.ordersOutUrl}/${id}`);
  }
}