import { Component, HostListener } from '@angular/core';
import { UserDataService } from '../service/user-data.service';
import { CommonModule } from '@angular/common';
import { PentagonComponent } from '../pentagon/pentagon.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, PentagonComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  sliderItems: any[] = [];
  isFixed: boolean = false;
  currentIndex: number = 0;

  constructor(private sliderServiceDI: UserDataService) {
    this.sliderItems = this.sliderServiceDI.getSliderData();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isFixed = scrollY > 128;
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0
        ? this.currentIndex - 1
        : this.sliderItems.length - 1;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.sliderItems.length - 1
        ? this.currentIndex + 1
        : 0;
  }
}
