import type { ContestazioniCopy } from './types';

/**
 * Pagina "Cuando alguien cuestiona el trabajo" (27/10/2026), escrita de forma nativa en español.
 * Las afirmaciones sobre el producto salen de la scheda claim (docs/stampa/scheda-claim.md) y de las
 * cadenas ya publicadas en dict.features de es.json. Registro: tuteo, como el diccionario del sitio.
 */
const es: ContestazioniCopy = {
  metaTitle: 'Cuando cuestionan tu trabajo: qué cambia con GeoTapp | GeoTapp',
  metaDesc:
    'Si un cliente o un empleado cuestiona el trabajo, ¿qué tienes en la mano? La misma discusión vista por tres partes: empresa, quien trabaja y cliente.',
  kicker: 'Discrepancias sobre el trabajo',
  h1: 'Cuando alguien cuestiona el trabajo: qué cambia con GeoTapp',
  lede:
    'Una discrepancia no se puede evitar. Lo que cambia es con lo que cuentas cuando llega: un recuerdo contra otro recuerdo, o un documento. Aquí ves la misma discusión desde tres lados: la empresa, quien trabaja y quien encargó el trabajo.',
  updatedLabel: 'Actualizado el 27 de octubre de 2026',
  scenes: [
    {
      kicker: 'La empresa',
      heading: 'Si eres la empresa',
      scene: '«El cliente dice que no vinisteis. O que estuvisteis una hora, no tres.»',
      haveTitle: 'Con qué cuentas',
      have: [
        'La hora de entrada, de las pausas y de salida de cada intervención.',
        'La ubicación registrada al fichar. Al fichar, la app rechaza las ubicaciones simuladas con aplicaciones de ubicación falsa, las demasiado imprecisas y los desplazamientos imposibles.',
        'Las fotos de prueba de la intervención. En las fotos no se rechaza nada: se señala, comparando la hora y la ubicación de la foto con las del fichaje.',
        'Un informe que al terminar la intervención se compone con fichajes, fotos y notas, y se sella: cualquier modificación posterior es detectable.',
      ],
      changeTitle: 'Qué cambia',
      change: [
        'En lugar de reconstruirlo de memoria entre WhatsApp, correos y hojas de papel, envías un documento.',
        'Si no hay cobertura, el fichaje queda guardado en el teléfono y se envía solo cuando vuelve la señal, con la hora en que se hizo.',
        'Las horas documentadas son horas que puedes mostrar cuando las facturas.',
      ],
    },
    {
      kicker: 'Quien trabaja',
      heading: 'Si eres tú quien trabaja',
      scene: '«He hecho más horas de las que me han pagado.»',
      haveTitle: 'Qué tienes',
      have: [
        'Tus jornadas de trabajo, con la hora de inicio, las pausas y el final, que puedes revisar en la app por periodo, con el total de horas.',
        'La ubicación se registra solo cuando fichas o haces una foto de prueba: entrada, inicio y fin de pausa, salida.',
        'Entre un fichaje y otro no se registra ninguna ubicación de forma automática y continua. En Android y en iPhone la app ni siquiera pide el permiso de ubicación en segundo plano.',
      ],
      changeTitle: 'Qué cambia',
      change: [
        'Si hay una discusión sobre las horas, hay una hora registrada por un gesto tuyo, que no depende de la memoria de nadie.',
        'La oficina ve los fichajes cuando llegan: la pantalla se llama Fichajes de hoy y muestra los que se han hecho, no dónde está alguien ahora mismo.',
      ],
      extra: {
        title: 'Qué queda de las ubicaciones, y por cuánto tiempo',
        paragraphs: [
          'En el registro, las ubicaciones se borran a los doce meses, un plazo que la empresa puede acortar hasta treinta días.',
          'En los informes ya entregados permanecen, porque son documentos sellados, y siguen el plazo de conservación que fija la ley: a los cinco años el paquete se borra. Un informe entregado es una fotografía: no se actualiza y no se toca sin romper el sello que lo hace verificable.',
        ],
      },
    },
    {
      kicker: 'El cliente',
      heading: 'Si eres quien encargó el trabajo',
      scene: '«Me dicen que el trabajo está hecho. ¿Cómo lo sé sin fiarme de ellos?»',
      haveTitle: 'Qué haces',
      have: [
        'Recibes un enlace al informe y lo compruebas por tu cuenta, en línea o con el verificador sin conexión: un único archivo que no se conecta a internet y lleva dentro la clave pública.',
        'La comprobación recalcula las huellas de cada evento y de cada foto y verifica la firma. La página de verificación muestra dos cosas por separado: si el documento está íntegro y si la firma es válida.',
        'Funciona también dentro de años, incluso sin GeoTapp: quien tenga el paquete y el verificador puede repetir la comprobación.',
      ],
      changeTitle: 'Qué demuestra y qué no',
      change: [
        'Un paquete sellado ayuda a mostrar que lo entregado no se ha tocado, pero por sí solo no es prueba absoluta del hecho material ni asesoramiento legal.',
        '«Documento íntegro» significa no manipulado. Es la firma, que no se puede rehacer sin la clave, la que indica que el paquete lo hemos emitido nosotros.',
      ],
    },
  ],
  sample: {
    heading: 'Pruébalo con un informe real',
    paragraphs: [
      'Aquí debajo tienes un informe de ejemplo, la sustitución de un cuadro eléctrico. Descárgalo y compruébalo en tu navegador: la verificación se ejecuta en tu equipo y el archivo no se nos envía.',
    ],
  },
  limits: {
    heading: 'Lo que GeoTapp no hace',
    items: [
      'No rastrea de forma continua, ni queriendo: en Android y en iPhone la app no pide el permiso de ubicación en segundo plano.',
      'No demuestra, por sí solo, que el hecho ocurriera: indica si el paquete se ha alterado después de la entrega.',
      'No promete que las discrepancias desaparezcan: cambia con qué te presentas cuando llegan.',
      'No sustituye al asesor laboral, al DPO, ni los acuerdos con la representación de los trabajadores o las autorizaciones que la ley de tu país pueda exigir.',
    ],
    formula:
      'En resumen: un paquete sellado ayuda a mostrar que lo entregado no se ha tocado, pero por sí solo no es prueba absoluta del hecho material ni asesoramiento legal.',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Basta un informe de GeoTapp para ganar una discusión sobre el trabajo?',
        a: 'No por sí solo. El informe muestra lo que se ha registrado y permite a cualquiera comprobar que no se ha alterado después de la entrega; no demuestra, por sí solo, que el hecho ocurriera, y no es asesoramiento legal. Es un documento ordenado y verificable en lugar de un recuerdo contra otro recuerdo.',
      },
      {
        q: '¿GeoTapp rastrea a los empleados durante la jornada?',
        a: 'No. La ubicación se registra solo cuando quien trabaja hace un gesto: entrada, inicio y fin de pausa, salida, foto de prueba. Entre un fichaje y otro no se registra ninguna ubicación de forma automática y continua. En Android y en iPhone la app ni siquiera pide el permiso de ubicación en segundo plano.',
      },
      {
        q: '¿Tiene el cliente que fiarse de GeoTapp para comprobar el informe?',
        a: 'No. El verificador sin conexión es un único archivo que no se conecta a internet y lleva dentro la clave pública: recalcula las huellas y comprueba la firma también dentro de años, incluso sin GeoTapp. Lo que dice la comprobación es si el paquete se ha alterado, no si el hecho ocurrió.',
      },
      {
        q: '¿Qué pasa con las ubicaciones después de la entrega?',
        a: 'En el registro se borran a los doce meses, un plazo que la empresa puede acortar hasta treinta días. En los informes ya entregados permanecen, porque son documentos sellados, y siguen el plazo de conservación que fija la ley: a los cinco años el paquete se borra.',
      },
      {
        q: '¿Dónde están los datos?',
        a: 'Los datos de trabajo y las fotos están almacenados en la Unión Europea.',
      },
      {
        q: '¿GeoTapp sustituye al asesor laboral o a los acuerdos con los representantes de los trabajadores?',
        a: 'No. Ayuda a mantenerse dentro de los límites que marcan el RGPD y la normativa laboral, pero no sustituye a un asesor laboral, al DPO, ni los acuerdos con la representación de los trabajadores o las autorizaciones que la ley de tu país pueda exigir.',
      },
    ],
  },
  next: {
    heading: 'Para seguir',
    paragraph: 'Si quieres ver función por función qué hay dentro, o los precios, empieza aquí.',
    featuresLabel: 'Qué hace GeoTapp, función por función →',
    pricingLabel: 'Ver los precios →',
  },
  card: {
    title: 'Qué cambia cuando alguien cuestiona el trabajo',
    text: 'La empresa, quien trabaja y el cliente, cara a cara.',
    cta: 'Lee la página',
  },
  disclaimer:
    'Esta página describe lo que hace GeoTapp y no es asesoramiento legal. Para tu situación concreta consulta a un asesor laboral o a un DPO.',
};

export default es;
