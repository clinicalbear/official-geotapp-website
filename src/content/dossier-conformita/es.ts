import type { DossierCopy } from './types';

const es: DossierCopy = {
  metaTitle: 'Dosier de conformidad de GeoTapp: prueba del trabajo, no vigilancia',
  metaDesc:
    'Qué hace y qué no hace GeoTapp, con las fuentes normativas a la vista y los límites declarados sin rodeos. RGPD, Estatuto de los Trabajadores e integridad de la prueba.',
  badge: 'Dosier de conformidad',
  h1: 'Prueba del trabajo, no vigilancia',
  subtitle:
    'Qué hace GeoTapp y, sobre todo, qué no hace. Con las fuentes normativas a la vista y los límites declarados sin rodeos. Un documento para leer, verificar y citar.',
  sections: [
    {
      heading: '¿Por qué existe este documento?',
      paragraphs: [
        'En Bruselas se están escribiendo ahora mismo las reglas sobre cómo se puede supervisar a las personas trabajadoras, entre la directiva sobre el trabajo en plataformas, la gestión algorítmica y el Reglamento de Inteligencia Artificial aplicado al trabajo. Mientras tanto, quien envía equipos al terreno ya tiene que registrar las horas, demostrarlas cuando alguien las discute y hacerlo sin pisotear la intimidad de las personas. Es un equilibrio difícil, y en ese equilibrio se juega buena parte de la confianza entre quien organiza el trabajo y quien lo realiza.',
        'GeoTapp nace dentro de este problema, no al lado. Por eso, en lugar de prometer, pone por escrito qué hace y qué no hace, con las fuentes normativas a la vista y los límites declarados sin rodeos. Lo que sigue se puede leer, verificar y citar. A quien encuentre un punto débil se le invita a señalarlo: un dosier de conformidad vale por lo que sostiene, no por cómo suena.',
      ],
    },
    {
      heading: 'Qué hace y, sobre todo, qué no hace',
      paragraphs: [
        'El principio es uno solo: registrar el hecho, no seguir a la persona.',
        'GeoTapp detecta la posición solo en el momento del fichaje, a la entrada y a la salida, y no durante la jornada. Entre un fichaje y otro no hay ningún seguimiento: ninguna estela de desplazamientos, ninguna posición recogida sin que la persona lo sepa, ningún rastreo digital. La foto que acompaña al fichaje solo se puede tomar con la cámara en directo; no se puede subir una imagen desde la galería. Los datos recogidos se reducen al mínimo necesario por diseño, no como una corrección posterior.',
        'Lo que GeoTapp no hace es igual de importante. No persigue a la persona trabajadora fuera del horario, no perfila comportamientos, no mide la actividad sindical, no interpreta estados emocionales, no construye puntuaciones sobre las personas. Es exactamente el perímetro que el Parlamento Europeo ha señalado como prohibido, y GeoTapp ya se queda fuera de él.',
      ],
    },
    {
      heading: 'Los principios del RGPD, aplicados y no recitados',
      paragraphs: [
        'Minimización de datos (art. 5.1.c RGPD): la posición se recoge solo en el fichaje, no de forma continua.',
        'Limitación de la finalidad (art. 5.1.b): el objetivo es la prueba del trabajo realizado, no el control a distancia de la persona.',
        'Base jurídica (art. 6): ejecución de la relación laboral e interés legítimo documentado, acompañados de la información previa.',
        'Transparencia (arts. 12-14): la persona trabajadora recibe una información clara. GeoTapp pone a disposición un modelo de información sobre el GPS, gratuito y descargable.',
        'Protección desde el diseño (art. 25): la recogida mínima es el comportamiento predeterminado de la herramienta, no una opción que haya que activar.',
      ],
    },
    {
      heading: 'El encaje con el Estatuto de los Trabajadores',
      paragraphs: [
        'En España el control de la actividad laboral mediante medios digitales se enmarca en el artículo 20.3 del Estatuto de los Trabajadores, que permite al empresario adoptar las medidas que estime oportunas de vigilancia y control para verificar el cumplimiento de las obligaciones laborales, guardando siempre la consideración debida a la dignidad de la persona trabajadora. La Agencia Española de Protección de Datos (AEPD) ha precisado que cualquier tratamiento de datos de geolocalización debe superar el juicio de proporcionalidad y ser comunicado de forma previa, expresa, clara e inequívoca a la persona trabajadora.',
        'GeoTapp se sitúa dentro de este marco como herramienta que facilita la conformidad, no como atajo que la esquiva. El responsable del tratamiento sigue siendo la empresa, con sus obligaciones: GeoTapp aporta una herramienta diseñada para mantenerse dentro de las reglas, y los recursos para aplicarlas. Para los demás países europeos, el mapa GPS de personas trabajadoras de la UE reúne treinta y nueve fichas nacionales verificadas a mano, con las obligaciones, la autoridad competente y las sanciones de cada país.',
      ],
    },
    {
      heading: 'La integridad de la prueba',
      paragraphs: [
        'Cuando GeoTapp habla de prueba del trabajo, se refiere a algo que aguante una impugnación, y para aguantar debe ser difícil de falsificar e imposible de retocar después. La defensa es por capas.',
        'La captura de la foto está bloqueada en la cámara en directo: el valor que identifica este modo está fijado en los clientes y, sobre todo, lo verifican las reglas de la base de datos en el momento de la escritura, que rechazan un fichaje con un modo distinto. Con cada foto, el cliente calcula una huella criptográfica SHA-256, condición necesaria para continuar.',
        'Las sesiones de trabajo son inmutables una vez creadas: la hora de inicio, la posición registrada en el fichaje y la identidad de la persona usuaria no son modificables por la persona trabajadora, y la eliminación queda reservada a quienes administran. Las sesiones con posición nacen solo a través de una función del lado del servidor con privilegios administrativos, no por escritura directa desde la aplicación, de modo que quien ficha no puede retrodatar un fichaje, mover su posición ni hacerlo desaparecer.',
        'La detección del GPS falso actúa incluso antes de que el fichaje se envíe. En los dispositivos Android el control es a varios niveles, con una lista de aplicaciones de falseo conocidas, la verificación de los permisos de posición simulada y de los indicios de root: si salta, el fichaje se bloquea, no solo se señala. En iOS se usa la señal nativa del sistema operativo que indica una posición simulada por software. Además, se intercepta el teletransporte, es decir, un desplazamiento a una velocidad físicamente imposible entre dos fichajes.',
        'Cada fichaje deja, por último, un rastro en un registro de auditoría del lado del servidor, con la hora generada por el servidor y no por el dispositivo, y ningún cliente puede escribir en ese registro, ni siquiera quien administra.',
      ],
    },
    {
      heading: 'Los límites, dichos con claridad',
      paragraphs: [
        'Esta es la sección que muchos omitirían, y es justo la que hace creíble todo lo demás. GeoTapp hace que el falseo sea difícil y da fe del contexto del fichaje, pero no promete lo imposible, y declararlo es una forma de respeto hacia quien lee.',
        'El servidor no vuelve a verificar criptográficamente las coordenadas: comprueba que sean plausibles y que estén dentro del geoperímetro previsto, pero confía en la posición que el dispositivo comunica. La atestación del dispositivo certifica que la aplicación proviene de los canales oficiales, pero no protege frente a un cliente modificado y analizado por quien tiene los conocimientos para ello. El modo solo cámara en directo es una declaración honesta del dispositivo, no una prueba criptográfica que el servidor pueda rehacer sobre la imagen. Los controles son más completos en el teléfono que en el reloj. Y, sobre todo, la herramienta no exime a la empresa de su papel de responsable del tratamiento: sigue siendo suyo el deber de informar, de pactar donde haga falta y de respetar la proporcionalidad.',
        'Dicho de otro modo: GeoTapp sube el listón y documenta el hecho, no vende la invulnerabilidad. Quien promete la invulnerabilidad, por lo general, nunca ha tenido que demostrarla ante un tribunal.',
      ],
    },
    {
      heading: 'Los recursos públicos de apoyo',
      paragraphs: [
        'Todo lo que hace falta para aplicar estos principios es público y gratuito: el mapa GPS de personas trabajadoras de la UE con las fichas de los treinta y nueve países, el modelo de información sobre el GPS, la calculadora de sanciones y el índice de vigilancia. Verificados en la fuente, libres para usar y citar indicando la procedencia. Están ahí porque poner el trabajo dentro de la norma no debería ser un privilegio de quien puede pagarse un despacho jurídico.',
      ],
    },
    {
      heading: 'Atestación',
      paragraphs: [
        'Las afirmaciones técnicas de este documento están redactadas y firmadas por Michele Angelo Petraroli, fundador de GeoTapp, que asume su responsabilidad y se pone a disposición para su verificación y contradicción. El respaldo de un abogado laboralista y de un delegado de protección de datos se añadirá en la siguiente versión del documento.',
      ],
    },
  ],
  sourcesTitle: 'Fuentes y referencias',
  sources: [
    'Reglamento (UE) 2016/679 (RGPD), en particular los arts. 5, 6, 12-14 y 25.',
    'Real Decreto Legislativo 2/2015, Estatuto de los Trabajadores, art. 20.3.',
    'Criterios y resoluciones de la Agencia Española de Protección de Datos (AEPD) en materia de geolocalización en el ámbito laboral.',
    'Textos de la UE en discusión: directiva sobre el trabajo en plataformas digitales; disposiciones sobre la gestión algorítmica; Reglamento de Inteligencia Artificial aplicado al trabajo.',
  ],
  lastUpdated: 'Versión 1.0',
  faq: {"title": "Preguntas frecuentes", "items": [{"q": "¿Qué es el dosier de cumplimiento?", "a": "Es el documento que explica, con las fuentes en la mano, por qué GeoTapp es una herramienta de prueba del trabajo y no de vigilancia, y cómo eso se sostiene bajo el RGPD y las normas laborales. Es para quien quiere entender de verdad cómo se gestionan los datos, no para quien se conforma con un eslogan."}, {"q": "¿Es GeoTapp un sistema de vigilancia?", "a": "No, y se diseñó precisamente para no serlo. La herramienta registra la ubicación solo en el fichaje, cuando alguien abre o cierra un servicio, nunca de forma continua, y genera la información de privacidad para que se firme. Demuestra qué se hizo y dónde, no vigila a las personas."}, {"q": "¿Para qué necesito este dosier?", "a": "Para responder cuando un empleado, un cliente o un asesor te pregunta si lo que usas cumple las normas. En lugar de improvisar tienes un texto que expone el razonamiento y las fuentes, y que puedes reenviar tal cual."}, {"q": "¿Las fuentes están verificadas?", "a": "Sí, el dosier remite a leyes y decisiones reales, recogidas al final con la fecha de actualización. Aun así sigue siendo un recurso informativo y no asesoramiento legal: para tu situación concreta, haz que un profesional lo revise todo."}, {"q": "¿Puedo enseñarlo a un cliente o en un conflicto?", "a": "Puedes usarlo para explicar cómo está montado GeoTapp y para mostrar que el cumplimiento no es una afirmación lanzada a la ligera. En un litigio, eso sí, lo que cuenta son tus datos reales y tu información de privacidad: el dosier es el contexto, la prueba es la sesión de trabajo registrada."}, {"q": "¿Solo se aplica a Italia?", "a": "El razonamiento de fondo se sostiene en toda la Unión, porque parte del RGPD, pero los detalles sobre la monitorización de trabajadores cambian de un país a otro. Para la situación de un Estado concreto, parte de su ficha aquí en los recursos."}]},
};

export default es;
