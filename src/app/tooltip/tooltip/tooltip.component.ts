import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core'
import { TooltipService } from '../tooltip.service'

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit, AfterViewInit {
  @Input() content: string
  @Input() event: string

  @ViewChild('tooltip') tooltipEl: ElementRef
  @ViewChild('target') targetEl: ElementRef

  uid: string
  offScreen: boolean
  isOpen: boolean

  constructor (private tooltipService: TooltipService) {
    this.uid = `tooltip-${Math.round((Math.random() * 10e5)).toString(16)}`
  }

  ngOnInit () {
    this.tooltipService.openTooltip.subscribe(openTooltipUID => {
      this.isOpen = openTooltipUID === this.uid
    })
  }

  ngAfterViewInit () {
    this.updateScreenYPosition()

    window.addEventListener('scroll', (e) => {
      this.updateScreenYPosition()
    })
  }

  updateScreenYPosition () {
    const targetPos = this.targetEl.nativeElement.getBoundingClientRect().y
    const tooltipHeight = this.tooltipEl.nativeElement.getBoundingClientRect().height
    this.offScreen = (targetPos - tooltipHeight) <= 0
    console.log(targetPos, tooltipHeight, (targetPos - tooltipHeight))
  }

  showTooltip () {
    this.tooltipService.setOpenTooltip(this.uid)
  }
}
