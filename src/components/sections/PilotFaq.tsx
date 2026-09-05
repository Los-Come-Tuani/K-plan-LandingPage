import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/content/landing-content';

export function PilotFaq() {
  return <section id="preguntas" className="section faq-section" aria-labelledby="faq-title"><div className="container faq-layout">
    <div><h2 id="faq-title">Antes de<br />empezar el recorrido.</h2><p className="section-intro">Lo que necesitás saber sobre esta primera etapa de K’plan.</p></div>
    <div className="faq-list">{faqItems.map(item => <details key={item.question} className="faq-item">
      <summary>{item.question}<ChevronDown size={20} aria-hidden="true" /></summary><p>{item.answer}</p>
    </details>)}</div>
  </div></section>;
}
