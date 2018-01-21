import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { TooltipComponent } from './tooltip/tooltip.component'

@Injectable()
export class TooltipService {
  private openedTooltips = new BehaviorSubject<any>([])
  openTooltip = this.openedTooltips.asObservable()

  setOpenTooltip(tooltipUID: string) {
    this.openedTooltips.next(tooltipUID)
    document.addEventListener('click', () => this.clearOpenTooltip())
  }

  clearOpenTooltip() {
    document.removeEventListener('click', () => this.clearOpenTooltip())
    this.setOpenTooltip(null)
  }
}
