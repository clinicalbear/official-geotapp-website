import type { VerifierCopy } from './types';

const es: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier - Verificación de informes de trabajo',
  hero_title: 'Tus informes de trabajo\nson verificables.',
  hero_subtitle:
    'GeoTapp Verifier comprueba que un informe de GeoTapp no se haya modificado después del sello y que lo haya emitido realmente GeoTapp. Es gratuito, para ti y para tus clientes, y funciona también sin conexión.',
  hero_cta_primary: 'Prueba GeoTapp gratis',
  hero_cta_secondary: 'Descubre cómo funciona',
  terminal_integrity: 'Cadena de eventos: ÍNTEGRA',
  terminal_timestamps: 'Hora del sello: DEL SERVIDOR',
  terminal_gps: 'Huellas de las fotos: COINCIDENTES',
  terminal_not_modified: 'Documento no modificado: CONFIRMADO',
  terminal_operator: 'Firma de GeoTapp: VÁLIDA',
  terminal_summary_title: 'Resumen de la verificación',
  terminal_technician_label: 'Técnico:',
  terminal_date_label: 'Fecha de la intervención:',
  terminal_site_label: 'Sede:',
  terminal_verified_line: 'DOCUMENTO ÍNTEGRO Y FIRMADO',
  ecosystem_timetracker_desc:
    'Recoge los datos sobre el terreno: fichajes con ubicación y hora, fotos de prueba y notas.',
  ecosystem_timetracker_link: 'Descubre TimeTracker',
  ecosystem_flow_desc:
    'Organiza trabajos y equipos y genera los informes estructurados y sellados, listos para verificar.',
  ecosystem_flow_link: 'Descubre Flow',
  ecosystem_verifier_desc:
    'Verifica la integridad de cada informe: recalcula las huellas y comprueba la firma de GeoTapp.',
  problem_badge: 'El problema real',
  problem_title: 'Un informe no verificable es un informe impugnable.',
  problem_items: [
    {
      title: 'Clientes que ponen en duda el trabajo realizado',
      desc: 'Sin pruebas independientes, cualquier informe puede ser cuestionado. El cliente no sabe si lo escrito corresponde a lo que se hizo de verdad.',
    },
    {
      title: 'Horarios y presencias difíciles de defender',
      desc: 'Las hojas de firmas y los fichajes manuales no bastan. Cuando surge una disputa sobre las horas o la presencia en la obra, el documento por sí solo no convence.',
    },
    {
      title: 'Informes modificados o incompletos',
      desc: 'Un documento que se puede modificar a posteriori sin dejar rastro no se puede verificar. El cliente lo sabe, y eso genera desconfianza incluso cuando el trabajo se ejecutó perfectamente.',
    },
  ],
  what_badge: 'Qué es GeoTapp Verifier',
  what_title: 'Verificación independiente de informes de intervención.',
  what_desc:
    'GeoTapp Verifier permite a cualquiera comprobar un informe generado por GeoTapp Flow y TimeTracker: recalcula las huellas de los fichajes, las ubicaciones y las fotos contenidas en el paquete, y verifica la firma de GeoTapp. Indica si el documento está íntegro y de dónde procede; por sí solo no prueba que el hecho haya ocurrido, ni es asesoramiento jurídico.',
  how_badge: 'Cómo funciona',
  how_title: 'Tres pasos. Un informe verificado.',
  how_steps: [
    {
      num: '01',
      title: 'El técnico registra la actividad sobre el terreno',
      desc: 'Con GeoTapp TimeTracker cada intervención genera datos: fichajes con ubicación y hora, fotos de prueba y notas. Los datos llegan a GeoTapp Flow en cuanto el teléfono tiene cobertura.',
    },
    {
      num: '02',
      title: 'Flow genera el informe estructurado',
      desc: 'GeoTapp Flow reúne los datos del trabajo y produce el informe. El informe se sella: desde ese momento cualquier modificación es detectable.',
    },
    {
      num: '03',
      title: 'Verifier comprueba la integridad',
      desc: 'Cualquiera puede verificar el informe con GeoTapp Verifier: recalcula las huellas, comprueba la firma e indica si el informe está íntegro y si procede de GeoTapp.',
    },
  ],
  features_badge: 'Qué verifica',
  features_title: 'Cada aspecto del informe es comprobable.',
  features: [
    {
      title: 'Cadena de eventos',
      desc: 'Cada fichaje está enlazado con el anterior mediante una huella SHA-256: si se quita, se añade o se cambia un evento, la cadena se rompe.',
    },
    {
      title: 'Fotos de prueba',
      desc: 'La huella de cada foto va en el paquete: basta con cambiar un píxel para que deje de coincidir.',
    },
    {
      title: 'Integridad del documento',
      desc: 'Verifica que el documento no se haya modificado después de generarse. Cualquier alteración es detectable.',
    },
    {
      title: 'Firma de GeoTapp',
      desc: 'La raíz del paquete está firmada con la clave de GeoTapp: la verificación indica si lo emitimos nosotros.',
    },
    {
      title: 'Hora del sello',
      desc: 'La hora del sello procede del reloj del servidor, no del del teléfono.',
    },
    {
      title: 'Verificable sin acceso a la plataforma',
      desc: 'El cliente puede verificar el informe de forma independiente, sin necesidad de acceder a la plataforma GeoTapp, incluso sin conexión.',
    },
  ],
  who_badge: 'Para quién es',
  who_title: 'Para empresas que deben demostrar el trabajo realizado.',
  who_items: [
    'Empresas de mantenimiento y asistencia técnica',
    'Empresas de limpieza y facility management',
    'Servicios de vigilancia y seguridad',
    'Instaladores y equipos de intervención',
    'Cualquier empresa que deba demostrar presencia y actividad sobre el terreno',
  ],
  ecosystem_badge: 'Ecosistema GeoTapp',
  ecosystem_title: 'Verifier funciona con Flow y TimeTracker.',
  ecosystem_desc:
    'GeoTapp Verifier no es una herramienta aislada. Es la parte final de un ciclo operativo integrado: los datos se recogen sobre el terreno con TimeTracker, se organizan en Flow y después los verifica Verifier.',
  cta_title: 'Empieza a producir informes verificables.',
  cta_subtitle:
    'Con informes que el cliente puede verificar por sí mismo, cuando alguien discute tienes una prueba que mostrar en lugar de una palabra contra otra.',
  cta_primary: 'Prueba GeoTapp gratis',
  cta_flow: 'Descubre GeoTapp Flow',
  cta_timetracker: 'Descubre GeoTapp TimeTracker',
  faq_badge: 'Preguntas frecuentes',
  faq_title: 'Todo lo que quieres saber sobre Verifier.',
  faqs: [
    {
      q: '¿El cliente necesita una cuenta de GeoTapp para verificar un informe?',
      a: 'No. El cliente recibe el informe y lo verifica sin registrarse y sin acceder a la plataforma: en línea, o con el verificador sin conexión gratuito.',
    },
    {
      q: '¿Qué ocurre si alguien intenta modificar el informe?',
      a: 'El verificador recalcula las huellas de eventos y fotos: cualquier modificación posterior a la generación hace que difieran de las selladas, y la verificación señala el documento como alterado.',
    },
    {
      q: '¿Verifier funciona también con informes antiguos?',
      a: 'Sí. Todos los informes generados por GeoTapp Flow con datos de TimeTracker se pueden verificar en cualquier momento, incluso meses o años después de su producción.',
    },
    {
      q: '¿Verifier es de pago?',
      a: 'No, es gratuito: para ti y para cualquiera que reciba un informe tuyo.',
    },
  ],
  hero_cta_download: 'Descargar el verificador',
  cta_download: 'Descargar Verifier gratis',
  download_badge: 'Descarga gratuita',
  download_title: 'Descarga GeoTapp Verifier.',
  download_desc: 'Verifica sin conexión la integridad de los informes de GeoTapp. No hace falta cuenta: desde la terminal o como librería Node.js para quien desarrolla, o un archivo HTML que se abre con un doble clic para todos los demás.',
  download_btn_cli: 'Descargar para línea de comandos (Node.js)',
  download_btn_html: 'Descargar la versión HTML local',
  download_version: 'v0.3.0 · mismo motor de verificación, dos formatos',
  download_requirements: 'Requiere Node.js ≥ 18',
  download_cli_title: 'Desde la terminal',
  download_api_title: 'Como librería Node.js',

  online_verify_badge: 'Verificación instantánea',
  online_verify_title: 'Verifica un informe en línea',
  online_verify_desc: 'Sube el archivo ZIP del informe. La verificación se hace en el servidor y el archivo no se guarda.',
  online_verify_upload_label: 'Arrastra aquí el ZIP del informe o haz clic para seleccionarlo',
  online_verify_upload_hint: 'Solo archivos .zip, tamaño máximo 25 MB',
  online_verify_btn: 'Verificar ahora',
  online_verify_privacy_note: 'El archivo se analiza en memoria y no se guarda ni se transmite a terceros.',
  online_verify_size_limit: 'Tamaño máximo: 25 MB',
  online_verify_result_valid_sealed: 'Informe válido, sellado y firmado',
  online_verify_result_valid_unsigned: 'Informe válido, contenido íntegro, sello sin firmar',
  online_verify_result_legacy: 'Informe antiguo, legible, sin sello robusto',
  online_verify_result_invalid: 'Informe no válido, contenido posiblemente alterado',
  online_verify_error_too_large: 'Archivo demasiado grande. Tamaño máximo: 25 MB.',
  online_verify_error_not_zip: 'El archivo debe ser un archivo ZIP.',
  online_verify_error_generic: 'Error durante la verificación. Es posible que el archivo esté dañado.',

  compare_badge: 'Dos formas de verificar',
  compare_title: '¿Verificación local o en línea?',
  compare_local_title: 'En tu equipo',
  compare_local_items: [
    'El archivo se queda en tu dispositivo',
    'Funciona sin conexión a internet',
    'Sin límite práctico de tamaño',
    'Ideal para auditorías, abogados, consultores',
    'La versión HTML no requiere instalación; la de línea de comandos requiere Node.js',
  ],
  compare_online_title: 'En línea (este sitio)',
  compare_online_items: [
    'No hay que instalar ninguna herramienta',
    'Resultado inmediato en el navegador',
    'El archivo pasa por nuestro servidor, que no lo guarda',
    'Límite de 25 MB por archivo',
    'Ideal para comprobaciones rápidas',
  ],
  compare_same_engine_note: 'Mismo motor de verificación en ambos casos. La diferencia es dónde se ejecuta.',
};

export default es;
