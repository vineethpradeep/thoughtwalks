import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Sabarimalai Alagar',
      image: 'assets/img/gallery/sabari.png',
      description: '.Net Full Stack Developer',
    },
    {
      name: 'Karthik Elango',
      image: 'assets/img/gallery/karthik.png',
      description: 'Cloud Architect',
    },
    {
      name: 'Ganesh Premnath',
      image: 'assets/img/gallery/ganesh.png',
      description: '.Net Full Stack Developer',
    },
    {
      name: 'Vineeth Pradeep',
      image: 'assets/img/gallery/vineeth.png',
      description: 'Design Architect',
    },
    {
      name: 'Raja Manikkam',
      image: 'assets/img/gallery/raja.png',
      description: 'Software Architect',
    },
  ];
}
