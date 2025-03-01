import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ProgramWeOffersComponent } from '../program-we-offers/program-we-offers.component';
import { ProgramesService } from '../service/programes.service';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { PricingComponent } from '../pricing/pricing.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    ProgramWeOffersComponent,
    CommonModule,
    TestimonialsComponent,
    PricingComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  programs: any[] = [];
  constructor(private programsServiceDI: ProgramesService) {
    this.programs = programsServiceDI.getProgrames();
  }
}
