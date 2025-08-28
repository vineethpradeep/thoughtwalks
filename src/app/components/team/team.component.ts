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
      name: 'Mr. Sabarimalai',
      image: 'assets/img/gallery/team1.png',
      description: 'Full Stack Developer and Lead Instructor',
    },
  ];
}
