import { Routes } from '@angular/router';
import { OurServiceComponent } from './our-service/our-service.component';
import { OurProgramsComponent } from './our-programs/our-programs.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ourService', component: OurServiceComponent },
  { path: 'ourPrograms', component: OurProgramsComponent },
  { path: 'ourPrograms/:id', component: ProgramDetailsComponent },
];
