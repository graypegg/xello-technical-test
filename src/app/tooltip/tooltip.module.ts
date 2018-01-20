import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyTooltipComponent } from './apply-tooltip/apply-tooltip.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ApplyTooltipComponent
  ],
  exports: [ApplyTooltipComponent]
})
export class TooltipModule { }
