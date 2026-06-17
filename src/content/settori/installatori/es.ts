import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software para Instaladores Eléctricos y Fontaneros | Gestión de Intervenciones | GeoTapp',
    description: 'GeoTapp para instaladores eléctricos, fontaneros y empresas de mantenimiento: gestión de partes de trabajo, control horario GPS y pruebas fotográficas. Conforme al Convenio colectivo construcción.',
  },
  hero: {
    badge: 'Software para Instaladores Eléctricos, Fontaneros y Equipos de Mantenimiento',
    h1_line1: 'Trabajos en campo bajo control:',
    h1_line2: 'partes, horas y pruebas en un solo lugar',
    subtitle: 'GeoTapp conecta Flow + TimeTracker para empresas que trabajan entre furgonetas, obras y clientes finales. Las apps para Android e iOS ayudan al técnico en campo; la oficina ve el parte, los tiempos, las pruebas fotográficas y las notas sin tener que llamar a nadie. Conforme al RGPD y al Convenio colectivo de construcción.',
    cta_primary: 'Solicitar una demo',
    cta_note: 'Sin compromiso. Respuesta en 12 horas hábiles.',
  },
  pain: {
    title: 'El problema que ya conoces',
    items: [
      {
        title: 'Disputas sobre horas e intervenciones',
        desc: 'El cliente niega los horarios. El técnico no tiene pruebas. La disputa se alarga semanas y cuesta más que la propia intervención.',
      },
      {
        title: 'La oficina persiguiendo al campo',
        desc: 'El responsable llama a los técnicos para saber dónde están, qué han hecho, cuándo terminan. Cada llamada interrumpe a los dos.',
      },
      {
        title: 'Partes incompletos o perdidos',
        desc: 'Papeles, WhatsApp, correos: los datos llegan incompletos, tarde o no llegan. Reconstruir el resumen final es un trabajo aparte.',
      },
    ],
  },
  workflow: {
    title: 'Cómo funciona en tres pasos',
    subtitle: 'De la furgoneta a la oficina, sin llamadas telefónicas.',
    steps: [
      {
        title: 'El técnico ficha en el lugar de trabajo',
        desc: 'Con GeoTapp TimeTracker registra entrada, salida, fotos y notas directamente desde su smartphone. GPS verificado, RGPD cumplido.',
      },
      {
        title: 'La oficina lo ve todo en tiempo real',
        desc: 'Flow recibe los datos al instante. El responsable ve el parte, el avance, el técnico asignado y las pruebas fotográficas sin llamar.',
      },
      {
        title: 'El informe ya está listo',
        desc: 'Al terminar la intervención, el parte está ya estructurado con datos reales. Sin reconstrucción manual. Sin disputa sin respuesta.',
      },
    ],
  },
  features: {
    title: 'Lo que obtienes',
    items: [
      {
        title: 'Control horario GPS verificable',
        desc: 'Cada entrada y salida está vinculada a la posición, la marca de tiempo y el parte. Defendible ante el cliente y la inspección de trabajo.',
      },
      {
        title: 'Pruebas fotográficas en campo',
        desc: 'El técnico hace fotos directamente desde la app. Imágenes vinculadas a la intervención con fecha y hora. Sin posibilidad de disputa.',
      },
      {
        title: 'Exportación para nóminas',
        desc: 'Exporta presencias mensuales compatibles con A3nómina y Sage. El proceso de nóminas se convierte en una tarea de 10 minutos.',
      },
    ],
  },
  testimonial: {
    quote: 'Antes pasábamos horas recogiendo los partes del campo. Ahora el informe ya está listo cuando el técnico vuelve a la furgoneta.',
    author: 'Carlos M.',
    role: 'Jefe de operaciones, empresa de instalaciones eléctricas',
  },
  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que nos preguntan más antes de empezar.',
    items: [
      {
        q: '¿Es GeoTapp adecuado para instaladores eléctricos y fontaneros?',
        a: 'Sí. GeoTapp ayuda a instaladores eléctricos, fontaneros y empresas de mantenimiento a gestionar partes de trabajo, horarios, presencias y pruebas de campo entre obra y oficina, respetando el Convenio colectivo de construcción.',
      },
      {
        q: '¿Puedo usar GeoTapp para partes de intervención y pruebas fotográficas?',
        a: 'Sí. TimeTracker recoge fotos, notas y fichajes verificables en campo, mientras Flow vincula todo al expediente del parte y al historial operativo.',
      },
      {
        q: '¿GeoTapp ayuda a reducir las disputas sobre horas y trabajos realizados?',
        a: 'Ese es uno de los principales casos de uso: tiempos, posición, notas y pruebas fotográficas hacen que reconstruir y defender lo que se hizo en obra sea mucho más sencillo.',
      },
      {
        q: '¿El comité de empresa debe ser informado antes de implantar GeoTapp?',
        a: 'Sí. El art. 64.5 del Estatuto de los Trabajadores reconoce al comité de empresa el derecho de información previa sobre la implantación y revisión de sistemas de organización y control del trabajo. GeoTapp entrega la documentación lista para la consulta: ámbito de tratamiento, base jurídica, plazos de conservación. Sin información previa al comité no se despliega el sistema, es como lo diseñamos.',
      },
      {
        q: '¿Es la geolocalización GPS conforme al RGPD y a la LOPDGDD?',
        a: 'Sí. GeoTapp registra exclusivamente la entrada y la salida con validación GPS de la ubicación de trabajo, sin seguimiento continuo durante la jornada ni geolocalización fuera del horario laboral. La minimización de datos (art. 5.1.c RGPD) y la finalidad definida están integradas en la arquitectura del producto, no son ajustes opcionales. Los plazos de conservación cumplen el Estatuto de los Trabajadores y la LOPDGDD (art. 87-91 sobre derechos digitales).',
      },
      {
        q: '¿Cómo trata GeoTapp la privacidad del cliente final?',
        a: 'Para los instaladores que entran en casas de particulares, GeoTapp separa dos flujos: la empresa recibe la prueba de presencia en la ubicación del cliente, pero la dirección del cliente no entra en una base de datos centralizada y el trayecto entre visitas no se registra. El técnico, por tanto, no es visible 24/7 y el cliente final conserva su privacidad. Compatible con las certificaciones eléctrica REBT y de gas (Reglamentos ITC).',
      },
      {
        q: '¿Qué datos puedo exportar para la nómina?',
        a: 'GeoTapp exporta resúmenes mensuales de presencia compatibles con A3 Nom, Sage Despachos y Cegid. La exportación contiene por empleado: horas trabajadas por orden, horas extraordinarias, dietas y desplazamientos según convenio, verificados con GPS y marca de tiempo. El gestor laboral recibe un fichero auditable en lugar de una estimación.',
      },
      {
        q: '¿Qué dice la Agencia Española de Protección de Datos sobre la monitorización?',
        a: 'La AEPD exige, para la monitorización sistemática de personal, una evaluación de impacto (EIPD) previa. En GeoTapp esta evaluación está disponible para tu comité de empresa. La base jurídica es el interés legítimo (art. 6.1.f RGPD) fundamentado en la necesidad operativa de la empresa; la proporcionalidad se demuestra mediante registro limitado (solo momentos de fichaje) y plazos de conservación estrictos. Sin caja negra: todos los campos de datos están en la documentación pública.',
      },
    ],
  },
  cta: {
    title: 'Deja de perseguir al campo.',
    subtitle: 'GeoTapp Flow y TimeTracker dan a tu empresa el control operativo que realmente necesitas.',
    primary: 'Solicitar una demo',
    secondary: 'Ver precios',
  },
  schema_sector_name: 'Instaladores eléctricos y fontaneros',
};

export default content;
