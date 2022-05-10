import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { CheckComponent } from './check/check.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './service/data.service';
import { InfoService } from './service/info.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { InfoComponent } from './info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { checkinReducer } from './statements/checkin.reducer';


@NgModule({
  declarations: [
    AppComponent,
    CheckComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    ReactiveFormsModule,
    StoreModule.forRoot({checkin: checkinReducer}),
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [DataService, InfoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
