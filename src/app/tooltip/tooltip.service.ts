import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { TooltipComponent } from './tooltip/tooltip.component'

@Injectable()
export class TooltipService {
  private openedTooltips = new BehaviorSubject<any>([])
  openTooltip = this.openedTooltips.asObservable()

  setOpenTooltip(tooltipUID: string) {
    this.openedTooltips.next(tooltipUID)

    // document.addEventListener('click', (e) => {]
    //   this.clearOpenTooltip()
    // })
  }

  clearOpenTooltip () {
    this.setOpenTooltip(null)
  }
}
