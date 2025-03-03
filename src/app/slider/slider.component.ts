import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
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
export class SliderComponent implements OnInit, OnDestroy {
  sliderItems: any[] = [];
  isFixed: boolean = false;
  currentIndex: number = 0;
  autoSlideInterval: any;

  constructor(private sliderServiceDI: UserDataService) {
    this.sliderItems = this.sliderServiceDI.getSliderData();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFixed = window.scrollY > 128;
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.sliderItems.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.sliderItems.length) %
      this.sliderItems.length;
  }
}
