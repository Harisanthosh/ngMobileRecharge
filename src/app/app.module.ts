import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { DTHComponent } from './dth/dth.component';
import { BroadbandComponent } from './broadband/broadband.component';
import { HeaderComponent } from './header/header.component';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';
import { DataAccessService } from './data-access.service';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    DTHComponent,
    BroadbandComponent,
    HeaderComponent,
    OrderByPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataAccessService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
