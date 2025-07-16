export const siteConfig = {
  name: 'Planethinker',
  description: 'A modern platform for videos, podcasts, and in-depth analysis.',
  url: 'https://planethinker.com',
  links: {
    twitter: 'https://twitter.com/planethinker',
    github: 'https://github.com/planethinker',
  },
};

export type ContentType = {
  title: string;
  description: string;
  date: string;
  author: string;
  category: 'video' | 'podcast' | 'analysis';
  slug: string;
  image?: string;
  duration?: string;
};

export type SiteConfig = typeof siteConfig;
