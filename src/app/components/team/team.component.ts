import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Karthik Elango',
      image: 'assets/img/gallery/karthik.png',
      description: 'Cloud Architect',
    },
    {
      name: 'Sabarimalai Alagar',
      image: 'assets/img/gallery/sabari.png',
      description: '.Net Full Stack Developer',
    },
    {
      name: 'Raja Manikkam',
      image: 'assets/img/gallery/raja.png',
      description: 'Software Architect',
    },
    {
      name: 'Ajith BalaKrishnan',
      image: 'assets/img/gallery/ajith.png',
      description: '.Net Full Stack Developer',
    },
    {
      name: 'Vineeth Pradeep',
      image: 'assets/img/gallery/vineeth.png',
      description: 'Design Architect',
    },
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
}
