import { Component } from '@angular/core';
import { ProgramesService } from '../service/programes.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-programs',
  imports: [CommonModule, RouterLink],
  templateUrl: './our-programs.component.html',
  styleUrl: './our-programs.component.css',
})
export class OurProgramsComponent {
  programs: any;
  constructor(private programsServiceDI: ProgramesService) {
    this.programs = programsServiceDI.getProgrames();
  }
}
