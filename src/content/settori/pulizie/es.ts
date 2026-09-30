import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para empresas de limpieza: GPS y fotos por centro',
    description: 'Fichajes con GPS al inicio y al final y fotos de cada intervención: las pruebas que mostrar al cliente cuando cuestiona un servicio. 14 días gratis.',
  },

  hero: {
    badge: 'App para empresas de limpieza, facility management y multiservicios',
    h1_line1: 'La app para empresas de limpieza',
    h1_line2: 'que sella cada intervención.',
    subtitle:
      'GeoTapp es la app para empresas de limpieza que convierte cada intervención en una prueba que mostrar. Los clientes reclaman, y una hora escrita no basta. GeoTapp registra la ubicación en cada fichaje, recoge las fotos de prueba y lo reúne todo en un informe sellado, donde cualquier modificación es detectable, que el cliente puede verificar por su cuenta.',
    cta_primary: 'Pruébalo en un contrato real',
    cta_note: '14 días, hasta 50 operarios en el campo, sin tarjeta de crédito.',
  },

  pain: {
    title: 'Si no puedes demostrarlo, para el cliente nunca ocurrió.',
    items: [
      {
        title: 'El cliente niega la intervención',
        desc: 'Dice que la zona no se limpió o que el operario no estuvo. Tú tienes una hora escrita, él su versión. Sin pruebas verificables, te juegas el contrato.',
      },
      {
        title: 'Operarios en el campo a los que no puedes verificar',
        desc: 'No puedes estar en todos los centros. No sabes si el trabajo se hizo hasta que el cliente se queja, y entonces ya es tarde para reconstruir nada.',
      },
      {
        title: 'La inspección de trabajo pide documentación real',
        desc: 'Horarios, presencias, horas extra, pausas: la hoja de firmas no basta. Quien controla quiere horas registradas, no reconstruidas de memoria.',
      },
    ],
  },

  prima_dopo: {
    title: 'Lo que pasa ahora. Lo que pasa con GeoTapp.',
    prima: [
      'El cliente llama y dice que el baño no se limpió.',
      'El operario dice «lo hice». El cliente dice «no lo hizo».',
      'No tienes nada en la mano para demostrar nada.',
      'La discusión sigue durante días. A veces pierdes el contrato.',
    ],
    dopo: [
      'El cliente llama y dice que el baño no se limpió.',
      'Abres el informe de la intervención: foto del baño limpio, hora, ubicación.',
      'Se lo mandas. Has respondido con datos, y él los verifica por su cuenta.',
      'Tienes una prueba que mostrar. El operario también tiene algo en la mano.',
    ],
  },

  scenario: {
    title: 'Un caso típico',
    body: 'El cliente dice que el baño no se limpió. Con GeoTapp abres el informe y muestras la foto del espacio, la hora de la foto y la ubicación, todo generado automáticamente por la app del operario en el momento de la intervención.',
    resolution: 'Has respondido con datos, no con tu palabra contra la suya.',
  },

  differenza: {
    title: 'Fichaje frente a prueba verificable del trabajo.',
    subtitle: 'La mayoría de las apps registran datos. GeoTapp produce pruebas.',
    rows: [
      {
        label: 'Qué registra',
        competitor: 'Hora de entrada y salida',
        geotapp: 'Hora + ubicación al fichar + fotos + actividad realizada',
      },
      {
        label: 'Quién puede verificarlo',
        competitor: 'Solo tu oficina',
        geotapp: 'Tú, el cliente, un tercero, por su cuenta',
      },
      {
        label: 'Si hay una reclamación',
        competitor: 'Solo tu palabra',
        geotapp: 'Informe sellado, cualquier modificación es detectable',
      },
      {
        label: 'Prueba fotográfica',
        competitor: 'Ausente o desconectada',
        geotapp: 'Adjunta al informe con hora y ubicación',
      },
      {
        label: 'RGPD',
        competitor: 'A menudo por comprobar',
        geotapp: 'Diseñado para moverse dentro del RGPD, con los modelos de documentos incluidos',
      },
      {
        label: 'Visibilidad actualizada en cada fichaje',
        competitor: 'No',
        geotapp: 'Sí, todos los centros, todos los operarios',
      },
    ],
  },

  non_gestionale: {
    title: 'No es solo un software de gestión.',
    subtitle: 'Los programas de gestión organizan el trabajo. GeoTapp lo organiza y además lo sella.',
    items: [
      {
        label: 'Objetivo principal',
        gestionale: 'Planificar y organizar',
        geotapp: 'Generar pruebas verificables',
      },
      {
        label: 'Qué produce',
        gestionale: 'Datos internos de tu sistema',
        geotapp: 'Informes sellados verificables por terceros',
      },
      {
        label: 'Si hay una reclamación',
        gestionale: 'Muestras datos que solo tú puedes leer',
        geotapp: 'Envías un informe que el cliente verifica por su cuenta',
      },
      {
        label: 'Valor para el cliente',
        gestionale: 'Ninguno, es una herramienta interna',
        geotapp: 'Alto: el cliente lo verifica por su cuenta',
      },
      {
        label: 'Prueba fotográfica',
        gestionale: 'No prevista o por separado',
        geotapp: 'Integrada en el informe con GPS y marca de tiempo',
      },
    ],
  },

  workflow: {
    title: 'Del centro de trabajo a la oficina, cada intervención se convierte en una prueba.',
    subtitle: 'Tres pasos. Cero papel. Cero llamadas.',
    steps: [
      {
        title: 'El operario sella la prueba en el sitio',
        desc: 'Con GeoTapp TimeTracker registra entrada, pausas, salida, fotos de los espacios y notas desde el teléfono. La ubicación la toma el teléfono en ese momento, no se introduce a mano, y cualquier modificación posterior es detectable.',
      },
      {
        title: 'La oficina se actualiza en cada fichaje',
        desc: 'Flow muestra en una sola pantalla quién ha fichado, dónde y a qué hora. Ves el estado de cada edificio, recibes un aviso si una jornada se queda abierta y asignas los trabajos, sin perseguir a nadie.',
      },
      {
        title: 'El informe ya está listo. Sellado: cualquier modificación se nota.',
        desc: 'Al final de la jornada, el sistema genera automáticamente un informe sellado con ubicaciones, fotos y sello. El cliente lo recibe y lo verifica por su cuenta, sin acceso a tu sistema, sin fiarse de tu palabra.',
      },
    ],
  },

  features: {
    title: 'App para empresas de limpieza: menos discusiones, más pruebas.',
    items: [
      {
        title: 'Responde a cada reclamación con datos',
        desc: 'Cuando cada intervención tiene un informe verificable, tienes la documentación para responder enseguida. Menos negociaciones de palabra que duran semanas.',
      },
      {
        title: 'Control real en todos los centros',
        desc: 'Sabes dónde y a qué hora ha fichado cada operario en cuanto llega el fichaje, en todos los edificios y desde cualquier dispositivo. Entre un fichaje y otro no se registra nada de forma automática.',
      },
      {
        title: 'Informes defendibles en cualquier sede',
        desc: 'Cada informe está sellado: cualquier modificación es detectable. Quien lo recibe, cliente, inspector o asesor, puede comprobarlo por su cuenta.',
      },
      {
        title: 'Listo para la inspección de trabajo',
        desc: 'Horarios, pausas, horas extra y pluses quedan registrados jornada por jornada y salen en el resumen para tu gestoría o asesor laboral. Si hay un control, la documentación ya está en orden.',
      },
      {
        title: 'Gestión de varios centros sin llamadas',
        desc: 'Decenas de sedes, una sola pantalla. Asignas trabajos, ves quién ha fichado dónde y recibes un aviso si una jornada se queda abierta.',
      },
      {
        title: 'Tu personal está protegido',
        desc: 'Un informe verificable también le da al operario algo en la mano frente a las acusaciones infundadas. Quien trabaja bien lo demuestra.',
      },
    ],
  },

  cosa_cambia: {
    title: 'Lo que cambia de verdad.',
    items: [
      {
        title: 'Ya no tienes que fiarte de los operarios.',
        desc: 'No porque no sean de fiar, sino porque no tienes que hacerlo. El sistema genera la prueba en el momento de la intervención, con independencia de lo que te cuenten. El dato queda como se registró.',
      },
      {
        title: 'Ya no tienes que defenderte de palabra.',
        desc: 'Dejas de explicar, justificar, recordar. Cuando un cliente reclama, abres el informe y se lo mandas. No es tu palabra contra la suya. Es un documento verificable.',
      },
      {
        title: 'Tienes pruebas verificables. Siempre.',
        desc: 'Cada intervención cerrada se convierte automáticamente en un informe: ubicaciones, fotos, horas y sello. No tienes que hacer nada extra. El sistema lo hace mientras tus operarios trabajan.',
      },
    ],
  },

  prova_visiva: {
    title: 'Lo que ves tú, lo que ve el cliente.',
    subtitle: 'La app para quien trabaja en el campo. El informe para quien tiene que responder.',
  },

  cta_mid: {
    title: '¿Quieres ver cómo funciona en un caso real?',
    body: 'Pruébalo en un contrato real, desde el operario que abre la intervención hasta el informe que recibe el cliente: 14 días gratis, sin tarjeta de crédito.',
    cta: 'Prueba gratis durante 14 días',
  },

  testimonial: {
    quote:
      'Antes siempre teníamos algún cliente que reclamaba. Desde que usamos GeoTapp, mandamos el informe y la conversación cambia enseguida: se habla de datos, no de palabras. Las discusiones se acortan bastante.',
    author: 'Roberta M.',
    role: 'Responsable de operaciones, empresa de limpieza industrial - Norte de Italia',
  },

  trust: {
    title: 'Si un informe nuestro se modifica, se nota. Incluso si lo hacemos nosotros.',
    body:
      'Los informes de GeoTapp los genera el sistema en el momento de la intervención. Una vez sellado el informe, corregir una hora o mover una foto rompe el sello, y la verificación lo señala. Quien lo recibe, cliente, inspector o asesor, puede comprobarlo por su cuenta.',
    badge: 'Verificable por cualquiera, sin acceso a tu cuenta',
  },

  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que más nos preguntan antes de empezar.',
    items: [
      {
        q: '¿GeoTapp es solo una app de fichaje para empresas de limpieza?',
        a: 'No. GeoTapp es un sistema de prueba verificable del trabajo, no solo una app de fichaje. Las apps de fichaje registran una hora. GeoTapp produce un informe sellado con la ubicación, pruebas fotográficas y marca de tiempo, que el cliente puede verificar por su cuenta. La diferencia entre «está escrito» y «se puede demostrar».',
      },
      {
        q: '¿Es compatible con el convenio colectivo de mi sector?',
        a: 'GeoTapp registra horarios, pausas, horas extra y pluses, incluidos los nocturnos y festivos, y los exporta a Excel o CSV para tu gestoría o asesor laboral, que los aplica según el convenio colectivo vigente en tu empresa. Si hay un control, tienes toda la documentación lista.',
      },
      {
        q: '¿Cómo gestiono equipos repartidos en varios centros a la vez?',
        a: 'Con GeoTapp Flow tienes una sola pantalla para todos los centros. Ves quién ha fichado dónde en cuanto llega el fichaje, asignas los trabajos y recibes un aviso si una jornada se queda abierta. Sin llamadas, sin correos.',
      },
      {
        q: '¿Cómo compruebo que los operarios han hecho el trabajo?',
        a: 'Cada intervención se abre y se cierra con la ubicación registrada desde el teléfono del operario. El operario envía las fotos de prueba vinculadas al trabajo, con hora y ubicación. El informe se genera automáticamente y se sella al cerrar: cualquier modificación se nota.',
      },
      {
        q: '¿GeoTapp cumple el RGPD en la geolocalización de los empleados?',
        a: 'GeoTapp está diseñado para moverse dentro del RGPD y de las indicaciones de las autoridades de protección de datos: registra la ubicación solo cuando el operario ficha (entrada, pausas, salida) o hace una foto de prueba, hace firmar la información a los empleados en la app antes del primer fichaje y no recoge datos innecesarios.',
      },
      {
        q: '¿Funciona también para facility management y multiservicios?',
        a: 'Sí. GeoTapp lo usan empresas de limpieza, multiservicios, facility management y cualquier organización con operarios repartidos en varios centros. Sirve desde un equipo de pocas personas hasta una empresa con cientos de operarios, sin configuraciones complejas.',
      },
      {
        q: '¿Cuánto cuesta GeoTapp para una empresa de limpieza?',
        a: 'GeoTapp Flow cuesta desde 39 € al mes; los puestos TimeTracker para los operarios cuestan 3 € al mes cada uno hasta 25, y 2,50 € a partir del 26.º. Suscripción con duración mínima de 12 meses. Antes puedes probarlo gratis durante 14 días, sin tarjeta. Precios sin IVA.',
      },
    ],
  },

  cta: {
    title: 'Tus operarios trabajan bien. Haz que se vea.',
    subtitle:
      'Cada día el trabajo se hace. El problema es que, sin pruebas verificables, cuando alguien reclama queda tu palabra contra la suya. GeoTapp convierte cada intervención en documentación que mostrar.',
    primary: 'Prueba gratis durante 14 días',
    secondary: 'Ver precios',
  },

  pricing_hint: {
    label: 'Puestos TimeTracker desde',
    per: 'por operario al mes, más el plan Flow desde 39 € al mes',
    note: 'Prueba gratuita de 14 días',
  },

  schema_sector_name: 'Empresas de limpieza',

  schema_faq: [
    {
      question: '¿GeoTapp es solo una app de fichaje para empresas de limpieza?',
      answer: 'No. GeoTapp es la app y el software para empresas de limpieza y multiservicios que va más allá del fichaje: produce informes sellados con ubicaciones, fotos y horas, que el cliente verifica por su cuenta: no un simple registro de horarios.',
    },
    {
      question: '¿Es compatible con el convenio colectivo de mi sector?',
      answer: 'GeoTapp registra horarios, pausas, horas extra y pluses y los exporta a Excel o CSV para tu gestoría o asesor laboral, que los aplica según el convenio colectivo vigente en tu empresa.',
    },
    {
      question: '¿Cómo gestiono varios centros a la vez?',
      answer: 'Una sola pantalla para todos los centros. Ves quién ha fichado dónde en cuanto llega el fichaje, asignas los trabajos y recibes un aviso si una jornada se queda abierta, sin llamadas.',
    },
    {
      question: '¿Cómo documento que el trabajo se ha hecho?',
      answer: 'Cada intervención se abre y se cierra con la ubicación registrada. El operario envía las fotos de prueba vinculadas al trabajo. El informe se genera automáticamente y se sella al cerrar: cualquier modificación se nota.',
    },
    {
      question: '¿GeoTapp cumple el RGPD en la geolocalización de los empleados?',
      answer: 'Diseñado para moverse dentro del RGPD: registra la ubicación solo cuando el operario ficha o hace una foto de prueba, nunca de forma continua, y hace firmar la información a los empleados en la app antes del primer fichaje.',
    },
    {
      question: '¿Funciona también para facility management y multiservicios?',
      answer: 'Sí. GeoTapp sirve para empresas de limpieza, multiservicios y facility management, desde un equipo de pocas personas hasta una empresa con cientos de operarios.',
    },
    {
      question: '¿Cuánto cuesta?',
      answer: 'GeoTapp Flow desde 39 € al mes, más los puestos TimeTracker desde 3 € por operario al mes. Suscripción con duración mínima de 12 meses. Antes puedes probarlo gratis durante 14 días, sin tarjeta. Precios sin IVA.',
    },
  ],
};

export default content;
