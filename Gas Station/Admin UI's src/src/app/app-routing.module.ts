import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstockComponent } from './addstock/addstock.component';


import { OrdersComponent } from './orders/orders.component';
import { StockComponent } from './stock/stock.component';
import { StockupdateComponent } from './stockupdate/stockupdate.component';
import { TodaydispatchComponent } from './todaydispatch/todaydispatch.component';
import { ViewstockComponent } from './viewstock/viewstock.component';

const routes: Routes = [
  { path: 'updatestock/:id', component: StockComponent },
  { path: 'stock', component: StockupdateComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'todayorders', component: TodaydispatchComponent },
  { path: 'viewstock', component: ViewstockComponent },
  { path: 'updatestock', component: AddstockComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }