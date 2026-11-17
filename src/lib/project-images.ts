const storage = 'https://tofmglzhxvdozgnwmvhb.supabase.co/storage/v1/object/public/images/';

export const QUICKIN_FRONT = `${storage}quickin-stayz-entrance.webp`;
const quickinExterior = `${storage}quickin-stayz-exterior.webp`;
const quickinLegacy: Record<string, string> = {
  'quickin-stayz-hotel-2.jpg': 'quickin-stayz-twin-room.webp',
  'quickin-stayz-hotel-3.jpg': 'quickin-stayz-reception.webp',
  'quickin-stayz-hotel-4.jpg': 'quickin-stayz-kitchenette.webp',
  'quickin-stayz-hotel-7.jpg': 'quickin-stayz-room-seating.webp',
  'quickin-stayz-hotel-8.jpg': 'quickin-stayz-bathroom.webp',
  'quickin-stayz-hotel-9.jpg': 'quickin-stayz-double-room.webp',
};

export function parseProjectImages(raw: unknown): string[] {
  if (Array.isArray(raw)) return raw.filter((value): value is string => typeof value === 'string' && !!value.trim()).map(value => value.trim());
  if (typeof raw !== 'string' || !raw.trim()) return [];
  try { return parseProjectImages(JSON.parse(raw)); }
  catch { return raw.split(',').map(value => value.trim()).filter(Boolean); }
}

export function projectImages(slug: string | undefined, raw: unknown, fallback: unknown = []): string[] {
  const databaseImages = parseProjectImages(raw);
  const source = databaseImages.length ? databaseImages : parseProjectImages(fallback);
  if (slug === 'quickin-stayz') {
    const converted = source.map(url => {
      const filename = url.split('/').pop()?.split('?')[0] || '';
      return quickinLegacy[filename] ? storage + quickinLegacy[filename] : url;
    });
    return Array.from(new Set([QUICKIN_FRONT, quickinExterior, ...converted]));
  }
  return Array.from(new Set(source));
}
