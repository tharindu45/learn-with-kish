import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-viewstock',
  templateUrl: './viewstock.component.html',
  styleUrls: ['./viewstock.component.scss']
})
export class ViewstockComponent implements OnInit {

  stock!: Stock[];
  
  constructor(private stockService: StockService, private router: Router) { 

  }

  ngOnInit() {
    this.stockService.findAll().subscribe(data => {
      this.stock = data;
    });
  }

}
