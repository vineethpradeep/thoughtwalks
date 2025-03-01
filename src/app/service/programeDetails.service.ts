import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgrameDetailsService {
  constructor() {}

  programsDetails = [
    {
      id: 1,
      name: 'Frontend Development',
      description:
        'Building the user interface and experience of web applications.',
      technologies: [
        'React',
        'Angular',
        'Vue.js',
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
      ],
      useCases: [
        'Web apps',
        'E-commerce',
        'Dashboards',
        'Single Page Applications (SPA)',
      ],
      programDuration: '6 months',
      year: 2024,
      curriculum: [
        {
          month: 1,
          topics: [
            'HTML5, CSS3 Fundamentals',
            'JavaScript Basics (ES6+)',
            'Responsive Design & Media Queries',
          ],
        },
        {
          month: 2,
          topics: [
            'Advanced JavaScript & TypeScript',
            'DOM Manipulation, Fetch API',
            'Asynchronous Programming',
          ],
        },
        {
          month: 3,
          topics: [
            'React.js - Components, JSX, Hooks',
            'React Router, API Integration',
            'State Management (Redux)',
          ],
        },
        {
          month: 4,
          topics: [
            'Angular & Vue.js Basics',
            'Data Binding, Directives',
            'Services & Dependency Injection',
          ],
        },
        {
          month: 5,
          topics: [
            'Web Performance Optimization',
            'Testing with Jest, Cypress',
            'SEO & Accessibility Best Practices',
          ],
        },
        {
          month: 6,
          topics: [
            'Capstone Project',
            'Version Control (Git, GitHub)',
            'Hosting & Deployment (Netlify, Vercel)',
          ],
        },
      ],
      careerOpportunities: [
        'Frontend Developer',
        'Web Developer',
        'UI/UX Developer',
        'Full-Stack Developer',
        'Mobile Web Developer',
      ],
      salaryExpectations: {
        entryLevel: '$50,000 - $75,000',
        midLevel: '$75,000 - $100,000',
        seniorLevel: '$100,000+',
      },
      certificationProvided: true,
      jobAssistance: true,
    },
    {
      id: 2,
      name: 'Backend Development',
      description:
        'Handling business logic, authentication, and APIs for web applications.',
      technologies: [
        'Node.js',
        'Express.js',
        'Django',
        'Spring Boot',
        'FastAPI',
        'Ruby on Rails',
      ],
      useCases: [
        'REST APIs',
        'Microservices',
        'Authentication Systems',
        'Data Processing',
      ],
      programDuration: '7 months',
      year: 2024,
      curriculum: [
        {
          month: 1,
          topics: [
            'Introduction to Backend',
            'Databases (SQL & NoSQL)',
            'API Basics (REST & GraphQL)',
          ],
        },
        {
          month: 2,
          topics: [
            'Node.js & Express.js',
            'Authentication (JWT, OAuth)',
            'Middleware & Routing',
          ],
        },
        {
          month: 3,
          topics: [
            'Django & Python Backend',
            'ORMs & Database Migrations',
            'Security Best Practices',
          ],
        },
        {
          month: 4,
          topics: [
            'Microservices Architecture',
            'Docker & Containerization',
            'Serverless Computing',
          ],
        },
        {
          month: 5,
          topics: [
            'Testing & Debugging APIs',
            'Performance Optimization',
            'Logging & Monitoring',
          ],
        },
        {
          month: 6,
          topics: [
            'Final Backend Project',
            'GitHub CI/CD Integration',
            'Cloud Deployment (AWS, GCP)',
          ],
        },
      ],
      careerOpportunities: [
        'Backend Developer',
        'Full-Stack Developer',
        'API Engineer',
        'Cloud Engineer',
      ],
      salaryExpectations: {
        entryLevel: '$55,000 - $80,000',
        midLevel: '$80,000 - $110,000',
        seniorLevel: '$110,000+',
      },
      certificationProvided: true,
      jobAssistance: true,
    },
    {
      id: 3,
      name: 'Database Management',
      description:
        'Managing structured and unstructured data efficiently using modern databases.',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase'],
      useCases: [
        'Data Storage',
        'Big Data',
        'Real-time Applications',
        'Analytics',
      ],
      programDuration: '5 months',
      year: 2024,
      curriculum: [
        {
          month: 1,
          topics: [
            'Database Fundamentals',
            'SQL Basics',
            'Relational Databases (PostgreSQL, MySQL)',
          ],
        },
        {
          month: 2,
          topics: [
            'NoSQL Databases (MongoDB, Firebase)',
            'Data Modeling & Indexing',
            'Performance Optimization',
          ],
        },
        {
          month: 3,
          topics: [
            'Database Administration',
            'Backup & Recovery',
            'Security & Access Control',
          ],
        },
        {
          month: 4,
          topics: [
            'Big Data & Distributed Databases',
            'Real-time Data Processing',
            'Cloud Databases',
          ],
        },
        {
          month: 5,
          topics: [
            'Final Project',
            'Database Performance Tuning',
            'Scaling Databases',
          ],
        },
      ],
      careerOpportunities: [
        'Database Administrator',
        'Data Engineer',
        'Backend Developer',
        'Big Data Engineer',
      ],
      salaryExpectations: {
        entryLevel: '$55,000 - $80,000',
        midLevel: '$80,000 - $110,000',
        seniorLevel: '$110,000+',
      },
      certificationProvided: true,
      jobAssistance: true,
    },
    {
      id: 4,
      name: 'DevOps',
      description:
        'Automating software deployment, infrastructure management, and monitoring.',
      technologies: [
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Terraform',
        'AWS',
        'Azure',
      ],
      useCases: [
        'CI/CD Pipelines',
        'Cloud Deployment',
        'Infrastructure as Code',
        'Monitoring & Logging',
      ],
      programDuration: '8 months',
      year: 2024,
      curriculum: [
        {
          month: 1,
          topics: [
            'Introduction to DevOps',
            'Linux Basics',
            'Version Control (Git)',
          ],
        },
        {
          month: 2,
          topics: [
            'Continuous Integration (CI) with Jenkins',
            'Automation with Shell Scripting',
          ],
        },
        {
          month: 3,
          topics: [
            'Containerization (Docker)',
            'Container Orchestration (Kubernetes)',
          ],
        },
        {
          month: 4,
          topics: ['Cloud Platforms (AWS, GCP, Azure)', 'Serverless Computing'],
        },
        {
          month: 5,
          topics: [
            'Infrastructure as Code (Terraform, Ansible)',
            'Logging & Monitoring (Prometheus, Grafana)',
          ],
        },
        {
          month: 6,
          topics: ['Security Best Practices', 'DevOps in Microservices'],
        },
        {
          month: 7,
          topics: ['Final Project', 'Deploying Scalable Applications'],
        },
        {
          month: 8,
          topics: ['Interview Preparation', 'DevOps Tools Hands-on'],
        },
      ],
      careerOpportunities: [
        'DevOps Engineer',
        'Cloud Engineer',
        'Site Reliability Engineer (SRE)',
        'Infrastructure Engineer',
      ],
      salaryExpectations: {
        entryLevel: '$55,000 - $80,000',
        midLevel: '$80,000 - $110,000',
        seniorLevel: '$110,000+',
      },
      certificationProvided: true,
      jobAssistance: true,
    },
    {
      id: 5,
      name: 'Mobile App Development',
      description:
        'Creating mobile applications for Android and iOS platforms.',
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
      useCases: ['Social Media Apps', 'E-commerce Apps', 'Streaming Apps'],
      programDuration: '6 months',
      year: 2024,
      curriculum: [
        {
          month: 1,
          topics: [
            'Introduction to Mobile Development',
            'UI/UX Design Principles',
            'Dart & Kotlin Basics',
          ],
        },
        {
          month: 2,
          topics: [
            'Flutter Framework',
            'React Native Basics',
            'Building First Mobile App',
          ],
        },
        {
          month: 3,
          topics: [
            'State Management (Provider, Redux)',
            'API Integration & Backend Connectivity',
          ],
        },
        {
          month: 4,
          topics: [
            'Push Notifications',
            'Local Storage & Databases (SQLite, Firebase)',
          ],
        },
        {
          month: 5,
          topics: [
            'App Performance Optimization',
            'Security Best Practices',
            'Testing Mobile Apps',
          ],
        },
        {
          month: 6,
          topics: [
            'Final Project',
            'Publishing Apps to Play Store & App Store',
          ],
        },
      ],
      careerOpportunities: [
        'Mobile App Developer',
        'Flutter Developer',
        'React Native Developer',
        'Full-Stack Mobile Developer',
      ],
      salaryExpectations: {
        entryLevel: '$60,000 - $90,000',
        midLevel: '$90,000 - $120,000',
        seniorLevel: '$120,000+',
      },
      certificationProvided: true,
      jobAssistance: true,
    },
    {
      id: 6,
      name: 'Generative AI',
      description:
        'AI models that generate text, images, code, and other creative content.',
      technologies: [
        'GPT-4',
        'DALL·E',
        'Stable Diffusion',
        'TensorFlow',
        'PyTorch',
      ],
      useCases: [
        'AI Chatbots',
        'Image Generation',
        'Content Writing',
        'Code Generation',
      ],
      programDuration: '9 months',
      year: 2025,
      curriculum: [
        {
          month: 1,
          topics: [
            'Introduction to Generative AI',
            'Deep Learning Basics',
            'Neural Networks',
          ],
        },
        {
          month: 2,
          topics: [
            'Natural Language Processing (NLP)',
            'GPT Models',
            'AI Text Generation',
          ],
        },
        {
          month: 3,
          topics: [
            'Computer Vision & Image Synthesis',
            'DALL·E & Stable Diffusion',
          ],
        },
        {
          month: 4,
          topics: [
            'AI for Music & Video',
            'GANs & Variational Autoencoders (VAEs)',
          ],
        },
        {
          month: 5,
          topics: ['Reinforcement Learning in AI', 'AI Chatbot Development'],
        },
        {
          month: 6,
          topics: ['AI Ethics & Bias', 'Fine-Tuning Large Models'],
        },
        {
          month: 7,
          topics: ['AI Deployment & Optimization', 'Cloud AI Services'],
        },
        {
          month: 8,
          topics: ['Final Project', 'Building a Production-Ready AI App'],
        },
        {
          month: 9,
          topics: ['Interview Preparation', 'AI Careers & Future Trends'],
        },
      ],
      careerOpportunities: [
        'AI Engineer',
        'Machine Learning Engineer',
        'AI Researcher',
        'Data Scientist',
      ],
      salaryExpectations: {
        entryLevel: '$80,000 - $110,000',
        midLevel: '$110,000 - $150,000',
        seniorLevel: '$150,000+',
      },
      certificationProvided: true,
      jobAssistance: true,
    },
    {
      id: 7,
      name: 'Python & AI',
      description:
        'Developing AI/ML models, automation scripts, and backend applications using Python.',
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
      ],
      programDuration: '9 months',
      year: 2025,
      curriculum: [
        {
          month: 1,
          topics: [
            'Introduction to Python',
            'Data Structures',
            'OOP in Python',
          ],
        },
        {
          month: 2,
          topics: [
            'Data Science Libraries (NumPy, Pandas, Matplotlib)',
            'Data Wrangling',
          ],
        },
        {
          month: 3,
          topics: [
            'Machine Learning Fundamentals',
            'Supervised & Unsupervised Learning',
          ],
        },
        {
          month: 4,
          topics: ['Deep Learning (TensorFlow & PyTorch)', 'Neural Networks'],
        },
        {
          month: 5,
          topics: [
            'Natural Language Processing (NLP)',
            'Speech & Image Recognition',
          ],
        },
        {
          month: 6,
          topics: [
            'AI Chatbots with OpenAI API',
            'Reinforcement Learning Basics',
          ],
        },
        {
          month: 7,
          topics: [
            'AI Model Deployment',
            'Building AI APIs with FastAPI & Flask',
          ],
        },
        {
          month: 8,
          topics: ['Final AI Project', 'Advanced AI Research Topics'],
        },
        {
          month: 9,
          topics: ['AI Career Roadmap', 'Interview Preparation'],
        },
      ],
      careerOpportunities: [
        'AI Engineer',
        'Machine Learning Engineer',
        'Python Developer',
        'Data Scientist',
      ],
      salaryExpectations: {
        entryLevel: '$80,000 - $110,000',
        midLevel: '$110,000 - $140,000',
        seniorLevel: '$140,000+',
      },
      certificationProvided: true,
      jobAssistance: true,
    },
    {
      id: 8,
      name: '.NET Development',
      description:
        'Building enterprise-level applications and APIs using the .NET ecosystem.',
      technologies: [
        '.NET Core',
        'C#',
        'ASP.NET',
        'Entity Framework',
        'Blazor',
      ],
      useCases: ['Enterprise Web Apps', 'APIs', 'Cloud Applications'],
      programDuration: '6 months',
      year: 2024,
      curriculum: [
        {
          month: 1,
          topics: ['Introduction to C#', 'OOP in C#', 'Basics of .NET Core'],
        },
        {
          month: 2,
          topics: [
            'ASP.NET Core Basics',
            'MVC Architecture',
            'Building REST APIs',
          ],
        },
        {
          month: 3,
          topics: ['Entity Framework & Database Integration', 'LINQ Queries'],
        },
        {
          month: 4,
          topics: ['Blazor for Web Development', 'Microservices with .NET'],
        },
        {
          month: 5,
          topics: ['Security & Authentication', 'Deployment Strategies'],
        },
        {
          month: 6,
          topics: ['Final Project', 'Interview Preparation'],
        },
      ],
      careerOpportunities: [
        '.NET Developer',
        'Software Engineer',
        'Backend Developer',
        'Cloud Engineer',
      ],
      salaryExpectations: {
        entryLevel: '$70,000 - $100,000',
        midLevel: '$100,000 - $130,000',
        seniorLevel: '$130,000+',
      },
      certificationProvided: true,
      jobAssistance: true,
    },
    {
      id: 9,
      name: 'Machine-Level Programming',
      description:
        'Machine-level programming involves writing low-level code that directly interacts with hardware, using assembly languages and low-level programming techniques for optimization and performance.',
      technologies: [
        'Assembly Language (x86, ARM)',
        'C',
        'C++',
        'Rust',
        'Embedded Systems',
        'Microcontroller Programming',
      ],
      useCases: [
        'Operating Systems Development',
        'Embedded Systems',
        'Firmware Development',
        'Device Drivers',
        'Cybersecurity and Reverse Engineering',
        'Performance Optimization',
      ],
      programDuration: '8 months',
      year: 2024,
      curriculum: [
        {
          month: 1,
          topics: [
            'Introduction to Machine-Level Programming',
            'Binary and Hexadecimal Number Systems',
            'Computer Architecture Basics',
          ],
        },
        {
          month: 2,
          topics: [
            'Assembly Language Fundamentals (x86 & ARM)',
            'Registers and Memory Management',
            'Writing Simple Assembly Programs',
          ],
        },
        {
          month: 3,
          topics: [
            'Low-Level Memory Management',
            'Stack and Heap Operations',
            'Interfacing with C and High-Level Languages',
          ],
        },
        {
          month: 4,
          topics: [
            'Operating System Internals',
            'Kernel Programming Basics',
            'Interrupt Handling and Exception Handling',
          ],
        },
        {
          month: 5,
          topics: [
            'Embedded Systems Programming',
            'Microcontroller Programming (ARM, AVR, PIC)',
            'Real-Time Operating Systems (RTOS)',
          ],
        },
        {
          month: 6,
          topics: [
            'Device Driver Development',
            'Interfacing Hardware with Software',
            'Low-Level Networking and Protocols',
          ],
        },
        {
          month: 7,
          topics: [
            'Reverse Engineering and Security',
            'Binary Exploitation',
            'Debugging Low-Level Code',
          ],
        },
        {
          month: 8,
          topics: [
            'Optimization Techniques',
            'Final Machine-Level Project',
            'Performance Benchmarking and Profiling',
          ],
        },
      ],
      careerOpportunities: [
        'Embedded Systems Engineer',
        'Firmware Developer',
        'Systems Programmer',
        'Kernel Developer',
        'Cybersecurity Engineer',
        'Reverse Engineer',
      ],
      salaryExpectations: {
        entryLevel: '$60,000 - $85,000',
        midLevel: '$85,000 - $120,000',
        seniorLevel: '$120,000+',
      },
      certificationProvided: true,
      jobAssistance: true,
    },
  ];

  getProgramDetails(id: number): Observable<any> {
    const program = this.programsDetails.find((program) => program.id === id);
    return new Observable((observer) => {
      observer.next(program);
      observer.complete();
    });
  }
}
