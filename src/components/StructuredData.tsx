import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.centercitybailbonds.com';

const BUSINESS_ID = `${BASE_URL}/#business`;
const WEBSITE_ID = `${BASE_URL}/#website`;

const organization = {
  '@type': ['LocalBusiness', 'BailBondService'],
  '@id': BUSINESS_ID,
  name: 'Center City Bail Bonds',
  url: BASE_URL,
  telephone: '+1-215-870-8197',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1238 South Street',
    addressLocality: 'Philadelphia',
    addressRegion: 'PA',
    postalCode: '19147',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '39.9441',
    longitude: '-75.1636',
  },
  hasMap: 'https://www.google.com/maps/place/Center+City+Bailbonds',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: [
    { '@type': 'City', name: 'Philadelphia' },
    { '@type': 'State', name: 'Pennsylvania' },
  ],
  sameAs: [
    'https://www.facebook.com/centercitybailbonds',
    'https://www.yelp.com/biz/center-city-bailbonds-philadelphia',
    'https://www.google.com/maps/place/Center+City+Bailbonds',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: BASE_URL,
  name: 'Center City Bail Bonds',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

const SERVICE_SEO: Record<string, { name: string; description: string }> = {
  'domestic-violence': {
    name: 'Domestic Violence Bail Bonds',
    description: '24/7 domestic violence bail bonds in Philadelphia. Fast, discreet release for sensitive domestic cases.',
  },
  'drug-charges': {
    name: 'Drug Charges Bail Bonds',
    description: '24/7 bail bonds for drug possession, distribution, and intent to deliver charges in Philadelphia.',
  },
  'dui-dwi': {
    name: 'DUI & DWI Bail Bonds',
    description: 'Fast bail bond services for DUI and DWI arrests in Philadelphia, available 24/7.',
  },
  'felony': {
    name: 'Felony Bail Bonds',
    description: 'Expert bail bond services for felony charges in Philadelphia with high bond clearance and flexible payment.',
  },
  'probation-parole': {
    name: 'Probation & Parole Violation Bail Bonds',
    description: 'Fast bail bond help for probation and parole violation arrests in Philadelphia, PA.',
  },
  'sex-crimes': {
    name: 'Sex Crime Bail Bonds',
    description: 'Discreet, licensed bail bonds for sex crime arrests in Philadelphia. 24/7 confidential service.',
  },
  'theft': {
    name: 'Theft Charges Bail Bonds',
    description: 'Judgment-free bail bond service for theft arrests in Philadelphia, available 24/7.',
  },
  'violent-crimes': {
    name: 'Violent Crime Bail Bonds',
    description: '24/7 bail bond services for violent crime and serious felony arrests in Philadelphia.',
  },
  'white-collar': {
    name: 'White Collar Crime Bail Bonds',
    description: 'Confidential bail bonds for fraud, embezzlement, and white collar crime arrests in Philadelphia.',
  },
};

const FAQ_PAIRS = [
  {
    q: 'My friend or loved one was just arrested — what do I do?',
    a: "Once someone is arrested, they must have a bond set before they can be released. In most cases, a magistrate judge will determine the bond amount within 24 hours of the arrest — even on weekends or holidays. If the arrest is based on a warrant, the bond amount may already be pre-set, allowing the person to be released faster without appearing before a judge. Call Center City Bail Bonds immediately — we'll verify the bond status and start the release process right away.",
  },
  {
    q: 'What is a bond?',
    a: 'A bond is the financial amount set by the court to allow a defendant to be released from jail while awaiting trial. It serves as a guarantee that the individual will return to court as scheduled. There are three common types: Surety Bond (posted through a bail bondsman), Cash Bond (paid in full to the court or jail), and Personal Bond/ROR (released on recognizance with court approval).',
  },
  {
    q: 'What is a surety bond?',
    a: 'A surety bond is posted by a licensed bail bondsman. The defendant or co-signer pays a percentage of the total bond amount — usually 10% — as a non-refundable fee. The bondsman guarantees the full bond amount to the court. If the defendant appears at all required court dates, no further action is needed.',
  },
  {
    q: 'What is a cash bond?',
    a: 'A cash bond must be paid in full, upfront, to the court or jail before the defendant is released. If the defendant complies with all court requirements, the full amount (minus any court fees or fines) is typically refunded at the end of the case.',
  },
  {
    q: 'What is a personal bond or ROR?',
    a: 'A personal bond, also known as Release on Recognizance (ROR), is when the court releases the defendant without requiring money upfront. The judge trusts that the person will return for all court appearances. This is not available for all charges and must be approved by a judge.',
  },
  {
    q: 'What is a co-signer?',
    a: 'A co-signer (also called an indemnitor) is someone who signs for the defendant and agrees to take full financial responsibility if the defendant fails to meet their court obligations. This includes paying back the full bond if forfeited and covering any legal or recovery fees.',
  },
  {
    q: 'Will I get my money back after the case is over?',
    a: "The fee paid to a bail bondsman is non-refundable — it covers the cost of securing the defendant's release. If you used collateral such as property or a car title, it will be returned once the case is resolved and all obligations are met.",
  },
  {
    q: 'How long does it take to get someone out of jail?',
    a: 'In most cases, it takes 2 to 4 hours after the bond is posted for a defendant to be released, depending on how busy the jail is and how quickly they process paperwork.',
  },
  {
    q: 'When can someone be released from jail?',
    a: 'Jails in most Philadelphia counties operate 24/7. That means a defendant can usually be released any time of day or night once the bond is posted.',
  },
  {
    q: "Can you help with a walk-through if there's a warrant?",
    a: "Yes. If there's a warrant out for arrest, Center City can often arrange a walk-through — allowing the person to be processed and released without spending unnecessary time in a holding cell.",
  },
  {
    q: "What if my loved one's car was towed during the arrest?",
    a: "Center City does not handle vehicle impounds, but the jail or local police department will have towing information available. We can help point you in the right direction.",
  },
];

// ── Schema builders ────────────────────────────────────────────────────────

function buildBreadcrumb(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

function buildHomepageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website],
  };
}

