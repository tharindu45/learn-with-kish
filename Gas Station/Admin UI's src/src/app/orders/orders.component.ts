import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order-service.service';
import { Orders } from '../orders';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  searchText:any
  orders!: Orders[];
  constructor(private orderService: OrderService,private router: Router) { 
       
      }

      ngOnInit() {
        this.orderService.findAll().subscribe(data => {
          this.orders = data;
        });
      }

      updateOrder(id: string){
        this.router.navigate(['updatestock', id]);
      }

      deleteOrder(id: string){
        this.orderService.deleteOrder(id).subscribe( data => {
          console.log(data);
          
        })
        alert("order "+id +" Successfully Deleted");
        this.orderService.findAll().subscribe(data => {
          this.orders = data;
        });
      }

      private getOrders(){
        this.orderService.findAll().subscribe(data => {
          this.orders = data;
        });
      }
}
