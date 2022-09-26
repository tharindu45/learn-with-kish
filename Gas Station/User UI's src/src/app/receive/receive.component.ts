import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from 'model/orders';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss']
})
export class ReceiveComponent implements OnInit {

  id!: string
  orders!: Orders
  constructor(private route: ActivatedRoute,private orderService: OrderService,private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
   
    this.orders = new Orders();
    this.orderService.getOrderId(this.id).subscribe( data => {
      this.orders = data;
    });
  }
  createOrder(){
    this.router.navigate(['/']);
  }

}
