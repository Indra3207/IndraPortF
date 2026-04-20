import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

// Base site configuration
export const siteConfig = {
  name: heroConfig.name,
  title: 'Indra Kumar Malviya — Developer who builds with AI',
  description: 'Portfolio of Indra Kumar Malviya — Developer specializing in GenAI, RAG, intelligent systems, and full-stack development.',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '',
    github: '',
    linkedin: '',
    email: '',
  },
  keywords: [
    'portfolio',
    'developer',
    'AI',
    'GenAI',
    'RAG',
    'full-stack',
    'python',
    'machine learning',
    heroConfig.name.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  '/': {
    title: `${heroConfig.name} — ${heroConfig.title}`,
    description: `${about.description} Explore my projects, skills, and technical expertise.`,
    keywords: [
      'portfolio',
      'developer',
      'AI',
      'GenAI',
      'full-stack',
      'projects',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  '/contact': {
    title: 'Contact — Get in Touch',
    description:
      'Get in touch with Indra for collaborations, AI projects, or opportunities.',
    keywords: ['contact', 'hire', 'collaboration', 'AI', 'developer'],
    ogImage: '/assets/logo.png',
    twitterCard: 'summary',
  },

  '/work-experience': {
    title: 'Experience — Professional Journey',
    description:
      'Explore my professional experience and contributions.',
    keywords: [
      'experience',
      'career',
      'professional',
      'developer',
    ],
    ogImage: '/meta/work.png',
    twitterCard: 'summary_large_image',
  },

  '/projects': {
    title: 'Projects — My Work & Projects Portfolio',
    description:
      'Discover my projects in AI, full-stack development, and intelligent systems.',
    keywords: [
      'projects',
      'portfolio',
      'AI',
      'full-stack',
      'intelligent systems',
    ],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },

  '/resume': {
    title: 'Resume — Professional CV',
    description: `View and download ${heroConfig.name}'s professional resume and CV.`,
    keywords: [
      'resume',
      'cv',
      'professional',
      'skills',
      'qualifications',
      'download',
    ],
    ogImage: '/meta/resume.png',
    twitterCard: 'summary',
  },

  '/gears': {
    title: 'Gears — My Setup & Tools',
    description:
      'Discover the tools, devices, and software I use for development.',
    keywords: [
      'setup',
      'tools',
      'devices',
      'software',
      'productivity',
      'development environment',
    ],
    ogImage: '/meta/gears.png',
    twitterCard: 'summary_large_image',
  },

  '/setup': {
    title: 'Setup Guide — Development Environment',
    description:
      'Complete guide to setting up my preferred development environment.',
    keywords: [
      'vscode',
      'setup',
      'configuration',
      'development environment',
      'guide',
    ],
    ogImage: '/meta/setup.png',
    twitterCard: 'summary_large_image',
  },
};

export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
