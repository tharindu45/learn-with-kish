import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from './order/order.component';
import {TrackComponent} from './track/track.component';
import {OrdersComponent} from './orders/orders.component';
import {ReceiveComponent} from './receive/receive.component';
import { TrackoutputComponent } from './trackoutput/trackoutput.component';

const routes: Routes = [
  {path: 'order',component: OrderComponent},
  {path: 'orders',component: OrdersComponent},
  {path: 'receive/:id',component: ReceiveComponent},
  {path: 'track',component: TrackComponent},
  {path: 'track-details/:id',component: TrackoutputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
