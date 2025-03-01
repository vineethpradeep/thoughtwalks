import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface PricingPlan {
  title: string;
  price: number;
  tenure: string;
  features: string[];
  isBestPrice?: boolean;
}

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css',
})
export class PricingCardComponent {
  pricingPlans: PricingPlan[] = [
    {
      title: 'Basic Membership',
      price: 9,
      tenure: '/mo',
      features: [
        'Access to Free Courses',
        'Recorded Video Lectures',
        'Community Support',
        'Basic Coding Challenges',
        'No Personal Mentor',
      ],
    },
    {
      title: 'Student Plus',
      price: 19,
      tenure: '/mo',
      features: [
        'Full Access to All Courses',
        'Live Online Classes',
        'Hands-on Projects',
        'Exclusive Student Forum',
        '24/7 Chat Support',
      ],
      isBestPrice: true,
    },
    {
      title: 'Full-Stack Developer Program',
      price: 49,
      tenure: '/mo',
      features: [
        'Complete Full-Stack Course',
        'Live Coding Sessions',
        'One-on-One Mentorship',
        'Capstone Project with Certification',
        'Resume & Interview Prep',
        'Lifetime Course Access',
      ],
    },
    {
      title: 'Personalized Learning',
      price: 99,
      tenure: '/mo',
      features: [
        'Custom Learning Path',
        'Weekly One-on-One Mentor Calls',
        'Live Q&A Sessions',
        'Unlimited Doubt Resolution',
        'Exclusive Networking Events',
        'Priority Job Referrals',
      ],
    },
  ];
}
