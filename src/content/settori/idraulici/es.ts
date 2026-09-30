import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para fontaneros y calefacción | GeoTapp Partes GPS',
    description: 'Partes con posición y foto para fontaneros y técnicos de calefacción, con informes donde cualquier modificación es detectable. Prueba gratis.',
  },
  hero: {
    badge: 'App para fontaneros, técnicos de calefacción e instaladores',
    h1_line1: 'App para fontaneros y técnicos de calefacción:',
    h1_line2: 'partes con GPS, pruebas fotográficas y menos discusiones.',
    subtitle: 'GeoTapp registra cada intervención de fontanería con GPS, fotos y horas registradas. ¿El cliente discute? Enseñas el parte en lugar de discutir de palabra.',
    cta_primary: 'Empezar prueba gratuita de 14 días',
    cta_note: 'La prueba no te ata a nada. No hace falta tarjeta de crédito.',
  },
  pain: {
    title: 'El problema que conoce bien toda empresa de fontanería',
    items: [
      {
        title: 'El cliente niega la intervención o los materiales usados',
        desc: 'Dice que la reparación no se hizo o que los materiales eran otros. Sin pruebas verificables, cada discusión se queda en palabra contra palabra.',
      },
      {
        title: 'Sin documentación de la instalación tras la intervención',
        desc: 'El técnico ha terminado el trabajo, pero no hay rastro fotográfico ni nota técnica. Si más adelante hay una avería, reconstruir lo que se hizo se vuelve imposible.',
      },
      {
        title: 'Las urgencias se quedan sin documentos',
        desc: 'Las intervenciones de emergencia son las más difíciles de documentar. El técnico sale a toda prisa, trabaja sin papel, y luego no hay nada que mostrar al cliente.',
      },
    ],
  },
  workflow: {
    title: 'Cómo funciona en tres pasos',
    subtitle: 'De la obra a la oficina sin llamadas.',
    steps: [
      {
        title: 'El técnico registra la intervención sobre el terreno',
        desc: 'Con GeoTapp TimeTracker ficha entrada, pausas y salida con la posición, hace fotos de la instalación de fontanería y añade notas técnicas desde el smartphone.',
      },
      {
        title: 'La oficina lo ve todo en cuanto llega',
        desc: 'GeoTapp Flow recibe los datos en cuanto el teléfono tiene cobertura. El responsable ve trabajo, técnico asignado, avance y pruebas fotográficas sin llamar.',
      },
      {
        title: 'El parte es tu prueba',
        desc: 'Al terminar la intervención, el sistema genera un informe sellado: hora y GPS, fotos de la instalación, materiales usados, notas técnicas. Cualquier modificación es detectable. El cliente puede verificarlo de forma autónoma.',
      },
    ],
  },
  differenza: {
    title: 'App para fontaneros: ¿registro o prueba verificable?',
    subtitle: 'La mayoría de las apps registra la hora. GeoTapp produce pruebas verificables.',
    rows: [
      {
        label: 'Qué registra',
        competitor: 'Hora de entrada y salida',
        geotapp: 'Hora + posición en el fichaje + fotos de la instalación + materiales y notas',
      },
      {
        label: 'En caso de discusión',
        competitor: 'Solo tu palabra',
        geotapp: 'Informe sellado, cualquier modificación es detectable',
      },
      {
        label: 'Documentación de la intervención',
        competitor: 'Manual o inexistente',
        geotapp: 'Generada automáticamente con GPS y fotos',
      },
      {
        label: 'Quién puede verificar',
        competitor: 'Solo tu oficina',
        geotapp: 'Tú, el cliente, un tercero',
      },
      {
        label: 'Protección de datos (RGPD)',
        competitor: 'A menudo por comprobar',
        geotapp: 'Construido para moverse dentro de los límites del RGPD, con modelos de documentación incluidos',
      },
    ],
  },
  prima_dopo: {
    title: 'Antes de GeoTapp. Después de GeoTapp.',
    prima: [
      'El cliente niega que la reparación se haya hecho.',
      'No tienes fotos ni horas verificables.',
      'La discusión dura semanas. Corres el riesgo de no cobrar.',
      'El técnico no tiene nada en la mano para defenderse.',
    ],
    dopo: [
      'El cliente niega que la reparación se haya hecho.',
      'Abres el parte: fotos con GPS de la instalación, hora sellada, notas técnicas.',
      'Se lo envías, y lo verifica él mismo.',
      'Tienes una prueba que mostrar. El técnico también tiene algo en la mano.',
    ],
  },
  scenario: {
    title: 'Un caso típico',
    body: 'Un cliente discute una intervención urgente de fontanería y calefacción y se niega a pagar alegando que el trabajo no se terminó. Con GeoTapp abres el parte: fotos de la instalación antes y después, hora GPS de llegada y fin del trabajo, notas técnicas sobre los materiales sustituidos, todo generado automáticamente desde el smartphone del técnico, en el sitio.',
    resolution: 'En lugar de una palabra contra otra, hay un documento que el cliente comprueba él mismo.',
  },
  features: {
    title: 'App para fontaneros y técnicos de calefacción: lo que encuentras en GeoTapp.',
    items: [
      {
        title: 'Fichaje GPS verificable',
        desc: 'Cada entrada, pausa y salida se registra con posición, marca de tiempo y trabajo. Para mostrar al cliente cuando haga falta.',
      },
      {
        title: 'Fotos de instalaciones selladas',
        desc: 'El técnico hace fotos antes y después de la intervención. Cada imagen queda vinculada a GPS y marca de tiempo: cualquier modificación posterior es detectable.',
      },
      {
        title: 'Partes digitales automáticos',
        desc: 'Al terminar el trabajo el parte ya está listo: horas, fotos, notas técnicas y materiales. La oficina lo envía al cliente desde Flow con un clic.',
      },
      {
        title: 'Gestión de urgencias y mantenimiento programado',
        desc: 'Gestiona tanto las intervenciones de emergencia como los mantenimientos periódicos desde el mismo panel. Cada intervención tiene su trabajo y su historial.',
      },
      {
        title: 'Exportación de asistencia para nóminas',
        desc: 'Exporta la asistencia del mes en Excel o CSV, lista para tu asesoría laboral. Procesar las nóminas se vuelve una operación rápida.',
      },
      {
        title: 'Tus fontaneros están protegidos',
        desc: 'Un informe verificable da al técnico algo en la mano frente a acusaciones infundadas sobre trabajos no realizados o materiales no utilizados.',
      },
    ],
  },
  cta_mid: {
    title: '¿Quieres ver cómo funciona en una intervención de fontanería real?',
    body: 'Pruébalo en una intervención de verdad, desde la apertura del trabajo hasta el parte que recibe el cliente: 14 días gratis, sin tarjeta de crédito.',
    cta: 'Empezar prueba gratuita de 14 días',
  },
  trust: {
    title: 'En nuestros informes se ve cualquier modificación, la haga el cliente, la hagas tú o la hagamos nosotros.',
    body: 'Los informes de GeoTapp los genera el sistema en el momento de la intervención. Una vez sellado el informe, corregir una hora o mover una foto rompe el sello, y la verificación lo señala.',
    badge: 'Verificable por cualquiera, sin acceso a tu cuenta',
  },
  testimonial: {
    quote: 'Antes perdía horas explicando las intervenciones a los clientes. Ahora mando el parte y el cliente lo comprueba él mismo.',
    author: 'Roberto C.',
    role: 'Gerente, instalaciones de fontanería y calefacción',
  },
  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que nos preguntan los fontaneros antes de empezar.',
    items: [
      {
        q: '¿GeoTapp sirve como app para fontaneros y técnicos de calefacción?',
        a: 'Sí. GeoTapp lo usan fontaneros y técnicos de calefacción para gestionar intervenciones, partes, horas y pruebas fotográficas de las instalaciones. Funciona tanto para urgencias como para mantenimientos programados.',
      },
      {
        q: '¿Puedo usar GeoTapp para documentar intervenciones de fontanería y calefacción?',
        a: 'Sí. El técnico hace fotos antes y después de la intervención desde la app. Cada imagen queda vinculada a GPS, marca de tiempo y trabajo, e incluida en un parte donde cualquier modificación es detectable.',
      },
      {
        q: '¿GeoTapp gestiona tanto intervenciones de emergencia como mantenimiento programado?',
        a: 'Sí. Cada tipo de intervención, urgencia, mantenimiento, puesta en marcha, tiene su trabajo en GeoTapp. El historial de cada instalación está siempre disponible con todas las pruebas fotográficas.',
      },
    ],
  },
  cta: {
    title: 'Toda intervención bien hecha merece una prueba. GeoTapp la genera.',
    subtitle: 'Informes verificables, posición en los fichajes, fotos selladas en el informe.',
    primary: 'Empezar prueba gratuita de 14 días',
    secondary: 'Ver precios',
  },
  pricing_hint: {
    label: 'Puestos TimeTracker desde',
    per: 'por operario al mes, más el plan Flow desde 39 € al mes',
    note: 'Prueba gratuita de 14 días',
  },
  schema_sector_name: 'Fontaneros',
  schema_faq: [
    {
      question: '¿GeoTapp funciona como app para fontaneros y técnicos de calefacción?',
      answer: 'Sí. GeoTapp es la app para fontaneros y técnicos de calefacción que registra cada intervención con GPS, fotos y horas registradas. El técnico ficha desde el terreno, la oficina lo ve todo en cuanto llega y el cliente recibe un parte sellado.',
    },
    {
      question: '¿Cómo sello una intervención de fontanería con GeoTapp?',
      answer: 'El técnico registra en GeoTapp la hora de inicio y de fin con la posición, las fotos de la instalación antes y después, y las notas técnicas sobre los materiales usados. El sistema genera un parte sellado que el cliente puede verificar de forma autónoma.',
    },
    {
      question: '¿GeoTapp gestiona urgencias de fontanería y mantenimientos programados?',
      answer: 'Sí. Tanto las intervenciones de emergencia como los mantenimientos periódicos se gestionan desde la misma app. Cada intervención genera un historial con pruebas fotográficas y con las horas y posiciones registradas en los fichajes.',
    },
    {
      question: '¿Se aceptan los partes de GeoTapp en caso de discusión?',
      answer: 'Los partes de GeoTapp están sellados con GPS, marca de tiempo y pruebas fotográficas. El cliente los verifica él mismo. Ayudan a mostrar que el documento no se ha modificado; por sí solos no son prueba absoluta de los hechos ni asesoramiento legal.',
    },
  ],
};

export default content;
