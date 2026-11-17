import { describe, expect, it } from 'vitest';
import { QUICKIN_FRONT, projectImages } from '../src/lib/project-images';

describe('project image selection', () => {
  it('uses the database gallery instead of appending fallback copies', () => {
    const live = ['https://example.com/a.webp', 'https://example.com/b.webp'];
    expect(projectImages('duplex-luxury-villa', JSON.stringify(live), ['/local/a.webp'])).toEqual(live);
  });

  it('uses the front of QuickIn first and replaces duplicate legacy JPEGs with WebP', () => {
    const base = 'https://tofmglzhxvdozgnwmvhb.supabase.co/storage/v1/object/public/images/';
    const images = projectImages('quickin-stayz', JSON.stringify([
      `${base}quickin-stayz-hotel-2.jpg`,
      `${base}quickin-stayz-twin-room.webp`,
      `${base}quickin-stayz-hotel-3.jpg`,
    ]));
    expect(images[0]).toBe(QUICKIN_FRONT);
    expect(images).toEqual([QUICKIN_FRONT, `${base}quickin-stayz-exterior.webp`, `${base}quickin-stayz-twin-room.webp`, `${base}quickin-stayz-reception.webp`]);
  });
});
