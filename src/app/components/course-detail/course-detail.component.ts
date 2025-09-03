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
           ['HTML: Complete document structure, Essential elements, Forms, and semantic markup with real code examples',
           'CSS: Box model, flexbox, grid, positioning, responsive design with real code examples',
            'JavaScript: Variables, functions, arrays, objects, DOM manipulation with real code examples',
             'Bootstrap: Grid system, components, utilities, and responsive classes', 
             'Angular: Components, services, routing, forms, and CLI commands with TypeScript examples'],
      rating: 4.5,
      reviews: 120,
      price: 0,
    },
    {
      id: 2,
      image: 'assets/img/gallery/featured2.png',
      category: 'Frontend Development',
      title: 'Middleware & Backend Development',
     description:['Mastering the Basics of C#',

        'Working with Control Flow & Data Handling',

        'Exploring Object-Oriented Programming',

        'Building .NET Web API and Connect DB with EF Core'
],
      rating: 4.7,
      reviews: 210,
      price: 0,
    },
    {
      id: 3,
      image: 'assets/img/gallery/featured3.png',
      category: 'Backend Development',
      title: 'SQL Database Design & Management',
      description:['Database,Table,Rows,Columns & Data Types,Constraints (Primary Key, Foreign Key, Unique, Not Null, Check, Default)',

        'Basic SQL Commands (CRUD) - CREATE, ALTER, DROP (DDL), INSERT, UPDATE, DELETE (DML) , SELECT (DQL)',

        'Filtering & Sorting Data - WHERE clause ORDER BY DISTINCT LIMIT / TOP',

        'Joins & Relationships - INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN',

        'Aggregate Functions & Grouping - COUNT(), SUM(), AVG(), MIN(), MAX() GROUP BY HAVING'
      ],
      rating: 4.6,
      reviews: 180,
      price: 0,
    },
     {
      id: 4,
      image: 'assets/img/gallery/featured4.png',
      category: '.NET Fullstack Development',
      title: '.NET Fullstack Development',
     description:['Create Booking System using Angular Framework',

        'Create Middleware Microservice for Booking System',

        'Create Database Design for Booking System',

        'Initialize Git in both Angular app & .NET API.',

        'Deploy the App in Azure & Integrate Azure AI Services'
],
      rating: 4.6,
      reviews: 180,
      price: 0,
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
