import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, ArrowLeft, Check, CircleAlert } from 'lucide-react';

type FormMode = 'negocio' | 'traductor';
type Field = { name: string; label: string; placeholder?: string; type?: string; options?: string[]; optional?: boolean; full?: boolean; autoComplete?: string };
type Draft = Record<string, string>;

const common: Field[] = [
  { name: 'name', label: 'Tu nombre', placeholder: 'Nombre y apellido', autoComplete: 'name' },
  { name: 'email', label: 'Correo electrónico', placeholder: 'nombre@ejemplo.com', type: 'email', autoComplete: 'email' },
];
const business: Field[] = [
  { name: 'business', label: 'Nombre del negocio', placeholder: '¿Cómo se llama tu emprendimiento?', full: true, autoComplete: 'organization' },
  { name: 'city', label: 'Ciudad o municipio', placeholder: 'Ej. Granada', autoComplete: 'address-level2' },
  { name: 'category', label: 'Tipo de negocio', options: ['Gastronomía', 'Artesanía', 'Alojamiento', 'Experiencias culturales', 'Otro'] },
];
const talent: Field[] = [
  { name: 'city', label: 'Ciudad o zona de trabajo', placeholder: 'Ej. León', autoComplete: 'address-level2' },
  { name: 'service', label: 'Servicio que ofrecés', options: ['Traducción', 'Interpretación', 'Traducción e interpretación', 'Guía turístico'] },
  { name: 'languages', label: 'Idiomas de trabajo', placeholder: 'Ej. español e inglés', full: true },
];

export function ParticipationForm({ mode }: { mode: FormMode }) {
  // Drafts stay in memory, never in storage and never sent. Both forms remain mounted.
  const [draft, setDraft] = useState<Draft>({});
  const [errors, setErrors] = useState<Draft>({});
  const [reviewing, setReviewing] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const fields: Field[] = [...common, ...(mode === 'negocio' ? business : talent), { name: 'message', label: mode === 'negocio' ? 'Contanos un poco sobre tu negocio' : 'Contanos sobre tu experiencia', optional: true, full: true }];
  const validate = (field: Field, value = '') => {
    if (!field.optional && !value.trim()) return 'Completá este campo.';
    if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Ingresá un correo válido.';
    if (value.trim().length > 0 && value.trim().length < 2) return 'Escribí al menos 2 caracteres.';
    return '';
  };
  const update = (name: string, value: string) => { setDraft(d => ({ ...d, [name]: value })); if (errors[name]) setErrors(e => ({ ...e, [name]: '' })); };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = Object.fromEntries(fields.map(f => [f.name, validate(f, draft[f.name])]));
    setErrors(next);
    const first = fields.find(f => next[f.name]);
    if (first) {
      // Wait for the associated error text to be rendered before moving focus.
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[name="' + first.name + '"]')?.focus());
      return;
    }
    setReviewing(true);
    requestAnimationFrame(() => summaryRef.current?.focus());
  };
  const edit = () => { setReviewing(false); requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>('input')?.focus()); };

  if (reviewing) return <div className="form-review" ref={summaryRef} tabIndex={-1}>
    <div className="review-label"><Check size={20} aria-hidden="true" /> Datos listos para revisar</div>
    <h3>Así quedaría tu solicitud.</h3>
    <p>Revisá tu información. Todavía no se ha enviado ni registrado.</p>
    <dl>{fields.filter(f => draft[f.name]?.trim()).map(f => <div key={f.name}><dt>{f.label}</dt><dd>{draft[f.name].trim()}</dd></div>)}</dl>
    <div className="form-notice"><CircleAlert size={18} aria-hidden="true" /><p>El envío se habilitará más adelante. Los datos se conservan solo mientras esta página permanece abierta.</p></div>
    <button className="button button--secondary" type="button" onClick={edit}><ArrowLeft size={18} aria-hidden="true" />Volver a editar</button>
  </div>;

  return <form ref={formRef} noValidate onSubmit={submit} className="participation-form" aria-label={mode === 'negocio' ? 'Formulario para negocios' : 'Formulario para traductores y guías'}>
    <div className="form-heading"><h3>{mode === 'negocio' ? 'Tu negocio puede ser parte del plan.' : 'Tu talento conecta a las personas.'}</h3><p>Prepará tus datos y conocé el proceso de participación.</p></div>
    <div className="form-fields">{fields.map(f => {
      const id = mode + '-' + f.name;
      const props = { id, name: f.name, value: draft[f.name] || '', required: !f.optional, 'aria-invalid': !!errors[f.name], 'aria-describedby': errors[f.name] ? id + '-error' : undefined, onBlur: () => setErrors(e => ({ ...e, [f.name]: validate(f, draft[f.name]) })) };
      return <div className={'form-field' + (f.full ? ' form-field--full' : '')} key={f.name}>
        <label htmlFor={id}>{f.label}{f.optional && <span> (opcional)</span>}</label>
        {f.options ? <select {...props} onChange={e => update(f.name, e.target.value)}><option value="">Seleccioná una opción</option>{f.options.map(o => <option key={o}>{o}</option>)}</select>
          : f.name === 'message' ? <textarea {...props} rows={3} maxLength={700} onChange={e => update(f.name, e.target.value)} />
          : <input {...props} type={f.type || 'text'} autoComplete={f.autoComplete} placeholder={f.placeholder} maxLength={f.type === 'email' ? 254 : 120} onChange={e => update(f.name, e.target.value)} />}
        {errors[f.name] && <p className="field-error" id={id + '-error'}><CircleAlert size={14} aria-hidden="true" />{errors[f.name]}</p>}
      </div>;
    })}</div>
    <p className="form-notice"><CircleAlert size={18} aria-hidden="true" /><span>Envío disponible próximamente. Podés completar el formulario y revisar tus datos; no se enviarán.</span></p>
    <button className="button button--primary" type="submit">Revisar mis datos<ArrowRight size={18} aria-hidden="true" /></button>
    <p className="form-privacy">Tus datos permanecen en este navegador y se descartan al recargar. No guardamos esta información.</p>
  </form>;
}
