// 사이트 기본 정보
export const SITE_TITLE = 'fredly.dev';
export const SITE_DESCRIPTION = `백엔드 엔지니어의 시선으로 AI를 해석하고 기록합니다.
대규모 시스템 설계 경험 위에 머신러닝과 LLM을 더해, 실무와 이론의 경계를 넘나드는 엔지니어링 인사이트를 나눕니다.`;
export const SITE_URL = 'https://fredly.dev';
export const AUTHOR_NAME = 'Fred';
export const AUTHOR_EMAIL = 'woosiks.io@gmail.com';
export const RESUME_URL = '/about/';

// 소셜 링크 타입 정의
export interface SocialLinks {
  github: string;
  linkedin: string;
}

export const SOCIAL_LINKS: SocialLinks = {
  github: 'suites',
  linkedin: 'fredyoons',
};

// 카테고리 타입 정의
export interface Category {
  name: string;
  slug: string;
  color: string;
  icon: string;
  link: string;
}

export const CATEGORIES: readonly Category[] = [
  {
    name: 'System Design & Backend',
    slug: 'backend',
    color: '#0c9ee4',
    icon: '🏗️',
    link: '/category/backend/',
  },
  {
    name: 'AI Engineering',
    slug: 'ai-engineering',
    color: '#C0D545',
    icon: '🧠',
    link: '/category/ai-engineering/',
  },
  {
    name: 'Computer Science',
    slug: 'cs',
    color: '#ffa22b',
    icon: '💻',
    link: '/category/cs/',
  },
  {
    name: 'Dev Log',
    slug: 'dev-log',
    color: '#f7615f',
    icon: '📝',
    link: '/category/dev-log/',
  },
] as const;

// 카테고리 타입 추론
export type CategorySlug = (typeof CATEGORIES)[number]['slug'];
