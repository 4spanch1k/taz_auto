import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './tokens.css';
import './styles.css';

const brandData = [
  ['hyundai', 'Hyundai', 'Tucson', '/market/hyundai', '/assets/brands/hyundai-logo.webp', '/assets/brands/hyundai-banner.webp'],
  ['toyota', 'Toyota', 'Camry', '/market/toyota', '/assets/brands/toyota-logo.webp', '/assets/brands/toyota-banner.webp'],
  ['byd', 'BYD', 'Song Plus', '/market/byd', '/assets/brands/byd-logo.webp', '/assets/brands/byd-banner.webp'],
  ['changan', 'Changan', 'CS55 Plus', '/market/changan', '/assets/brands/changan-logo.webp', '/assets/brands/changan-banner.webp'],
  ['bmw', 'BMW', 'X5', '/market/premium/bmw', '/assets/brands/bmw-logo.webp', '/assets/brands/bmw-banner.webp'],
  ['rolls-royce', 'Rolls-Royce', 'Ghost', '/market/premium/rolls-royce', '/assets/brands/rolls-royce-logo.svg', '/assets/brands/rolls-royce-front.png'],
  ['mercedes-benz', 'Mercedes-Benz', 'S-Class', '/market/premium/mercedes-benz', '/assets/brands/mercedes-benz-logo.svg', '/assets/brands/mercedes-front.png'],
  ['porsche', 'Porsche', '911 Carrera', '/market/premium/porsche', '/assets/brands/porsche-logo.svg', '/assets/brands/porsche-front.png'],
];

const popularCars = [
  ['Nissan Patrol', '33 000 000', '/assets/cars/dubai/nissan-patrol.webp'],
  ['Toyota Land Cruiser 300', '33 000 000', '/assets/cars/dubai/toyota-land-cruiser.png'],
  ['Toyota Land Cruiser Prado', '27 000 000', '/assets/cars/dubai/toyota-prado.webp'],
  ['Toyota Camry', '13 000 000', '/assets/brands/toyota-banner.webp'],
  ['Jetour T2', '20 000 000', '/assets/cars/dubai/jetour-t2.jpg'],
  ['Land Rover Defender', '33 000 000', '/assets/brands/land-rover-banner.webp'],
  ['Mercedes-Benz S-Class', '44 000 000', '/assets/cars/dubai/mercedes-s-class.jpg'],
  ['Porsche 911 Carrera', '68 000 000', '/assets/cars/dubai/porsche-911-carrera.jpg'],
  ['BMW X5', '43 000 000', '/assets/brands/bmw-banner.webp'],
];

const steps = [
  ['Выбор', 'Выберите автомобиль из каталога в Дубае'],
  ['Проверка', 'Мы проверим авто, цену и условия выкупа'],
  ['Импорт', 'Организуем выкуп и доставку из Дубая в Казахстан'],
  ['Получение', 'Передадим автомобиль вам с документами и сопровождением TAZ'],
];

const aboutServices = [
  ['Поиск автомобиля', 'Помогаем подобрать марку, модель и комплектацию под ваш запрос.'],
  ['Проверка условий', 'Уточняем характеристики автомобиля и условия покупки до следующего шага.'],
  ['Выкуп и доставка', 'Координируем выкуп в ОАЭ и маршрут автомобиля в Казахстан.'],
  ['Документы и передача', 'Сопровождаем процесс передачи автомобиля и документов.'],
];

const aboutCarCategories = [
  ['Новые автомобили', 'Актуальные модели с рынка Ближнего Востока.', '/assets/cars/dubai/nissan-patrol.webp'],
  ['Премиальный сегмент', 'Представительские седаны и спорткары.', '/assets/cars/dubai/mercedes-s-class.jpg'],
  ['Внедорожники и кроссоверы', 'Автомобили для города, трассы и путешествий.', '/assets/cars/dubai/toyota-prado.webp'],
  ['Семейные автомобили', 'Вместительные автомобили для повседневных задач.', '/assets/cars/dubai/toyota-land-cruiser.png'],
];

const aboutChecks = [
  ['Соответствие запросу', 'Уточняем год выпуска, модификацию и параметры из вашего запроса.'],
  ['Комплектация и оснащение', 'Проверяем заявленные опции и характеристики автомобиля.'],
  ['Стоимость и условия покупки', 'Согласовываем состав расходов и условия сделки до выкупа.'],
  ['Документы для сделки', 'Уточняем комплект документов, который потребуется на этапах оформления.'],
];

