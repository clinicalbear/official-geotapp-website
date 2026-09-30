import type { VerifierCopy } from './types';

const pt: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier - Verificação de relatórios de trabalho',
  hero_title: 'Os seus relatórios de trabalho\nsão verificáveis.',
  hero_subtitle:
    'O GeoTapp Verifier confirma que um relatório da GeoTapp não foi alterado depois do selo e que foi mesmo a GeoTapp que o emitiu. É gratuito, para si e para os seus clientes, e funciona também offline.',
  hero_cta_primary: 'Experimente a GeoTapp grátis',
  hero_cta_secondary: 'Veja como funciona',
  terminal_integrity: 'Cadeia de eventos: ÍNTEGRA',
  terminal_timestamps: 'Hora do selo: DO SERVIDOR',
  terminal_gps: 'Impressões digitais das fotografias: CORRESPONDENTES',
  terminal_not_modified: 'Documento não alterado: CONFIRMADO',
  terminal_operator: 'Assinatura da GeoTapp: VÁLIDA',
  terminal_summary_title: 'Resumo da verificação',
  terminal_technician_label: 'Técnico:',
  terminal_date_label: 'Data da intervenção:',
  terminal_site_label: 'Local:',
  terminal_verified_line: 'DOCUMENTO ÍNTEGRO E ASSINADO',
  ecosystem_timetracker_desc:
    'Recolhe os dados no terreno: picagens com posição e hora, fotografias de prova e notas.',
  ecosystem_timetracker_link: 'Conheça o TimeTracker',
  ecosystem_flow_desc:
    'Organiza obras e equipas e gera os relatórios estruturados e selados, prontos para a verificação.',
  ecosystem_flow_link: 'Conheça o Flow',
  ecosystem_verifier_desc:
    'Verifica a integridade de cada relatório: recalcula as impressões digitais e confirma a assinatura da GeoTapp.',
  problem_badge: 'O problema real',
  problem_title: 'Um relatório que não se pode verificar é um relatório contestável.',
  problem_items: [
    {
      title: 'Clientes que põem em dúvida o trabalho realizado',
      desc: 'Sem provas independentes, qualquer relatório pode ser posto em causa. O cliente não sabe se o que está escrito corresponde ao que foi realmente feito.',
    },
    {
      title: 'Horários e presenças difíceis de defender',
      desc: 'Folhas de assinatura e registos manuais não chegam. Quando surge uma disputa sobre as horas ou a presença na obra, o documento, por si só, não convence.',
    },
    {
      title: 'Relatórios alterados ou incompletos',
      desc: 'Um documento que se pode alterar depois dos factos sem deixar rasto não se pode verificar. O cliente sabe-o, e isso alimenta a desconfiança mesmo quando o trabalho foi executado na perfeição.',
    },
  ],
  what_badge: 'O que é o GeoTapp Verifier',
  what_title: 'Verificação independente dos relatórios de intervenção.',
  what_desc:
    'O GeoTapp Verifier permite a qualquer pessoa confirmar um relatório gerado pelo GeoTapp Flow e pelo TimeTracker: recalcula as impressões digitais das picagens, das posições e das fotografias contidas no pacote e verifica a assinatura da GeoTapp. Diz se o documento está íntegro e de onde vem; por si só, não prova que o facto ocorreu, nem é aconselhamento jurídico.',
  how_badge: 'Como funciona',
  how_title: 'Três passos. Um relatório verificado.',
  how_steps: [
    {
      num: '01',
      title: 'O técnico regista a atividade no terreno',
      desc: 'Com o GeoTapp TimeTracker, cada intervenção gera dados: picagens com posição e hora, fotografias de prova e notas. Os dados chegam ao GeoTapp Flow assim que o telemóvel tem rede.',
    },
    {
      num: '02',
      title: 'O Flow gera o relatório estruturado',
      desc: 'O GeoTapp Flow reúne os dados da obra e produz o relatório. O relatório é selado: a partir desse momento, qualquer alteração é detetável.',
    },
    {
      num: '03',
      title: 'O Verifier confirma a integridade',
      desc: 'Qualquer pessoa pode verificar o relatório com o GeoTapp Verifier: recalcula as impressões digitais, confirma a assinatura e diz se o relatório está íntegro e se vem da GeoTapp.',
    },
  ],
  features_badge: 'O que verifica',
  features_title: 'Cada aspeto do relatório pode ser confirmado.',
  features: [
    {
      title: 'Cadeia de eventos',
      desc: 'Cada picagem está ligada à anterior por uma impressão digital SHA-256: se um evento for retirado, acrescentado ou alterado, a cadeia quebra-se.',
    },
    {
      title: 'Fotografias de prova',
      desc: 'A impressão digital de cada fotografia está no pacote: basta mudar um píxel para deixar de corresponder.',
    },
    {
      title: 'Integridade do documento',
      desc: 'Verifica que o documento não foi alterado depois de gerado. Qualquer alteração é detetada.',
    },
    {
      title: 'Assinatura da GeoTapp',
      desc: 'A raiz do pacote está assinada com a chave da GeoTapp: a verificação diz se fomos nós a emiti-lo.',
    },
    {
      title: 'Hora do selo',
      desc: 'A hora do selo vem do relógio do servidor, não do do telemóvel.',
    },
    {
      title: 'Verificável sem acesso à plataforma',
      desc: 'O cliente pode verificar o relatório de forma independente, sem necessidade de aceder à plataforma GeoTapp, mesmo offline.',
    },
  ],
  who_badge: 'Para quem é',
  who_title: 'Para empresas que precisam de demonstrar o trabalho realizado.',
  who_items: [
    'Empresas de manutenção e assistência técnica',
    'Empresas de limpeza e gestão de instalações',
    'Serviços de vigilância e segurança',
    'Instaladores e equipas de intervenção',
    'Qualquer empresa que precise de demonstrar presença e atividade no terreno',
  ],
  ecosystem_badge: 'Ecossistema GeoTapp',
  ecosystem_title: 'O Verifier funciona com o Flow e o TimeTracker.',
  ecosystem_desc:
    'O GeoTapp Verifier não é uma ferramenta isolada. É a parte final de um ciclo operacional integrado: os dados são recolhidos no terreno com o TimeTracker, organizados no Flow e depois verificados pelo Verifier.',
  cta_title: 'Comece a produzir relatórios verificáveis.',
  cta_subtitle:
    'Com relatórios que o cliente pode verificar por si, quando alguém contesta tem uma prova para mostrar, em vez de uma palavra contra a outra.',
  cta_primary: 'Experimente a GeoTapp grátis',
  cta_flow: 'Conheça o GeoTapp Flow',
  cta_timetracker: 'Conheça o GeoTapp TimeTracker',
  faq_badge: 'Perguntas frequentes',
  faq_title: 'Tudo o que quer saber sobre o Verifier.',
  faqs: [
    {
      q: 'O cliente precisa de uma conta GeoTapp para verificar um relatório?',
      a: 'Não. O cliente recebe o relatório e verifica-o sem se registar e sem aceder à plataforma: online ou com o verificador offline gratuito.',
    },
    {
      q: 'O que acontece se alguém tentar alterar o relatório?',
      a: 'O verificador recalcula as impressões digitais dos eventos e das fotografias: qualquer alteração depois da geração faz com que deixem de coincidir com as seladas, e a verificação assinala o documento como alterado.',
    },
    {
      q: 'O Verifier também funciona para relatórios antigos?',
      a: 'Sim. Todos os relatórios gerados pelo GeoTapp Flow com dados do TimeTracker podem ser verificados a qualquer momento, mesmo meses ou anos depois de produzidos.',
    },
    {
      q: 'O Verifier é pago?',
      a: 'Não, é gratuito: para si e para qualquer pessoa que receba um relatório seu.',
    },
  ],
  hero_cta_download: 'Descarregar o verificador',
  cta_download: 'Descarregar o Verifier grátis',
  download_badge: 'Descarga gratuita',
  download_title: 'Descarregar o GeoTapp Verifier.',
  download_desc: 'Verifique offline a integridade dos relatórios GeoTapp. Não é necessária conta: pelo terminal ou biblioteca Node.js para quem desenvolve, ou um ficheiro HTML que se abre com um duplo clique para todos os outros.',
  download_btn_cli: 'Descarregar para linha de comandos (Node.js)',
  download_btn_html: 'Descarregar a versão HTML local',
  download_version: 'v0.3.0 · o mesmo motor de verificação, dois formatos',
  download_requirements: 'Requer Node.js ≥ 18',
  download_cli_title: 'Pelo terminal',
  download_api_title: 'Como biblioteca Node.js',

  online_verify_badge: 'Verificação instantânea',
  online_verify_title: 'Verifique um relatório online',
  online_verify_desc: 'Carregue o ficheiro ZIP do relatório. A verificação é feita no servidor e o ficheiro não é guardado.',
  online_verify_upload_label: 'Arraste o ZIP do relatório para aqui ou clique para o selecionar',
  online_verify_upload_hint: 'Apenas ficheiros .zip, tamanho máximo de 25 MB',
  online_verify_btn: 'Verificar agora',
  online_verify_privacy_note: 'O ficheiro é analisado em memória e não é guardado nem transmitido a terceiros.',
  online_verify_size_limit: 'Tamanho máximo: 25 MB',
  online_verify_result_valid_sealed: 'Relatório válido, selado e assinado',
  online_verify_result_valid_unsigned: 'Relatório válido, conteúdo íntegro, selo não assinado',
  online_verify_result_legacy: 'Relatório antigo, legível, sem selo forte',
  online_verify_result_invalid: 'Relatório inválido, conteúdo possivelmente alterado',
  online_verify_error_too_large: 'Ficheiro demasiado grande. Tamanho máximo: 25 MB.',
  online_verify_error_not_zip: 'O ficheiro tem de ser um arquivo ZIP.',
  online_verify_error_generic: 'Erro durante a verificação. O ficheiro pode estar danificado.',

  compare_badge: 'Duas formas de verificar',
  compare_title: 'Verificação local ou online?',
  compare_local_title: 'No seu computador',
  compare_local_items: [
    'O ficheiro fica no seu dispositivo',
    'Funciona sem ligação à internet',
    'Sem limite prático de tamanho',
    'Ideal para auditorias, juristas, consultores',
    'A versão HTML não requer instalação; a de linha de comandos requer Node.js',
  ],
  compare_online_title: 'Online (este sítio)',
  compare_online_items: [
    'Sem nenhuma ferramenta para instalar',
    'Resultado imediato no navegador',
    'O ficheiro passa pelo nosso servidor, que não o guarda',
    'Limite de 25 MB por ficheiro',
    'Ideal para verificações rápidas',
  ],
  compare_same_engine_note: 'O mesmo motor de verificação nos dois casos. A diferença é onde corre.',
};

export default pt;
