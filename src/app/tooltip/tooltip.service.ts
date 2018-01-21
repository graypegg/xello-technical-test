import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { TooltipComponent } from './tooltip/tooltip.component'

@Injectable()
export class TooltipService {
  private openedTooltips = new BehaviorSubject<any>([])
  openTooltip = this.openedTooltips.asObservable()

  constructor() { }

  setOpenTooltip(tooltipUID: string) {
    this.openedTooltips.next(tooltipUID)
  }

  clearOpenTooltip () {
    this.setOpenTooltip(null)
  }
}
