import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  ngAfterViewInit() {
    const navLinks = document.querySelectorAll(
      '.mobile_menu .nav-link, .mobile_menu .btn'
    );
    const toggler =
      document.querySelector<HTMLButtonElement>('.navbar-toggler');

    if (toggler) {
      navLinks.forEach((link) => {
        link.addEventListener('click', () => {
          if (toggler.getAttribute('aria-expanded') === 'true') {
            toggler.click();
          }
        });
      });
    }
  }
}
