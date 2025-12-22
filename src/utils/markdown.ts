/**
 * 마크다운 콘텐츠에서 첫 번째 이미지 URL을 추출합니다.
 * @param markdown 마크다운 텍스트
 * @returns 이미지 URL 또는 null
 */
export function extractFirstImage(markdown: string): string | null {
  if (!markdown) return null;

  // 마크다운 이미지 문법: ![alt](url)
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const match = markdown.match(imageRegex);

  if (match && match[1]) {
    // URL에서 괄호나 공백 등이 포함된 경우 처리 (일반적인 경우 match[1]이 URL)
    // 공백 이후에 타이틀이 올 수 있음: ![alt](url "title")
    const url = match[1].split(' ')[0];
    return url;
  }
  
  // HTML img 태그 지원: <img src="url" ... />
  const htmlImgRegex = /<img[^>]+src=["']([^"']+)["']/;
  const htmlMatch = markdown.match(htmlImgRegex);
  
  if (htmlMatch && htmlMatch[1]) {
    return htmlMatch[1];
  }

  return null;
}

/**
 * 마크다운 콘텐츠에서 텍스트만 추출하여 설명을 생성합니다.
 * @param markdown 마크다운 텍스트
 * @param limit 최대 길이 (기본값: 160)
 * @returns 추출된 설명 텍스트
 */
export function extractDescription(markdown: string, limit: number = 160): string {
  if (!markdown) return '';

  let text = markdown
    // HTML 주석 제거
    .replace(/<!--[\s\S]*?-->/g, '')
    // 코드 블록 제거
    .replace(/```[\s\S]*?```/g, '')
    // 인라인 코드 제거
    .replace(/`([^`]+)`/g, '$1')
    // 이미지 제거
    .replace(/!\[.*?\]\(.*?\)/g, '')
    // HTML 태그 제거
    .replace(/<[^>]*>/g, '')
    // 헤더 제거
    .replace(/^#+\s+(.*)$/gm, '$1')
    // 인용문 제거
    .replace(/^>\s+(.*)$/gm, '$1')
    // 볼드/이탤릭 제거
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // 링크 제거 (텍스트만 남김)
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    // 연속된 공백 및 개행을 공백 하나로 치환
    .replace(/\s+/g, ' ')
    .trim();

  // 첫 문장 추출 시도 (마침표로 끝나는 부분)
  // 하지만 문장이 너무 길면 limit으로 자름
  if (text.length <= limit) return text;

  return text.slice(0, limit) + '...';
}
