import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { DTHComponent } from './dth/dth.component';
import { BroadbandComponent } from './broadband/broadband.component';

const routes: Routes = [
  {
    path: '', component: MobileComponent, pathMatch: 'full'
  },
  {
    path: 'dth', component: DTHComponent
  },
  {
    path: 'bband', component: BroadbandComponent
  },
  {
    path: 'mobile', component: MobileComponent
  },
  {
    path: '**', redirectTo: 'mobile'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
