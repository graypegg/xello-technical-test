import { Component, OnInit, Input } from '@angular/core'
import { TooltipService } from '../tooltip.service'

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input() content: string

  isOpen: boolean
  uid: string

  constructor (private tooltipService: TooltipService) {
    this.uid = Math.round((Math.random() * 10e5)).toString(16)
  }

  ngOnInit() {
    this.tooltipService.openTooltip.subscribe(openTooltipUID => {
      this.isOpen = openTooltipUID === this.uid
    })
  }

  showTooltip() {
    this.tooltipService.setOpenTooltip(this.uid)
  }
}
