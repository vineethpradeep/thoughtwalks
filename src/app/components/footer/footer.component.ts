import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  solutions = [
    'Frontend Development',
    'Backend Development',
    'Database Management',
    '.NET Fullstack Development',
    'Python & AI',
    'DevOps',
  ];

  support = [
    'Course Enrollment Assistance',
    'Project Guidance & Mentorship',
    'Placement Support',
    'Doubt Clearing Sessions',
    'Career Counseling',
  ];

  company = [
    'About Thought Walks',
    'Our Trainers',
    'Success Stories',
    'FAQs',
    'Contact Us',
  ];
}
