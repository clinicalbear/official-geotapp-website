import type { VerifierCopy } from './types';

const es: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier — Verificación de Informes de Trabajo',
  hero_title: 'Sus informes de trabajo\nson verificables.',
  hero_subtitle:
    'GeoTapp Verifier comprueba que un informe de intervención coincida con los datos operativos registrados en el campo y no haya sido modificado. Más credibilidad para el cliente, menos disputas.',
  hero_cta_primary: 'Solicitar una Demo',
  hero_cta_secondary: 'Ver cómo funciona',
  terminal_integrity: 'Integridad del documento: VERIFICADA',
  terminal_timestamps: 'Coincidencia de marcas de tiempo: CONFIRMADA',
  terminal_gps: 'Coordenadas GPS: CONSISTENTES',
  terminal_not_modified: 'Documento no modificado: CONFIRMADO',
  terminal_operator: 'Operador verificado: OK',
  terminal_summary_title: 'Resumen de verificación',
  terminal_technician_label: 'Técnico:',
  terminal_date_label: 'Fecha de intervención:',
  terminal_site_label: 'Sede:',
  terminal_verified_line: 'INFORME AUTÉNTICO E ÍNTEGRO',
  ecosystem_timetracker_desc:
    'Recopila datos operativos en el campo: marcas de tiempo GPS, fotos, notas y firma del cliente.',
  ecosystem_timetracker_link: 'Explorar TimeTracker',
  ecosystem_flow_desc:
    'Organiza trabajos, equipos y genera informes estructurados con identificador criptográfico.',
  ecosystem_flow_link: 'Explorar Flow',
  ecosystem_verifier_desc:
    'Verifica la integridad de cada informe. Compara el documento con los datos originales y certifica la autenticidad.',
  problem_badge: 'El problema real',
  problem_title: 'Un informe no verificable es un informe impugnable.',
  problem_items: [
    {
      title: 'Clientes que cuestionan el trabajo realizado',
      desc: 'Sin pruebas independientes, cualquier informe puede ser disputado. El cliente no sabe si lo escrito corresponde a lo que realmente se hizo.',
    },
    {
      title: 'Hojas de horas difíciles de defender',
      desc: 'Las firmas manuales y las hojas de presencia en papel no son suficientes. Cuando surge una disputa sobre las horas o la presencia en el lugar, el documento por sí solo no convence.',
    },
    {
      title: 'Informes que pueden editarse después del hecho',
      desc: 'Un documento que puede modificarse tras la entrega no ofrece garantías reales. Los clientes lo saben, y genera desconfianza incluso cuando el trabajo se realizó perfectamente.',
    },
  ],
  what_badge: 'Qué es GeoTapp Verifier',
  what_title: 'Verificación independiente de informes de intervención.',
  what_desc:
    'GeoTapp Verifier es el sistema que permite verificar la autenticidad e integridad de los informes generados por GeoTapp Flow y TimeTracker. Compara el documento con los datos operativos originales — marcas de tiempo GPS, ubicaciones, evidencia fotográfica — y certifica que el informe no ha sido alterado.',
  how_badge: 'Cómo funciona',
  how_title: 'Tres pasos. Un informe verificado.',
  how_steps: [
    {
      num: '01',
      title: 'El técnico registra la actividad de campo',
      desc: 'Con GeoTapp TimeTracker, cada intervención genera datos operativos: marcas de tiempo GPS, fotos, notas y firma del cliente. Los datos se sincronizan con GeoTapp Flow en tiempo real.',
    },
    {
      num: '02',
      title: 'Flow genera el informe estructurado',
      desc: 'GeoTapp Flow recopila todos los datos del trabajo y produce un informe de trabajo estructurado. El informe incluye un identificador criptográfico que vincula el documento con los datos originales.',
    },
    {
      num: '03',
      title: 'Verifier comprueba la integridad',
      desc: 'Cualquiera puede verificar el informe con GeoTapp Verifier. El sistema compara el documento con los datos operativos registrados y certifica si el informe está íntegro y es auténtico.',
    },
  ],
  features_badge: 'Qué verifica',
  features_title: 'Cada aspecto del informe es comprobable.',
  features: [
    {
      title: 'Horas y duraciones',
      desc: 'Verifica que las horas declaradas coincidan con las marcas de tiempo GPS registradas por TimeTracker en el campo.',
    },
    {
      title: 'Ubicaciones y sitios',
      desc: 'Comprueba que las coordenadas y direcciones en el informe coincidan con los datos GPS capturados durante la intervención.',
    },
    {
      title: 'Integridad del documento',
      desc: 'Certifica que el documento no ha sido modificado tras su generación. Cualquier alteración es detectada.',
    },
    {
      title: 'Autenticidad de los datos',
      desc: 'Verifica que los datos operativos del informe provienen de los sistemas GeoTapp y no han sido introducidos manualmente.',
    },
    {
      title: 'Operadores y asignaciones',
      desc: 'Comprueba que los técnicos indicados en el informe son los mismos que registraron la actividad de campo.',
    },
    {
      title: 'Verificable sin acceso a la plataforma',
      desc: 'El cliente puede verificar el informe de forma independiente, sin necesidad de acceder a la plataforma GeoTapp.',
    },
  ],
  who_badge: 'Para quién es',
  who_title: 'Para empresas que necesitan defender su trabajo.',
  who_items: [
    'Empresas de mantenimiento y asistencia técnica',
    'Empresas de limpieza y gestión de instalaciones',
    'Servicios de seguridad y vigilancia',
    'Equipos de instalación y brigadas de campo',
    'Cualquier empresa que necesite demostrar presencia y actividad en el campo',
  ],
  ecosystem_badge: 'Ecosistema GeoTapp',
  ecosystem_title: 'Verifier funciona con Flow y TimeTracker.',
  ecosystem_desc:
    'GeoTapp Verifier no es una herramienta independiente. Es el paso final de un ciclo operativo integrado: los datos se recopilan en el campo con TimeTracker, se organizan en Flow y luego son certificados por Verifier.',
  cta_title: 'Empiece a producir informes verificables.',
  cta_subtitle:
    'Descubra cómo GeoTapp Verifier puede ayudar a su empresa a reducir disputas y aumentar la credibilidad ante los clientes.',
  cta_primary: 'Solicitar una Demo',
  cta_flow: 'Explorar GeoTapp Flow',
  cta_timetracker: 'Explorar GeoTapp TimeTracker',
  faq_badge: 'Preguntas frecuentes',
  faq_title: 'Todo lo que quiere saber sobre Verifier.',
  faqs: [
    {
      q: '¿El cliente necesita una cuenta GeoTapp para verificar un informe?',
      a: 'No. GeoTapp Verifier está diseñado para la verificación independiente. El cliente recibe el informe y puede verificar su autenticidad sin registrarse ni acceder a la plataforma.',
    },
    {
      q: '¿Qué ocurre si alguien intenta modificar el informe?',
      a: 'Cualquier modificación al documento tras su generación es detectada por Verifier. El sistema compara el informe con los datos operativos originales e indica inmediatamente cualquier discrepancia.',
    },
    {
      q: '¿Verifier funciona para informes históricos?',
      a: 'Sí. Todos los informes generados por GeoTapp Flow con datos de TimeTracker pueden verificarse en cualquier momento, incluso meses o años después de su producción.',
    },
    {
      q: '¿Es necesario adquirir Verifier por separado?',
      a: 'GeoTapp Verifier está integrado en el ecosistema GeoTapp. Contáctenos para determinar qué plan se adapta mejor a las necesidades de su empresa.',
    },
  ],
  hero_cta_download: 'Descargar gratis — v0.1.0',
  cta_download: 'Descargar Verifier gratis',
  download_badge: 'Descarga gratuita',
  download_title: 'Descargar GeoTapp Verifier.',
  download_desc: 'Herramienta CLI abierta para verificar sin conexión la integridad de los informes GeoTapp. Sin cuenta requerida. Funciona desde terminal o como librería Node.js.',
  download_btn: 'Descargar report-verifier-0.1.0.zip',
  download_version: 'v0.1.0 — ~40 KB — Requiere Node.js ≥ 18',
  download_requirements: 'Requiere Node.js ≥ 18',
  download_cli_title: 'Desde terminal',
  download_api_title: 'Como librería Node.js',
};

export default es;
