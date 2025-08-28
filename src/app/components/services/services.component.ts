import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  services = [
    {
      icon: 'assets/img/icon/icon1.svg',
      title: 'Comprehensive Courses',
      description:
        'Hands-on training in Frontend, Backend, AI, DevOps, and Fullstack development.',
    },
    {
      icon: 'assets/img/icon/icon2.svg',
      title: 'Expert Mentors',
      description:
        'Learn from industry professionals with real-time project experience.',
    },
    {
      icon: 'assets/img/icon/icon3.svg',
      title: 'Placement Assistance',
      description:
        'Get guidance and support to secure jobs after completing your courses.',
    },
  ];
}
