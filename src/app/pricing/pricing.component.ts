import { Component } from '@angular/core';
import { TemplateWrapperComponent } from '../template-wrapper/template-wrapper.component';
import { PricingCardComponent } from '../pricing-card/pricing-card.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [TemplateWrapperComponent, PricingCardComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {
  title = 'Pricing';
  subtitle = 'Choose the best plan for you';
}
