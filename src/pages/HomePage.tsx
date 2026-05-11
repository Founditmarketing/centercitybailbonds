import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import OurWork from '../components/OurWork';

import Reviews from '../components/Reviews';
import CallToAction from '../components/CallToAction';

export default function HomePage() {
  return (
    <main className="relative z-10 flex flex-col">
      <Hero />
      <Banner />
      <Services />
      <OurWork />

      <Reviews />
      <CallToAction />
    </main>
  );
}
