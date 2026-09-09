import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../public/assets/hyundai-detail/', import.meta.url));
const source = 'https://object.pscloud.io/prod-mycar-market/';

const assets = [
  {
    file: 'hero.jpg',
    url: `${source}mark-banners/59f78ca9-367e-401a-a21d-3f4560ef1e41.jpg`,
  },
  ['elantra', 'brand-page-models/None_wSFb2U4.png'],
  ['sonata', 'brand-page-models/None_VR1GeZW.png'],
  ['tucson', 'brand-page-models/None_vPpzDeV.png'],
  ['mufasa', 'brand-page-models/None_0vNEcne.png'],
  ['santa-fe', 'brand-page-models/None_vPjKred.png'],
  ['palisade', 'модели-страниц-бренда/38.png'],
  ['custin', 'brand-page-models/None_ofVHtVJ.png'],
  ['staria', 'brand-page-models/None_8WRleBX.png'],
].map((asset) => Array.isArray(asset)
  ? { file: `models/${asset[0]}.png`, url: `${source}${asset[1]}` }
  : asset);

assets.push({
  file: 'dealer-logo.png',
  url: `${source}dealerships/110d6a21-b627-47bd-90a8-26335f993158.png`,
});

for (const asset of assets) {
  const destination = path.join(root, asset.file);
  await mkdir(path.dirname(destination), { recursive: true });
  const response = await fetch(asset.url);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${asset.url}`);
  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
  console.log(`downloaded ${asset.file}`);
}
