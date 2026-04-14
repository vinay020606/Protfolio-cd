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
    duration: string;
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
  { name: 'Kubernetes', icon: '' }
];

export const projects: Project[] = [
  {
    name: 'Deploy Me',
    description: 'Engineered a fully managed serverless deployment platform inspired by modern PaaS architectures. Facilitated seamless GitHub-based artifact uploads with scalable storage in Cloudflare R2. Orchestrated robust application state management and build pipelines leveraging Redis, and engineered dynamic deployment routing with custom subdomains using Next.js.',
    tech: ["JavaScript", "Next.js", "AWS", "Docker", "Redis", "Kafka"],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    name: 'Cloud-Vault',
    description: 'Architected a high-performance Hybrid-Cloud Storage Gateway utilizing Node.js and AWS S3, slashing data retrieval latency from 200ms to 5ms via intelligent local caching. Implemented a real-time synchronization and eviction engine using AWS SQS and Redis-backed LRU strategies to guarantee data consistency and automated lifecycle management. Containerized the entire stack with Docker Compose to minimize cloud egress costs while optimizing memory consumption through native Node.js Streams.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'AWS S3', 'AWS SQS', 'Docker'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    name: 'Multi Threading Web Server',
    description: 'Designed and implemented a high-throughput, multithreaded HTTP server entirely from scratch utilizing core Java networking APIs. Engineered a custom, highly-optimized thread pool to manage high volumes of concurrent client connections, demonstrating deep expertise in core TCP/IP protocols, socket programming, and low-level request-response lifecycles without relying on high-level frameworks.',
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
      role: "Intern",
      company: "Archer IRM",
      duration: "July 2026 - Present",
      description: "Working on enterprise risk management, building scalable solutions and contributing to core product features."
    },
    {
      role: "Full Stack Developer Intern",
      company: "Tech Company",
      duration: "Jan 2024 - Present",
      description: "Working on building scalable web applications usng Next.js and Node.js."
    }
  ]
};
