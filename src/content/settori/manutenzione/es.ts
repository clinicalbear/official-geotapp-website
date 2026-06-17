import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App Mantenimiento: Gestión de Equipos e Intervenciones con GPS | GeoTapp',
    description:
      'Gestiona equipos de mantenimiento con GPS: intervenciones, turnos, pruebas de servicio. Historial completo por instalación o sede del cliente. Prueba GeoTapp gratis.',
  },

  hero: {
    badge: 'App para equipos de mantenimiento',
    h1_line1: 'Tu equipo de mantenimiento,',
    h1_line2: 'siempre bajo control.',
    subtitle:
      'Registra intervenciones, planifica turnos y documenta cada visita con GPS real y pruebas fotográficas. Historial completo por instalación y cliente, sin introducción manual de datos.',
    cta_primary: 'Prueba GeoTapp gratis durante 14 días',
    cta_note: 'Sin compromiso. Sin tarjeta de crédito.',
  },

  pain: {
    title: 'Problemas que resolvemos cada día',
    items: [
      {
        title: '¿Cómo documentas las visitas de mantenimiento periódicas?',
        desc: 'Informe automático con GPS, horas y fotos por cada visita. Historial completo y descargable, sin introducción manual.',
      },
      {
        title: '¿Los técnicos llegan realmente a tiempo?',
        desc: 'Verificación en tiempo real sin llamadas. GPS y hora de llegada ya están disponibles en tu panel, por cada sede.',
      },
      {
        title: '¿Cómo demuestras el servicio prestado?',
        desc: 'Historial completo descargable por sede del cliente: fechas, horas, GPS y fotos. El cliente verifica por su cuenta, sin acceso a tu sistema.',
      },
    ],
  },

  workflow: {
    title: 'Cómo funciona',
    subtitle: 'Tres pasos sencillos. Cero papel. Cero llamadas.',
    steps: [
      {
        title: 'El técnico ficha GPS al llegar',
        desc: 'Abre la intervención desde su smartphone. GeoTapp registra coordenadas GPS reales, marca de tiempo y fotos, todo automático e inalterable.',
      },
      {
        title: 'Las horas y la intervención se registran automáticamente',
        desc: 'Cada minuto trabajado se asocia a la sede y al tipo de intervención. El responsable ve el estado en tiempo real de cada visita.',
      },
      {
        title: 'El cliente recibe el informe firmado digitalmente',
        desc: 'Al finalizar la intervención, el sistema genera un informe con GPS, horas y firma digital. El cliente lo verifica de forma autónoma.',
      },
    ],
  },

  features: {
    title: 'App de mantenimiento: control total sobre cada intervención.',
    items: [
      {
        title: 'Presencia verificada por GPS',
        desc: 'Cada llegada y salida está certificada con GPS real, marca de tiempo y sede asignada. Defendible ante el cliente y ante inspecciones.',
      },
      {
        title: 'Historial de mantenimiento por instalación',
        desc: 'Cada intervención está vinculada a la sede o instalación. El historial completo es consultable y descargable.',
      },
      {
        title: 'Informes automáticos e inalterables',
        desc: 'Tras cada intervención, el sistema genera un informe sellado: horas, GPS, fotos y firma digital.',
      },
      {
        title: 'Planificación de equipos',
        desc: 'Asigna intervenciones, gestiona turnos y recibe alertas automáticas si una tarea no se abre o cierra a tiempo.',
      },
      {
        title: 'Documentación fotográfica',
        desc: 'Los técnicos toman fotos directamente desde la app: antes, durante y después de la intervención. Cada imagen está geolocalizada con marca de tiempo.',
      },
      {
        title: 'Funciona sin conexión',
        desc: 'En sedes sin cobertura, los datos se guardan localmente y se sincronizan en cuanto vuelve la conexión.',
      },
    ],
  },

  testimonial: {
    quote:
      'Con GeoTapp cada visita de mantenimiento queda registrada. Los clientes ven el historial completo por instalación y ya no hay discusiones sobre horas o trabajos realizados.',
    author: 'Andrés L.',
    role: 'Responsable de mantenimiento, facility management - España',
  },

  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que nos preguntan más a menudo antes de empezar.',
    items: [
      {
        q: '¿Cómo se documentan las visitas de mantenimiento periódicas?',
        a: 'GeoTapp genera automáticamente un informe por visita con GPS, horas y fotos. Historial completo por instalación o sede del cliente, sin introducción manual.',
      },
      {
        q: '¿Los técnicos llegan realmente a tiempo?',
        a: 'Con GeoTapp puedes verificar la hora de llegada y la posición GPS de cada técnico en tiempo real. Sin necesidad de llamar.',
      },
      {
        q: '¿Cómo demuestro al cliente el servicio de mantenimiento prestado?',
        a: 'GeoTapp mantiene un historial completo descargable por sede del cliente: fechas, horas, GPS y fotos. El cliente verifica por su cuenta.',
      },
      {
        q: '¿Funciona GeoTapp para mantenimiento de instalaciones y facility management?',
        a: 'Sí. GeoTapp es utilizado por empresas de mantenimiento, facility management y organizaciones con equipos distribuidos. La plataforma escala de 3 a 300 técnicos.',
      },
      {
        q: '¿GeoTapp cumple con el RGPD?',
        a: 'Sí. GeoTapp solo geolocaliza durante las horas de trabajo activas, incluye formularios de información al empleado y no recopila datos innecesarios.',
      },
      {
        q: '¿Cuánto cuesta GeoTapp para una empresa de mantenimiento?',
        a: 'Los planes empiezan desde pocos euros por técnico al mes. Prueba gratis 14 días, sin compromiso.',
      },
    ],
  },

  cta: {
    title: 'Cada intervención de mantenimiento merece una prueba. GeoTapp la genera.',
    subtitle:
      'Informes verificables, GPS real, historial completo por instalación. Tu trabajo se vuelve defendible.',
    primary: '¡Empieza gratis ahora!',
    secondary: 'Ver Precios',
  },

  pricing_hint: {
    label: 'Desde',
    per: 'técnico/mes',
    note: 'Prueba gratuita de 14 días',
  },

  schema_sector_name: 'Mantenimiento',

  schema_faq: [
    {
      question: '¿Cómo se documentan las visitas de mantenimiento periódicas?',
      answer:
        'GeoTapp genera automáticamente un informe por visita con GPS, horas y fotos. Historial completo por instalación o sede del cliente.',
    },
    {
      question: '¿Los técnicos llegan realmente a tiempo?',
      answer:
        'Con GeoTapp puedes verificar la hora de llegada y la posición GPS de cada técnico en tiempo real. Los datos ya están en tu panel.',
    },
    {
      question: '¿Cómo demuestro el servicio de mantenimiento prestado?',
      answer:
        'GeoTapp mantiene un historial completo descargable por sede del cliente: fechas, horas, GPS y fotos. El cliente verifica por su cuenta.',
    },
  ],
};

export default content;
