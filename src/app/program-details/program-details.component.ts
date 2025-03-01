import { Component } from '@angular/core';
import { ProgrameDetailsService } from '../service/programeDetails.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-program-details',
  imports: [CommonModule],
  templateUrl: './program-details.component.html',
  styleUrl: './program-details.component.css',
})
export class ProgramDetailsComponent {
  programDetails: any = {};
  programId: any;

  constructor(
    private programsDetailsServiceDI: ProgrameDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.programId = +params['id'];
      this.programsDetailsServiceDI.getProgramDetails(this.programId).subscribe(
        (data) => {
          if (data) {
            this.programDetails = data;
            console.log(this.programDetails);
          } else {
            console.error('Program not found');
            this.programDetails = {
              message: 'No program details available.',
            };
          }
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
