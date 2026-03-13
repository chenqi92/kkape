import fs from 'node:fs';
import path from 'node:path';

/**
 * Scans the `public/images/tools/{slug}/` directory at build time
 * and returns an array of image paths sorted numerically.
 *
 * Usage: just drop images into `public/images/tools/{tool-slug}/` and
 * they will be automatically discovered. No need to register them manually.
 */
export function getDemoImages(slug: string): string[] {
  const dir = path.resolve('public', 'images', 'tools', slug);

  if (!fs.existsSync(dir)) return [];

  const exts = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.avif']);

  const files = fs.readdirSync(dir)
    .filter(f => exts.has(path.extname(f).toLowerCase()))
    .sort((a, b) => {
      // Sort numerically if filenames are numbers (1.png, 2.png, ...)
      const na = parseInt(path.basename(a, path.extname(a)), 10);
      const nb = parseInt(path.basename(b, path.extname(b)), 10);
      if (!isNaN(na) && !isNaN(nb)) return na - nb;
      return a.localeCompare(b);
    });

  return files.map(f => `/images/tools/${slug}/${f}`);
}
