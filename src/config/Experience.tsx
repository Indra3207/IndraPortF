import React from 'react';

import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import NodeJs from '@/components/technologies/NodeJs';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'GenAI Cloud Honeypot Project',
    position: 'AI/Cloud Intern — Project Lead',
    location: 'Remote',
    image: '/assets/logo.png',
    description: [
      'Developed an *AI-powered cloud honeypot* (GACH) that simulates AWS services to attract and analyze attackers.',
      'Built realistic *AWS-style API responses* (IAM, S3, EC2, STS) using LLMs via Ollama for enhanced deception.',
      'Implemented *CloudTrail-style logging* for attack tracking and dual threat classification (LLM + heuristic).',
      'Integrated *MITRE ATT&CK mapping* for threat intelligence with graceful degradation when AI is unavailable.',
    ],
    startDate: 'Jan 2025',
    endDate: 'Apr 2025',
    technologies: [
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <NodeJs />,
      },
      {
        name: 'FastAPI',
        href: 'https://fastapi.tiangolo.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        icon: <AWS />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: "VERSION'25 — NIT Trichy",
    position: 'Volunteer — Public Relations Team',
    location: 'Tiruchirappalli, India',
    image: '/assets/logo.png',
    description: [
      'Managed outreach and communication with MCA students across India for the department fest.',
      'Improved participation and coordination through structured communication strategies.',
      'Contributed to event planning and on-ground execution during the fest.',
    ],
    startDate: 'Jan 2025',
    endDate: 'Mar 2025',
    technologies: [],
    website: 'https://www.nitt.edu/',
  },
];
