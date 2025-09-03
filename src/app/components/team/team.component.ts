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
      name: 'Sabarimalai',
      image: 'assets/img/gallery/sabari.png',
      description: '.Net Full Stack Developer',
    },
    {
      name: 'GaneshPremanath',
      image: 'assets/img/gallery/ganesh.png',
      description: '.Net Full Stack Developer',
    },
    {
      name: 'Vineeth',
      image: 'assets/img/gallery/vineeth.png',
      description: 'Design Architect',
    },
    {
      name: 'RajaManikkam',
      image: 'assets/img/gallery/raja.png',
      description: 'Software Architect',
    },
  ];
}
