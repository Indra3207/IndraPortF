import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'GenAI-Driven Adaptive Cloud Honeypot',
    description:
      'AI-powered cloud honeypot simulating AWS services (IAM, S3, EC2, STS) to attract and analyze attackers using LLM-enhanced deception, MITRE ATT&CK mapping, and dual threat classification.',
    image: '/project/notesbuddy.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <NodeJs key="python" /> },
      { name: 'FastAPI', icon: <ExpressJs key="fastapi" /> },
      { name: 'Docker', icon: <AWS key="docker" /> },
      { name: 'AWS', icon: <AWS key="aws2" /> },
    ],
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/gach',
    isWorking: true,
  },
  {
    title: 'AI Predictive System Health Platform',
    description:
      'Intelligent system monitoring platform with real-time hardware metrics, Kafka streaming pipelines, RAG-based diagnosis, LLM-powered recommendations, health scoring, and anomaly detection.',
    image: '/project/syncify.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <NodeJs key="python2" /> },
      { name: 'Kafka', icon: <ExpressJs key="kafka" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
    ],
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/health-platform',
    isWorking: true,
  },
  {
    title: 'Intrusion Detection System using Snort',
    description:
      'Network-based IDS with custom Snort rule creation, real-time traffic analysis, automated packet dropping, honeypot redirection for attacker analysis, and database-integrated attack logging.',
    image: '/project/appwrite.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <NodeJs key="python3" /> },
      { name: 'MySQL', icon: <PostgreSQL key="mysql" /> },
    ],
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/ids-snort',
    isWorking: true,
  },
];
