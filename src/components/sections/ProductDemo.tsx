import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { AppPreview } from '@/components/ui/AppPreview';
import { demoSteps } from '@/content/landing-content';
export function ProductDemo() {
  const [active, setActive] = useState(0);
  const [visited, setVisited] = useState([0]);
  const select = (index: number) => { setActive(index); setVisited(v => v.includes(index) ? v : [...v, index]); };
  return <section id="producto" className="section demo-section" aria-labelledby="demo-title"><div className="container demo-layout">
    <div className="demo-copy">
      <p className="section-label"><span className="small-route" aria-hidden="true" /> Así funciona K’plan</p>
      <h2 id="demo-title">De encontrar un lugar<br /> a tener un plan.</h2>
      <p className="section-intro">Todo empieza con la curiosidad. Nosotros te ayudamos a darle forma al recorrido.</p>
      <ol className="demo-steps">{demoSteps.map((step, i) => <li key={step.screen}>
        <button type="button" className="demo-step" aria-pressed={active === i} aria-controls="demo-preview" onClick={() => select(i)}>
          <span className="step-number" aria-hidden="true">0{i + 1}</span>
          <span><strong>{step.title}</strong><span className="step-description">{step.description}</span></span>
          <ArrowRight size={19} className="step-arrow" aria-hidden="true" />
        </button>
      </li>)}</ol>
    </div>
    <div className="demo-visual" id="demo-preview" role="region" aria-label="Demostración de K’plan">
      <div className="demo-stage-label"><span><MapPin size={15} aria-hidden="true" /> Granada</span><span>Vista previa del producto</span></div>
      <div className="demo-screen-stack">{demoSteps.map((step, i) => <div className="demo-screen-layer" data-active={active === i} aria-hidden={active !== i} key={step.screen}>
        {visited.includes(i) && <AppPreview screen={step.screen} eager />}
      </div>)}</div>
      <div className="demo-caption" aria-live="polite" aria-atomic="true"><strong>{demoSteps[active].label}</strong><p>{demoSteps[active].detail}</p></div>
      <p className="demo-disclaimer">Datos ilustrativos. No realiza reservas.</p>
    </div>
  </div></section>;
}
