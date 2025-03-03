import { Component } from '@angular/core';
import { TemplateWrapperComponent } from '../template-wrapper/template-wrapper.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TemplateWrapperComponent, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  title = 'Testimonials';
  subtitle = 'Choose the best plan for you';
  testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Software Engineer at Google',
      image: '/images/testi1.jpg',
      feedback:
        'This Full Stack course gave me the confidence to build real-world applications. The hands-on projects were a game-changer!',
    },
    {
      name: 'Michael Lee',
      company: 'Full Stack Developer at Amazon',
      image: '/images/testi2.jpeg',
      feedback:
        'I landed my dream job as a Full Stack Developer after completing this course. The React and Node.js modules were incredibly detailed!',
    },
    {
      name: 'Emily Carter',
      company: 'Junior Developer at Microsoft',
      image: '/images/testi3.jpg',
      feedback:
        'The mentorship and real-world projects made all the difference. This course provided me with industry-ready skills!',
    },
  ];
}
