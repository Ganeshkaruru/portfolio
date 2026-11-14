export interface Project {
  id: string;
  title: string;
  badge: string;
  category: 'Backend & AI' | 'Full-Stack';
  summary: string;
  bullets: string[];
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  stars?: number;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  highlights: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  type: 'Hackathon' | 'Publication' | 'Certification';
  description: string;
  badgeText?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
  coursework: string[];
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Ganesh Karuru',
    roleHeadline: 'Backend & Full-Stack Software Engineer',
    subHeadline: 'Building resilient Spring Boot APIs, dynamic query engines, and AI-powered backend systems.',
    location: 'Madanapalle / Bengaluru, India (Open to Onsite & Remote Internships / SDE Roles)',
    statusBadge: 'Available for Backend / Full-Stack Engineering Internships',
    heroStatusPill: 'Open to Backend & AI Engineering Internships (Bengaluru / Onsite)',
    email: 'karuruganesh2@gmail.com',
    phone: '+91-7337554163',
    linkedin: 'https://www.linkedin.com/in/karuru-ganesh-08b9622ba',
    github: 'https://github.com/Ganeshkaruru',
    resumeUrl: '/Ganesh_Karuru_Resume.pdf',
    bio: 'Computer Science Engineering undergraduate (2027) specializing in Java, Spring Boot, and relational database architecture. Focused on designing clean RESTful APIs, dynamic SQL query layers, and scalable backend pipelines that turn complex data into reliable software.',
    graduationYear: '2027',
    cgpa: '8.5',
  },

  apiTerminalData: {
    status: 200,
    endpoint: 'GET /api/v1/engineer/ganesh',
    response: {
      name: 'Ganesh Karuru',
      role: 'Backend & Full-Stack Engineer',
      status: 'Open for SDE / Backend Internships',
      location: 'Bengaluru / Madanapalle, India',
      academics: {
        degree: 'B.Tech CSE (Class of 2027)',
        cgpa: 8.5
      },
      primaryStack: [
        'Java 17/21',
        'Spring Boot 3',
        'Spring Data JPA',
        'MySQL',
        'Redis',
        'AWS',
        'Docker',
        'React'
      ],
      strengths: [
        'RESTful Architecture & DTO Contracts',
        'Dynamic JPA Specification Querying',
        'Asynchronous Worker Pipelines (@Async/SQS)',
        'Relational Schema Normalization & Indexing'
      ],
      verified_contact: {
        email: 'karuruganesh2@gmail.com',
        github: 'github.com/Ganeshkaruru',
        linkedin: 'linkedin.com/in/karuru-ganesh-08b9622ba'
      }
    }
  },

  experiences: [
    {
      id: 'ethnotech',
      role: 'Java Full Stack Development Intern',
      organization: 'Ethnotech Academy',
      duration: 'May 2026 – July 2026',
      location: 'Angallu, Andhra Pradesh',
      highlights: [
        'Architected and delivered modular RESTful APIs in Java and Spring Boot following layered Controller-Service-Repository patterns to power core application workflows.',
        'Designed normalized MySQL schemas and wrote optimized SQL join and aggregation queries, enforcing transactional data integrity across user and entity records.',
        'Implemented request payload validation, standardized HTTP error contracts, and end-to-end API integration with React clients using Git feature-branch workflows.'
      ],
      tags: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'React', 'Git']
    }
  ] as Experience[],

  projects: [
    {
      id: 'feedback-pulse',
      title: 'FeedbackPulse — AI Customer Feedback Intelligence Engine',
      badge: 'Featured / AI + Backend',
      category: 'Backend & AI',
      summary: 'Event-driven backend pipeline that ingests unstructured customer feedback and transforms it into structured, queryable JSON intelligence.',
      bullets: [
        'Asynchronous feedback ingestion pipeline using Spring Boot (@Async worker queues) and AWS Lambda/SQS.',
        'Structured-output LLM inference for automated sentiment, topic tag, and bug urgency classification with exponential backoff retries and schema fallbacks.',
        'Multi-dimensional analytics query API built with Spring Data JPA Specifications and Redis caching, containerized via Docker Compose.'
      ],
      stack: ['Java', 'Spring Boot', 'AWS (Lambda, SQS)', 'Redis', 'MySQL', 'Docker', 'LLM APIs'],
      githubUrl: 'https://github.com/Ganeshkaruru'
    },
    {
      id: 'real-estate-platform',
      title: 'Real Estate Listing Platform',
      badge: 'Backend Query Engine',
      category: 'Backend & AI',
      summary: 'High-precision property discovery platform supporting dynamic multi-criteria filtering across houses, villas, and apartments.',
      bullets: [
        'Engineered dynamic runtime SQL predicate composition (city, price range, bedrooms, area) using Spring Data JPA Specifications and paginated queries (Pageable).',
        'Modeled normalized Property and Seller/User entities with Hibernate ORM on MySQL, adding DTO validation and centralized @ControllerAdvice exception handling.',
        'Validated edge cases (empty filters, boundary ranges) and API contracts using Postman.'
      ],
      stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'React'],
      githubUrl: 'https://github.com/Ganeshkaruru'
    },
    {
      id: 'social-media-system',
      title: 'Social Media Management System',
      badge: 'Full-Stack',
      category: 'Full-Stack',
      summary: 'Full-stack social content and user operations platform connecting a React client with Spring Boot REST services.',
      bullets: [
        'Built RESTful endpoints and relational MySQL tables for user authentication flows, post creation, and feed operations.',
        'Integrated responsive React components with backend services and verified payload contracts and HTTP status codes via Postman.'
      ],
      stack: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'React', 'Postman'],
      githubUrl: 'https://github.com/Ganeshkaruru'
    }
  ] as Project[],

  skillCategories: [
    {
      title: 'Languages',
      description: 'Core programming and structured query languages for robust computation.',
      iconName: 'Code2',
      skills: [
        { name: 'Java', highlight: true },
        { name: 'SQL', highlight: true },
        { name: 'JavaScript' },
        { name: 'HTML5' },
        { name: 'CSS3' }
      ]
    },
    {
      title: 'Backend & Distributed Systems',
      description: 'Production-grade enterprise framework components and backend architectures.',
      iconName: 'Server',
      skills: [
        { name: 'Spring Boot', highlight: true },
        { name: 'Spring Framework' },
        { name: 'Spring Data JPA', highlight: true },
        { name: 'Hibernate ORM' },
        { name: 'RESTful APIs', highlight: true },
        { name: 'Async Queues' }
      ]
    },
    {
      title: 'Databases, Caching & Cloud',
      description: 'Relational storage engines, in-memory caches, and cloud infrastructure.',
      iconName: 'Database',
      skills: [
        { name: 'MySQL', highlight: true },
        { name: 'Redis', highlight: true },
        { name: 'AWS (Lambda, SQS, EC2, S3)', highlight: true },
        { name: 'Docker' }
      ]
    },
    {
      title: 'Frontend & Developer Tools',
      description: 'Modern component libraries, build tooling, API testing, and IDEs.',
      iconName: 'Wrench',
      skills: [
        { name: 'React', highlight: true },
        { name: 'Git', highlight: true },
        { name: 'GitHub' },
        { name: 'Postman', highlight: true },
        { name: 'IntelliJ IDEA' },
        { name: 'VS Code' }
      ]
    }
  ] as SkillCategory[],

  achievements: [
    {
      title: 'Adobe University Hackathon 2026',
      organization: 'Adobe',
      date: '2026',
      type: 'Hackathon',
      badgeText: 'Algorithmic Assessment',
      description: 'Successfully qualified and completed competitive technical and algorithmic online assessments evaluated on algorithmic problem solving, time complexity, and data structures.'
    },
    {
      title: 'Published Academic Book Chapter',
      organization: 'Peer-Reviewed Academic Publication',
      date: '2025 – 2026',
      type: 'Publication',
      badgeText: 'Peer-Reviewed Research',
      description: 'Co-authored a comprehensive peer-reviewed review article on emerging engineering paradigms, formally accepted and selected for book chapter publication in academic press.'
    },
    {
      title: 'Technical Problem Solving Proficiency',
      organization: 'HackerRank & LeetCode',
      date: 'Ongoing',
      type: 'Certification',
      badgeText: 'Algorithms & SQL',
      description: 'Continuous hands-on problem solving covering core Java collections, graph and tree traversals, dynamic programming, and complex multi-table SQL joins.'
    }
  ] as Achievement[],

  education: {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    institution: 'Madanapalle Institute of Technology & Science (MITS)',
    duration: '2023 – 2027',
    cgpa: '8.5 / 10.0',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems (DBMS)',
      'Object-Oriented Programming (Java)',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering & Design Patterns'
    ],
    highlights: [
      'Consistently maintained 8.5 CGPA with strong academic standing in backend computing and algorithms.',
      'Active contributor to collegiate coding forums, hackathons, and technical paper development.'
    ]
  } as Education,

  metrics: [
    { label: 'Cumulative CGPA', value: '8.5 / 10' },
    { label: 'Graduation Year', value: '2027' },
    { label: 'Core Backend Focus', value: 'Spring Boot & SQL' },
    { label: 'Internship Completed', value: 'Ethnotech Academy' }
  ]
};
