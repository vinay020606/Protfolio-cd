export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
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
    description: 'fully managed deployment platform inspired by modern PaaS systems. Enabled GitHub-based artifact uploads stored in Cloudflare R2, managed builds and app state with Redis, and implemented deployment services with subdomain routing using Next.js.',
    tech: ["JavaScript", "Next.js", "AWS", "Docker", "Redis", "Kafka"]
  },
  {
    name: 'Cloud-Vault',
    description: 'Developed a high-performance Hybrid-Cloud Storage Gateway using Node.js and AWS S3 that reduced data retrieval latency from 200ms to 5ms through intelligent local caching. Engineered a real-time sync and eviction system using AWS SQS and Redis-backed LRU logic to ensure data consistency and automated storage management. Orchestrated the full-stack deployment via Docker Compose to optimize cloud egress costs while maintaining high memory efficiency using Node.js Streams.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'AWS S3', 'AWS SQS', 'Docker']
  },
  {
    name: 'Multi Threading Web Server',
    description: 'A high-performance, multithreaded HTTP server built from the ground up using Java networking capabilities. It utilizes a custom-configured thread pool to handle concurrent client connections efficiently, bypassing high-level frameworks to demonstrate core TCP/IP communication and request-response lifecycles.',
    tech: ['Java (Core SDK)', 'Java Networking (Socket, ServerSocket)', 'Java Concurrency (ExecutorService, Thread Pools)', 'HTTP/1.1 Protocol', 'Apache JMeter']
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
      role: "Full Stack Developer Intern",
      company: "Tech Company",
      duration: "Jan 2024 - Present",
      description: "Working on building scalable web applications usng Next.js and Node.js."
    }
  ]
};
