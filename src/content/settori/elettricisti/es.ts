import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para electricistas: parte con hora, posición y foto',
    description: 'Un toque al llegar, otro al salir, y las fotos del cuadro adjuntas a la intervención. El parte está listo cuando te vas. 14 días gratis.',
  },
  hero: {
    badge: 'App para electricistas e instaladores eléctricos',
    h1_line1: 'App para electricistas:',
    h1_line2: 'partes con GPS, pruebas fotográficas y menos discusiones.',
    subtitle: 'GeoTapp registra cada intervención eléctrica con GPS, fotos y horas registradas. ¿El cliente discute? Enseñas el parte en lugar de discutir de palabra.',
    cta_primary: 'Empezar prueba gratuita de 14 días',
    cta_note: 'La prueba no te ata a nada. No hace falta tarjeta de crédito.',
  },
  pain: {
    title: 'El problema que conoce bien toda empresa eléctrica',
    items: [
      {
        title: 'El cliente niega la intervención o la hora',
        desc: 'Dice que el técnico no estaba o que la instalación no se completó. Sin pruebas verificables, la discusión se alarga semanas.',
      },
      {
        title: 'Sin documentación de la instalación tras la intervención',
        desc: 'El técnico ha terminado el trabajo, pero no hay rastro fotográfico ni nota técnica. Reconstruir lo que se hizo se vuelve imposible.',
      },
      {
        title: 'La oficina no sabe dónde están los técnicos',
        desc: 'Llamadas, mensajes, incertidumbre. Cada vez que tienes que informar a un cliente del avance de la obra, primero tienes que localizar al técnico.',
      },
    ],
  },
  workflow: {
    title: 'Cómo funciona en tres pasos',
    subtitle: 'De la obra a la oficina sin llamadas.',
    steps: [
      {
        title: 'El técnico registra la intervención sobre el terreno',
        desc: 'Con GeoTapp TimeTracker ficha entrada, pausas y salida con la posición, hace fotos de la instalación y añade notas técnicas desde el smartphone.',
      },
      {
        title: 'La oficina lo ve todo en cuanto llega',
        desc: 'GeoTapp Flow recibe los datos en cuanto el teléfono tiene cobertura. El responsable ve trabajo, técnico asignado, avance y pruebas fotográficas sin llamar.',
      },
      {
        title: 'El parte es tu prueba',
        desc: 'Al terminar la intervención, el sistema genera un informe sellado: hora y GPS, fotos de la instalación, notas técnicas. Cualquier modificación es detectable. El cliente puede verificarlo de forma autónoma.',
      },
    ],
  },
  differenza: {
    title: 'App para electricistas: ¿registro o prueba verificable?',
    subtitle: 'La mayoría de las apps registra la hora. GeoTapp produce pruebas verificables.',
    rows: [
      {
        label: 'Qué registra',
        competitor: 'Hora de entrada y salida',
        geotapp: 'Hora + posición en el fichaje + fotos de la instalación + notas técnicas',
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
      'El cliente niega que la instalación esté terminada.',
      'No tienes fotos ni horas verificables.',
      'La discusión dura semanas. Corres el riesgo de no cobrar.',
      'El técnico no tiene nada en la mano para defenderse.',
    ],
    dopo: [
      'El cliente niega que la instalación esté terminada.',
      'Abres el parte: fotos con GPS de la instalación, hora sellada, firma.',
      'Se lo envías, y lo verifica él mismo.',
      'Tienes una prueba que mostrar. El técnico también tiene algo en la mano.',
    ],
  },
  scenario: {
    title: 'Un caso típico',
    body: 'Un cliente discute que la instalación eléctrica esté terminada y se niega a pagar la última factura. Con GeoTapp abres el parte: foto del cuadro terminado, hora GPS de inicio y fin del trabajo, notas técnicas del técnico, todo generado automáticamente desde el smartphone, en el sitio.',
    resolution: 'En lugar de una palabra contra otra, hay un documento que el cliente comprueba él mismo.',
  },
  cosa_cambia: {
    title: 'Qué cambia de verdad, desde la primera intervención',
    items: [
      {
        title: 'Por la noche ya no se copia nada',
        desc: 'Las horas no pasan del papel al mensaje y de ahí al programa de gestión. Nacen ya en el trabajo correcto, con la posición y la hora de cuando se hicieron, y a final de mes la exportación para las nóminas está lista sin que nadie las vuelva a teclear.',
      },
      {
        title: 'El parte deja de ser una discusión',
        desc: 'Cuando el cliente pregunta cuántas horas se han hecho en su instalación, la respuesta no es la palabra del técnico contra la suya, es un documento sellado con las fotos del cuadro, las horas y las notas técnicas, que puede comprobar él mismo sin entrar en tu cuenta.',
      },
      {
        title: 'El técnico también tiene algo en la mano',
        desc: 'Funciona en los dos sentidos. Quien trabaja bien y oye que ha llegado tarde tiene la prueba de la hora, y no tiene que acordarse de memoria de lo que hizo hace tres semanas para defenderse.',
      },
    ],
  },
  features: {
    title: 'App para electricistas: lo que encuentras en GeoTapp.',
    items: [
      {
        title: 'Fichaje GPS verificable',
        desc: 'Cada entrada, pausa y salida se registra con posición, marca de tiempo y trabajo. Para mostrar al cliente cuando haga falta.',
      },
      {
        title: 'Pruebas fotográficas de la instalación',
        desc: 'El técnico hace fotos desde la app al terminar la intervención. Cada imagen queda vinculada a GPS y marca de tiempo: cualquier modificación posterior es detectable.',
      },
      {
        title: 'Partes digitales automáticos',
        desc: 'Al terminar el trabajo el parte ya está listo: horas, fotos y notas técnicas. La oficina lo envía al cliente desde Flow con un clic.',
      },
      {
        title: 'Gestión de trabajos en varias obras',
        desc: 'Asigna intervenciones y sigue el avance trabajo a trabajo.',
      },
      {
        title: 'Exportación de asistencia para nóminas',
        desc: 'Exporta la asistencia del mes en Excel o CSV, lista para tu asesoría laboral. Procesar las nóminas se vuelve una operación rápida.',
      },
      {
        title: 'Tus electricistas están protegidos',
        desc: 'Un informe verificable da al técnico algo en la mano frente a acusaciones infundadas. Quien trabaja bien lo demuestra con los datos.',
      },
    ],
  },
  cta_mid: {
    title: '¿Quieres ver cómo funciona en una intervención eléctrica real?',
    body: 'Pruébalo en una intervención de verdad, desde la apertura del trabajo hasta el parte que recibe el cliente: 14 días gratis, sin tarjeta de crédito.',
    cta: 'Empezar prueba gratuita de 14 días',
  },
  trust: {
    title: 'En nuestros informes se ve cualquier modificación, la haga el cliente, la hagas tú o la hagamos nosotros.',
    body: 'Los informes de GeoTapp los genera el sistema en el momento de la intervención. Una vez sellado el informe, corregir una hora o mover una foto rompe el sello, y la verificación lo señala.',
    badge: 'Verificable por cualquiera, sin acceso a tu cuenta',
  },
  testimonial: {
    quote: 'Con GeoTapp mis técnicos registran la instalación nada más terminarla. Cuando un cliente discute, tenemos el parte que mostrar.',
    author: 'Luis M.',
    role: 'Gerente, instalaciones eléctricas civiles e industriales',
  },
  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que nos preguntan los electricistas antes de empezar.',
    items: [
      {
        q: '¿GeoTapp sirve como app para electricistas?',
        a: 'Sí. GeoTapp lo usan electricistas e instaladores para gestionar intervenciones, partes, horas y pruebas fotográficas de las instalaciones. Funciona tanto para trabajos de un solo encargo como para varias obras en paralelo.',
      },
      {
        q: '¿Puedo usar GeoTapp para documentar instalaciones e intervenciones eléctricas?',
        a: 'Sí. El técnico hace fotos desde la app durante o al terminar la intervención. Cada imagen queda vinculada a GPS, marca de tiempo y trabajo, e incluida en un parte donde cualquier modificación es detectable.',
      },
      {
        q: '¿GeoTapp ayuda a resolver las discusiones con los clientes?',
        a: 'Es exactamente el caso de uso principal: hora GPS, pruebas fotográficas y parte sellado te dan un documento que mostrar cuando una queja es infundada.',
      },
      {
        q: '¿Sirve también como app para instaladores, no solo para electricistas?',
        a: 'Sí. Instalaciones eléctricas, fontanería y climatización, aire acondicionado, protección contra incendios, fotovoltaica. El oficio cambia, el problema sigue siendo el mismo: demostrar quién fue adónde, cuánto tiempo estuvo y qué dejó terminado. El parte sale igual para todos.',
      },
      {
        q: '¿Cómo funcionan los partes para instaladores?',
        a: 'El técnico cierra la intervención desde el teléfono y el parte ya está escrito, con horas, posición, fotos de la instalación y notas técnicas. No queda el formulario que rellenar por la noche, que es el motivo por el que los partes llegan tarde o no llegan.',
      },
      {
        q: '¿Podemos dejar de recoger horas y fotos por WhatsApp?',
        a: 'Es el motivo por el que llega la mayoría de las empresas. En el chat las horas se pierden entre los mensajes, las fotos se comprimen y a final de mes alguien tiene que copiarlo todo a mano. Aquí el dato nace ya vinculado al trabajo y a la persona.',
      },
    ],
  },
  cta: {
    title: 'Toda instalación bien hecha merece una prueba. GeoTapp la genera.',
    subtitle: 'Informes verificables, posición en los fichajes, fotos selladas en el informe.',
    primary: 'Empezar prueba gratuita de 14 días',
    secondary: 'Ver precios',
  },
  pricing_hint: {
    label: 'Puestos TimeTracker desde',
    per: 'por operario al mes, más el plan Flow desde 39 € al mes',
    note: 'Prueba gratuita de 14 días',
  },
  schema_sector_name: 'Electricistas',
  schema_faq: [
    {
      question: '¿GeoTapp funciona como app para electricistas?',
      answer: 'Sí. GeoTapp es la app para electricistas e instaladores que registra cada intervención con GPS, fotos y horas registradas. El técnico ficha desde el terreno, la oficina lo ve todo en cuanto llega y el cliente recibe un parte sellado.',
    },
    {
      question: '¿Cómo sello una intervención eléctrica con GeoTapp?',
      answer: 'El técnico registra en GeoTapp la hora de inicio y de fin con la posición, las fotos de la instalación y las notas técnicas. El sistema genera un parte sellado que el cliente puede verificar de forma autónoma.',
    },
    {
      question: '¿GeoTapp ayuda a gestionar varios equipos de electricistas en obras distintas?',
      answer: 'Sí. GeoTapp Flow permite al responsable coordinar varios equipos, asignar trabajos, seguir el estado de las intervenciones y recoger pruebas fotográficas de todas las obras activas, en cuanto se suben.',
    },
    {
      question: '¿Se aceptan los partes de GeoTapp en caso de discusión?',
      answer: 'Los partes de GeoTapp están sellados con GPS, marca de tiempo y pruebas fotográficas. El cliente los verifica él mismo. Ayudan a mostrar que el documento no se ha modificado; por sí solos no son prueba absoluta de los hechos ni asesoramiento legal.',
    },
    {
      question: '¿GeoTapp funciona también como app para instaladores?',
      answer: 'Sí. Además de las instalaciones eléctricas cubre fontanería y climatización, aire acondicionado, protección contra incendios y fotovoltaica. El técnico registra la intervención desde el terreno con GPS y fotos, y el parte se genera igual para cada tipo de instalación.',
    },
    {
      question: '¿GeoTapp rastrea la posición de los técnicos durante la jornada?',
      answer: 'No. La posición se registra solo cuando el técnico ficha (entrada, pausas, salida) o hace una foto de prueba. Entre un fichaje y otro no se registra nada de forma automática: la app ni siquiera pide permiso para leer la posición en segundo plano.',
    },
  ],
};

export default content;
