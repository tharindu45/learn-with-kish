import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order-service.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-todaydispatch',
  templateUrl: './todaydispatch.component.html',
  styleUrls: ['./todaydispatch.component.scss']
})
export class TodaydispatchComponent implements OnInit {

  today!: Date
  orders!: Orders[]
  constructor(private route: ActivatedRoute,private orderService: OrderService) { }

  ngOnInit(): void {
  //   this.today = new Date();
  //   let date = new Date()
  //   let day = date.getDate();
  //   let month = date.getMonth()+1;
  //   let year = date.getFullYear();
    
  //   let fullDate = `${year}-${month}-${day}`;
  //   console.log(fullDate);
    
  //   this.orderService.getOrderId( this.today).subscribe( data => {
  //   this.orders = data;
  // });
  }
}


