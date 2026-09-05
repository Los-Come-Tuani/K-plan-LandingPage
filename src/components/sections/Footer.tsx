import logo from '@/assets/logotipo-kplan.svg';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { navItems, photoCredits } from '@/content/landing-content';

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div className="footer-brand"><a href="#inicio"><img src={logo} width={108} height={48} alt="K’plan, volver al inicio" /></a><p>La cultura se descubre.<br />Los mejores planes se viven.</p></div>
      <nav aria-label="Pie de página">{navItems.map(item => <a key={item.href} href={item.href}>{item.label}<ArrowUpRight size={15} aria-hidden="true" /></a>)}<a href="#preguntas">Preguntas del piloto<ArrowUpRight size={15} aria-hidden="true" /></a></nav>
      <div className="footer-origin"><MapPin size={18} aria-hidden="true" /><p>Desde Nicaragua,<br /><strong>para descubrirla de cerca.</strong></p></div>
    </div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} K’plan · Piloto en preparación</p><div className="footer-disclosures">
      <details><summary>Privacidad de esta vista previa</summary><p>Los formularios no transmiten datos ni los guardan en almacenamiento persistente. Al cerrar o recargar la página se descartan. No se utilizan cookies de seguimiento ni analítica de terceros. Las solicitudes de archivos al servidor pueden generar registros técnicos del alojamiento.</p></details>
      <details><summary>Créditos fotográficos</summary><div className="credits-list">{photoCredits.map(c => <p key={c.place}><a href={c.source} target="_blank" rel="noreferrer">{c.place}: {c.author}</a> · <a href={c.licenseUrl} target="_blank" rel="noreferrer">{c.license}</a>. Recorte, redimensionado y conversión a WebP. Las adaptaciones conservan la licencia indicada.</p>)}<p>Interfaz e ilustración cultural: recursos del proyecto K’plan.</p></div></details>
    </div></div>
  </div></footer>;
}