const aboutTransparency = [
  ['Статус процесса', 'Сообщаем, на каком этапе находится подбор, выкуп и доставка автомобиля.'],
  ['Документы', 'Передаём информацию о документах, необходимых для сделки и получения автомобиля.'],
  ['Согласование решений', 'Ключевые условия обсуждаются с клиентом до перехода к следующему этапу.'],
];

const aboutFaq = [
  ['Как выбрать автомобиль?', 'Выберите модель в каталоге или сообщите марку и комплектацию, которые вас интересуют.'],
  ['Можно ли привезти конкретную модель?', 'Да, TAZ может рассмотреть запрос на конкретную марку, модель и комплектацию.'],
  ['Что входит в сопровождение TAZ?', 'Подбор автомобиля, уточнение параметров, согласование условий, координация выкупа и доставки.'],
  ['Как формируется итоговая стоимость?', 'Состав расходов согласовывается до выкупа автомобиля. Для точного расчёта нужен конкретный вариант и условия сделки.'],
  ['Какие документы нужны от клиента?', 'Точный перечень зависит от формата сделки и оформления. Его уточняют перед началом процесса.'],
  ['Как начать работу?', 'Откройте каталог, выберите интересующий автомобиль и отправьте запрос на подбор.'],
];

const infoPages = {
  '/about': {
    eyebrow: 'TAZ / DUBAI → KZ',
    title: 'Что такое TAZ',
    description: 'TAZ помогает выбрать автомобиль в Дубае, проверить его и организовать доставку в Казахстан.',
    sectionTitle: 'Как работает TAZ',
    items: [
      ['Выбор автомобиля', 'Вы выбираете марку, модель и комплектацию в каталоге.'],
      ['Проверка условий', 'Уточняем стоимость автомобиля, его состояние и условия выкупа.'],
      ['Выкуп и доставка', 'Организуем покупку и маршрут автомобиля из Дубая в Казахстан.'],
      ['Передача автомобиля', 'Передаём автомобиль с документами и сопровождением TAZ.'],
    ],
  },
  '/parts': {
    eyebrow: 'TAZ PARTS',
    title: 'Автозапчасти TAZ',
    description: 'Поможем подобрать и привезти комплектующие для вашего автомобиля из ОАЭ.',
    sectionTitle: 'Что можно подобрать',
    items: [
      ['Плановое обслуживание', 'Фильтры, расходники, тормозные детали и комплектующие для ТО.'],
      ['Двигатель и трансмиссия', 'Детали для двигателя, коробки передач и системы охлаждения.'],
      ['Кузов и оптика', 'Кузовные элементы, зеркала, фары и задние фонари.'],
      ['Подвеска и колёса', 'Компоненты подвески, диски, шины и сопутствующие детали.'],
    ],
  },
  '/accessories': {
    eyebrow: 'TAZ ACCESSORIES',
    title: 'Авто аксессуары TAZ',
    description: 'Подберём аксессуары для защиты, комфорта и персонализации автомобиля.',
    sectionTitle: 'Популярные категории',
    items: [
      ['Защита кузова', 'Коврики, защитные покрытия и практичные решения для салона.'],
      ['Комфорт в салоне', 'Органайзеры, зарядные устройства и аксессуары для поездок.'],
      ['Багаж и путешествия', 'Боксы, рейлинги и крепления для активного отдыха.'],
      ['Индивидуальный стиль', 'Диски, декоративные элементы и аксессуары для экстерьера.'],
    ],
  },
};

const cities = ['Актау', 'Актобе', 'Атырау', 'Жанаозен', 'Жезказган', 'Караганда', 'Кокшетау', 'Костанай', 'Кызылорда', 'Павлодар', 'Петропавловск', 'Семей', 'Талдыкорган', 'Тараз', 'Туркестан', 'Уральск', 'Усть-Каменогорск', 'Экибастуз'];
const largeCities = ['Алматы', 'Астана', 'Шымкент'];

const navItems = [['Каталог', '/market'], ['Что такое TAZ', '/about'], ['Автозапчасти TAZ', '/parts'], ['Авто аксессуары TAZ', '/accessories']];

const hyundaiModels = [
  ['Elantra', 'elantra', '/market/hyundai/elantra'],
  ['Sonata', 'sonata', '/market/hyundai/sonata'],
  ['Tucson', 'tucson', '/market/hyundai/tucson'],
  ['Mufasa', 'mufasa', '/market/hyundai/mufasa'],
  ['Santa Fe', 'santa-fe', '/market/hyundai/santa_fe'],
  ['Palisade', 'palisade', '/market/hyundai/palisade'],
  ['Custin', 'custin', '/market/hyundai/custin'],
  ['Staria', 'staria', '/market/hyundai/staria'],
];

