import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.scss']
})
export class AddstockComponent implements OnInit {

  fuelType!:string
  stock1:Stock;
  constructor(private route: ActivatedRoute, private router: Router, private stockService: StockService) { 
    this.stock1=new Stock();
    this.stock1.allocation=0;
  }

  ngOnInit(): void {
  }

  onSubmit(){

    //console.log(this.stock1.fuelType);
    this.stockService.updateStock(this.stock1.fuelType, this.stock1);
    alert(this.stock1.fuelType +"Stock Successfully Updated");
      this.router.navigate(['/viewstock']);
    }
  

  goToOrderList(){
    this.router.navigate(['/employees']);
  }
}
