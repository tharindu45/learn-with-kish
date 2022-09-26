import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders } from 'model/orders';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-trackoutput',
  templateUrl: './trackoutput.component.html',
  styleUrls: ['./trackoutput.component.scss']
})
export class TrackoutputComponent implements OnInit {

  id!: string
  orders!: Orders
  date!:Date
  constructor(private route: ActivatedRoute,private orderService: OrderService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.date=new Date();
    this.orders = new Orders();
    this.orderService.getOrderId(this.id).subscribe( data => {
      this.orders = data;
    });
  }

}
