import { Component } from '@angular/core';
import { ProgramesService } from '../service/programes.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-service',
  imports: [CommonModule, RouterLink],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.css',
})
export class OurServiceComponent {
   programs: any;
    constructor(private programsServiceDI: ProgramesService) {
      this.programs = programsServiceDI.getProgrames();
    }
}
