import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apply-tooltip',
  templateUrl: './apply-tooltip.component.html',
  styleUrls: ['./apply-tooltip.component.scss']
})
export class ApplyTooltipComponent implements OnInit {
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

}
