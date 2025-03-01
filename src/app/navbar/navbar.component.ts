import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isFixed: boolean = false;
  scrollPosition: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 128) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }
}
