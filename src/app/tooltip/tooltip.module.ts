import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipsComponent } from './tooltips/tooltips.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TooltipComponent,
    TooltipsComponent
  ],
  exports: [
    TooltipComponent,
    TooltipsComponent
  ]
})
export class TooltipModule { }
