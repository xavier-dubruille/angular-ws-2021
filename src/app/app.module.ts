import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { AdoptionComponent } from './components/adoption/adoption.component';
import { AdoptionPanelComponent } from './components/adoption-panel/adoption-panel.component';
import {HttpClientModule} from '@angular/common/http';
import { HopComponent } from './components/hop/hop.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AdoptionComponent,
    AdoptionPanelComponent,
    HopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
