import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para empresas de limpieza: equipos y GPS | GeoTapp',
    description: 'Gestiona equipos, turnos y asistencia con fichajes GPS. Pruebas de servicio automáticas para cuando un cliente discute. Pensada para el RGPD.',
  },

  hero: {
    badge: 'App para empresas de limpieza y multiservicios',
    h1_line1: 'Tu empresa de limpieza,',
    h1_line2: 'gestionada fichaje a fichaje.',
    subtitle: 'Fichajes GPS, pruebas de servicio automáticas y gestión de turnos en una sola app. Cero Excel, menos discusiones. ¿El cliente se queja? Envías el informe en lugar de discutir de palabra.',
    cta_primary: 'Pruébalo en un contrato real',
    cta_note: '14 días, hasta 50 operarios sobre el terreno, sin tarjeta de crédito.',
  },

  pain: {
    title: 'Problemas que resolvemos cada día',
    items: [
      {
        title: '¿Los clientes discuten las horas trabajadas?',
        desc: 'Cada fichaje registra la posición y la hora. Envías el informe y el cliente puede comprobarlo él mismo.',
      },
      {
        title: '¿Los partes de asistencia en papel no son fiables?',
        desc: 'Fichajes desde el smartphone, sin introducir nada a mano. El dato queda tal como se registró: cualquier modificación es detectable.',
      },
      {
        title: '¿Cuesta coordinar varios equipos?',
        desc: 'Ves quién ha fichado, y dónde, en todos los centros, desde un único panel. Sin llamadas.',
      },
    ],
  },

  prima_dopo: {
    title: 'Lo que pasa ahora. Lo que pasa con GeoTapp.',
    prima: [
      'El cliente llama y dice que no han limpiado el baño.',
      'El operario dice «lo hice». El cliente dice «no lo hizo».',
      'No tienes nada en la mano para demostrar nada.',
      'La discusión dura días. A veces pierdes el contrato.',
    ],
    dopo: [
      'El cliente llama y dice que no han limpiado el baño.',
      'Abres el informe del servicio: foto del baño limpio, hora, posición.',
      'Se lo envías, y lo comprueba él mismo.',
      'Tienes algo que mostrar. El operario también.',
    ],
  },

  workflow: {
    title: 'Cómo funciona',
    subtitle: 'Tres pasos sencillos. Cero papel. Cero llamadas.',
    steps: [
      {
        title: 'El operario ficha en el centro',
        desc: 'Abre y cierra el turno desde el smartphone. GeoTapp registra la posición y la hora en ese momento y, si hace falta, fotos de prueba. Entre un fichaje y otro no registra nada de forma automática.',
      },
      {
        title: 'El responsable ve cada fichaje en cuanto llega',
        desc: 'Un único panel para todos los centros. Ves quién ha fichado, dónde y a qué hora, sin perseguir a nadie.',
      },
      {
        title: 'El informe está listo automáticamente',
        desc: 'Al final del turno, el sistema genera un informe sellado con GPS, fotos y sello criptográfico. Envíaselo al cliente, que puede verificarlo de forma autónoma.',
      },
    ],
  },

  differenza: {
    title: 'Fichaje o prueba de servicio.',
    subtitle: 'La mayoría de las apps registra horarios. GeoTapp produce pruebas para tu cliente.',
    rows: [
      {
        label: 'Qué registra',
        competitor: 'Hora de entrada y salida',
        geotapp: 'Hora + posición en el fichaje + fotos + tareas realizadas',
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
        label: 'Prueba fotográfica',
        competitor: 'Ausente o desconectada',
        geotapp: 'Adjunta al informe con marca de tiempo y GPS',
      },
      {
        label: 'Protección de datos (RGPD)',
        competitor: 'A menudo por comprobar',
        geotapp: 'Construido para moverse dentro de los límites del RGPD, con modelos de documentación incluidos',
      },
    ],
  },

  features: {
    title: 'App para empresas de limpieza: pruebas de servicio, no solo fichajes.',
    items: [
      {
        title: 'Pruebas de servicio automáticas',
        desc: 'Cada servicio cerrado genera un informe con GPS, fotos y marca de tiempo. El cliente lo recibe y lo verifica solo, sin acceso a tu sistema.',
      },
      {
        title: 'Visión clara de todos los centros',
        desc: 'Ves quién ha fichado, y dónde, en todos los edificios, según va llegando cada fichaje. Sin llamadas, sin correos. Entre un fichaje y otro no se registra nada de forma automática.',
      },
      {
        title: 'Informes que cualquiera puede comprobar',
        desc: 'Cada informe está sellado y cualquier modificación es detectable. Un cliente, un inspector o un abogado puede verificarlo de forma autónoma.',
      },
      {
        title: 'Gestión de turnos y equipos',
        desc: 'Asigna turnos, gestiona contratos y recibe un aviso si un turno se queda abierto.',
      },
      {
        title: 'Documentación fotográfica',
        desc: 'Los operarios hacen fotos directamente desde la app. Cada imagen lleva la hora y la posición: una prueba visual del trabajo realizado.',
      },
      {
        title: 'Tu personal está protegido',
        desc: 'Un informe verificable da también al operario con qué responder a acusaciones infundadas. Quien trabaja bien lo demuestra con los datos.',
      },
    ],
  },

  testimonial: {
    quote: 'Cuando un cliente discute un servicio, enviamos el informe con fotos y posición y lo comprueba él mismo.',
    author: 'Roberta M.',
    role: 'Gerente, empresa de limpieza',
  },

  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que más nos preguntan antes de empezar.',
    items: [
      {
        q: '¿Cómo funciona el fichaje GPS para empresas de limpieza?',
        a: 'El operario ficha entrada y salida desde el smartphone. GeoTapp registra la posición GPS en ese momento, sin introducirla a mano. Cada fichaje figura en el informe sellado con marca de tiempo y posición, que el cliente puede verificar.',
      },
      {
        q: '¿Puedo demostrar al cliente que el servicio se ha realizado?',
        a: 'Sí. GeoTapp genera automáticamente un informe sellado con GPS, fotos y marca de tiempo al terminar cada servicio. El cliente lo recibe y lo verifica solo, sin acceso a tu sistema.',
      },
      {
        q: '¿GeoTapp está pensado para moverse dentro del RGPD en la geolocalización de los empleados?',
        a: 'GeoTapp está construido para moverse dentro de los límites de las normas de protección de datos: registra la posición solo cuando el operario ficha (inicio, pausa, fin) o hace una foto de prueba, hace firmar el aviso informativo a los empleados en la app antes del primer fichaje y no recoge datos innecesarios. Entre un fichaje y otro no se registra nada de forma automática.',
      },
      {
        q: '¿Cómo gestiono equipos repartidos en varios centros a la vez?',
        a: 'Con GeoTapp Flow tienes un único panel para todos los centros. Ves quién ha fichado y dónde, puedes asignar contratos y recibir un aviso si un turno se queda abierto.',
      },
      {
        q: '¿Siguen haciendo falta los partes de asistencia en papel?',
        a: 'No. GeoTapp sustituye los partes de asistencia en papel por fichajes desde el smartphone. Los datos se exportan en Excel o CSV para procesar las nóminas.',
      },
      {
        q: '¿Cuánto cuesta GeoTapp para una empresa de limpieza?',
        a: 'GeoTapp Flow empieza en 39 € al mes; cada operario con la app TimeTracker cuesta 3 € más al mes (2,50 € a partir del puesto 26). La suscripción dura 12 meses como mínimo. Los precios no incluyen IVA. Puedes probarlo gratis durante 14 días, sin tarjeta de crédito.',
      },
      {
        q: '¿GeoTapp hace seguimiento GPS de los operarios?',
        a: 'No hay seguimiento continuo. El operario ficha entrada y salida desde el smartphone y cada fichaje queda vinculado a una posición GPS y a una marca de tiempo, registradas en ese momento (inicio, pausa, fin) y cuando se hace una foto de prueba. Es una posición para demostrar la presencia, no vigilancia: entre un fichaje y otro no se registra nada de forma automática, y la app no pide permiso de ubicación en segundo plano.',
      },
    ],
  },

  cta: {
    title: 'Tus operarios trabajan bien. Haz que el cliente lo vea.',
    subtitle: 'Cada servicio se convierte en un informe que puedes mostrar y que el cliente puede verificar solo.',
    primary: 'Empezar prueba gratuita de 14 días',
    secondary: 'Ver precios',
  },

  pricing_hint: {
    label: 'Puestos TimeTracker desde',
    per: 'por operario al mes, más el plan Flow desde 39 € al mes (IVA no incluido)',
    note: 'Prueba gratuita de 14 días',
  },

  schema_sector_name: 'Empresa de limpieza',

  schema_faq: [
    {
      question: '¿Cómo funciona el fichaje GPS para empresas de limpieza?',
      answer: 'El operario ficha entrada y salida desde el smartphone. GeoTapp registra la posición GPS en ese momento, sin introducirla a mano. Cada fichaje figura en el informe sellado con marca de tiempo y posición, que el cliente puede verificar.',
    },
    {
      question: '¿Puedo demostrar al cliente que el servicio se ha realizado?',
      answer: 'Sí. GeoTapp genera automáticamente un informe sellado con GPS, fotos y marca de tiempo. El cliente lo recibe y lo verifica solo.',
    },
    {
      question: '¿GeoTapp está pensado para moverse dentro del RGPD en la geolocalización de los empleados?',
      answer: 'GeoTapp está construido para moverse dentro de los límites de las normas de protección de datos: registra la posición solo cuando el operario ficha (inicio, pausa, fin) o hace una foto de prueba, hace firmar el aviso informativo a los empleados en la app antes del primer fichaje y no recoge datos innecesarios. Entre un fichaje y otro no se registra nada de forma automática.',
    },
    {
      question: '¿GeoTapp hace seguimiento GPS de los operarios?',
      answer: 'No hay seguimiento continuo. El operario ficha entrada y salida desde el smartphone y cada fichaje queda vinculado a una posición GPS y a una marca de tiempo, registradas en ese momento (inicio, pausa, fin) y cuando se hace una foto de prueba. Entre un fichaje y otro no se registra nada de forma automática.',
    },
  ],
};

export default content;
