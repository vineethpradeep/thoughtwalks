import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InnerPageHeaderComponent } from '../inner-page-header/inner-page-header.component';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  imports: [CommonModule, InnerPageHeaderComponent, RouterModule],
})
export class CourseDetailComponent implements OnInit {
  courseId!: number;

  course: any;

  courses = [
    {
      id: 1,
      image: 'assets/img/gallery/featured1.png',
      category: 'User Experience',
      title: 'Fundamental of UX for Application design',
      description:
        'The automated process all your website tasks. Discover tools and techniques.',
      rating: 4.5,
      reviews: 120,
      price: 135,
    },
    {
      id: 2,
      image: 'assets/img/gallery/featured2.png',
      category: 'Frontend Development',
      title: 'Mastering React & Angular',
      description: 'Learn modern frontend frameworks with hands-on projects.',
      rating: 4.7,
      reviews: 210,
      price: 199,
    },
    {
      id: 3,
      image: 'assets/img/gallery/featured3.png',
      category: 'Backend Development',
      title: 'Node.js & Express Bootcamp',
      description:
        'Build robust backend systems with Node.js, Express, and MongoDB.',
      rating: 4.6,
      reviews: 180,
      price: 175,
    },
  ];

  curriculum = [
    {
      title: 'Month 1',
      topics: [
        'HTML5, CSS3 Fundamentals',
        'JavaScript Basics (ES6+)',
        'Responsive Design & Media Queries',
      ],
    },
    {
      title: 'Month 2',
      topics: [
        'Advanced JavaScript & TypeScript',
        'DOM Manipulation, Fetch API',
        'Asynchronous Programming',
      ],
    },
    {
      title: 'Month 3',
      topics: [
        'React.js - Components, JSX, Hooks',
        'React Router, API Integration',
        'State Management (Redux)',
      ],
    },
    {
      title: 'Month 4',
      topics: [
        'Angular & Vue.js Basics',
        'Data Binding, Directives',
        'Services & Dependency Injection',
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.course =
      this.courses.find((c) => c.id === this.courseId) || this.courses[0];
  }
}
