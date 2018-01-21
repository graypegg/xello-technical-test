import { Injectable } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component'

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TooltipService {
  private openedTooltips = new BehaviorSubject<any>([])
  openTooltip = this.openedTooltips.asObservable()

  constructor() { }

  /* getOpenTooltip(): string {
    return this.openTooltip
  } */

  setOpenTooltip(tooltipUID: string) {
    this.openedTooltips.next(tooltipUID)
  }
}
