import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  contactInfo: Array<any> = [
    {
      id: 1,
      name: 'Drop a mail',
      desc: 'thoughtwalks.net@gmail.com',
      icon: 'envelope',
    },
    {
      id: 2,
      name: 'Get in touch',
      desc: '91-6383682583',
      icon: 'phone',
    },
  ];

  sliderData = [
    {
      image: '/images/slider2.jpg',
      heading: 'Empowering Your Future with ThoughtWalks',
      description:
        'Join our expert-led courses in AI, Development, and DevOps, combining theory with hands-on real-world projects',
      explore: 'Our Programmes',
      type: 'dark',
    },
    {
      image: '/images/slider4.jpg',
      heading: 'Craft Stunning User Interfaces',
      description:
        'Master HTML, CSS, JavaScript, React, and Angular to build responsive and engaging web applications',
      explore: 'Our Programmes',
      type: 'dark',
    },
    {
      image: '/images/slider6.jpg',
      heading: 'Handle Data Like a Pro',
      description:
        'Master SQL, NoSQL, MongoDB, and PostgreSQL to design and manage efficient databases',
      explore: 'Our Programmes',
      type: 'dark',
    },
    {
      image: '/images/slider9.jpg',
      heading: 'Explore the Power of AI',
      description:
        'Learn Python, TensorFlow, and AI-driven solutions with real-world projects',
      explore: 'Our Programmes',
      type: 'dark',
    },
    {
      video: {
        mp4: '/videos/sliderVideo.mp4',
        poster: '/images/sliderPoster.jpg',
      },
      heading: 'Start Your Learning Journey Today!',
      description:
        'Join thousands of learners worldwide and gain hands-on experience in cutting-edge technologies. Enroll now in our online or offline courses and take your career to the next level!',
      explore: 'Our Programmes',
      enroll: 'Enroll Now',
      type: 'dark',
    },
  ];

  getSliderData() {
    return this.sliderData;
  }

  getContactInfo() {
    return this.contactInfo;
  }
}
