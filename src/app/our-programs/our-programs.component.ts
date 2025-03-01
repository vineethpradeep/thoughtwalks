import { Component } from '@angular/core';
import { ProgramesService } from '../service/programes.service';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-programs',
  imports: [CommonModule, RouterLink, BreadcrumbComponent],
  templateUrl: './our-programs.component.html',
  styleUrl: './our-programs.component.css',
})
export class OurProgramsComponent {
  programs: any;
  constructor(private programsServiceDI: ProgramesService) {
    this.programs = programsServiceDI.getProgrames();
  }
}
