import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyTooltipComponent } from './apply-tooltip.component';

describe('ApplyTooltipComponent', () => {
  let component: ApplyTooltipComponent;
  let fixture: ComponentFixture<ApplyTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
