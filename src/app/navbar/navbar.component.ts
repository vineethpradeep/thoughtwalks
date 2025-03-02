import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';

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
  isMenuOpen: boolean = false;
  activeRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY;
    this.isFixed = window.scrollY > 128;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(route: string) {
    this.activeRoute = route;
    this.isMenuOpen = false;
  }
}
