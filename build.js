import { writeFileSync, mkdirSync } from 'node:fs';
mkdirSync('dist', { recursive: true });
writeFileSync('dist/index.txt', 'Build at ' + new Date().toISOString());
console.log('Build complete.');
