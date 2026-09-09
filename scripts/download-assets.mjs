import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = new URL('../public/assets/', import.meta.url);
const proxy = (original, params = '') =>
  `https://nipx.mycar.kz/?url=${encodeURIComponent(original)}${params}`;

const brands = [
  ['hyundai', 'Hyundai', '1bbf44e2-a1a0-4638-b19e-959e70063811', 'd019d781-8154-46b5-8bde-78662fc9b437'],
  ['toyota', 'Toyota', 'd8f33744-06c8-46be-bedf-a048b59e38c2', 'f43f041b-fffd-4a26-94bb-355392f41781'],
  ['byd', 'BYD', 'e9c82ee5-d331-423b-8925-47edfe50fd29', 'ce6ab46c-8208-426b-bd13-2d643f66e354'],
  ['tank', 'Tank', '1e45b3e2-c4cf-434a-8146-ecde924c0cb0', '81d2cb64-923f-495b-89e3-8b8c6304f778'],
  ['changan', 'Changan', '09b5f3eb-f4bb-41f5-9208-fc2d5a252c1e', '81cf3866-a5be-4072-9acd-a07e8d744c7f'],
  ['haval', 'Haval', '361d6e44-2ae5-4762-aeb4-3f8805dade9e', '3fd0a5b1-6384-4636-901b-47f72225f889'],
  ['chery', 'Chery', 'c9a2b195-2e9a-4303-b106-1a99cefdc524', 'f7076c4f-f593-4956-9a4e-9a22334afa4e'],
  ['subaru', 'Subaru', '8fb65518-cefe-4842-9cfe-5c73997bc489', 'e8319920-47fc-4d91-8a4d-d05a4bfa8d97'],
  ['land-rover', 'Land Rover', '47103456-8150-4a57-8827-71f27c4a7504', 'ba01a036-8508-4546-a7cd-748974cbdff4'],
  ['bmw', 'BMW', '77f3d780-0d64-4aae-b3e8-6e3282406f29', '13320f3f-622f-455a-8dbe-eb6f3086bb59'],
  ['genesis', 'Genesis', '958aa530-e200-4bb5-a9ed-34662731edea', 'd7f3dc1a-67be-41cc-9fa9-cefb1e29fb60'],
  ['gwm', 'GWM', 'da92dd9f-79c5-453c-8c4d-6e0674d80880', '6c81936c-de01-47e9-85a2-916e37b243fd'],
  ['mini', 'MINI', '4f833238-3fd2-41b4-b06d-b605bbee3462', '75a03d28-8112-4cd3-8a20-733dc95e116f'],
];

const popularImagePath = 'https://object.pscloud.io/prod-mycar-market/популярные-изображения-поколения/';
const cars = [
  ['hyundai-mufasa', `${popularImagePath}da4a0225-643b-4e25-8bc9-e326b0e64562.jpg`],
  ['hyundai-elantra', `${popularImagePath}c8ac25ae-eafd-4a41-8947-6feab69423d4.jpg`],
  ['hyundai-sonata', `${popularImagePath}43481807-c543-42b0-a798-33bb34177fcc.jpg`],
  ['hyundai-tucson', `${popularImagePath}19b377b3-cc9e-4ee2-b579-fb658ed227e3.jpg`],
  ['hyundai-santa-fe', `${popularImagePath}0b930926-80a5-4907-9155-4225949048ce.jpg`],
  ['hyundai-palisade', `${popularImagePath}90a2a6df-72c9-41dd-a118-6a64d776859c_GL8xblN.jpg`],
  ['hyundai-custin', `${popularImagePath}bfbb7c07-9034-4537-a7af-a666ad91a422.jpg`],
  ['hyundai-staria', 'https://object.pscloud.io/prod-mycar-market/generation-popular-images/8f017837-d051-4825-94e0-d5fb44a77f94.jpg'],
  ['chery-tiggo-2-pro', `${popularImagePath}8649d449-5b55-460f-93ac-973e2c9215e8_GkAZp24.jpg`],
  ['chery-tiggo-4', `${popularImagePath}e8265dcc-2091-4a29-b005-100bdc560cf5_hEwy8Wm.jpg`],
  ['chery-tiggo-7', `${popularImagePath}3f04c9d3-c499-46bb-beee-880cc475a03d_5l3Nzne.jpg`],
  ['chery-arrizo-8', `${popularImagePath}c0d0836e-8a66-49e5-abfd-55341bd1d8fa.jpg`],
];

const assets = [
  ...brands.flatMap(([slug, , logo, banner]) => [
    { file: `brands/${slug}-logo.webp`, url: proxy(`https://object.pscloud.io/prod-mycar-market/mark-logos/${logo}.png`, '&f=webp&q=100') },
    { file: `brands/${slug}-banner.webp`, url: proxy(`https://object.pscloud.io/prod-mycar-market/mark-banners/${banner}.png`, '&f=webp&q=100') },
  ]),
  ...cars.map(([slug, url]) => ({ file: `cars/${slug}.webp`, url: proxy(url, '&w=588&h=400&f=webp') })),
  { file: 'credit/credit-info.webp', url: proxy('https://mycar.kz/images/new-main/creditInfo.png', '&h=280&f=webp') },
  { file: 'credit/credit-fast.webp', url: proxy('https://mycar.kz/images/new-main/creditFast.png', '&h=260&f=webp') },
  { file: 'credit/credit-security.webp', url: proxy('https://mycar.kz/images/new-main/creditSecurity.png', '&h=240&f=webp') },
  { file: 'app/qr.webp', url: proxy('https://mycar.kz/images/dealerships/dealership_qr.png', '&w=600&f=webp') },
];

const fonts = [
  ['fonts/InterDisplay-Regular.woff2', 'https://mycar.kz/_nuxt/InterDisplay-Regular.C0mmbI_t.woff2'],
  ['fonts/InterDisplay-Medium.woff2', 'https://mycar.kz/_nuxt/InterDisplay-Medium.BRBaQVhl.woff2'],
  ['fonts/InterDisplay-SemiBold.woff2', 'https://mycar.kz/_nuxt/InterDisplay-SemiBold.J6ePsRbj.woff2'],
  ['fonts/InterDisplay-Bold.woff2', 'https://mycar.kz/_nuxt/InterDisplay-Bold.CXJyJlfA.woff2'],
  ['fonts/Okto-Regular.woff2', 'https://mycar.kz/_nuxt/OktaNeue-Regular.nh3Sh1ib.woff2'],
  ['fonts/Okto-Bold.woff2', 'https://mycar.kz/_nuxt/OktaNeue-Bold.CxSY0JA4.woff2'],
];

async function download({ file, url }) {
  const destination = new URL(file, root);
  await mkdir(path.dirname(fileURLToPath(destination)), { recursive: true });
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${url}`);
  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
  console.log(`downloaded ${file}`);
}

for (const asset of [...assets, ...fonts.map(([file, url]) => ({ file, url }))]) {
  try {
    await download(asset);
  } catch (error) {
    console.error(`failed ${asset.file}: ${error.message}`);
  }
}
