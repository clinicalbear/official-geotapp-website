import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software de seguridad privada | GeoTapp - Turnos con GPS',
    description: 'Software para empresas de seguridad privada: turnos con ubicación en los fichajes, rondas documentadas y fotos de prueba. Diseñado para el RGPD. Prueba gratis.',
  },
  hero: {
    badge: 'Software para seguridad privada, vigilantes y controladores de acceso',
    h1_line1: 'Presencias y turnos verificables',
    h1_line2: 'para vigilancia y seguridad privada',
    subtitle: 'GeoTapp Flow y TimeTracker documentan la presencia de los vigilantes en los puestos asignados: ubicación y hora en cada fichaje, fotos de prueba, informes sellados. Turnos, solicitudes de cambio de turno y comunicaciones en una sola plataforma. La app para seguridad privada que sella cada turno, cada ronda, cada presencia.',
    cta_primary: 'Prueba gratis durante 14 días',
    cta_note: 'La prueba no te compromete a nada. Sin tarjeta de crédito.',
  },
  pain: {
    title: 'Los problemas que ya conoces',
    items: [
      {
        title: 'Demostrar la presencia en los puestos asignados',
        desc: 'El cliente cuestiona la presencia del vigilante a una hora concreta. Sin ubicación ni horas registradas queda tu palabra contra la suya, y te juegas el contrato.',
      },
      {
        title: 'Informes de incidentes sin prueba de ubicación',
        desc: 'Un parte de incidente escrito a mano, sin ubicación ni hora registradas, es fácil de cuestionar.',
      },
      {
        title: 'Relevo de turno todavía en papel',
        desc: 'El cambio de turno entre vigilantes se hace con papelitos o llamadas. Se pierde información crítica, las responsabilidades no quedan claras y reconstruirlo después es difícil.',
      },
    ],
  },
  workflow: {
    title: 'Cómo funciona en tres pasos',
    subtitle: 'Del puesto de vigilancia a la oficina, sin papel.',
    steps: [
      {
        title: 'El vigilante ficha en el puesto asignado',
        desc: 'GeoTapp TimeTracker registra entrada, pausas y salida con ubicación y hora, y las fotos de prueba en los puntos de control. Cada control lo documenta el vigilante con un gesto: entre un fichaje y otro no se registra nada de forma automática.',
      },
      {
        title: 'El responsable ve los turnos en cuanto llegan',
        desc: 'Flow recibe los datos en cuanto llegan. El responsable de operaciones comprueba la cobertura de todos los puestos, los cambios de turno y las posibles desviaciones sin llamar al campo.',
      },
      {
        title: 'El informe es tu prueba, defendible en una auditoría',
        desc: 'Al terminar el turno se genera el registro de presencia con las ubicaciones registradas en los fichajes, y cualquier modificación es detectable. El cliente o las autoridades pueden verificar su integridad por su cuenta.',
      },
    ],
  },
  differenza: {
    title: 'Software para empresas de seguridad: ¿registro de presencia o pruebas verificables?',
    subtitle: 'La mayoría de los programas registran los turnos. GeoTapp sella cada presencia en un informe verificable.',
    rows: [
      {
        label: 'Qué registra',
        competitor: 'Hora de inicio y fin de turno',
        geotapp: 'Hora + ubicación al fichar + fotos + ubicación en el puesto asignado',
      },
      {
        label: 'Quién puede verificarlo',
        competitor: 'Solo tu oficina',
        geotapp: 'Tú, el cliente, las autoridades, por su cuenta',
      },
      {
        label: 'Si hay una disputa',
        competitor: 'Solo tu palabra',
        geotapp: 'Informe sellado, verificable por terceros',
      },
      {
        label: 'Prueba de ronda',
        competitor: 'Ausente o en papel',
        geotapp: 'Ubicación, hora y foto en el punto de control',
      },
      {
        label: 'RGPD',
        competitor: 'A menudo por comprobar',
        geotapp: 'Diseñado para moverse dentro del RGPD, con los modelos de documentos incluidos',
      },
    ],
  },

  prima_dopo: {
    title: 'Lo que pasa ahora. Lo que pasa con GeoTapp.',
    prima: [
      'El cliente cuestiona la presencia del vigilante a una hora concreta.',
      'El vigilante dice «estaba allí». El cliente dice «no consta».',
      'No tienes nada para demostrarlo. La disputa se alarga.',
      'Te arriesgas a perder el contrato.',
    ],
    dopo: [
      'El cliente cuestiona la presencia del vigilante a una hora concreta.',
      'Abres el informe: ubicación en el puesto asignado, horas, foto del lugar.',
      'Se lo mandas, y él lo verifica por su cuenta.',
      'Tienes una prueba que mostrar.',
    ],
  },

  scenario: {
    title: 'Un caso típico',
    body: 'El cliente afirma que el vigilante no estaba en su puesto a una hora crítica. Con GeoTapp abres el informe del turno: ubicación registrada en el punto de control, marca de tiempo sellada, foto del lugar, todo registrado desde el teléfono del vigilante cuando fichó e hizo las fotos.',
    resolution: 'En lugar de una palabra contra otra, hay un documento que el cliente comprueba por su cuenta.',
  },

  features: {
    title: 'Software para empresas de seguridad: turnos sellados, controles documentados.',
    items: [
      {
        title: 'Fichaje con GPS verificable para cada vigilante',
        desc: 'Cada presencia queda ligada a una ubicación, una hora y un puesto asignado. Para mostrarlo al cliente, a la inspección de trabajo o en una auditoría contractual cuando haga falta.',
      },
      {
        title: 'Ficha de cada vigilante',
        desc: 'Guarda en la ficha de cada vigilante su función, sus contactos y sus puestos asignados, y decide quién ve qué en la app.',
      },
      {
        title: 'Exportación a Excel o CSV para la nómina',
        desc: 'Exporta las presencias del mes a Excel o CSV, listas para tu gestoría o asesor laboral. Procesar la nómina se vuelve una operación rápida y sin errores de transcripción.',
      },
      {
        title: 'Relevo de turno digital',
        desc: 'Las solicitudes de cambio de turno pasan por la app y las comunicaciones se quedan en el canal del servicio: menos papelitos y llamadas entre un turno y otro.',
      },
      {
        title: 'Panel multisede actualizado en cada fichaje',
        desc: 'El responsable ve la última ubicación fichada de cada vigilante, el estado de cada puesto y los cambios de turno activos, desde cualquier dispositivo, sin llamadas.',
      },
      {
        title: 'Informes defendibles en auditorías y ante las autoridades',
        desc: 'Cada turno genera un informe sellado con ubicaciones, horas y fotos de prueba, que el cliente y las autoridades pueden verificar por su cuenta.',
      },
    ],
  },

  cta_mid: {
    title: '¿Quieres ver cómo funciona en un caso real de disputa?',
    body: 'Pruébalo en el servicio real, desde el vigilante que ficha en el puesto asignado hasta el informe que recibe el cliente: 14 días gratis, sin tarjeta de crédito.',
    cta: 'Prueba gratis durante 14 días',
  },

  trust: {
    title: 'Cualquier modificación de nuestros informes se nota, la hagas tú o la hagamos nosotros.',
    body: 'Los informes de GeoTapp los genera el sistema en el momento del turno. Una vez sellado el informe, corregir una hora o mover una foto rompe el sello, y la verificación lo señala. Quien lo recibe, cliente o autoridades, puede comprobarlo por su cuenta.',
    badge: 'Verificable por cualquiera, sin acceso a tu cuenta',
  },
  testimonial: {
    quote: 'A los clientes les mandamos el registro de presencia sellado, con las ubicaciones de los fichajes: cuando reclaman, lo comprueban ellos mismos.',
    author: 'Luis M.',
    role: 'Director de operaciones, empresa de seguridad privada',
  },
  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que más nos preguntan antes de empezar.',
    items: [
      {
        q: '¿GeoTapp sirve para la seguridad privada y los vigilantes?',
        a: 'Sí. GeoTapp lo usan empresas de seguridad privada para documentar las presencias en los puestos asignados con la ubicación, gestionar turnos y cambios de turno y recoger las fotos de prueba en los puntos de control.',
      },
      {
        q: '¿Cómo ayuda GeoTapp en la gestión de los informes de incidentes?',
        a: 'TimeTracker vincula cada evento a una ubicación y una hora, selladas en el informe. El informe de incidente que genera GeoTapp incluye coordenadas, hora y fotos, y el cliente puede verificar por su cuenta que el documento no se ha modificado.',
      },
      {
        q: '¿GeoTapp ayuda en el cambio de turno entre vigilantes?',
        a: 'Sí. Las solicitudes de cambio de turno pasan por la app, los turnos están en el calendario de Flow y las comunicaciones se quedan en el canal del servicio. El responsable ve quién cubre qué sin depender de llamadas.',
      },
    ],
  },
  cta: {
    title: 'El turno se hizo. Ahora demuéstralo.',
    subtitle: 'GeoTapp genera pruebas verificables de cada servicio de vigilancia: informes sellados que el cliente y las autoridades pueden comprobar por su cuenta.',
    primary: 'Prueba gratis durante 14 días',
    secondary: 'Ver precios',
  },
  pricing_hint: {
    label: 'Puestos TimeTracker desde',
    per: 'por operario al mes, más el plan Flow desde 39 € al mes',
    note: 'Prueba gratuita de 14 días',
  },

  schema_sector_name: 'Seguridad privada',
  schema_faq: [
    {
      question: '¿GeoTapp funciona para la gestión de vigilantes y rondas de seguridad?',
      answer: 'Sí. GeoTapp permite a las empresas de seguridad sellar cada turno y cada ronda: los vigilantes fichan desde el teléfono con la ubicación, y de ahí salen pruebas documentadas del servicio prestado.',
    },
    {
      question: '¿Cómo documento las rondas y los controles periódicos?',
      answer: 'Cada control se registra con GeoTapp TimeTracker: hora, ubicación, foto del lugar y notas. El informe sellado está disponible para el cliente en cuanto se genera, o al terminar el turno.',
    },
    {
      question: '¿Puedo demostrar al cliente que las rondas se han hecho con regularidad?',
      answer: 'Sí. Los informes de GeoTapp están sellados e incluyen ubicaciones, horas y fotos de prueba de los puntos de control. El cliente puede verificar por su cuenta que el informe no se ha modificado y ver a qué hora y dónde fichó el vigilante.',
    },
    {
      question: '¿GeoTapp ayuda con el trabajo nocturno y los convenios colectivos de la vigilancia?',
      answer: 'GeoTapp registra horarios, horas extra y pluses nocturnos y festivos, y los exporta para tu gestoría o asesor laboral, que los aplica según el convenio colectivo. Está diseñado para moverse dentro del RGPD: ubicación solo cuando el vigilante ficha.',
    },
    {
      question: '¿Funciona también para coordinar varios equipos en sedes distintas?',
      answer: 'Sí. Con GeoTapp Flow, el responsable ve la última ubicación fichada de todos los vigilantes, asigna los turnos, gestiona las sustituciones urgentes y recoge los informes de todas las sedes en una sola pantalla.',
    },
  ],
};

export default content;
