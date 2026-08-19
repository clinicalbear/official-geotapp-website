import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    // 2026-08-19: tolto "e instaladores" anche dalla FAQ, ultima rivendicazione
    // esplicita rimasta. Il fix del 04/08 aveva ripulito solo title e badge, ma
    // GSC al 17/08 dice che questa pagina serve ancora 857 impressioni su query
    // "instalad*" (85% del suo totale) a pos 5,3 sulla query di punta, mentre
    // /es/sectores/instaladores/ per la stessa query sta a 55,3: cannibalizzazione
    // ancora aperta, 1.880 impressioni e ZERO click sul cluster.
    // "instalaciones electricas" resta: e' il mestiere dell'elettricista.
    // ---
    // "e instaladores" tolto da title e badge: questa pagina prendeva 726
    // impressioni su query "instaladores" (e le teneva a pos 51-73) contro 14
    // sulle proprie, rubando il posto a /es/sectores/instaladores/ che le stessa
    // query le ha a pos 29. Stesso intervento del 28/06 sulla pagina EN
    // plumbers, dove si tolse "HVAC" per deconflittare dai termoidraulici.
    title: 'App para electricistas: partes de trabajo y prueba GPS',
    description: 'App GPS para electricistas: cada intervención queda registrada con fotos y hora verificada. El cliente discute el trabajo, tú enseñas el parte. Prueba gratis.',
  },
  hero: {
    badge: 'App para electricistas y empresas de instalaciones eléctricas',
    h1_line1: 'App para electricistas:',
    h1_line2: 'informes GPS, pruebas fotográficas y cero disputas.',
    subtitle: 'GeoTapp registra cada intervención eléctrica con GPS, fotos y marcas de tiempo verificables. ¿El cliente disputa el trabajo? Muestra el informe, sin discusión. Tus técnicos están protegidos, tus facturas también.',
    cta_primary: 'Empezar gratis',
    cta_note: 'Sin compromiso. Respuesta en 12 horas laborables.',
  },
  pain: {
    title: 'El problema que todo electricista conoce',
    items: [
      {
        title: 'El cliente niega la intervención o las horas',
        desc: 'Dice que el técnico no estaba o que la instalación no se completó. Sin pruebas verificables, la disputa se alarga semanas.',
      },
      {
        title: 'Sin documentación de la instalación tras el trabajo',
        desc: 'El técnico terminó, pero no hay registro fotográfico ni nota técnica. Reconstruir qué se hizo se vuelve imposible.',
      },
      {
        title: 'La oficina no sabe dónde están los técnicos',
        desc: 'Llamadas, mensajes, incertidumbre. Para informar a un cliente debes primero localizar al técnico.',
      },
    ],
  },
  workflow: {
    title: 'Cómo funciona en tres pasos',
    subtitle: 'De la obra a la oficina, sin llamadas.',
    steps: [
      {
        title: 'El técnico registra la intervención en obra',
        desc: 'Con GeoTapp TimeTracker ficha entrada y salida con GPS, fotografía la instalación y añade notas técnicas desde el móvil.',
      },
      {
        title: 'La oficina ve todo en tiempo real',
        desc: 'GeoTapp Flow recibe los datos al instante. El responsable ve obra, técnico asignado, avance y pruebas fotográficas sin llamar.',
      },
      {
        title: 'El informe es tu prueba',
        desc: 'Al terminar, el sistema genera un informe sellado: GPS, fotos instalación, notas técnicas. Inviolable. El cliente puede verificarlo.',
      },
    ],
  },
  features: {
    title: 'App para electricistas: lo que obtienes con GeoTapp.',
    items: [
      {
        title: 'Fichaje GPS verificable',
        desc: 'Cada entrada y salida se registra con ubicación, marca de tiempo y obra. Defendible ante clientes e inspecciones.',
      },
      {
        title: 'Fotos de instalación selladas',
        desc: 'El técnico fotografía desde la app. Cada imagen está vinculada a GPS y marca de tiempo, inviolable.',
      },
      {
        title: 'Informes digitales automáticos',
        desc: 'Al terminar, el informe está listo: horas, fotos, notas y firma. El técnico lo envía desde la app.',
      },
      {
        title: 'Gestión de obras múltiples',
        desc: 'Asigna intervenciones y recibe alertas si una tarea no se abre o cierra a tiempo.',
      },
      {
        title: 'Exportación para nómina',
        desc: 'Presencias mensuales compatibles con Sage, A3 y Nominasol.',
      },
      {
        title: 'Tus electricistas están protegidos',
        desc: 'Un informe verificable protege al técnico de acusaciones infundadas.',
      },
    ],
  },
  testimonial: {
    quote: 'Con GeoTapp mis técnicos documentan la instalación nada más terminar. Ninguna disputa sobrevive al informe. Las facturas se pagan.',
    author: 'Carlos M.',
    role: 'Propietario, instalaciones eléctricas',
  },
  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que los electricistas nos preguntan antes de empezar.',
    items: [
      {
        q: '¿GeoTapp es adecuada como app para electricistas?',
        a: 'Sí. GeoTapp gestiona intervenciones, partes de trabajo, asistencia y documentación fotográfica para electricistas y empresas de instalaciones eléctricas.',
      },
      {
        q: '¿GeoTapp ayuda a resolver disputas con clientes?',
        a: 'Es el uso principal: GPS, pruebas fotográficas e informes sellados hacen que cualquier disputa infundada se resuelva en minutos.',
      },
      {
        q: '¿GeoTapp cumple con el RGPD para geolocalización de empleados?',
        a: 'Sí. GeoTapp gestiona la geolocalización conforme al RGPD e incluye los formularios de información para trabajadores.',
      },
    ],
  },
  cta: {
    title: 'Cada trabajo bien hecho merece una prueba. GeoTapp la genera.',
    subtitle: 'Informes verificables, GPS real, fotos selladas. Tu trabajo es defendible.',
    primary: 'Empezar gratis',
    secondary: 'Ver precios',
  },
  pricing_hint: {
    label: 'Desde',
    per: 'operario/mes',
    note: 'Prueba gratis 14 días',
  },
  schema_sector_name: 'Electricistas',
};

export default content;
