import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com1Component } from './components/com1/com1.component';
import { Com2Component } from './components/com2/com2.component';
import { ShareService } from './services/share.service';

@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    Com2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
