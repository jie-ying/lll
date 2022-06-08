import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MylibsModule} from 'mylibs';
import { TestlibModule} from 'testlib'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MylibsModule,
    TestlibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
