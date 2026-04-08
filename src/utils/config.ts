import yaml from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';

export function getConfig() {
  const filePath = path.join(process.cwd(), 'src/data/config.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents);
}