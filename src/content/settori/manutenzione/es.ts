import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App de mantenimiento: equipos e intervenciones con GPS | GeoTapp',
    description:
      'Gestiona equipos de mantenimiento con GPS: intervenciones, turnos, pruebas de servicio. Historial completo por sede del cliente. Prueba GeoTapp gratis.',
  },

  hero: {
    badge: 'App para equipos de mantenimiento',
    h1_line1: 'Tu equipo de mantenimiento,',
    h1_line2: 'cada visita documentada.',
    subtitle:
      'Registra las intervenciones, planifica los turnos y documenta cada visita con la ubicación al fichar y fotos de prueba. Historial completo por instalación y cliente, sin introducir nada a mano.',
    cta_primary: 'Prueba GeoTapp gratis durante 14 días',
    cta_note: 'La prueba no te compromete a nada. No hace falta tarjeta de crédito.',
  },

  pain: {
    title: 'Problemas que resolvemos cada día',
    items: [
      {
        title: '¿Cómo documentas las intervenciones periódicas?',
        desc: 'Informe automático con GPS, horas y fotos de cada visita. El historial está completo y se puede descargar, sin introducir nada a mano.',
      },
      {
        title: '¿Los técnicos llegan de verdad a la hora prevista?',
        desc: 'Lo ves en cuanto el técnico ficha, sin llamadas: la hora y la ubicación de llegada ya están en Flow, para cada sede.',
      },
      {
        title: '¿Cómo demuestras a tus clientes el servicio prestado?',
        desc: 'Historial completo descargable por sede: fechas, horas, GPS y fotos. El cliente lo verifica por su cuenta, sin acceder a tu sistema.',
      },
    ],
  },

  workflow: {
    title: 'Cómo funciona',
    subtitle: 'Tres pasos sencillos. Cero papel. Cero llamadas.',
    steps: [
      {
        title: 'El técnico ficha con GPS al llegar a la sede',
        desc: 'Abre la intervención desde el teléfono. GeoTapp registra la hora y la ubicación en ese momento, y las fotos de prueba. Entre un fichaje y otro no registra nada de forma automática.',
      },
      {
        title: 'Las horas y la intervención se registran automáticamente',
        desc: 'Las horas trabajadas se asocian a la sede y al tipo de intervención. En cada fichaje, el responsable ve el estado de cada visita.',
      },
      {
        title: 'El cliente recibe el informe sellado',
        desc: 'Al terminar la intervención, el sistema genera un informe con GPS, horas y sello. El cliente lo verifica por su cuenta, sin acceso a tu sistema de gestión.',
      },
    ],
  },

  features: {
    title: 'App de mantenimiento: cada intervención documentada.',
    items: [
      {
        title: 'Presencias con ubicación y hora',
        desc: 'Cada llegada, pausa y salida se registra con la ubicación, la hora y la sede asignada, y acaba en el informe sellado. Para mostrarlo al cliente o a la inspección de trabajo cuando haga falta.',
      },
      {
        title: 'Historial de mantenimiento por instalación',
        desc: 'Cada intervención está ligada a la sede o a la instalación. El historial completo se puede consultar y descargar, para ti y para el cliente.',
      },
      {
        title: 'Informes automáticos y sellados',
        desc: 'Al terminar la intervención, el sistema genera un informe sellado: horas, ubicaciones, fotos y sello. El cliente puede verificarlo por su cuenta.',
      },
      {
        title: 'Planificación de turnos y equipos',
        desc: 'Asigna intervenciones, gestiona los turnos y recibe un aviso si una jornada se queda abierta.',
      },
      {
        title: 'Documentación fotográfica',
        desc: 'Los técnicos hacen fotos directamente desde la app: antes, durante y después de la intervención. Cada imagen está geolocalizada y con marca de tiempo.',
      },
      {
        title: 'Fichaje con un toque',
        desc: 'El técnico ficha la llegada con GPS, marca las pausas y cierra la intervención con un toque. Cada foto que hace queda ligada a la intervención y a sus horarios.',
      },
    ],
  },

  testimonial: {
    quote:
      'Con GeoTapp cada intervención de mantenimiento queda documentada, y a los clientes les enviamos el informe de cada visita.',
    author: 'Andrés L.',
    role: 'Responsable de mantenimiento, facility management - Centro de Italia',
  },

  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que más nos preguntan antes de empezar.',
    items: [
      {
        q: '¿Cómo documentas las intervenciones periódicas de mantenimiento?',
        a: 'GeoTapp genera automáticamente un informe de cada visita con GPS, horas y fotos. El historial está completo y se puede descargar por instalación o por sede del cliente, sin introducir nada a mano.',
      },
      {
        q: '¿Los técnicos llegan de verdad a la hora prevista?',
        a: 'Con GeoTapp ves la hora de llegada y la ubicación de cada técnico en el momento en que ficha. Sin llamadas: el dato ya está en Flow.',
      },
      {
        q: '¿Cómo demuestro a los clientes el servicio de mantenimiento prestado?',
        a: 'GeoTapp mantiene un historial completo descargable por cada sede de cliente: fechas, horas, GPS y fotos de cada intervención. Al cliente le envías el informe sellado, que verifica por su cuenta sin acceder a tu sistema.',
      },
      {
        q: '¿GeoTapp funciona para el mantenimiento de instalaciones y facility management?',
        a: 'Sí. GeoTapp lo usan empresas de mantenimiento, de facility management y empresas con equipos repartidos en varias sedes. Sirve desde un equipo de pocas personas hasta una empresa con cientos de técnicos.',
      },
      {
        q: '¿GeoTapp cumple el RGPD en la geolocalización?',
        a: 'GeoTapp está diseñado para moverse dentro del RGPD: registra la ubicación solo cuando el técnico ficha (entrada, pausas, salida) o hace una foto de prueba, hace firmar la información a los empleados en la app antes del primer fichaje y no recoge datos innecesarios.',
      },
      {
        q: '¿Cuánto cuesta GeoTapp para una empresa de mantenimiento?',
        a: 'GeoTapp Flow cuesta desde 39 € al mes; los puestos TimeTracker para los técnicos cuestan 3 € al mes cada uno hasta 25. Suscripción con duración mínima de 12 meses. Antes puedes probarlo gratis durante 14 días, sin tarjeta. Precios sin IVA.',
      },
    ],
  },

  cta: {
    title: 'Cada intervención de mantenimiento merece una prueba. GeoTapp la genera.',
    subtitle:
      'Informes verificables, ubicación en los fichajes, historial completo de cada instalación.',
    primary: 'Prueba gratis durante 14 días',
    secondary: 'Ver precios',
  },

  pricing_hint: {
    label: 'Puestos TimeTracker desde',
    per: 'por operario al mes, más el plan Flow desde 39 € al mes',
    note: 'Prueba gratuita de 14 días',
  },

  schema_sector_name: 'Mantenimiento',

  schema_faq: [
    {
      question: '¿Cómo documentas las intervenciones periódicas de mantenimiento?',
      answer:
        'GeoTapp genera automáticamente un informe de cada visita con GPS, horas y fotos. El historial está completo y se puede descargar por instalación o por sede del cliente, sin introducir nada a mano.',
    },
    {
      question: '¿Los técnicos llegan de verdad a la hora prevista?',
      answer:
        'Con GeoTapp ves la hora de llegada y la ubicación de cada técnico en el momento en que ficha. El dato ya está en Flow, sin llamadas.',
    },
    {
      question: '¿Cómo demuestro a los clientes el servicio de mantenimiento prestado?',
      answer:
        'GeoTapp mantiene un historial completo descargable por cada sede de cliente: fechas, horas, GPS y fotos de cada intervención. Al cliente le envías el informe sellado, que verifica por su cuenta.',
    },
  ],
};

export default content;
