import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent {
  topics = [
    {
      title: 'Frontend Development',
      description:
        'Building the user interface and experience of web applications using HTML, CSS, JavaScript, and modern frameworks.',
      icon: 'fas fa-laptop-code',
      link: '#',
    },
    {
      title: 'Backend Development',
      description:
        'Handling business logic, authentication, APIs, and database interactions with Node.js, Python, and .NET.',
      icon: 'fas fa-server',
      link: '#',
    },
    {
      title: 'Database Management',
      description:
        'Efficient storage and management of structured and unstructured data using SQL and NoSQL databases.',
      icon: 'fas fa-database',
      link: '#',
    },
    {
      title: '.NET Fullstack Development',
      description:
        'Develop enterprise-level applications and APIs leveraging the .NET ecosystem for fullstack solutions.',
      icon: 'fas fa-cogs',
      link: '#',
    },
    {
      title: 'Python & AI',
      description:
        'Develop AI/ML models, automation scripts, and backend applications using Python and machine learning tools.',
      icon: 'fas fa-robot',
      link: '#',
    },
    {
      title: 'DevOps',
      description:
        'Automate development, deployment, and infrastructure management to streamline software delivery.',
      icon: 'fas fa-cloud-upload-alt',
      link: '#',
    },
  ];
}
