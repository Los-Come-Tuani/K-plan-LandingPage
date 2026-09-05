import type { DemoStep, Experience } from '@/types/landing';

export const navItems = [
  { label: 'Cómo funciona', href: '#producto' },
  { label: 'Qué descubrir', href: '#ciudades' },
  { label: 'Para aliados', href: '#aliados' },
];
export const demoSteps: DemoStep[] = [
  { title: 'Descubrí lo que te rodea', description: 'Circuitos, lugares y eventos. Un punto de partida para encontrar tu próximo plan.', screen: 'home', label: 'Explorá el mapa', detail: 'El mapa y los circuitos se encuentran en la misma pantalla. Así empieza un recorrido por Granada.' },
  { title: 'Elegí tu circuito', description: 'Conocé las paradas, el tiempo del recorrido y esos detalles que hacen la diferencia.', screen: 'circuit', label: 'Conocé el recorrido', detail: 'Una vista del circuito reúne su descripción y los detalles que te ayudan a elegir antes de salir.' },
  { title: 'Organizá la visita', description: 'Elegí la fecha, quiénes te acompañan y el horario que va con vos.', screen: 'planning', label: 'Dale espacio en tu agenda', detail: 'La selección de horario es parte de la planificación. Esta vista previa no realiza una reserva.' },
];
export const experiences: Experience[] = [
  { id: 'granada', city: 'Granada', category: 'Historia y ciudad', title: 'Historias que se recorren a pie.', description: 'Calles de colores, arquitectura y una pausa para conocer el sabor local.', image: 'granada', alt: 'Cúpula de la catedral de Granada al final de la tarde, con el lago al fondo.', details: ['Empezá por el centro histórico y sus espacios públicos.', 'Dejá tiempo para descubrir la gastronomía y conversar con la gente del lugar.', 'La demo de K’plan muestra cómo organizar un circuito de ejemplo en Granada.'] },
  { id: 'masaya', city: 'Masaya', category: 'Oficios y tradición', title: 'El valor de lo hecho a mano.', description: 'Cerámica y saberes que conectan generaciones en San Juan de Oriente, Masaya.', image: 'masaya', alt: 'Taller de cerámica en San Juan de Oriente, departamento de Masaya, con piezas expuestas y un jardín.', details: ['Acercate a la tradición cerámica de San Juan de Oriente, en el departamento de Masaya.', 'Conocé el trabajo que hay detrás de una pieza artesanal.', 'Esta historia es inspiración para explorar; no anuncia un taller disponible para reservar.'] },
  { id: 'leon', city: 'León', category: 'Cultura y patrimonio', title: 'Otra forma de mirar la ciudad.', description: 'Arquitectura, memoria y perspectivas que invitan a detenerse.', image: 'leon', alt: 'Cúpulas y balaustrada blanca del techo de la catedral de León bajo un cielo azul.', details: ['Descubrí los detalles de la arquitectura de la ciudad.', 'Conectá lugares, historias y talento local en tu próximo recorrido.', 'Las visitas, horarios y circuitos del piloto se anunciarán cuando estén confirmados.'] },
];
export const faqItems = [
  { question: '¿Ya puedo descargar K’plan?', answer: 'Estamos preparando el piloto. Por ahora podés conocer la propuesta y explorar la demostración de la app en esta página. La descarga pública todavía no está disponible.' },
  { question: '¿La demostración permite reservar?', answer: 'No. Es una vista previa del diseño de la aplicación. Las fechas, precios, reseñas y cantidades que aparecen en las pantallas son ejemplos; no representan disponibilidad ni reservas reales.' },
  { question: '¿Cómo puede participar mi negocio?', answer: 'Estamos preparando la participación de negocios locales y emprendimientos. Podés explorar el formulario para negocios y revisar los datos que necesitaremos. El envío de solicitudes se habilitará más adelante.' },
  { question: '¿Hay espacio para traductores y guías?', answer: 'Sí, el talento local forma parte de la propuesta. El formulario de talento permite preparar información de traducción, interpretación o guía turística. Las condiciones de participación se definirán durante el piloto.' },
  { question: '¿En qué ciudades estará disponible?', answer: 'La propuesta se inspira en las ciudades y circuitos creativos propuestas. Conformadas por Bluefields, Estelí, Granada, Juigalpa, Matagalpa, Masaya, Managua, Nagarote, León, San Juan de Oriente' },
];
export const photoCredits = [
  { place: 'Granada', author: 'JacobKlinger', source: 'https://commons.wikimedia.org/wiki/File:Catedral_de_Granada_from_Bell_Tower.JPG', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
  { place: 'San Juan de Oriente, Masaya', author: 'Martin Kulldorff', source: 'https://commons.wikimedia.org/wiki/File:Taller_de_Ceramica.jpg', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
  { place: 'León', author: 'Martin Kulldorff', source: 'https://commons.wikimedia.org/wiki/File:Leon_Catedral_Techo_4.jpg', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
];
