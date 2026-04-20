import AWS from '@/components/technologies/AWS';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';

export const mySkills = [
  <ReactIcon key="react" />,
  <JavaScript key="javascript" />,
  <NodeJs key="nodejs" />,
  <ExpressJs key="expressjs" />,
  <MongoDB key="mongodb" />,
  <PostgreSQL key="postgresql" />,
  <AWS key="aws" />,
  <Html key="html" />,
  <CSS key="css" />,
];

export const about = {
  name: 'Indra Kumar Malviya',
  description: `MCA student at NIT Trichy passionate about building intelligent systems and full-stack applications. Experienced in building AI-powered platforms, cloud-based solutions, and predictive monitoring systems using GenAI, RAG, and modern backend technologies.`,
};

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'NIT Tiruchirappalli',
    year: '2024 — 2027',
    cgpa: '7.47',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'DAVV, Indore',
    year: '2021 — 2024',
    cgpa: '7.45',
  },
];

export const achievements = [
  'Oracle Cloud Infrastructure 2025 Certified Gen AI',
  'Secured 3rd position in Inter-School Science Quiz',
];
