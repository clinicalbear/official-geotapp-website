import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para Técnicos de Aquecimento | GeoTapp — GPS, Relatórios e Provas',
    description: 'GeoTapp é a app para instaladores termossanitários: relatórios GPS verificados, fotos de instalações e documentação inalterável. Resolva reclamações com provas reais. Experimente grátis.',
  },
  hero: {
    badge: 'App para Técnicos de Aquecimento e Instaladores Termossanitários',
    h1_line1: 'App para técnicos de aquecimento:',
    h1_line2: 'relatórios GPS, provas fotográficas e zero reclamações.',
    subtitle: 'GeoTapp regista cada intervenção em caldeiras e instalações com GPS, fotos e carimbos de tempo verificáveis. O cliente nega os materiais substituídos? Mostre o relatório — sem discussões. Os seus técnicos estão protegidos, o seu faturamento também.',
    cta_primary: 'Comece grátis agora!',
    cta_note: 'Sem compromisso. Resposta em 12 horas úteis.',
  },
  pain: {
    title: 'O problema que toda a empresa termossanitária conhece bem',
    items: [
      {
        title: 'O cliente nega os materiais substituídos na caldeira',
        desc: 'Diz que instalou componentes diferentes dos acordados, ou que a instalação já era assim. Sem provas fotográficas, a reclamação torna-se palavra contra palavra.',
      },
      {
        title: 'Sem documentação da instalação após a intervenção',
        desc: 'O técnico terminou a reparação, mas não há registo fotográfico nem nota técnica. Se a avaria reaparecer, reconstruir o que foi feito é impossível.',
      },
      {
        title: 'As urgências nocturnas e de fim de semana não são rastreáveis',
        desc: 'As avarias de aquecimento surgem a horas impossíveis. O técnico intervém, resolve o problema, mas não fica nada para mostrar ao cliente ou ao seguro.',
      },
    ],
  },
  workflow: {
    title: 'Como funciona em três passos',
    subtitle: 'Do trabalho para o escritório — sem telefonemas.',
    steps: [
      {
        title: 'O técnico regista a intervenção no local',
        desc: 'Com o GeoTapp TimeTracker regista entrada e saída com GPS, fotografa a instalação e a caldeira, adiciona notas sobre os componentes substituídos a partir do smartphone.',
      },
      {
        title: 'O escritório vê tudo em tempo real',
        desc: 'O GeoTapp Flow recebe os dados instantaneamente. O responsável vê a obra, o técnico atribuído, o progresso e as provas fotográficas sem ligar.',
      },
      {
        title: 'O relatório é a sua prova',
        desc: 'No final da intervenção o sistema gera um relatório selado: hora GPS, fotos da instalação e componentes, notas técnicas. Inalterável. O cliente pode verificá-lo de forma autónoma.',
      },
    ],
  },
  differenza: {
    title: 'App para técnicos de aquecimento: registo ou certificação?',
    subtitle: 'A maioria das apps regista o ponto. GeoTapp produz provas verificáveis.',
    rows: [
      {
        label: 'O que regista',
        competitor: 'Hora de entrada/saída',
        geotapp: 'Hora + GPS verificado + fotos instalação + componentes substituídos',
      },
      {
        label: 'Em caso de reclamação',
        competitor: 'Dado não defensável',
        geotapp: 'Relatório selado, inalterável',
      },
      {
        label: 'Documentação da intervenção',
        competitor: 'Manual ou ausente',
        geotapp: 'Gerada automaticamente com GPS e fotos',
      },
      {
        label: 'Quem pode verificar',
        competitor: 'Só o seu escritório',
        geotapp: 'Você, o comitente, um terceiro',
      },
      {
        label: 'Conformidade RGPD',
        competitor: 'Frequentemente a verificar',
        geotapp: 'Conforme por design, formulários incluídos',
      },
    ],
  },
  prima_dopo: {
    title: 'Antes do GeoTapp. Depois do GeoTapp.',
    prima: [
      'O cliente nega que a válvula foi substituída.',
      'Não tem fotos nem materiais documentados.',
      'A discussão dura semanas. Arrisca não receber o pagamento.',
      'O técnico não tem nada em mãos para se defender.',
    ],
    dopo: [
      'O cliente nega que a válvula foi substituída.',
      'Abre o relatório: foto do componente retirado, do novo instalado, hora GPS, notas técnicas.',
      'Envia. A reclamação termina num minuto.',
      'O pagamento está assegurado. O técnico está protegido.',
    ],
  },
  scenario: {
    title: 'Caso real',
    body: 'Um cliente contesta a substituição de um queimador de caldeira e recusa pagar a fatura. Com o GeoTapp abre o relatório: foto do componente defeituoso retirado, do novo instalado, hora GPS da intervenção e notas técnicas do técnico — tudo gerado automaticamente a partir do smartphone no local.',
    resolution: 'A reclamação cai. A fatura é paga na totalidade.',
  },
  features: {
    title: 'App para técnicos de aquecimento: o que encontra no GeoTapp.',
    items: [
      {
        title: 'Registo GPS verificável',
        desc: 'Cada acesso e saída da instalação é registado com posição, carimbo de tempo e obra. Defensável perante o cliente e os seguros.',
      },
      {
        title: 'Provas fotográficas da instalação',
        desc: 'O técnico fotografa a partir da app durante e após a intervenção. Cada imagem está ligada a GPS e carimbo de tempo — inalterável após a geração.',
      },
      {
        title: 'Relatórios digitais automáticos',
        desc: 'No final dos trabalhos o relatório está pronto: horas, fotos, componentes substituídos e assinatura. O técnico envia-o ao cliente diretamente a partir da app.',
      },
      {
        title: 'Gestão de obras e urgências',
        desc: 'Atribua intervenções urgentes, monitorize o progresso e receba alertas se uma atividade não for concluída nos prazos previstos.',
      },
      {
        title: 'Exportação de presenças para salários',
        desc: 'Exporte presenças mensais compatíveis com os principais sistemas de salários portugueses. O processamento de salários torna-se uma operação rápida.',
      },
      {
        title: 'Os seus técnicos estão protegidos',
        desc: 'Um relatório verificável protege o técnico de acusações infundadas sobre materiais ou horários. Quem trabalha bem demonstra-o com os dados.',
      },
    ],
  },
  cta_mid: {
    title: 'Quer ver como funciona numa intervenção termossanitária real?',
    body: 'Mostramos-lhe o fluxo completo: desde a abertura da obra até ao relatório que o cliente recebe. Em 20 minutos sabe se é para si.',
    cta: 'Comece grátis agora!',
  },
  trust: {
    title: 'Os nossos relatórios não podem ser alterados. Não por si. Não por nós.',
    body: 'Os relatórios GeoTapp são gerados pelo sistema no momento da intervenção. Não existe nenhum painel para "corrigir" uma hora ou mover uma foto. O dado é esse — assinado digitalmente, com GPS real.',
    badge: 'Verificável por qualquer pessoa — sem acesso à sua conta',
  },
  testimonial: {
    quote: 'Com o GeoTapp os meus técnicos fotografam a instalação antes e depois de cada intervenção. As reclamações sobre materiais desapareceram. As faturas são pagas.',
    author: 'Marco S.',
    role: 'Proprietário, instalações termossanitárias residenciais e industriais',
  },
  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que os técnicos de aquecimento nos perguntam mais antes de começar.',
    items: [
      {
        q: 'O GeoTapp é adequado como app para técnicos de aquecimento?',
        a: 'Sim. O GeoTapp é usado por técnicos de aquecimento e instaladores termossanitários para gerir intervenções em caldeiras e instalações com relatórios GPS, fotos e horas verificáveis.',
      },
      {
        q: 'Posso usar o GeoTapp para documentar a substituição de componentes em caldeiras?',
        a: 'Sim. O técnico fotografa a partir da app o componente retirado e o instalado. Cada imagem está ligada a GPS, carimbo de tempo e obra — incluída no relatório inalterável.',
      },
      {
        q: 'O GeoTapp ajuda a resolver reclamações de clientes sobre instalações?',
        a: 'É exatamente o caso de uso principal: hora GPS, provas fotográficas dos materiais e relatório selado tornam qualquer reclamação infundada resolúvel em poucos minutos.',
      },
    ],
  },
  cta: {
    title: 'Cada intervenção termossanitária bem feita merece uma prova. O GeoTapp gera-a.',
    subtitle: 'Relatórios verificáveis, GPS real, fotos seladas. O seu trabalho é defensável.',
    primary: 'Comece grátis agora!',
    secondary: 'Ver preços',
  },
  pricing_hint: {
    label: 'A partir de',
    per: 'operador/mês',
    note: 'Período de teste gratuito de 14 dias',
  },
  schema_sector_name: 'Técnicos de Aquecimento',
  schema_faq: [
    {
      question: 'O GeoTapp funciona como app para técnicos de aquecimento?',
      answer: 'Sim. GeoTapp é a app para técnicos de aquecimento e instaladores que regista cada intervenção em caldeiras e instalações com GPS, fotos e carimbos de tempo verificáveis. O técnico regista no local, o escritório vê tudo em tempo real e o cliente recebe um relatório selado.',
    },
    {
      question: 'Como certifico uma intervenção em caldeira com o GeoTapp?',
      answer: 'O técnico regista início e fim com GPS verificado, fotografa os componentes substituídos e adiciona notas técnicas. O sistema gera um relatório selado que o cliente pode verificar de forma autónoma.',
    },
    {
      question: 'O GeoTapp gere várias equipas de técnicos de aquecimento em intervenções diferentes?',
      answer: 'Sim. O GeoTapp Flow permite ao titular coordenar várias equipas, atribuir obras urgentes, acompanhar o estado das intervenções e recolher provas fotográficas de todos os locais ativos em tempo real.',
    },
    {
      question: 'Os relatórios GeoTapp são aceites em caso de reclamação sobre instalações térmicas?',
      answer: 'Os relatórios GeoTapp estão selados com GPS, carimbos de tempo e provas fotográficas. Foram usados com sucesso para resolver reclamações sobre trabalhos não reconhecidos pelo cliente final.',
    },
  ],
};

export default content;
