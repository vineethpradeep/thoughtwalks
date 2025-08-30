import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-featured-courses',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './featured-courses.component.html',
  styleUrls: ['./featured-courses.component.css'],
})
export class FeaturedCoursesComponent {
  courses = [
    {
      id: 1,
      image: 'assets/img/gallery/featured1.png',
      category: 'Frontend Development',
      title: 'Frontend Development: UI & UX',
      description:
        'Learn to build responsive and interactive web interfaces using HTML, CSS, JavaScript, Angular, React, and Vue.js.',
      rating: 4.8,
      reviews: 150,
      price: 0,
    },
    {
      id: 2,
      image: 'assets/img/gallery/featured2.png',
      category: 'Backend Development',
      title: 'Backend Development with APIs',
      description:
        'Master server-side programming, API integration, authentication, and database handling using Node.js, .NET, and Python.',
      rating: 4.7,
      reviews: 120,
      price: 0,
    },
    {
      id: 3,
      image: 'assets/img/gallery/featured3.png',
      category: 'Database Management',
      title: 'Database Design & Management',
      description:
        'Understand SQL & NoSQL databases, data modeling, efficient storage techniques for real-world applications.',
      rating: 4.6,
      reviews: 95,
      price: 0,
    },
    {
      id: 4,
      image: 'assets/img/gallery/featured4.png',
      category: '.NET Fullstack Development',
      title: 'Enterprise Fullstack Development',
      description:
        'Build enterprise-level applications using the .NET ecosystem, integrating frontend and backend with real-time projects.',
      rating: 4.9,
      reviews: 130,
      price: 0,
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    dots: true,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
}
