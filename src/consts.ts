// 사이트 기본 정보
export const SITE_TITLE = 'fredly.dev';
export const SITE_DESCRIPTION = `기술과 커뮤니케이션의 힘이 세상을 바꾼다고 믿습니다.
편리한 세상으로 나아가기 위해 고민하고 개발합니다.`;
export const SITE_URL = 'https://fredly.dev';
export const AUTHOR_NAME = 'yoon.homme';
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
