import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipService } from './tooltip.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ TooltipComponent ],
  exports: [ TooltipComponent ],
  providers: [ TooltipService ]
})
export class TooltipModule { }
