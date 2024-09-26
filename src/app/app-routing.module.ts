import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  // Redirect empty path to 'orders'
  { path: '', redirectTo: 'orders', pathMatch: 'full' },

  // Lazy-loaded modules
  {path:'orders', loadChildren: ()=> import('./orders/orders.module').then(m=>m.OrdersModule)},
  {path:'pendingorders', loadChildren: ()=> import('./pendingorders/pendingorders.module').then(m=>m.PendingordersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
