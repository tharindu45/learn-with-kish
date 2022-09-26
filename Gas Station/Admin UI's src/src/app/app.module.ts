import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';



import { OrderService } from './order-service.service';
import { OrdersComponent } from './orders/orders.component';
import { TodaydispatchComponent } from './todaydispatch/todaydispatch.component';
import { StockupdateComponent } from './stockupdate/stockupdate.component';
import { StockComponent } from './stock/stock.component';
import { ViewstockComponent } from './viewstock/viewstock.component';
import { StockService } from './stock.service';
import { AddstockComponent } from './addstock/addstock.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
   
   
    OrdersComponent,
    TodaydispatchComponent,
    StockupdateComponent,
    StockComponent,
    ViewstockComponent,
    AddstockComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OrderService,StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }