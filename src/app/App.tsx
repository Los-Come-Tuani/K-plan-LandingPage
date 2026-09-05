import { useEffect, useState } from 'react';
import { CreativeCities } from '@/components/sections/CreativeCities';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { HeaderNav } from '@/components/sections/HeaderNav';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductDemo } from '@/components/sections/ProductDemo';
import { PilotFaq } from '@/components/sections/PilotFaq';
import { Footer } from '@/components/sections/Footer';
import type { ParticipantProfile } from '@/types/landing';

export function App() {
  const [profile, setProfile] = useState<ParticipantProfile>('negocio');
  useEffect(() => {
    const keyboard = (e: KeyboardEvent) => { if (!e.metaKey && !e.ctrlKey && !e.altKey) document.documentElement.dataset.input = 'keyboard'; };
    const pointer = () => { document.documentElement.dataset.input = 'pointer'; };
    document.addEventListener('keydown', keyboard, true);
    document.addEventListener('pointerdown', pointer, true);
    return () => { document.removeEventListener('keydown', keyboard, true); document.removeEventListener('pointerdown', pointer, true); };
  }, []);
  return <>
    <HeaderNav />
    <main id="contenido" tabIndex={-1}>
      <HeroSection />
      <ProductDemo />
      <CreativeCities />
      <EcosystemSection onChoose={setProfile} />
      <PilotFaq />
      <FinalCta profile={profile} onChoose={setProfile} />
    </main>
    <Footer />
  </>;
}
