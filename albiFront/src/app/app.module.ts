import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubletsiteComponent } from './subletsite/subletsite.component';
import { SubletsComponent } from './subletsite/sublets/sublets.component';
import { SellersComponent } from './subletsite/sellers/sellers.component';
import { HttpClientModule } from '@angular/common/http';
import { SubletAddComponent } from './subletsite/sublet-add/sublet-add.component';

@NgModule({
  declarations: [
    AppComponent,
    SubletsiteComponent,
    SubletsComponent,
    SellersComponent,
    SubletAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
