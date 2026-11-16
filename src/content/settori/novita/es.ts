import type { NovitaCopy } from './types';

const copy: NovitaCopy = {
  ui: {
    kicker: 'Novedades',
    flowCaption: 'Flow, el panel del titular',
    phoneCaption: 'TimeTracker, en el móvil',
    altFlow: 'Flow, el panel del titular: pantalla de {tool}',
    altPhone: 'TimeTracker en el móvil: pantalla de {tool}',
    flowOnly: 'Esta herramienta se usa desde el panel de Flow: no hace falta nada en el móvil de tus operarios.',
    seeAlso: 'Para las revisiones eléctricas, las calderas y los gases fluorados hay herramientas específicas:',
    moreShots: 'Más pantallas de esta herramienta',
    enlarge: 'Ampliar: {name}',
    close: 'Cerrar',
    prev: 'Anterior',
    next: 'Siguiente',
  },
  sections: {
    sicurezza: {
      title: 'Nuevas herramientas para vigilancia: ronda, trabajador aislado, relevos y Emergencias',
      intro: 'Cuando eliges tu sector, GeoTapp activa solo las herramientas de tu oficio. Para vigilancia son tres, más el módulo Emergencias, que sirve para todos los sectores. Cada una tiene su parte en Flow, donde decides y controlas, y su parte en el móvil del vigilante.',
    },
    pulizie: {
      title: 'Nuevas herramientas para limpieza: control de calidad y fichas de seguridad',
      intro: 'Dos herramientas pensadas para las reclamaciones y las inspecciones que una empresa de limpieza se encuentra cada semana. Se activan al indicar tu sector; las demás quedan ocultas.',
    },
    elettricisti: {
      title: 'Nuevas herramientas para electricistas: mediciones de fin de obra y calendario de revisiones',
      intro: 'Para quien cierra una instalación y para quien tiene que acordarse de las revisiones periódicas de sus clientes. GeoTapp recoge, maqueta y recuerda: las comprobaciones, los certificados y las firmas siguen siendo de quien los hace.',
    },
    edilizia: {
      title: 'Nuevas herramientas para construcción: documentos de las empresas y estimación de mano de obra',
      intro: 'Dos herramientas para quien coordina obras con subcontratas, pensadas para llegar a cada reunión con los papeles ya en orden. Se usan desde Flow, en el panel del titular.',
    },
    idraulici: {
      title: 'Nuevas herramientas para fontaneros y climatización: revisiones de calderas y registro de gases fluorados',
      intro: 'El trabajo que vuelve cada año y que se olvida justo cuando hace falta: avisar a los clientes de la revisión de su instalación y llevar al día los equipos con gases fluorados.',
    },
    installatori: {
      title: 'Nuevas herramientas para instaladores: entrega con firma y almacén de la furgoneta',
      intro: 'Dos herramientas para lo que más tiempo te hace perder en cada trabajo: cerrar la entrega con el cliente y saber qué hay de verdad en la furgoneta.',
    },
    manutenzione: {
      title: 'Nuevas herramientas para mantenimiento: tiempos de intervención y QR en los equipos',
      intro: 'Para quien trabaja con contratos de servicio y con muchos equipos repartidos en varios edificios: saber cuánto tiempo queda para cada aviso y encontrar el historial de una máquina con un gesto.',
    },
    impianti: {
      title: 'Nuevas herramientas para instaladores de sistemas: entrega con firma y almacén de la furgoneta',
      intro: 'Esta página habla a quien monta y entrega instalaciones de cualquier tipo, por eso aquí encuentras las dos herramientas que valen para todos: entrega con firma y almacén de la furgoneta. Las revisiones eléctricas y las de calderas son oficios aparte y tienen herramientas propias.',
    },
  },
  tools: {
    giro_ronda: {
      title: 'Ronda de vigilancia',
      body: 'Son las tres de la madrugada y el cliente quiere saber si la ronda ha pasado por todos los puntos del almacén. En Flow dibujas los puntos en el mapa y configuras las rondas con sus horarios; el vigilante, al pasar, toca «Paso» en el móvil. Por la mañana tienes el informe de la noche, ya maquetado.',
      note: 'La ubicación se lee solo en el momento en que el vigilante toca «Paso»: entre un punto y otro no se registra nada.',
    },
    lavoratore_isolato: {
      title: 'Trabajador aislado',
      body: 'Un vigilante solo en un recinto, de noche. Para cada sede eliges un plan con el intervalo que prefieras: a esos intervalos el móvil pregunta «¿Todo bien?» y, si no llega respuesta, avisa al coordinador. En Flow ves los turnos en curso y el historial de quién ha respondido y cuándo.',
      note: 'No se envía ninguna ubicación. Es una herramienta de apoyo: no sustituye las medidas de seguridad previstas para quien trabaja en solitario.',
    },
    consegne_turno: {
      title: 'Relevo de turno',
      body: 'A las seis, el vigilante de noche deja el puesto al de la mañana. Antes eran llaves en una caja y un mensaje de voz; ahora, al terminar el turno, escribe notas, llaves e incidencias para quien llega, que las recibe desde el móvil. En Flow ves los relevos pendientes de recibir y las incidencias abiertas. El historial no se puede modificar.',
    },
    emergenze: {
      title: 'Emergencias y simulacros',
      body: 'Simulacro de evacuación en un edificio o en un evento: el coordinador elige el escenario y toca en el plano el punto del peligro. Cada persona del equipo recibe en el móvil su función, qué hacer y las salidas por orden, y responde con un toque: presente, en camino, no puedo. El panel muestra quién ha respondido y en cuánto tiempo; los planes se abren también sin cobertura.',
      note: 'Es una herramienta de coordinación y de prueba: no sustituye ni valida tu plan de emergencia, y una notificación puede no llegar, por eso cada uno confirma.',
    },
    qualita_pulizie: {
      title: 'Control de calidad',
      body: 'El responsable del cliente dice que la tercera planta no está bien limpia. La encargada recorre la zona con la lista de puntos, marca conforme, no conforme o no aplica y adjunta la foto. En Flow cada punto tiene un peso de 1 a 3, la puntuación del mes es por sede y por zona, y a fin de mes sale el PDF para enseñar al cliente, con las acciones abiertas.',
    },
    schede_consumi: {
      title: 'Fichas de seguridad y consumos',
      body: 'Quien inspecciona quiere ver la ficha de datos de seguridad del producto que hay en el carro. En Flow cada sede tiene sus productos, cada uno con su ficha en PDF, y ves las retiradas y los costes del mes. En el móvil las fichas se leen también donde no hay cobertura, y la retirada de producto se anota en el momento.',
    },
    verifiche_misure: {
      title: 'Verificaciones y mediciones',
      body: 'Cuadro cerrado, último día de obra: continuidad, aislamiento, diferenciales, tierra. El electricista introduce cada medición desde el móvil con el resultado y la foto del instrumento; Flow reúne las comprobaciones por obra y las maqueta como anexo para el certificado de instalación eléctrica (CIE, REBT).',
      note: 'GeoTapp recoge y maqueta: no comprueba, no valida y no garantiza la conformidad. El certificado y la firma siguen siendo de la empresa instaladora.',
    },
    impianti_terra: {
      title: 'Calendario de revisiones de la puesta a tierra',
      body: 'Para cada cliente introduces la fecha de la última comprobación de la puesta a tierra: Flow te avisa antes de que toque la siguiente, para que no te enteres cuando ya ha pasado. Como referencia, la ITC-BT-18 del REBT habla de comprobación periódica.',
      note: 'Las fechas las introduce tu empresa: GeoTapp las recuerda, no hace la comprobación y no dice si es válida.',
    },
    documenti_imprese: {
      title: 'Documentos de las empresas',
      body: 'Antes de dejar entrar en obra a una subcontrata quieres tener sus papeles en regla y acordarte de cuándo caducan. Flow lleva el calendario de documentos de cada empresa subcontratada o colaboradora y te avisa antes de la fecha.',
      note: 'Avisa antes del vencimiento, no dice si un documento es válido: eso lo revisas tú o tu asesor.',
    },
    congruita: {
      title: 'Estimación de la mano de obra',
      body: 'Al terminar la obra, tu asesor te pregunta cuánto pesa la mano de obra sobre el valor de los trabajos. Flow hace una estimación interna por obra con las horas registradas y la exporta en CSV o PDF, lista para pasarla.',
      note: 'Es una estimación interna, no un cálculo oficial: ningún organismo en España te lo exige con este formato.',
    },
    caldaie: {
      title: 'Revisiones de calderas',
      body: 'Septiembre: varios clientes tienen la revisión a punto de vencer. Flow te muestra las instalaciones que hay que avisar en el mes y prepara el borrador del mensaje al cliente, que solo sale si lo envías tú. En el móvil el técnico tiene la lista de instalaciones con sus fechas y rellena el parte de revisión con las mediciones.',
      note: 'El registro de mantenimiento (RITE, art. 27) lo lleva la empresa mantenedora: GeoTapp recoge y maqueta los datos, no verifica ni garantiza la conformidad.',
    },
    fgas: {
      title: 'Registro de gases fluorados',
      body: 'Un equipo con gases fluorados tiene una carga, un CO2 equivalente y un historial de intervenciones. En Flow ves los equipos y qué hay que registrar; desde el móvil el técnico abre el registro y añade una intervención nueva al momento, sin copiarla por la noche.',
      note: 'Los datos y los certificados profesionales de gases fluorados son del técnico y de la empresa: GeoTapp no comunica nada a ninguna administración.',
    },
    consegna_firma: {
      title: 'Entrega con firma',
      body: 'Has terminado el montaje. El técnico lee con el móvil el código de barras de cada número de serie, hace las fotos finales y el cliente firma en la pantalla. Sale un acta en PDF con tu logo, los datos de la empresa y el código de barras de cada equipo, que entra en el parte del trabajo. En Flow ves las entregas del mes y eliges el aspecto del acta: logo, datos, textos, color.',
    },
    magazzino_furgone: {
      title: 'Almacén de la furgoneta',
      body: 'El técnico llega a casa del cliente y descubre que no le queda el racor adecuado. En el móvil ve qué hay en la furgoneta y qué se está acabando, y anota el material usado en cada trabajo. En Flow fijas los mínimos por furgoneta, ves qué hay que reponer y cuánto cuesta el material de cada trabajo.',
    },
    sla: {
      title: 'Tiempos de intervención (SLA)',
      body: 'El contrato con la comunidad de vecinos dice en cuánto tiempo hay que atender un aviso y en cuánto resolverlo. En Flow cada aviso muestra el tiempo que queda para lo uno y para lo otro, por contrato; a fin de mes hay un informe. En el móvil el técnico ve los avisos asignados, los atiende y los marca como resueltos.',
    },
    qr_apparecchi: {
      title: 'QR en los equipos',
      body: 'Delante de una bomba o de un cuadro, el técnico escanea la etiqueta QR y ve al instante el historial y las intervenciones de ese equipo. Quien escanea sin cuenta, por ejemplo un inquilino, puede avisar de un problema. En Flow gestionas los equipos e imprimes las etiquetas.',
    },
  },
  shots: {
    flow_emergenze_attiva: 'Flow: el coordinador elige el escenario y toca en el plano el punto del peligro para activar el simulacro',
    flow_emergenze_evento: 'Flow: panel del simulacro en curso, con quién ha respondido y en cuánto tiempo',
    flow_emergenze_evento_persone: 'Flow: la lista de personas del equipo con su respuesta: presente, en camino o no puedo',
    flow_emergenze_sito: 'Flow: el plano del recinto con salidas, medios de protección y zonas',
    flow_emergenze_protocolli: 'Flow: los protocolos por escenario y por función',
    flow_emergenze_squadre: 'Flow: los equipos con sus acreditaciones; a quien falta se le avisa',
    flow_emergenze_scadenzario: 'Flow: calendario de vencimientos de las acreditaciones y de las revisiones de los medios de protección',
    tt_emergenze_dashboard: 'Móvil: la pantalla de inicio con el aviso de simulacro',
    tt_emergenze_indicazioni: 'Móvil: las indicaciones personales, con la función y qué hacer',
    tt_emergenze_indicazioni_2: 'Móvil: las salidas por orden, sin las bloqueadas',
    tt_emergenze_risposta: 'Móvil: la respuesta con un toque: presente, en camino o no puedo',
    tt_emergenze_piani: 'Móvil: los planes, consultables también sin cobertura',
  },
};

export default copy;
