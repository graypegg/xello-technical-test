import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TooltipModule } from './tooltip/tooltip.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
