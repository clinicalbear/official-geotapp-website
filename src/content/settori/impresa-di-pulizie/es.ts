import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para Empresa de Limpieza: Gestión GPS de Equipos y Prueba de Servicio | GeoTapp',
    description:
      'Gestiona equipos de limpieza, turnos y asistencia con GPS en tiempo real. Pruebas automáticas de servicio, cero disputas con clientes. App conforme con RGPD.',
  },

  hero: {
    badge: 'App para empresas de limpieza y multiservicio',
    h1_line1: 'Tu empresa de limpieza,',
    h1_line2: 'gestionada en tiempo real.',
    subtitle:
      'Fichajes GPS, pruebas de servicio automáticas y gestión de turnos en una sola app. Sin hojas de cálculo, sin disputas. ¿El cliente reclama? Envía el informe y la discusión termina.',
    cta_primary: 'Prueba GeoTapp gratis durante 14 días',
    cta_note: 'Sin compromiso. Sin tarjeta de crédito.',
  },

  pain: {
    title: 'Problemas que resolvemos cada día',
    items: [
      {
        title: '¿Los clientes disputan las horas trabajadas?',
        desc: 'Cada fichaje es verificado por GPS y tiene marca de tiempo. Envía el informe y la discusión termina en treinta segundos.',
      },
      {
        title: '¿Las hojas de presencia en papel son poco fiables?',
        desc: 'Seguimiento automático desde el smartphone, sin entradas manuales. El dato es lo que es, y no se puede cambiar.',
      },
      {
        title: '¿Difícil coordinar varios equipos?',
        desc: 'Mira dónde están todos en tiempo real, en todas las sedes, desde un único panel. Sin llamadas.',
      },
    ],
  },

  prima_dopo: {
    title: 'Lo que pasa ahora. Lo que pasa con GeoTapp.',
    prima: [
      'El cliente llama y dice que el baño no se limpió.',
      'El operario dice "Lo hice". El cliente dice "No lo hizo".',
      'No tienes nada para demostrar nada.',
      'La discusión se alarga durante días. A veces pierdes el contrato.',
    ],
    dopo: [
      'El cliente llama y dice que el baño no se limpió.',
      'Abres el informe de la intervención: foto del baño limpio, hora, GPS.',
      'Lo envías. La discusión termina en treinta segundos.',
      'El contrato está a salvo. El operario está protegido.',
    ],
  },

  workflow: {
    title: 'Cómo funciona',
    subtitle: 'Tres pasos sencillos. Cero papel. Cero llamadas.',
    steps: [
      {
        title: 'El operario ficha con GPS',
        desc: 'Abre y cierra su turno desde el smartphone. GeoTapp registra coordenadas GPS reales, fotos y marca de tiempo, todo automático e inalterable.',
      },
      {
        title: 'El responsable ve todo en tiempo real',
        desc: 'Un panel para todas las sedes. Sabes exactamente quién está en cada sitio, dónde y desde cuándo, sin perseguir a nadie.',
      },
      {
        title: 'El informe está listo automáticamente',
        desc: 'Al final del turno, el sistema genera un informe sellado con GPS, fotos y firma digital. Envíalo al cliente, verificable de forma autónoma.',
      },
    ],
  },

  differenza: {
    title: 'Fichaje vs Prueba de servicio.',
    subtitle: 'La mayoría de las apps registran horarios. GeoTapp produce pruebas para tu cliente.',
    rows: [
      {
        label: 'Qué registra',
        competitor: 'Hora de entrada/salida',
        geotapp: 'Hora + GPS verificado + fotos + tareas realizadas',
      },
      {
        label: 'Quién puede verificar',
        competitor: 'Solo tu oficina',
        geotapp: 'Tú, el cliente, un tercero, de forma independiente',
      },
      {
        label: 'En caso de disputa',
        competitor: 'Datos no defendibles',
        geotapp: 'Informe sellado, inalterable',
      },
      {
        label: 'Prueba fotográfica',
        competitor: 'Ausente o desconectada',
        geotapp: 'Adjunta al informe con marca de tiempo y GPS',
      },
      {
        label: 'Conformidad RGPD',
        competitor: 'Frecuentemente por verificar',
        geotapp: 'Conforme por diseño, formularios incluidos',
      },
    ],
  },

  features: {
    title: 'App para empresa de limpieza: pruebas de servicio, no solo fichajes.',
    items: [
      {
        title: 'Pruebas de servicio automáticas',
        desc: 'Cada intervención completada genera un informe con GPS, fotos y marca de tiempo. El cliente lo recibe y verifica de forma autónoma.',
      },
      {
        title: 'Control real sobre todas las sedes',
        desc: 'Mira en tiempo real quién está activo dónde, en todos los edificios simultáneamente. Sin llamadas, sin emails.',
      },
      {
        title: 'Informes defendibles en cualquier ámbito',
        desc: 'Cada informe está firmado digitalmente y es inalterable. Válido ante un cliente, un inspector o un abogado.',
      },
      {
        title: 'Gestión de turnos y equipos',
        desc: 'Asigna turnos, gestiona encargos y recibe alertas automáticas si una intervención no se abre o cierra a tiempo.',
      },
      {
        title: 'Documentación fotográfica',
        desc: 'Los operarios toman fotos directamente desde la app. Cada imagen está geolocalizada con marca de tiempo, prueba visual del trabajo realizado.',
      },
      {
        title: 'Tu personal está protegido',
        desc: 'Un informe verificable protege también al operario frente a acusaciones infundadas. El buen trabajo se demuestra con datos.',
      },
    ],
  },

  testimonial: {
    quote:
      'Desde que usamos GeoTapp, las disputas con clientes se resuelven en un minuto. Enviamos el informe con fotos y GPS, y la discusión termina ahí. No hemos perdido ni un contrato en un año.',
    author: 'Rosa M.',
    role: 'Propietaria, empresa de limpieza industrial - España',
  },

  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que nos preguntan más a menudo antes de empezar.',
    items: [
      {
        q: '¿Cómo funciona el fichaje GPS para empresas de limpieza?',
        a: 'El operario ficha entrada y salida desde el smartphone. GeoTapp registra las coordenadas GPS en ese momento, no se introducen a mano. Cada fichaje es certificado con marca de tiempo y posición verificable por el cliente.',
      },
      {
        q: '¿Puedo demostrar al cliente que el servicio se realizó?',
        a: 'Sí. GeoTapp genera automáticamente un informe sellado con GPS, fotos y marca de tiempo al final de cada intervención. El cliente lo recibe y verifica de forma autónoma.',
      },
      {
        q: '¿GeoTapp cumple con el RGPD para la geolocalización de empleados?',
        a: 'Sí. GeoTapp solo geolocaliza durante las horas de trabajo activas, incluye formularios de información al empleado y no recopila datos innecesarios.',
      },
      {
        q: '¿Cómo gestiono equipos en varias sedes a la vez?',
        a: 'Con GeoTapp Flow tienes un panel único para todas las sedes. Mira en tiempo real quién está activo dónde, asigna encargos y recibe alertas automáticas.',
      },
      {
        q: '¿Siguen siendo necesarias las hojas de presencia en papel?',
        a: 'No. GeoTapp sustituye completamente las hojas de presencia por seguimiento GPS automático desde el smartphone. Los datos son exportables para nóminas.',
      },
      {
        q: '¿Cuánto cuesta GeoTapp para una empresa de limpieza?',
        a: 'Los planes empiezan desde pocos euros por operario al mes. Prueba gratis 14 días, sin compromiso.',
      },
    ],
  },

  cta: {
    title: 'Tus operarios trabajan bien. Haz que el cliente lo vea.',
    subtitle:
      'Cada intervención se convierte en prueba de servicio verificable. Cero disputas, cero contratos perdidos.',
    primary: '¡Empieza gratis ahora!',
    secondary: 'Ver Precios',
  },

  pricing_hint: {
    label: 'Desde',
    per: 'operario/mes',
    note: 'Prueba gratuita de 14 días',
  },

  schema_sector_name: 'Empresa de Limpieza',

  schema_faq: [
    {
      question: '¿Cómo funciona el fichaje GPS para empresas de limpieza?',
      answer:
        'El operario ficha desde el smartphone. GeoTapp registra coordenadas GPS, no se introducen a mano. Cada fichaje es certificado con marca de tiempo y posición verificable por el cliente.',
    },
    {
      question: '¿Puedo demostrar al cliente que el servicio se realizó?',
      answer:
        'Sí. GeoTapp genera automáticamente un informe sellado con GPS, fotos y marca de tiempo. El cliente lo recibe y verifica de forma autónoma.',
    },
    {
      question: '¿GeoTapp cumple con el RGPD para la geolocalización de empleados?',
      answer:
        'Sí. GeoTapp solo geolocaliza durante las horas de trabajo activas, incluye formularios de información al empleado y no recopila datos innecesarios.',
    },
  ],
};

export default content;
