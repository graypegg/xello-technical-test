import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { TooltipModule } from './tooltip-module/tooltip.module'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';
import { ButtonPageComponent } from './button-page/button-page.component'


@NgModule({
  declarations: [
    AppComponent,
    ButtonPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
