import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para instaladores: gestión de intervenciones GPS | GeoTapp',
    description: 'Documenta intervenciones y horas de instaladores, con la posición en cada fichaje. Pruebas de servicio automáticas para cuando alguien discute. Prueba gratis.',
  },
  hero: {
    badge: 'App para instaladores, empresas de instalaciones y técnicos',
    h1_line1: 'Cada intervención documentada,',
    h1_line2: 'cada hora registrada.',
    subtitle: 'Para instaladores eléctricos, fontaneros, técnicos de climatización y empresas de instalaciones. GeoTapp une Flow + TimeTracker para registrar GPS, horas y fotos de cada trabajo, de la furgoneta a la oficina sin llamadas.',
    cta_primary: 'Prueba GeoTapp gratis durante 14 días',
    cta_note: 'La prueba no te ata a nada. No hace falta tarjeta de crédito.',
  },
  pain: {
    title: 'Problemas que resolvemos cada día',
    items: [
      {
        title: 'Los clientes discuten las horas de intervención',
        desc: 'Fichajes GPS con marca de tiempo como prueba verificable. El dato queda sellado en el momento de la intervención: cualquier modificación posterior es detectable.',
      },
      {
        title: 'Persigues a los técnicos para saber dónde están',
        desc: 'Cada fichaje del técnico llega enseguida al panel, con hora y posición. Sabes dónde han estado sin hacer una llamada.',
      },
      {
        title: 'Partes de trabajo incompletos o nunca entregados',
        desc: 'Los datos llegan tarde, incompletos o no llegan. Reconstruir horas e intervenciones a final de mes es un trabajo aparte que cuesta tiempo y dinero.',
      },
    ],
  },
  workflow: {
    title: 'Cómo funciona',
    subtitle: 'Tres pasos sencillos. Cero papel. Cero llamadas.',
    steps: [
      {
        title: 'El técnico ficha con GPS al empezar la intervención',
        desc: 'Abre el trabajo desde el smartphone. GeoTapp registra las coordenadas GPS del momento, la marca de tiempo y las fotos, todo automático: cualquier modificación es detectable.',
      },
      {
        title: 'Las horas se registran automáticamente por trabajo',
        desc: 'Cada minuto trabajado se asocia al trabajo correcto. El responsable ve, fichaje a fichaje, quién está trabajando dónde.',
      },
      {
        title: 'El informe para el cliente se genera sin teclear nada',
        desc: 'Al terminar la intervención, el sistema genera un informe con GPS, horas y sello. El cliente lo recibe y lo verifica de forma autónoma.',
      },
    ],
  },
  differenza: {
    title: 'App para instaladores: ¿fichaje o prueba verificable?',
    subtitle: 'La mayoría de las apps registra la hora. GeoTapp produce pruebas verificables.',
    rows: [
      {
        label: 'Qué registra',
        competitor: 'Hora de entrada y salida',
        geotapp: 'Hora + posición en el fichaje + fotos + actividad realizada',
      },
      {
        label: 'Quién puede verificar',
        competitor: 'Solo tu oficina',
        geotapp: 'Tú, el cliente, un tercero, de forma autónoma',
      },
      {
        label: 'En caso de discusión',
        competitor: 'Solo tu palabra',
        geotapp: 'Informe sellado, cualquier modificación es detectable',
      },
      {
        label: 'Parte de intervención',
        competitor: 'Manual o inexistente',
        geotapp: 'Generado automáticamente con GPS y fotos',
      },
      {
        label: 'Protección de datos (RGPD)',
        competitor: 'A menudo por comprobar',
        geotapp: 'Construido para moverse dentro de los límites del RGPD, con modelos de documentación incluidos',
      },
    ],
  },
  prima_dopo: {
    title: 'Lo que pasa ahora. Lo que pasa con GeoTapp.',
    prima: [
      'El cliente discute la hora de fin de la intervención y pide un descuento.',
      'El técnico dice «hice 4 horas». El cliente dice «me salen 2».',
      'No tienes pruebas. La discusión dura días y el cobro está en riesgo.',
      'A final de mes reconstruyes horas y trabajos a partir de mensajes de WhatsApp.',
    ],
    dopo: [
      '¿El cliente discute? Abres el informe: fotos, posición, horas, sello.',
      'Se lo envías. La discusión termina en un minuto.',
      'Tienes una prueba que mostrar. El técnico también tiene algo en la mano.',
      'A final de mes la exportación ya está lista, con horas y trabajos agregados automáticamente.',
    ],
  },
  features: {
    title: 'Funciones pensadas para instaladores',
    items: [
      {
        title: 'Fichaje GPS verificable',
        desc: 'Cada entrada, pausa y salida queda vinculada a posición, hora y trabajo. Para mostrar al cliente o a la inspección cuando haga falta.',
      },
      {
        title: 'Pruebas fotográficas selladas',
        desc: 'El técnico hace fotos desde la app. Cada imagen queda vinculada a la intervención con GPS y marca de tiempo: cualquier modificación posterior a la generación es detectable.',
      },
      {
        title: 'Gestión de trabajos en varias obras',
        desc: 'Asigna trabajos, sigue el avance de cada intervención y recibe un aviso si una jornada se queda abierta.',
      },
      {
        title: 'Partes digitales automáticos',
        desc: 'Al terminar la intervención el parte ya está listo: horas, fotos y notas. Sin papel, sin llamadas. La oficina lo envía al cliente desde Flow con un clic.',
      },
      {
        title: 'Exportación para nóminas y facturación',
        desc: 'Exporta la asistencia mensual y las horas por trabajo. Nóminas y facturación parten de los datos ya listos, sin copiar nada.',
      },
      {
        title: 'Posición solo al fichar',
        desc: 'Geolocalización construida para moverse dentro de los límites del RGPD: nunca en continuo, y aviso informativo a los trabajadores firmado en la app antes de fichar.',
      },
    ],
  },
  testimonial: {
    quote: 'Cuando un cliente discute las horas, abrimos el informe con posición y fotos y lo comprueba él mismo.',
    author: 'Roberto F.',
    role: 'Gerente, empresa de instalaciones, 20 técnicos',
  },
  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que más nos preguntan antes de empezar.',
    items: [
      {
        q: '¿Los clientes discuten las horas de intervención?',
        a: 'Con GeoTapp los fichajes GPS llevan marca de tiempo del momento de la intervención y cualquier modificación es detectable. Son una prueba verificable de las horas realizadas cuando alguien las pone en duda.',
      },
      {
        q: '¿Cómo sigo a varios equipos en trabajos distintos?',
        a: 'GeoTapp muestra en un mapa los fichajes de hoy, actualizados con cada intervención abierta o cerrada. Sabes en qué trabajo están tus técnicos, sin hacer llamadas.',
      },
      {
        q: '¿Cómo agilizar la facturación de las intervenciones?',
        a: 'GeoTapp genera automáticamente la exportación de horas y trabajos lista para tu programa de gestión. Nada que copiar a mano: menos errores, y la facturación parte de datos ya preparados.',
      },
    ],
  },
  cta: {
    title: 'Prueba GeoTapp gratis durante 14 días',
    subtitle: 'La prueba no te ata a nada. No hace falta tarjeta de crédito.',
    primary: 'Empezar prueba gratuita de 14 días',
    secondary: 'Ver precios',
  },
  pricing_hint: {
    label: 'Puestos TimeTracker desde',
    per: 'por técnico al mes, más el plan Flow desde 39 € al mes',
    note: 'Prueba gratuita de 14 días',
  },
  schema_sector_name: 'Instalaciones',
  schema_faq: [
    {
      question: '¿Los clientes discuten las horas de intervención?',
      answer: 'Con GeoTapp los fichajes GPS llevan marca de tiempo del momento de la intervención y cualquier modificación es detectable. Son una prueba verificable de las horas realizadas cuando alguien las pone en duda.',
    },
    {
      question: '¿Cómo sigo a varios equipos en trabajos distintos?',
      answer: 'GeoTapp muestra en un mapa los fichajes de hoy, actualizados con cada intervención abierta o cerrada. Sabes en qué trabajo están tus técnicos, sin hacer llamadas.',
    },
    {
      question: '¿Cómo agilizar la facturación de las intervenciones?',
      answer: 'GeoTapp genera automáticamente la exportación de horas y trabajos lista para tu programa de gestión. Nada que copiar a mano: menos errores, y la facturación parte de datos ya preparados.',
    },
  ],
};

export default content;
