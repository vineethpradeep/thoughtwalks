import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  features = [
    'Frontend Development: build intuitive UIs and seamless UX.',
    'Backend & Database: manage logic, APIs, authentication, and data.',
    'Python & AI: develop AI/ML models and backend apps.',
  ];
}
