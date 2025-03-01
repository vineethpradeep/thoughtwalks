import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-program-we-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './program-we-offers.component.html',
  styleUrl: './program-we-offers.component.css',
})
export class ProgramWeOffersComponent {
  @Input() program: any;
}
