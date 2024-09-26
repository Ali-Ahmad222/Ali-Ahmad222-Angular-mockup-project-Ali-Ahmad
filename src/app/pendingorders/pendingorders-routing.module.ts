import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingordersComponent } from './components/pendingorders/pendingorders.component';

const routes: Routes = [
  {
    path: '', component: PendingordersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingordersRoutingModule { }
