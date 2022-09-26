import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'model/order';
import { Orders } from 'model/orders';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  order: Orders;
  orderId !:string;
 
  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService) { 
    this.order = new Orders();
  }

  ngOnInit(): void {
  }

  searchOrder(){
    this.orderId=this.order.orderId;
    console.log(this.orderId);
    this.orderService.getOrderId(this.orderId).subscribe( data => {
      this.order = data;
      console.log(this.order.status)
      if(this.order.status=='Pending'){
         this.router.navigate(['track-details',  this.orderId]); 
      }
      else{
          this.router.navigate(['receive', this.orderId]);
      }
    });
    
    // this.router.navigate(['track-details',  this.orderId]);  
  }

  gotoOrderList() {
    //need to navigate this link
    this.router.navigate(['/order']);
  }

  
}
