import type { PresenzeCopy } from './types';

const es: PresenzeCopy = {
  metaTitle: '¿Se puede usar el GPS para el fichaje sin vigilar a los empleados? - GeoTapp',
  metaDesc:
    'Sí, si la posición solo se registra al fichar. Qué dictaminó un tribunal italiano en 2026, qué sancionan realmente las autoridades de protección de datos, y qué registra un sistema de fichaje por GPS conforme.',
  h1: '¿Se puede usar el GPS para el fichaje sin vigilar a los empleados?',
  lede:
    'Sí. Un sistema que solo capta la posición en el momento exacto en que un trabajador ficha la entrada, una pausa o la salida no vigila a la persona: documenta un hecho. Es exactamente la distinción que confirmó un tribunal italiano en 2026, y coincide con lo que realmente sancionan las autoridades de protección de datos: el seguimiento continuo, no el registro puntual de la posición.',
  updatedLabel: 'Actualizado el 25 de septiembre de 2026',
  sections: [
    {
      heading: '¿Cuándo está permitido el GPS para el control de presencia?',
      paragraphs: [
        'En la mayoría de los países de la UE rige el mismo principio: las herramientas que podrían permitir un control continuo de la actividad del trabajador requieren, antes de activarse, un acuerdo con la representación de los trabajadores o una autorización de la autoridad competente. En Italia, esa exigencia la fija el artículo 4 del Estatuto de los Trabajadores (ley n.º 300/1970) para los instrumentos de control a distancia, exceptuando expresamente los instrumentos de simple registro de accesos y presencias.',
        'Una sentencia dictada en Italia el 1 de julio de 2026 (Tribunal de Cosenza, sentencia n.º 972) marca dónde está el límite para las aplicaciones de fichaje por GPS: cuando la posición solo se capta en el momento del fichaje, sin seguimiento continuo de los desplazamientos entre fichajes, el sistema se considera una herramienta de registro de presencia, no de vigilancia a distancia. El tribunal anuló así una multa de 50.000 euros que la autoridad de protección de datos italiana había impuesto a un organismo público, precisamente por ese motivo.',
        'La regla práctica: un punto GPS tomado al inicio y al final del turno capta un instante. Una estela de puntos tomados cada minuto sigue a una persona. Es la misma tecnología por satélite, pero dos herramientas muy distintas ante la ley.',
      ],
    },
    {
      heading: 'Qué registra GeoTapp, y qué no registra',
      paragraphs: [
        'GeoTapp solo capta la posición cuando el trabajador realiza una acción concreta: fichar la entrada, iniciar o terminar cada pausa, fichar la salida, más un punto por cada foto de prueba del trabajo tomada en directo. Entre un fichaje y otro no se registra nada de forma automática: ningún rastro de desplazamientos, ningún seguimiento en segundo plano, ninguna posición recogida sin conocimiento del trabajador.',
      ],
    },
    {
      heading: 'Cómo puede comprobarlo un representante sindical, un abogado laboralista o un DPD sin preguntarnos nada',
      paragraphs: [
        'No hace falta fiarse de nuestra palabra: se puede comprobar de forma independiente. En la aplicación Android, el manifiesto solo declara los permisos ACCESS_FINE_LOCATION y ACCESS_COARSE_LOCATION. No se solicita ACCESS_BACKGROUND_LOCATION, el permiso necesario para seguir a un empleado con la aplicación cerrada, y no existe ningún servicio en primer plano dedicado a la ubicación: sin ese permiso, el sistema operativo simplemente no entrega la posición a una aplicación que no está abierta en pantalla. En iOS, la aplicación solo solicita la autorización "mientras se usa la app" (requestWhenInUseAuthorization), nunca la autorización de seguimiento en segundo plano.',
        'Es una comprobación que un representante de los trabajadores, un abogado laboralista o un delegado de protección de datos puede hacer por sí mismo en pocos minutos, leyendo el manifiesto de la aplicación o la etiqueta de privacidad publicada por la tienda de apps, incluso antes de leer la información que le entrega la empresa.',
      ],
    },
    {
      heading: '¿Durante cuánto tiempo se conservan las posiciones registradas?',
      paragraphs: [
        'En el registro de fichajes, las coordenadas se eliminan después de doce meses; la empresa puede reducir ese periodo hasta treinta días. En los partes ya entregados a un cliente, en cambio, las posiciones permanecen: son documentos sellados que sirven como prueba del trabajo realizado, y siguen el plazo de conservación propio de ese tipo de documentación, no el del registro.',
        'Son dos reglas distintas para dos objetos distintos. El registro operativo se aligera con el tiempo; un documento ya entregado a un tercero sigue sus propias reglas, como cualquier documento una vez que ha salido de nuestros sistemas.',
      ],
    },
    {
      heading: '¿Y fuera de Italia?',
      paragraphs: [
        'El RGPD (en particular los artículos 5, 6, 12 a 14 y 25 del Reglamento UE 2016/679) rige en toda la Unión Europea e impone los mismos principios en cualquier país: minimización de datos, finalidad declarada, información clara al trabajador. Lo que cambia de un país a otro es el procedimiento sobre el control a distancia: el equivalente local del artículo 4 italiano, el papel de la representación de los trabajadores, la autoridad de control competente. Para la situación de cada país, el mapa de GPS y trabajadores en la UE reúne fichas verificadas país por país.',
      ],
    },
  ],
  table: {
    title: 'Qué se registra y qué no se registra',
    colLeft: 'Registra',
    colRight: 'No registra',
    left: [
      'Posición al fichar la entrada y la salida',
      'Posición al inicio y al final de cada pausa',
      'Un punto GPS por cada foto de prueba del trabajo, tomada en directo',
      'Una hora generada por el servidor, no por el dispositivo del trabajador',
    ],
    right: [
      'Ningún desplazamiento durante el turno, entre un fichaje y otro',
      'Ninguna posición fuera del turno o con la app cerrada',
      'Ninguna puntuación ni perfilado de comportamiento',
      'Ninguna posición a partir de fotos subidas desde una galería: solo cámara en directo',
    ],
  },
  sourcesTitle: 'Fuentes y referencias',
  sources: [
    'Tribunal de Cosenza (Italia), sentencia n.º 972 del 1 de julio de 2026',
    'Autoridad italiana de protección de datos (Garante), resolución n.º 382 del 28 de mayo de 2026 (doc-web 10259916)',
    'Autoridad italiana de protección de datos (Garante), resolución n.º 135 del 13 de marzo de 2025 (doc-web 10128005), anulada por la sentencia anterior',
    'Ley italiana n.º 300 del 20 de mayo de 1970 (Estatuto de los Trabajadores), art. 4',
    'Reglamento (UE) 2016/679 (RGPD), arts. 5, 6, 12 a 14, 25',
  ],
  disclaimer:
    'Esta página describe principios generales, verificables en la fuente, y no constituye asesoramiento legal: para tu situación específica, consulta con un abogado laboralista o un delegado de protección de datos.',
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿El GPS a los empleados está prohibido por el RGPD?',
        a: 'No. Las autoridades de protección de datos nunca han prohibido el GPS en los trabajadores como tal. Lo que sancionan es el seguimiento continuo, la falta de información, la recogida de datos sin relación con el trabajo: no el registro puntual de la posición al fichar.',
      },
      {
        q: '¿Siempre hace falta el acuerdo de la representación sindical para usar el GPS en el fichaje?',
        a: 'Es necesario cuando el sistema puede permitir un control continuo de la actividad del trabajador. El Tribunal de Cosenza, sin embargo, resolvió que un sistema que solo capta la posición al fichar, sin seguimiento continuo, entra dentro de las herramientas de registro de presencia que no requieren ese procedimiento.',
      },
      {
        q: '¿Qué pasa si el sistema también rastrea durante las pausas?',
        a: 'Es uno de los errores que ha dado lugar a sanciones reales: una empresa de transporte fue multada con 50.000 euros, en parte, porque el seguimiento continuaba durante las pausas. El principio de minimización de datos (art. 5 del RGPD) exige que la recogida se detenga cuando termina el turno.',
      },
      {
        q: '¿Puede GeoTapp rastrear a un empleado de forma continua si lo pido?',
        a: 'No. La aplicación nunca solicita el permiso de ubicación en segundo plano y no tiene ningún servicio que siga a un dispositivo con la app cerrada: no es una opción desactivada, es un permiso que el código nunca pide. Se puede comprobar leyendo el manifiesto de la aplicación o la etiqueta de privacidad de la tienda.',
      },
      {
        q: '¿Las posiciones registradas se conservan para siempre?',
        a: 'No. En el registro de fichajes se eliminan después de doce meses, y la empresa puede reducir ese plazo a treinta días. Permanecen, en cambio, en los partes ya entregados a un cliente, porque son documentos sellados que sirven como prueba del trabajo realizado.',
      },
    ],
  },
  relatedTitle: 'Recursos relacionados',
};

export default es;
