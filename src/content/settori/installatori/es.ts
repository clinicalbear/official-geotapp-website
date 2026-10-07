import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App de geolocalización para instaladores: partes con GPS y fotos',
    description: 'Geolocalización solo al fichar, partes de intervención con fotos e informes donde cualquier modificación es detectable. Prueba GeoTapp gratis 14 días.',
  },
  hero: {
    badge: 'App para instaladores, fontaneros y técnicos de climatización',
    h1_line1: '¿El cliente cuestiona las horas?',
    h1_line2: 'Muéstrale el parte con GPS.',
    subtitle: 'Tus técnicos fichan desde el teléfono con un toque. El sistema genera un parte de intervención con la ubicación registrada y fotos: cualquier modificación es detectable. Cuando el cliente pregunte «¿cuánto tiempo tardasteis?», tienes la respuesta lista.',
    cta_primary: 'Prueba gratis 14 días',
    cta_note: 'Sin tarjeta de crédito. Operativo desde el primer día.',
  },
  pain: {
    title: 'El problema que ya conoces',
    items: [
      {
        title: 'Discusiones sobre horas e intervenciones',
        desc: 'El cliente niega el horario. El técnico no tiene pruebas. La disputa se alarga semanas y cuesta más que la propia intervención.',
      },
      {
        title: 'La oficina persigue al equipo de campo',
        desc: 'El responsable llama a los técnicos para saber dónde están, qué han hecho y cuándo terminan. Cada llamada es una interrupción para los dos.',
      },
      {
        title: 'Partes incompletos o perdidos',
        desc: 'Papelitos, WhatsApp, correos: los datos llegan incompletos, tarde o no llegan. Reconstruir el resumen final es un trabajo aparte.',
      },
    ],
  },
  workflow: {
    title: 'Cómo funciona en tres pasos',
    subtitle: 'De la furgoneta a la oficina, sin llamadas.',
    steps: [
      {
        title: 'El técnico ficha en el lugar de trabajo',
        desc: 'Con GeoTapp TimeTracker registra entrada, pausas, salida, fotos y notas directamente desde el teléfono. La ubicación se toma solo cuando ficha, nunca de forma continua.',
      },
      {
        title: 'La oficina lo ve todo en cuanto llega',
        desc: 'Flow recibe los datos en cuanto el teléfono tiene cobertura. El responsable ve el trabajo, el avance, el técnico asignado y las pruebas fotográficas sin llamar.',
      },
      {
        title: 'El informe es tu prueba, para enseñárselo al cliente',
        desc: 'Al terminar la intervención, el informe se genera con los datos de ubicación registrados y las pruebas fotográficas. Cualquier modificación es detectable. El cliente puede verificarlo por su cuenta. Cuando surge una duda, no tienes que explicar. Tienes que mostrar.',
      },
    ],
  },
  differenza: {
    title: 'App para instaladores: ¿fichaje o prueba verificable?',
    subtitle: 'La mayoría de las apps registran la hora. GeoTapp produce pruebas verificables.',
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
        label: 'Si hay una disputa',
        competitor: 'Solo tu palabra',
        geotapp: 'Informe sellado, cualquier modificación es detectable',
      },
      {
        label: 'Parte de intervención',
        competitor: 'Manual o inexistente',
        geotapp: 'Generado automáticamente con GPS y fotos',
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
      'El cliente niega la hora o la intervención realizada.',
      'El técnico dice «lo hice». El cliente dice «no consta».',
      'No tienes nada en la mano. La discusión dura días.',
      'A veces pierdes el cobro. Siempre pierdes tiempo.',
    ],
    dopo: [
      'El cliente niega la hora o la intervención realizada.',
      'Abres el informe: fotos, GPS, hora, sello.',
      'Se lo mandas. La discusión termina en un minuto.',
      'Tienes una prueba que mostrar. El técnico también tiene algo en la mano.',
    ],
  },

  scenario: {
    title: 'Un caso típico',
    body: 'El cliente cuestiona la hora de fin del trabajo y pide un descuento en la factura. Con GeoTapp abres el informe de la intervención: foto de la instalación terminada, horas y ubicaciones de los fichajes, duración calculada automáticamente, todo generado desde el teléfono del técnico en el momento del trabajo.',
    resolution: 'En lugar de una palabra contra otra, hay un documento que el cliente comprueba por su cuenta.',
  },

  features: {
    title: 'Geolocalización de instaladores: registro GPS al llegar y al salir, con parte y fotos.',
    items: [
      {
        title: 'Fichaje con GPS verificable',
        desc: 'Cada entrada, pausa y salida queda ligada a la ubicación, la hora y el trabajo. Para mostrarlo al cliente o a la inspección de trabajo cuando haga falta.',
      },
      {
        title: 'Pruebas fotográficas selladas',
        desc: 'El técnico hace fotos desde la app. Cada imagen queda ligada a la intervención con GPS y marca de tiempo, y se incluye en el informe. Nadie puede modificarlas sin que el sistema lo detecte.',
      },
      {
        title: 'Exportación para la nómina',
        desc: 'Exporta las presencias del mes a Excel o CSV, listas para tu gestoría o asesor laboral.',
      },
      {
        title: 'Gestión de trabajos en varias obras',
        desc: 'Asigna trabajos, sigue el avance de cada obra y recibe un aviso si una jornada se queda abierta.',
      },
      {
        title: 'Partes digitales automáticos',
        desc: 'Al terminar la intervención, el parte ya está listo: horas, fotos y notas. Sin papel, sin llamadas. La oficina se lo envía al cliente desde Flow con un clic.',
      },
      {
        title: 'Tus técnicos también tienen una prueba',
        desc: 'Un informe verificable le da al técnico algo en la mano frente a las acusaciones infundadas. Quien trabaja bien lo demuestra con datos. Ninguna zona gris entre el campo y la oficina.',
      },
    ],
  },

  cta_mid: {
    title: '¿Quieres ver cómo funciona en una intervención real?',
    body: 'Pruébalo en una intervención real, desde la apertura del trabajo hasta el informe que recibe el cliente: 14 días gratis, sin tarjeta.',
    cta: 'Prueba gratis durante 14 días',
  },

  trust: {
    title: 'En nuestros informes se ve cualquier modificación, la haga el cliente, la hagas tú o la hagamos nosotros.',
    body: 'Los informes de GeoTapp los genera el sistema en el momento de la intervención. Una vez sellado el informe, corregir una hora o mover una foto rompe el sello, y la verificación lo señala. Quien lo recibe, cliente o asesor, puede comprobarlo por su cuenta.',
    badge: 'Verificable por cualquiera, sin acceso a tu cuenta',
  },
  testimonial: {
    quote: 'Antes pasábamos horas recogiendo las hojas del campo. Ahora el parte ya está listo cuando el técnico vuelve a la furgoneta.',
    author: 'Marco R.',
    role: 'Responsable de operaciones, instalaciones residenciales',
  },
  guida: [
    {
      h2: 'Rastreo de instaladores o registro de llegada: no es lo mismo',
      paras: [
        'Cuando se habla de geolocalizar instaladores suelen mezclarse dos cosas distintas. El rastreo continuo sigue al técnico en un mapa durante toda la jornada. El registro de llegada y salida guarda la ubicación solo en el momento en que el técnico ficha o hace una foto de la obra.',
        'GeoTapp hace lo segundo: no muestra dónde está tu técnico en este momento ni guarda su ruta. Lo que obtienes es lo que suele hacer falta de verdad: a qué hora llegó, cuándo se fue, qué hizo y qué fotos lo respaldan, todo en un parte que puedes enseñar al cliente. Para el técnico significa que nadie lo sigue entre una obra y otra; para ti, menos datos personales que custodiar.',
      ],
    },
    {
      h2: 'Dónde está mi técnico: lo que puedes saber sin seguirlo',
      paras: [
        'Si necesitas saber si el equipo ya está en la obra, el fichaje con ubicación lo responde: ves quién ha fichado, dónde y a qué hora, y recibes un aviso si una jornada se queda abierta.',
        'Si necesitas ver el recorrido de la furgoneta minuto a minuto, GeoTapp no es la herramienta, y es una decisión deliberada. Registrar solo en los momentos clave reduce el riesgo de vigilar de más. Antes de activar cualquier geolocalización, informa por escrito a tu equipo de qué se registra y para qué.',
      ],
    },
  ],
  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que más nos preguntan antes de empezar.',
    items: [
      {
        q: '¿GeoTapp rastrea a los instaladores en tiempo real?',
        a: 'No. GeoTapp no sigue al técnico en un mapa ni guarda su ruta. Registra la ubicación solo cuando ficha (entrada, pausa, salida) o cuando hace una foto de prueba. Así sabes si llegó y cuándo se fue, y tienes el parte con fotos para el cliente, sin vigilancia continua.',
      },
      {
        q: '¿Cuál es la diferencia entre rastreo GPS continuo y registro de llegada y salida?',
        a: 'El rastreo continuo guarda la posición del técnico durante toda la jornada, también entre obras. El registro de llegada y salida guarda un punto en el momento en que ficha o hace una foto. Lo primero sirve para despachar vehículos en tiempo real; lo segundo, para demostrar el trabajo hecho y reducir las discusiones sobre horas, con menos datos personales que custodiar.',
      },
      {
        q: '¿GeoTapp sirve como software para instaladores y empresas de mantenimiento?',
        a: 'Sí. GeoTapp ayuda a instaladores, electricistas, fontaneros y equipos de mantenimiento a gestionar intervenciones, partes, horas, desplazamientos y pruebas del trabajo realizado entre el campo y la oficina.',
      },
      {
        q: '¿Puedo usar GeoTapp para partes de intervención y pruebas fotográficas?',
        a: 'Sí. TimeTracker recoge fotos, notas y fichajes verificables en el campo, y Flow lo vincula todo al trabajo y al historial operativo.',
      },
      {
        q: '¿GeoTapp ayuda a reducir las disputas sobre horas y trabajos realizados?',
        a: 'Es uno de sus casos de uso principales: tiempos, ubicación, notas y pruebas fotográficas hacen que la reconstrucción de la intervención sea más clara y más fácil de mostrar.',
      },
    ],
  },
  cta: {
    title: 'El trabajo se hizo. Ahora demuéstralo.',
    subtitle: 'GeoTapp genera pruebas verificables de cada intervención: informes sellados que el cliente puede comprobar por su cuenta.',
    primary: 'Prueba gratis durante 14 días',
    secondary: 'Ver precios',
  },
  pricing_hint: {
    label: 'Puestos TimeTracker desde',
    per: 'por operario al mes, más el plan Flow desde 39 € al mes',
    note: 'Prueba gratuita de 14 días',
  },

  schema_sector_name: 'Instaladores',
  schema_faq: [
    {
      question: '¿GeoTapp rastrea a los instaladores en tiempo real?',
      answer: 'No. GeoTapp no sigue al técnico en un mapa ni guarda su ruta. Registra la ubicación solo cuando ficha (entrada, pausa, salida) o cuando hace una foto de prueba. Así sabes si llegó y cuándo se fue, y tienes el parte con fotos para el cliente, sin vigilancia continua.',
    },
    {
      question: '¿Cuál es la diferencia entre rastreo GPS continuo y registro de llegada y salida?',
      answer: 'El rastreo continuo guarda la posición del técnico durante toda la jornada, también entre obras. El registro de llegada y salida guarda un punto en el momento en que ficha o hace una foto. Lo primero sirve para despachar vehículos en tiempo real; lo segundo, para demostrar el trabajo hecho y reducir las discusiones sobre horas, con menos datos personales que custodiar.',
    },
    {
      question: '¿GeoTapp funciona para fontaneros y técnicos de climatización en movimiento?',
      answer: 'Sí. GeoTapp es la app para instaladores y técnicos de climatización pensada para quien trabaja en obras y en viviendas particulares. Con la gestión de partes integrada, los técnicos registran intervenciones, fotos y horas directamente desde el teléfono, sin volver a la oficina.',
    },
    {
      question: '¿Cómo documento una intervención de mantenimiento o instalación?',
      answer: 'Al terminar cada intervención, el técnico registra en GeoTapp: hora de inicio y fin con la ubicación, fotos del trabajo realizado y notas técnicas. El sistema produce un informe sellado que el cliente puede verificar por su cuenta.',
    },
    {
      question: '¿Puedo usar GeoTapp para gestionar varios equipos de instaladores en obras distintas?',
      answer: 'Sí. GeoTapp Flow permite al responsable coordinar varios equipos, asignar trabajos, seguir el estado de las intervenciones y recoger las pruebas fotográficas de todas las obras activas en cuanto llegan.',
    },
    {
      question: '¿Sirven los informes si hay una disputa con el cliente?',
      answer: 'Los informes de GeoTapp están sellados con la ubicación, la marca de tiempo y las pruebas fotográficas. El cliente los verifica por su cuenta. Ayudan a mostrar que el documento no se ha modificado; por sí solos no son una prueba absoluta de los hechos ni asesoramiento jurídico.',
    },
    {
      question: '¿GeoTapp cumple el RGPD en la geolocalización de los técnicos?',
      answer: 'Está diseñado para moverse dentro de él: la ubicación se registra solo cuando el técnico ficha o hace una foto de prueba, nunca de forma continua, y la información a los empleados se firma en la app antes del primer fichaje. El resto (acuerdo con los representantes de los trabajadores o autorización, donde se exijan) corresponde al empleador.',
    },
  ],
};

export default content;
