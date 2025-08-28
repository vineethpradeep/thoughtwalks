import { Component } from '@angular/core';
import { FeaturedCoursesComponent } from '../../components/featured-courses/featured-courses.component';
import { InnerPageHeaderComponent } from '../../components/inner-page-header/inner-page-header.component';
import { TopicsComponent } from '../../components/topics/topics.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    FeaturedCoursesComponent,
    InnerPageHeaderComponent,
    TopicsComponent,
  ],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  // Optional: you can pass extra courses if you want
}
