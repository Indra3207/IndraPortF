import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import AWS from '@/components/technologies/AWS';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';

// Component mapping for skills
export const skillComponents = {
  ReactIcon: ReactIcon,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  JavaScript: JavaScript,
  AWS: AWS,
};

export const heroConfig = {
  // Personal Information
  name: 'Indra Kumar Malviya',
  title: 'A Developer who builds with AI.',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'JavaScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'AWS',
      href: 'https://aws.amazon.com/',
      component: 'AWS',
    },
    {
      name: 'MongoDB',
      href: 'https://www.mongodb.com/',
      component: 'MongoDB',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build <b>intelligent systems</b> and <b>full-stack applications</b> using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. Passionate about <b>GenAI</b>, <b>RAG pipelines</b>, and scalable backend architectures.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: <Mail />,
  },
];
