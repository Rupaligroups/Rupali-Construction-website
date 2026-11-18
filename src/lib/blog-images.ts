export const BLOG_IMAGE_FALLBACK = '/images/services/residential.webp';

export function blogCoverImage(src?: string | null): string {
  if (!src || src.includes('photo-1504307651254-35680f35aa2e')) return BLOG_IMAGE_FALLBACK;
  if (src.includes('photo-1541888081691-1cb11354b670')) return '/images/whyus_quality.webp';
  return src;
}
