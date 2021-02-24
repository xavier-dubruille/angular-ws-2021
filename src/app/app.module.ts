import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { AdoptionComponent } from './components/adoption/adoption.component';
import { AdoptionPanelComponent } from './components/adoption-panel/adoption-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AdoptionComponent,
    AdoptionPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
