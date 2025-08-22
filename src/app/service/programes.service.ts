import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgramesService {
  constructor() {}

  programes: Array<any> = [
    {
      id: 1,
      name: 'Frontend Development',
      description:
        'Building the user interface and experience of web applications.',
      technologies: [     
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Angular',
      ],
      useCases: [
        'Web apps',
        'E-commerce',
        'Dashboards',
        'Single Page Applications (SPA)',
      ],
      duration: '2',
      faIcon: 'tv',
    },
    {
      id: 2,
      name: 'Backend Development',
      description:
        'Handling business logic, authentication, APIs, and database interactions.',
      technologies: [
        '.Net CSharp',
        '.Net Web API',     
      ],
      useCases: [
        'REST APIs',
        'Authentication Systems',
        'Microservices',
        'Data Processing',
      ],
      duration: '2',
      faIcon: 'server',
    },
    {
      id: 3,
      name: 'Database Management',
      description:
        'Storing and managing structured or unstructured data efficiently.',
      technologies: [
        'SQL',
        'MongoDB',
        'Redis',
      ],
      useCases: [
        'Data storage',
        'Real-time applications',
        'Big Data',
        'Analytics',
      ],
      duration: '2',
      faIcon: 'database',
    },
      {
      id: 8,
      name: '.NET Fullstack Development',
      description:
        'Building enterprise-level applications and APIs using the .NET ecosystem.',
      technologies: [
        '.NET Core',
        'C#',
        'ASP.NET',
        'Entity Framework',
        'Blazor',
      ],
      useCases: [
        'Enterprise Web Apps',
        'APIs',
        'Cloud Applications',
        'Windows Applications',
      ],
      duration: '2',
      faIcon: 'hard-drive',
    },
     {
      id: 7,
      name: 'Python & AI',
      description:
        'Developing AI/ML models, automation scripts, and backend applications with Python.',
      technologies: [
        'Python',
        'TensorFlow',
        'PyTorch',
        'OpenAI API',
        'scikit-learn',
      ],
      useCases: [
        'Machine Learning',
        'Data Science',
        'Automation',
        'AI Chatbots',
        'Deep Learning',
      ],
      duration: '9',
      faIcon: 'python',
    },
    {
      id: 4,
      name: 'DevOps',
      description:
        'Automating software development, deployment, and infrastructure management.',
      technologies: [
        'Docker',
        'Kubernetes',
        'Jenkins',
        'GitHub Actions',
        'Terraform',
        'AWS',
        'Azure',
      ],
      useCases: [
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Cloud Deployment',
        'Monitoring & Logging',
      ],
      duration: '1',
      faIcon: 'terminal',
    },
  
    // {
    //   id: 5,
    //   name: 'Mobile App Development',
    //   description:
    //     'Creating mobile applications for Android and iOS platforms.',
    //   technologies: [
    //     'Flutter',
    //     'React Native',
    //     'Swift',
    //     'Kotlin',
    //     'Jetpack Compose',
    //   ],
    //   useCases: [
    //     'Social Media Apps',
    //     'E-commerce Apps',
    //     'Streaming Apps',
    //     'On-demand Services',
    //   ],
    //   duration: '6',
    //   faIcon: 'mobile-screen',
    // },
    // {
    //   id: 6,
    //   name: 'Generative AI',
    //   description:
    //     'AI models that generate text, images, code, and other content.',
    //   technologies: [
    //     'GPT-4',
    //     'DALL·E',
    //     'Stable Diffusion',
    //     'TensorFlow',
    //     'PyTorch',
    //   ],
    //   useCases: [
    //     'AI Chatbots',
    //     'Image Generation',
    //     'Content Writing',
    //     'Code Generation',
    //   ],
    //   duration: '9',
    //   faIcon: 'microchip',
    // },
   
    
    // {
    //   id: 9,
    //   name: 'Machine-Level Programming',
    //   description:
    //     'Low-level programming for performance-critical applications.',
    //   technologies: ['C', 'C++', 'Rust', 'Assembly', 'Embedded C'],
    //   useCases: [
    //     'Embedded Systems',
    //     'Operating Systems',
    //     'Game Engines',
    //     'High-Performance Computing',
    //   ],
    //   duration: '10',
    //   faIcon: 'laptop-code',
    // },
  ];

  getProgrames() {
    return this.programes;
  }
}