function buildServiceSchema(slug: string) {
  const svc = SERVICE_SEO[slug];
  if (!svc) return null;
  const service = {
    '@type': 'Service',
    name: svc.name,
    description: svc.description,
    url: `${BASE_URL}/services/${slug}`,
    provider: { '@id': BUSINESS_ID },
    serviceType: 'Bail Bond Service',
    areaServed: { '@type': 'City', name: 'Philadelphia' },
  };
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: svc.name, path: `/services/${slug}` },
  ]);
  return { '@context': 'https://schema.org', '@graph': [service, breadcrumb] };
}

function buildFAQSchema() {
  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: FAQ_PAIRS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/faq' },
  ]);
  return { '@context': 'https://schema.org', '@graph': [faqPage, breadcrumb] };
}

function buildAboutSchema() {
  const aboutPage = {
    '@type': 'AboutPage',
    '@id': `${BASE_URL}/about#webpage`,
    url: `${BASE_URL}/about`,
    name: 'About Center City Bail Bonds',
    about: { '@id': BUSINESS_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]);
  return { '@context': 'https://schema.org', '@graph': [aboutPage, breadcrumb] };
}

function buildContactSchema() {
  const contactPage = {
    '@type': 'ContactPage',
    '@id': `${BASE_URL}/contact#webpage`,
    url: `${BASE_URL}/contact`,
    name: 'Contact Center City Bail Bonds',
    about: { '@id': BUSINESS_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]);
  return { '@context': 'https://schema.org', '@graph': [contactPage, breadcrumb] };
}

// ── Component ──────────────────────────────────────────────────────────────

interface StructuredDataProps {
  page: 'homepage' | 'service' | 'faq' | 'about' | 'contact' | 'privacy';
  serviceSlug?: string;
}

export default function StructuredData({ page, serviceSlug }: StructuredDataProps) {
  let schema: object | null = null;

  if (page === 'homepage') schema = buildHomepageSchema();
  else if (page === 'service' && serviceSlug) schema = buildServiceSchema(serviceSlug);
  else if (page === 'faq') schema = buildFAQSchema();
  else if (page === 'about') schema = buildAboutSchema();
  else if (page === 'contact') schema = buildContactSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Helmet>
  );
}
