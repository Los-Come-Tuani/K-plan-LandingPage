import { ArrowDown, MapPin, Route, CalendarDays, UsersRound } from 'lucide-react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { AppPreview } from '@/components/ui/AppPreview';
import { Photo } from '@/components/ui/Photo';
export function HeroSection() {
  return <section id="inicio" className="hero" aria-labelledby="hero-title"><div className="container">
    <div className="hero-copy">
      <p className="hero-location"><MapPin size={16} aria-hidden="true" /> Hecho para descubrir Nicaragua</p>
      <h1 id="hero-title">La Nicaragua creativa,<br className="desktop-break" /> <span>en tu próximo plan.</span></h1>
      <p className="hero-description">Descubrí circuitos, lugares y eventos, y organizá tu recorrido desde K’plan.</p>
      <div className="hero-actions"><ButtonLink href="#piloto">Unirme al piloto</ButtonLink>
        <ButtonLink href="#producto" variant="text" arrow={false}>Ver cómo funciona <ArrowDown size={18} aria-hidden="true" /></ButtonLink></div>
      <p className="hero-note">Estamos preparando el piloto. Esta es una vista previa.</p>
    </div>
    <div className="hero-scene">
      <div className="hero-photo">
        <Photo name="granada" alt="La cúpula de la catedral de Granada iluminada por el sol de la tarde, con el lago al fondo." eager sizes="(max-width: 700px) 100vw, 1248px" />
        <div className="hero-photo-caption"><MapPin size={18} aria-hidden="true" /><div><strong>Granada, Nicaragua</strong><span>Una ciudad. Muchas historias por vivir.</span></div></div>
      </div>
      <div className="hero-device"><AppPreview screen="home" eager /></div>
    </div>
    <div className="hero-features" aria-label="La propuesta de K’plan">
      <span><Route aria-hidden="true" />Circuitos con historia</span><span><CalendarDays aria-hidden="true" />Cultura que se vive</span><span><UsersRound aria-hidden="true" />Conexión con lo local</span>
    </div>
  </div></section>;
}
