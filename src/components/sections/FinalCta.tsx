import { MapPin, Store, Languages, ArrowUpRight } from 'lucide-react';
import { ParticipationForm } from '@/components/forms/ParticipationForm';
import type { ParticipantProfile } from '@/types/landing';

const profiles: { id: ParticipantProfile; label: string; icon: typeof Store }[] = [
  { id: 'viajero', label: 'Quiero explorar', icon: MapPin },
  { id: 'negocio', label: 'Tengo un negocio', icon: Store },
  { id: 'traductor', label: 'Soy traductor o guía', icon: Languages },
];
export function FinalCta({ profile, onChoose }: { profile: ParticipantProfile; onChoose: (profile: ParticipantProfile) => void }) {
  return <section id="piloto" className="section pilot-section" aria-labelledby="pilot-title"><div className="container">
    <div className="pilot-heading"><div><p className="section-label">Se viene un nuevo recorrido</p><h2 id="pilot-title">El próximo plan<br />lo construimos juntos.</h2></div>
      <p>Estamos preparando el piloto de K’plan. Descubrí cómo podrías ser parte, desde tu curiosidad, tu negocio o tu talento.</p></div>
    <div className="pilot-layout"><aside className="pilot-aside">
      <p className="pilot-prompt">¿Cómo querés participar?</p><div className="profile-selector" role="group" aria-label="Forma de participación">{profiles.map(p => <button key={p.id} type="button" aria-pressed={profile === p.id} aria-controls={'profile-' + p.id} onClick={() => onChoose(p.id)}><p.icon size={21} aria-hidden="true" /><span>{p.label}</span><ArrowUpRight size={18} aria-hidden="true" /></button>)}</div>
      <img className="cultural-art" src="/media/cultural-art.webp" width={900} height={576} loading="lazy" alt="Ilustración de K’plan que conecta cerámica, arquitectura y territorio." />
      <p className="cultural-line">Hay mucho por descubrir.<br />Y mucho por compartir.</p>
    </aside><div className="pilot-form-surface">
      <div id="profile-viajero" hidden={profile !== 'viajero'}><div className="traveler-panel"><MapPin size={32} aria-hidden="true" /><h3>Tu curiosidad ya tiene un punto de partida.</h3><p>Mientras preparamos el piloto, explorá una vista previa de la app y las historias que inspiran K’plan.</p><p>Las fechas de apertura y el canal para sumarte se anunciarán más adelante.</p><a href="#producto" className="button button--primary">Explorar la demo<ArrowUpRight size={18} aria-hidden="true" /></a></div></div>
      <div id="profile-negocio" hidden={profile !== 'negocio'}><ParticipationForm mode="negocio" /></div>
      <div id="profile-traductor" hidden={profile !== 'traductor'}><ParticipationForm mode="traductor" /></div>
    </div></div>
  </div></section>;
}
