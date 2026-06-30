import PageSEO from '../components/PageSEO';
import StructuredData from '../components/StructuredData';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import OurWork from '../components/OurWork';

import Reviews from '../components/Reviews';
import CallToAction from '../components/CallToAction';

export default function HomePage() {
  return (
    <main className="relative z-10 flex flex-col">
      <PageSEO
        title="24/7 Bail Bonds Philadelphia | Center City Bail Bonds"
        description="Licensed Philadelphia bail bondsman available 24/7. Fast release for any charge — call Center City Bail Bonds now."
        canonical="https://www.centercitybailbonds.com/"
        ogImage="https://www.centercitybailbonds.com/gregsbailbondsskyline.jpeg"
      />
      <StructuredData page="homepage" />
      <Hero />
      <Banner />
      <Services />
      <OurWork />

      <Reviews />
      <CallToAction />
    </main>
  );
}
