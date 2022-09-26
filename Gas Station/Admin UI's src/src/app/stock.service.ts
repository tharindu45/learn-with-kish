import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stocksOutUrl:string;
  baseURL:string
  constructor(private http: HttpClient) {

    this.stocksOutUrl='http://localhost:8081/api/v1/findAllStock';
    this.baseURL='http://localhost:8081/api/v1/updateStock';
   }

  public findAll(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.stocksOutUrl}`);
  }

  public updateStock(fuelType: string, stock: Stock){
    console.log(`${this.baseURL}/${fuelType}`)
   const a= this.http.post<any>(`${this.baseURL}/${fuelType}`, stock).subscribe((data) => {
    console.log("hi this is put request", data);
  });
   //console.log(arguments)
   
  }
}
