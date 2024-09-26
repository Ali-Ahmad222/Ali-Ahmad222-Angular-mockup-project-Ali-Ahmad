import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingordersRoutingModule } from './pendingorders-routing.module';
import { PendingordersComponent } from './components/pendingorders/pendingorders.component';
import { ShareModule } from '../share/share.module';
@NgModule({
  declarations: [
    PendingordersComponent
  ],
  imports: [
    CommonModule,
    PendingordersRoutingModule,
    ShareModule
  
  ]
})
export class PendingordersModule { }
