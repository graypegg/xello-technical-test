import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input() content: string
  isOpen: boolean

  ngOnInit() {
    this.isOpen = false
  }

  showTooltip() {
    this.isOpen = true
  }

  hideTooltip() {
    this.isOpen = false
  }

  toggleTooltip() {
    this.isOpen = !this.isOpen
  }
}
