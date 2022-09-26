import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { TrackComponent } from './track/track.component';
import { OrdersComponent } from './orders/orders.component';
import { ReceiveComponent } from './receive/receive.component';
import { TrackoutputComponent } from './trackoutput/trackoutput.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    TrackComponent,
    OrdersComponent,
    ReceiveComponent,
    TrackoutputComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
