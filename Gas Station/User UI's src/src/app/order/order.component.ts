import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order: Order;
  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService) {
    this.order = new Order();
   }

  ngOnInit(): void {
  }

  createOrder(){
    this.orderService.save(this.order).subscribe(result => this.gotoOrderList());
    
  }

  gotoOrderList() {
    //need to navigate this link
    this.router.navigate(['/order']);
  }
}


