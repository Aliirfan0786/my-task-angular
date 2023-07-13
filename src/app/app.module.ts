import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiComponent } from './shared/api/api.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableDataComponent } from './table-data/table-data.component';

import * as $ from 'jquery'








@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    ApiComponent,
    TableDataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
