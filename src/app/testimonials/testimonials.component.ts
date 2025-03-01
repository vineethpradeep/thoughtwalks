import { Component } from '@angular/core';
import { TemplateWrapperComponent } from '../template-wrapper/template-wrapper.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TemplateWrapperComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  title = 'Testimonials';
  subtitle = 'Choose the best plan for you';
}
