export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Blog {
  title: string;
  url: string;
}

export interface Resume {
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  experience: {
    role: string;
    company: string;
    description: string;
  }[];
}

export const skills: Skill[] = [
  { name: 'JavaScript', icon: 'JS' },
  { name: 'Java', icon: 'J' },
  { name: 'C++', icon: 'C++' },
  { name: 'React', icon: '⚛' },
  { name: 'Nextjs', icon: 'N' },
  { name: 'Nodejs', icon: 'N' },
  { name: 'Express', icon: 'EX' },
  { name: 'MySQl', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Mongoose', icon: '~' },
  { name: 'Git', icon: '◆' },
  { name: 'GitHub', icon: '' },
  { name: 'Postman', icon: '◉' },
  { name: 'Docker', icon: '🐋' },
  { name: 'Redis', icon: '⚡' },
  { name: 'AWS', icon: 'a' },
  { name: 'Kubernetes', icon: '' },
  { name: 'REST APIs', icon: '🌐' }
];

export const projects: Project[] = [
  {
    name: 'Deploy Me',
    description: 'Built a fully managed serverless PaaS enabling zero-downtime deployments directly from GitHub repositories. Engineered a scalable backend using Next.js and Redis for state orchestration, integrated with Cloudflare R2 for artifact storage, and implemented dynamic custom subdomain routing to deliver a seamless developer experience.',
    tech: ["JavaScript", "Next.js", "AWS", "Docker", "Redis", "Kafka"],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    name: 'Cloud-Vault',
    description: 'Developed a high-availability Hybrid-Cloud Storage Gateway integrating Node.js with AWS S3, reducing data retrieval latency by 97.5% through an intelligent local caching layer. Implemented real-time data synchronization using AWS SQS and Redis-backed LRU eviction, containerized with Docker to optimize cloud egress costs and system throughput.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'AWS S3', 'AWS SQS', 'Docker'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    name: 'Multi Threading Web Server',
    description: 'Constructed a highly concurrent, zero-dependency HTTP web server from scratch utilizing core Java networking APIs. Engineered a custom thread pool mechanism for optimal asynchronous request handling, demonstrating mastery of TCP/IP protocols, socket constraints, and low-level architectural design without relying on external frameworks.',
    tech: ['Java (Core SDK)', 'Java Networking (Socket, ServerSocket)', 'Java Concurrency (ExecutorService, Thread Pools)', 'HTTP/1.1 Protocol', 'Apache JMeter'],
    githubUrl: '#',
    demoUrl: '#'
  }
];

export const blogs: Blog[] = [
  {
    title: 'Understanding Dynamic Routes and Slugs in Next.js (From Confusion to Clarity)',
    url: 'https://medium.com/@rajpurohitnikhil008/understanding-dynamic-routes-and-slugs-in-next-js-from-confusion-to-clarity-10d638493708'
  },
  {
    title: 'Understanding State Management in React: Context API v/s Zustand',
    url: 'https://medium.com/@rajpurohitnikhil008/understanding-state-management-in-react-context-api-v-s-zustand-98e7272d3513'
  }
];

export const resume: Resume = {
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Siddaganaga Institute of Technology",
      year: "2023 - 2027"
    }
  ],
  experience: [
    {
      role: "Upcoming SDE Intern",
      company: "Archer IRM",
      description: "Working on enterprise risk management, building scalable solutions and contributing to core product features."
    }
  ]
};
