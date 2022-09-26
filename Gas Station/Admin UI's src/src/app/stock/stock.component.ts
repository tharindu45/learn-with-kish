import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order-service.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  id !: string;
  orders!: Orders;
  constructor(private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];

    this.orderService.getOrdersById(this.id).subscribe(data => {
      this.orders = data;
      
    }, error => console.log(error));
  }
  updateStatus(){
    this.id = this.route.snapshot.params['id'];

    this.orderService.updateOrderStatus(this.id)
    alert("Order will dispatch today");
    this.router.navigate(['orders']);
      
    }
  }


