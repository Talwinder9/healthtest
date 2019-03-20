import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GetdataService} from './getdata/getdata.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GetdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
