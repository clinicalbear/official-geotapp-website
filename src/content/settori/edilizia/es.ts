import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para obras: fichaje GPS y gestión de equipos | GeoTapp',
    description: 'Gestiona asistencia, turnos y seguridad en obra con fichajes GPS. Informes sellados y automáticos, pensados para el RGPD, para empresas constructoras.',
  },
  hero: {
    badge: 'App para empresas constructoras y obras',
    h1_line1: 'Tu obra documentada,',
    h1_line2: 'en cada fichaje.',
    subtitle: 'Fichajes con posición, gestión de equipos e informes sellados automáticos. Cero papeleo, y cuando alguien discute tienes una prueba que mostrar. GeoTapp une Flow + TimeTracker para quien gestiona obras, subcontratistas y dirección facultativa.',
    cta_primary: 'Pruébalo en una obra real',
    cta_note: '14 días, hasta 50 operarios sobre el terreno, sin tarjeta de crédito.',
  },
  pain: {
    title: 'Problemas que resolvemos cada día',
    items: [
      {
        title: '¿Quién estaba en obra y cuándo?',
        desc: 'Cada fichaje registra la hora y la posición captadas por el teléfono en ese momento, no introducidas a mano, y pasa al informe sellado que la dirección facultativa puede verificar.',
      },
      {
        title: '¿Cómo gestionas a los subcontratistas?',
        desc: 'Registra la asistencia de todos los equipos, subcontratistas incluidos, desde un único panel que se actualiza en cada fichaje.',
      },
      {
        title: '¿Los informes de obra te llevan horas?',
        desc: 'Se generan automáticamente con GPS, horas y asistencia. Listos para la dirección facultativa y los partes de avance de obra, sin introducir nada a mano.',
      },
    ],
  },
  workflow: {
    title: 'Cómo funciona',
    subtitle: 'Tres pasos sencillos. Cero papel. Cero llamadas.',
    steps: [
      {
        title: 'El operario ficha a la entrada de la obra',
        desc: 'Abre la jornada desde el smartphone. GeoTapp registra la hora y la posición en ese momento y, si hace falta, las fotos de prueba. Entre un fichaje y otro no registra nada de forma automática.',
      },
      {
        title: 'El jefe de obra ve los fichajes en cuanto llegan',
        desc: 'Un único panel para todos los equipos y todas las obras. Quién ha fichado, dónde y a qué hora, sin perseguir a nadie por teléfono.',
      },
      {
        title: 'El informe está listo para el avance de obra y la dirección facultativa',
        desc: 'Al final de la jornada o de la obra, el sistema genera un informe sellado con asistencia, GPS y horas. Listo para la dirección facultativa sin un minuto de trabajo manual.',
      },
    ],
  },
  differenza: {
    title: 'App de obra: ¿fichaje o prueba verificable?',
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
        geotapp: 'Tú, la dirección facultativa, un tercero, de forma autónoma',
      },
      {
        label: 'En caso de discusión',
        competitor: 'Solo tu palabra',
        geotapp: 'Informe sellado, cualquier modificación es detectable',
      },
      {
        label: 'Informe de obra',
        competitor: 'Manual o inexistente',
        geotapp: 'Generado automáticamente con GPS y asistencia',
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
      'La dirección facultativa pregunta quién estaba en obra el martes. Nadie lo sabe con certeza.',
      'Los partes de asistencia llegan incompletos, tarde o ilegibles.',
      'El subcontratista discute las horas. No tienes pruebas.',
      'Preparas el parte de avance a mano, reconstruyendo los datos a partir de mensajes de WhatsApp.',
    ],
    dopo: [
      'La dirección facultativa pregunta quién estaba en obra el martes. Abres los fichajes de ese día: está todo.',
      'La asistencia se registra en cada fichaje, con hora y posición.',
      '¿El subcontratista discute? Muestras el informe sellado.',
      'El parte de avance ya está listo: horas, asistencia y GPS agregados automáticamente.',
    ],
  },
  features: {
    title: 'Funciones pensadas para la obra',
    items: [
      {
        title: 'Asistencia GPS sellada',
        desc: 'Cada entrada, pausa y salida de la obra se registra con posición y hora. Para mostrar a la dirección facultativa, al cliente y a la inspección cuando haga falta.',
      },
      {
        title: 'Panel multiobra',
        desc: 'Sigue varias obras desde una sola pantalla: en cada obra ves quién ha fichado, dónde y a qué hora, en cuanto llega el fichaje.',
      },
      {
        title: 'Informes automáticos de avance',
        desc: 'El sistema genera informes con asistencia, horas y GPS agregados. Listos para los partes de avance y la dirección facultativa, sin introducir nada a mano.',
      },
      {
        title: 'Control de subcontratistas',
        desc: 'Cada equipo, interno o externo, ficha desde el smartphone. El jefe de obra ve a todos en un único panel, sin perseguir a nadie.',
      },
      {
        title: 'Pruebas fotográficas selladas',
        desc: 'Los operarios hacen fotos desde la app. Cada imagen queda vinculada a la obra con GPS y marca de tiempo: cualquier modificación posterior es detectable.',
      },
      {
        title: 'Posición solo al fichar',
        desc: 'Geolocalización construida para moverse dentro de los límites del RGPD: posición solo al fichar, nunca en continuo, y aviso informativo a los trabajadores firmado en la app antes de fichar.',
      },
    ],
  },
  testimonial: {
    quote: 'Desde que usamos GeoTapp, la dirección facultativa ya no nos pide los partes de asistencia. Abrimos el informe y el parte de avance ya está preparado.',
    author: 'José M.',
    role: 'Gerente, empresa constructora, 35 empleados',
  },
  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que más nos preguntan antes de empezar.',
    items: [
      {
        q: '¿Quién estaba en obra y cuándo?',
        a: 'Cada fichaje registra la hora y la posición captadas por el teléfono en ese momento, no introducidas a mano, y pasa al informe sellado que la dirección facultativa puede verificar.',
      },
      {
        q: '¿Cómo gestionas a los subcontratistas en obra?',
        a: 'GeoTapp registra la asistencia de todos los equipos, subcontratistas incluidos. Cada operario ficha desde su propio smartphone y el jefe de obra ve los fichajes en cuanto llegan, desde un único panel.',
      },
      {
        q: '¿Los informes de obra requieren horas de trabajo manual?',
        a: 'No. GeoTapp genera los informes automáticamente con GPS, horas y asistencia. Están listos para la dirección facultativa y los partes de avance de obra sin introducir nada a mano.',
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
    per: 'por operario al mes, más el plan Flow desde 39 € al mes',
    note: 'Prueba gratuita de 14 días',
  },
  schema_sector_name: 'Construcción',
  schema_faq: [
    {
      question: '¿Quién estaba en obra y cuándo?',
      answer: 'Cada fichaje registra la hora y la posición captadas por el teléfono en ese momento, no introducidas a mano, y pasa al informe sellado que la dirección facultativa puede verificar.',
    },
    {
      question: '¿Cómo gestionas a los subcontratistas en obra?',
      answer: 'GeoTapp registra la asistencia de todos los equipos, subcontratistas incluidos. Cada operario ficha desde su propio smartphone y el jefe de obra ve los fichajes en cuanto llegan, desde un único panel.',
    },
    {
      question: '¿Los informes de obra requieren horas de trabajo manual?',
      answer: 'No. GeoTapp genera los informes automáticamente con GPS, horas y asistencia. Están listos para la dirección facultativa y los partes de avance de obra sin introducir nada a mano.',
    },
  ],
};

export default content;
