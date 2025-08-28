import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learner-outcomes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learner-outcomes.component.html',
  styleUrls: ['./learner-outcomes.component.css'],
})
export class LearnerOutcomesComponent {
  features = [
    'Hands-on training with real-time projects to build practical skills.',
    'Learn from industry experts and get guidance on career growth.',
    'Comprehensive online and offline courses with placement assistance.',
    'Master frontend, backend, database, AI, and DevOps technologies.',
    'Build a strong portfolio and prepare for competitive job opportunities.',
  ];
}
