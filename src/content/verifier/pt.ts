import type { VerifierCopy } from './types';

const pt: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier — Verificação de Relatórios de Trabalho',
  hero_title: 'Os seus relatórios de trabalho\nsão verificáveis.',
  hero_subtitle:
    'O GeoTapp Verifier verifica se um relatório de intervenção corresponde aos dados operacionais registados em campo e não foi modificado. Mais credibilidade para o cliente, menos disputas.',
  hero_cta_primary: 'Solicitar uma Demo',
  hero_cta_secondary: 'Ver como funciona',
  terminal_integrity: 'Integridade do documento: VERIFICADA',
  terminal_timestamps: 'Correspondência de timestamps: CONFIRMADA',
  terminal_gps: 'Coordenadas GPS: CONSISTENTES',
  terminal_not_modified: 'Documento não modificado: CONFIRMADO',
  terminal_operator: 'Operador verificado: OK',
  terminal_summary_title: 'Resumo da Verificação',
  terminal_technician_label: 'Técnico:',
  terminal_date_label: 'Data da intervenção:',
  terminal_site_label: 'Local:',
  terminal_verified_line: 'RELATÓRIO AUTÊNTICO E ÍNTEGRO',
  ecosystem_timetracker_desc:
    'Recolhe dados operacionais em campo: timestamps GPS, fotos, notas e assinatura do cliente.',
  ecosystem_timetracker_link: 'Explorar TimeTracker',
  ecosystem_flow_desc:
    'Organiza trabalhos, equipas e gera relatórios estruturados com identificador criptográfico.',
  ecosystem_flow_link: 'Explorar Flow',
  ecosystem_verifier_desc:
    'Verifica a integridade de cada relatório. Compara o documento com os dados originais e certifica a autenticidade.',
  problem_badge: 'O problema real',
  problem_title: 'Um relatório não verificável é um relatório contestável.',
  problem_items: [
    {
      title: 'Clientes que questionam o trabalho realizado',
      desc: 'Sem prova independente, qualquer relatório pode ser contestado. O cliente não sabe se o que está escrito corresponde ao que foi realmente feito.',
    },
    {
      title: 'Folhas de horas difíceis de defender',
      desc: 'Assinaturas manuais e folhas de presença em papel não chegam. Quando surge uma disputa sobre horas ou presença no local, o documento por si só não convence.',
    },
    {
      title: 'Relatórios que podem ser editados após o facto',
      desc: 'Um documento que pode ser modificado após a entrega não oferece garantias reais. Os clientes sabem disso, e gera desconfiança mesmo quando o trabalho foi executado perfeitamente.',
    },
  ],
  what_badge: 'O que é o GeoTapp Verifier',
  what_title: 'Verificação independente de relatórios de intervenção.',
  what_desc:
    'O GeoTapp Verifier é o sistema que permite verificar a autenticidade e integridade dos relatórios gerados pelo GeoTapp Flow e TimeTracker. Compara o documento com os dados operacionais originais — timestamps GPS, localizações, evidências fotográficas — e certifica que o relatório não foi alterado.',
  how_badge: 'Como funciona',
  how_title: 'Três passos. Um relatório verificado.',
  how_steps: [
    {
      num: '01',
      title: 'O técnico regista a atividade em campo',
      desc: 'Com o GeoTapp TimeTracker, cada intervenção gera dados operacionais: timestamps GPS, fotos, notas e assinatura do cliente. Os dados são sincronizados com o GeoTapp Flow em tempo real.',
    },
    {
      num: '02',
      title: 'O Flow gera o relatório estruturado',
      desc: 'O GeoTapp Flow recolhe todos os dados do trabalho e produz um relatório de trabalho estruturado. O relatório inclui um identificador criptográfico que liga o documento aos dados originais.',
    },
    {
      num: '03',
      title: 'O Verifier verifica a integridade',
      desc: 'Qualquer pessoa pode verificar o relatório com o GeoTapp Verifier. O sistema compara o documento com os dados operacionais registados e certifica se o relatório está íntegro e é autêntico.',
    },
  ],
  features_badge: 'O que verifica',
  features_title: 'Cada aspeto do relatório é verificável.',
  features: [
    {
      title: 'Horas e durações',
      desc: 'Verifica se as horas declaradas correspondem aos timestamps GPS registados pelo TimeTracker em campo.',
    },
    {
      title: 'Localizações e locais',
      desc: 'Verifica se as coordenadas e endereços no relatório correspondem aos dados GPS capturados durante a intervenção.',
    },
    {
      title: 'Integridade do documento',
      desc: 'Certifica que o documento não foi modificado após a sua geração. Qualquer alteração é detetada.',
    },
    {
      title: 'Autenticidade dos dados',
      desc: 'Verifica que os dados operacionais do relatório provêm dos sistemas GeoTapp e não foram inseridos manualmente.',
    },
    {
      title: 'Operadores e atribuições',
      desc: 'Verifica se os técnicos indicados no relatório são os mesmos que registaram atividade em campo.',
    },
    {
      title: 'Verificável sem acesso à plataforma',
      desc: 'O cliente pode verificar o relatório de forma independente, sem necessidade de aceder à plataforma GeoTapp.',
    },
  ],
  who_badge: 'Para quem é',
  who_title: 'Para empresas que precisam de defender o seu trabalho.',
  who_items: [
    'Empresas de manutenção e assistência técnica',
    'Empresas de limpeza e gestão de instalações',
    'Serviços de segurança e vigilância',
    'Equipas de instalação e brigadas de campo',
    'Qualquer empresa que precise de provar presença e atividade em campo',
  ],
  ecosystem_badge: 'Ecossistema GeoTapp',
  ecosystem_title: 'O Verifier funciona com o Flow e o TimeTracker.',
  ecosystem_desc:
    'O GeoTapp Verifier não é uma ferramenta isolada. É o passo final de um ciclo operacional integrado: os dados são recolhidos em campo com o TimeTracker, organizados no Flow e depois certificados pelo Verifier.',
  cta_title: 'Comece a produzir relatórios verificáveis.',
  cta_subtitle:
    'Descubra como o GeoTapp Verifier pode ajudar a sua empresa a reduzir disputas e aumentar a credibilidade junto dos clientes.',
  cta_primary: 'Solicitar uma Demo',
  cta_flow: 'Explorar GeoTapp Flow',
  cta_timetracker: 'Explorar GeoTapp TimeTracker',
  faq_badge: 'Perguntas frequentes',
  faq_title: 'Tudo o que quer saber sobre o Verifier.',
  faqs: [
    {
      q: 'O cliente precisa de uma conta GeoTapp para verificar um relatório?',
      a: 'Não. O GeoTapp Verifier foi concebido para verificação independente. O cliente recebe o relatório e pode verificar a sua autenticidade sem se registar ou aceder à plataforma.',
    },
    {
      q: 'O que acontece se alguém tentar modificar o relatório?',
      a: 'Qualquer modificação ao documento após a sua geração é detetada pelo Verifier. O sistema compara o relatório com os dados operacionais originais e assinala imediatamente qualquer discrepância.',
    },
    {
      q: 'O Verifier funciona para relatórios históricos?',
      a: 'Sim. Todos os relatórios gerados pelo GeoTapp Flow com dados do TimeTracker podem ser verificados a qualquer momento, mesmo meses ou anos após a sua produção.',
    },
    {
      q: 'O Verifier precisa de ser adquirido separadamente?',
      a: 'O GeoTapp Verifier está integrado no ecossistema GeoTapp. Contacte-nos para determinar qual o plano que melhor se adapta às necessidades da sua empresa.',
    },
  ],
};

export default pt;
