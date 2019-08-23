import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeReqService } from './service/fake-req.service';
import { HttpClientModule } from '@angular/common/http';

// import { HttpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FakeReqService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
