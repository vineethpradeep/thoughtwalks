import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { ServicesComponent } from '../../components/services/services.component';
import { FeaturedCoursesComponent } from '../../components/featured-courses/featured-courses.component';
import { AboutComponent } from '../../components/about/about.component';
import { TopicsComponent } from '../../components/topics/topics.component';
import { LearnerOutcomesComponent } from '../../components/learner-outcomes/learner-outcomes.component';
import { TeamComponent } from '../../components/team/team.component';
import { AboutStepComponent } from '../../components/about-step/about-step.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    AboutComponent,
    SliderComponent,
    ServicesComponent,
    FeaturedCoursesComponent,
    TopicsComponent,
    LearnerOutcomesComponent,
    TeamComponent,
    AboutStepComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