function Icon({ name, size = 24 }) {
  const paths = {
    menu: 'M21 19v-2H3v2h18ZM21 13H3v-2h18v2ZM21 7H3V5h18v2Z',
    close: 'm6 6 12 12M18 6 6 18',
    chevron: 'm7 10 5 5 5-5',
    search: 'm21 21-4.35-4.35M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z',
    user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0',
    profileFilled: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.5-3.5-3.5S10.07 6 12 6Zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20Z',
    heart: 'M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09Z',
    location: 'M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23L12 22s.479-.404.67-.57C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2Zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z',
    spark: 'M12 2v4m0 12v4M4.93 4.93l2.83 2.83m6.48 6.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m6.48-6.48 2.83-2.83',
    car: 'M5 17h14m-1-5-1.6-4H7.6L6 12m-3 2v-1a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1m-1 3v2m-16-2v-2m3 2h.01m10 0h.01',
  };
  const filled = ['heart', 'location', 'profileFilled'].includes(name);
  return <svg className={`icon icon-${name}`} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={paths[name]} fill={filled ? 'currentColor' : 'none'} stroke={filled ? 'none' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Logo() {
  return <span className="logo-mark">taz</span>;
}

function Header({ onMenu, detail = false }) {
  const pathname = window.location.pathname;
  const isActive = (href) => href === '/market' ? pathname.startsWith('/market') : pathname === href;
  return <header className="site-header"><div className="container header-inner">
    <button className="icon-button mobile-only" aria-label="menu toggle" onClick={onMenu}><Icon name="menu" size={22} /></button>
    <a className="brand-logo" href="/market" aria-label="Логотип taz"><Logo /></a>
    <nav className="main-nav">{navItems.map(([label, href]) => <a key={label} className={isActive(href) ? 'active' : ''} href={href}>{label}</a>)}</nav>
    <div className="header-actions"><button className="login desktop-only">Войти</button>{detail && <button className="favorite mobile-only" aria-label="Избранное"><Icon name="heart" size={24} /></button>}<button className="profile mobile-only" aria-label="profile icon button"><Icon name={detail ? 'profileFilled' : 'user'} size={detail ? 24 : 17} /></button></div>
  </div></header>;
}

function SideMenu({ onClose }) {
  const items = [['Каталог', '/market'], ['Что такое TAZ', '/about'], ['Автозапчасти TAZ', '/parts'], ['Авто аксессуары TAZ', '/accessories']];
  return <div className="side-menu-layer"><button className="side-menu-scrim" aria-label="close menu" onClick={onClose} /><aside className="side-menu"><div className="side-menu-top"><button className="icon-button" onClick={onClose} aria-label="close menu"><Icon name="close" size={22} /></button><a href="/market" onClick={onClose}><Logo /></a></div><nav>{items.map(([label, href]) => <a href={href} key={label} onClick={onClose}>{label}</a>)}</nav></aside></div>;
}

function CityModal({ onClose, onChoose }) {
  const [query, setQuery] = useState('');
  const filtered = cities.filter((city) => city.toLowerCase().includes(query.toLowerCase()));
  return <div className="modal-layer" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><section className="city-modal" role="dialog" aria-modal="true" aria-labelledby="city-title"><div className="modal-heading"><h2 id="city-title">Выберите город</h2><button className="icon-button" onClick={onClose} aria-label="Закрыть"><Icon name="close" size={22} /></button></div><div className="city-modal-body"><label className="search-field"><Icon name="search" size={22} /><input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск" /></label><button className="country-chip" onClick={() => onChoose('Весь Казахстан')}>Весь Казахстан</button><p className="modal-label">КРУПНЫЕ ГОРОДА</p><div className="large-city-list">{largeCities.map((city) => <button key={city} onClick={() => onChoose(city)}>{city}</button>)}</div><p className="modal-label">ДРУГИЕ ГОРОДА</p><div className="city-list">{filtered.map((city) => <button key={city} onClick={() => onChoose(city)}>{city}</button>)}</div></div></section></div>;
}

function BrandPicker({ onCity, selectedCity }) {
  const openBrand = (event, slug) => {
    if (slug !== 'hyundai') event.preventDefault();
  };
  return <section id="brands" className="container brand-section"><div className="section-heading"><h1>Выберите марку</h1><button className="city-button" onClick={onCity}>{selectedCity} <Icon name="chevron" size={15} /></button></div><div className="brand-grid">{brandData.map(([slug, label, model, href, logo, banner]) => <a className={`brand-card${banner.includes('-front') ? ' brand-card--front' : ''}`} href={href} key={slug} onClick={(event) => openBrand(event, slug)}><img className="brand-logo-image" src={logo} alt="" /><h2>{label}</h2><span className="brand-model">{model}</span><img className="brand-car-image" src={banner} alt={`${label} ${model}`} /></a>)}<div className="brand-card coming-card"><Icon name="car" size={34} /><h2>Скоро будут новые бренды</h2></div></div></section>;
}

function Steps() {
  return <section className="container steps-section"><h2 className="section-title">Как мы привезём авто из Дубая?</h2><div className="steps-row" aria-label="Как работает импорт автомобиля">{steps.map(([label, copy], index) => <article className="step-card" key={label}><div className="step-card-heading"><strong>0{index + 1}</strong><span>{label}</span></div><p>{copy}</p></article>)}</div></section>;
}

function PopularCars() {
  return <section className="container popular-section"><h2 className="section-title">Популярные авто из Дубая</h2><div className="car-grid">{popularCars.map(([name, price, image]) => <article className={`car-card${name === 'Jetour T2' ? ' car-card--jetour' : ''}`} key={name}><img src={image} alt={name} /><span className="car-gradient" /><div className="car-info"><span>{name}</span><strong>от {price} ₸</strong></div></article>)}</div></section>;
}

function AppBanner() {
  return <section className="container app-section"><div className="app-banner"><div><h2>Больше возможностей в приложении taz</h2><p>Установите приложение по QR-коду или скачайте в App Store и Google Play</p><div className="store-badges"><a href="https://apps.apple.com" onClick={(e) => e.preventDefault()}><b></b><span>Загрузите в<br /><strong>App Store</strong></span></a><a href="https://play.google.com" onClick={(e) => e.preventDefault()}><b>▶</b><span>Доступно в<br /><strong>Google Play</strong></span></a></div></div><img src="/assets/app/qr.webp" alt="QR-код taz" /></div></section>;
}

function Footer() {
  return <footer><div className="footer-bottom container"><Logo /><span>© 2020– 2026 ТОО taz Group</span><a href="tel:2525">☎ 2525 бесплатно с моб. операторов РК</a><a href="mailto:info@taz.kz">✉ info@taz.kz</a></div></footer>;
}

function HyundaiHero({ selectedCity, onCity }) {
  return <section className="hyundai-hero"><div className="container hyundai-hero-inner"><div className="hyundai-hero-copy"><nav className="hyundai-breadcrumbs"><a href="#top" onClick={(e) => e.preventDefault()}>Главная</a><span>/</span><a href="/market" onClick={(e) => e.preventDefault()}>Новые авто</a><span>/</span><span>Hyundai</span></nav><h1>Hyundai</h1><button className="hyundai-hero-city" onClick={onCity}><Icon name="location" size={16} />{selectedCity}</button></div></div></section>;
}

function HyundaiModels() {
  return <section className="container hyundai-models"><h2>Все модели Hyundai</h2><div className="hyundai-model-grid">{hyundaiModels.map(([name, slug, href]) => <a className="hyundai-model-card" href={href} key={slug} onClick={(e) => e.preventDefault()}><article><div className="hyundai-model-image"><img src={`/assets/hyundai-detail/models/${slug}.png`} alt={`Hyundai ${name}`} /><button className="hyundai-more" onClick={(e) => e.preventDefault()}>Подробнее</button></div><h3>{name}</h3></article></a>)}</div></section>;
}

function HyundaiPage() {
  const [cityModal, setCityModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Весь Казахстан');
  const [menu, setMenu] = useState(false);
  const chooseCity = (city) => { setSelectedCity(city); setCityModal(false); };
  return <><div id="top" className="hyundai-page"><Header detail onMenu={() => setMenu(true)} /><HyundaiHero selectedCity={selectedCity} onCity={() => setCityModal(true)} /><main className="hyundai-detail-main"><HyundaiModels /></main></div>{cityModal && <CityModal onClose={() => setCityModal(false)} onChoose={chooseCity} />}{menu && <SideMenu onClose={() => setMenu(false)} />}</>;
}

function AboutPage() {
  const [menu, setMenu] = useState(false);
  return <><div id="top" className="about-page"><Header onMenu={() => setMenu(true)} /><main><section className="about-hero"><div className="container about-hero-content"><h1>Подберём и привезём автомобиль из Дубая</h1><p className="about-hero-copy">Поможем выбрать автомобиль, согласовать условия покупки и организовать доставку в Казахстан.</p><div className="about-hero-actions"><a className="about-primary-action" href="/market">Подобрать автомобиль</a><a className="about-secondary-action" href="#about-process">Как это работает</a></div></div></section><section className="container about-section"><h2>Всё сопровождение берём на себя</h2><div className="about-services-grid">{aboutServices.map(([title, copy], index) => <article className="about-service" key={title}><span className="about-service-icon">0{index + 1}</span><h3>{title}</h3><p>{copy}</p><small>Этап 0{index + 1}</small></article>)}</div></section><section id="about-process" className="container about-section"><h2>Четыре понятных шага к вашему автомобилю</h2><div className="about-process-list">{steps.map(([label, copy], index) => <article className="about-process-step" key={label}><div><strong>0{index + 1}</strong><div><h3>{label === 'Выбор' ? 'Выбор автомобиля' : label}</h3><p>{copy}</p></div></div><span aria-hidden="true">{index === steps.length - 1 ? '✓' : '→'}</span></article>)}</div></section><section className="container about-section"><div className="about-section-heading"><h2>Автомобили под любые задачи</h2><a href="/market">Перейти в каталог <span aria-hidden="true">→</span></a></div><div className="about-categories-grid">{aboutCarCategories.map(([title, copy, image]) => <article className="about-category" key={title}><img src={image} alt={title} /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section><section className="container about-section"><h2 className="about-narrow-heading">Проверяем каждую деталь до совершения сделки</h2><div className="about-checks-grid">{aboutChecks.map(([title, copy]) => <article className="about-check" key={title}><span aria-hidden="true">✓</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section><section className="container about-section"><h2>Вы знаете, на каком этапе находится ваш автомобиль</h2><div className="about-transparency-grid">{aboutTransparency.map(([title, copy], index) => <article className="about-transparency" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section><section className="container about-section about-faq-section"><p className="about-faq-eyebrow">ЧАСТЫЕ ВОПРОСЫ</p><h2>Ответы на ключевые вопросы об импорте</h2><div className="about-faq-list">{aboutFaq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">⌄</span></summary><p>{answer}</p></details>)}</div></section><section className="container about-final"><div><p>TAZ / DUBAI → KZ</p><h2>Выберите автомобиль — начнём с понятного запроса.</h2></div><a className="about-primary-action" href="/market">Открыть каталог</a></section></main><Footer /></div>{menu && <SideMenu onClose={() => setMenu(false)} />}</>;
}

function InfoPage({ page }) {
  const [menu, setMenu] = useState(false);
  return <><div id="top" className="info-page"><Header onMenu={() => setMenu(true)} /><main><section className="container info-hero"><p className="info-eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p className="info-intro">{page.description}</p><a className="info-cta" href="/market">Открыть каталог</a></section><section className="container info-section"><h2>{page.sectionTitle}</h2><div className="info-grid">{page.items.map(([title, copy]) => <article className="info-item" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section></main></div>{menu && <SideMenu onClose={() => setMenu(false)} />}</>;
}

export default function App() {
  const pathname = window.location.pathname;
  if (pathname === '/market/hyundai') return <HyundaiPage />;
  if (pathname === '/about') return <AboutPage />;
  if (infoPages[pathname]) return <InfoPage page={infoPages[pathname]} />;
  const [cityModal, setCityModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Весь Казахстан');
  const [menu, setMenu] = useState(false);
  const chooseCity = (city) => { setSelectedCity(city); setCityModal(false); };
  return <><div id="top"><Header onMenu={() => setMenu(true)} /><main><div className="container breadcrumbs"><a href="#top" onClick={(e) => e.preventDefault()}>Главная</a><span>/</span><a href="#top" onClick={(e) => e.preventDefault()}>Новые авто</a></div><BrandPicker selectedCity={selectedCity} onCity={() => setCityModal(true)} /><Steps /><PopularCars /></main><AppBanner /><Footer /></div>{cityModal && <CityModal onClose={() => setCityModal(false)} onChoose={chooseCity} />}{menu && <SideMenu onClose={() => setMenu(false)} />}</>;
}

createRoot(document.getElementById('root')).render(<App />);
