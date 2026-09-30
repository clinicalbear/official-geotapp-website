import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para canalizadores e técnicos AVAC | GeoTapp',
    description: 'Relatórios com posição e fotos das instalações, em que qualquer alteração é detetável. Para mostrar quando alguém contesta. Experimente grátis.',
  },
  hero: {
    badge: 'App para canalizadores, técnicos AVAC e instaladores',
    h1_line1: 'App para canalizadores e técnicos AVAC:',
    h1_line2: 'relatórios GPS, provas fotográficas e menos contestações.',
    subtitle: 'GeoTapp regista cada intervenção de canalização com GPS, fotos e horários registados. O cliente contesta? Mostre o relatório em vez de discutir de viva voz.',
    cta_primary: 'Começar teste gratuito de 14 dias',
    cta_note: 'O teste não o obriga a nada. Sem cartão de crédito.',
  },
  pain: {
    title: 'O problema que toda a empresa de canalização conhece bem',
    items: [
      {
        title: 'O cliente nega a intervenção ou os materiais usados',
        desc: 'Diz que a reparação não foi feita ou que os materiais eram outros. Sem provas verificáveis, cada contestação fica em palavra contra palavra.',
      },
      {
        title: 'Sem documentação da instalação depois da intervenção',
        desc: 'O técnico terminou o trabalho, mas não há registo fotográfico nem nota técnica. Em caso de avaria posterior, reconstruir o que foi feito torna-se impossível.',
      },
      {
        title: 'As urgências ficam sem documentos',
        desc: 'As intervenções de emergência são as mais difíceis de documentar. O técnico sai a correr, trabalha sem papel, e depois não há nada para mostrar ao cliente.',
      },
    ],
  },
  workflow: {
    title: 'Como funciona em três passos',
    subtitle: 'Da obra ao escritório, sem telefonemas.',
    steps: [
      {
        title: 'O técnico regista a intervenção no terreno',
        desc: 'Com o GeoTapp TimeTracker pica o ponto à entrada, nas pausas e à saída com a posição, tira fotos da instalação de canalização e acrescenta notas técnicas a partir do smartphone.',
      },
      {
        title: 'O escritório vê tudo assim que chega',
        desc: 'O GeoTapp Flow recebe os dados assim que o telemóvel tem rede. O responsável vê obra, técnico atribuído, andamento e provas fotográficas sem telefonar.',
      },
      {
        title: 'O relatório é a sua prova',
        desc: 'No fim da intervenção, o sistema gera um relatório selado: hora e posição GPS, fotos da instalação, materiais usados, notas técnicas. Qualquer alteração é detetável. O cliente pode verificá-lo de forma autónoma.',
      },
    ],
  },
  differenza: {
    title: 'App para canalizadores: registo ou prova verificável?',
    subtitle: 'A maioria das apps regista a hora. GeoTapp produz provas verificáveis.',
    rows: [
      {
        label: 'O que regista',
        competitor: 'Hora de entrada e saída',
        geotapp: 'Hora + posição na picagem + fotos da instalação + materiais e notas',
      },
      {
        label: 'Em caso de contestação',
        competitor: 'Apenas a sua palavra',
        geotapp: 'Relatório selado, qualquer alteração é detetável',
      },
      {
        label: 'Documentação da intervenção',
        competitor: 'Manual ou inexistente',
        geotapp: 'Gerada automaticamente com GPS e fotos',
      },
      {
        label: 'Quem pode verificar',
        competitor: 'Apenas o seu escritório',
        geotapp: 'A própria empresa, o cliente ou um terceiro',
      },
      {
        label: 'Conformidade RGPD',
        competitor: 'Muitas vezes por verificar',
        geotapp: 'Construído para ficar dentro dos limites do RGPD, com modelos de documentação incluídos',
      },
    ],
  },
  prima_dopo: {
    title: 'Antes de GeoTapp. Depois de GeoTapp.',
    prima: [
      'O cliente nega que a reparação tenha sido feita.',
      'Não há fotos nem horários verificáveis.',
      'A discussão dura semanas. Arrisca-se a não ser pago.',
      'O técnico não tem nada em mãos para se defender.',
    ],
    dopo: [
      'O cliente nega que a reparação tenha sido feita.',
      'Abra o relatório: fotos GPS da instalação, hora selada, notas técnicas.',
      'Envia-lho, e ele verifica por si.',
      'Tem uma prova para mostrar. O técnico também fica com algo em mãos.',
    ],
  },
  scenario: {
    title: 'Um caso típico',
    body: 'Um cliente contesta uma intervenção urgente de canalização e recusa-se a pagar, alegando que os trabalhos não foram concluídos. Com GeoTapp abre o relatório: fotos da instalação antes e depois, hora GPS de chegada e de fim dos trabalhos, notas técnicas sobre os materiais substituídos, tudo gerado automaticamente pelo smartphone do técnico no local.',
    resolution: 'Em vez de uma palavra contra a outra, há um documento que o cliente verifica por si.',
  },
  features: {
    title: 'App para canalizadores e técnicos AVAC: o que encontra em GeoTapp.',
    items: [
      {
        title: 'Picagem GPS verificável',
        desc: 'Cada entrada, pausa e saída fica registada com posição, marca temporal e obra. Para mostrar ao cliente quando for preciso.',
      },
      {
        title: 'Fotos seladas de instalações de canalização',
        desc: 'O técnico tira fotos antes e depois da intervenção. Cada imagem fica ligada ao GPS e à marca temporal: qualquer alteração posterior é detetável.',
      },
      {
        title: 'Relatórios digitais automáticos',
        desc: 'No fim dos trabalhos o relatório já está pronto: horas, fotos, notas técnicas e materiais. O escritório envia-o ao cliente a partir do Flow com um clique.',
      },
      {
        title: 'Gestão de urgências e manutenção programada',
        desc: 'Gira tanto as intervenções de emergência como as manutenções periódicas no mesmo painel. Cada intervenção tem a sua obra e o seu histórico.',
      },
      {
        title: 'Exportação de presenças para o processamento salarial',
        desc: 'Exporte as presenças do mês em Excel ou CSV, prontas para o contabilista. O processamento salarial torna-se uma operação rápida.',
      },
      {
        title: 'Os seus canalizadores ficam protegidos',
        desc: 'Um relatório verificável dá ao técnico algo em mãos contra acusações infundadas sobre trabalhos não realizados ou materiais não utilizados.',
      },
    ],
  },
  cta_mid: {
    title: 'Quer ver como funciona numa intervenção de canalização real?',
    body: 'Experimente numa intervenção verdadeira, desde a abertura da obra até ao relatório que o cliente recebe: 14 dias grátis, sem cartão de crédito.',
    cta: 'Começar teste gratuito de 14 dias',
  },
  trust: {
    title: 'Nos nossos relatórios qualquer alteração vê-se, quer a faça a sua empresa, quer a façamos nós.',
    body: 'Os relatórios GeoTapp são gerados pelo sistema no momento da intervenção. Depois de selado o relatório, corrigir uma hora ou mudar uma foto quebra o selo, e a verificação assinala-o.',
    badge: 'Verificável por qualquer pessoa, sem acesso à sua conta',
  },
  testimonial: {
    quote: 'Antes perdia horas a explicar as intervenções aos clientes. Agora envio o relatório e o cliente verifica-o por si.',
    author: 'Roberto C.',
    role: 'Proprietário, canalização e aquecimento',
  },
  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que os canalizadores nos perguntam antes de começar.',
    items: [
      {
        q: 'GeoTapp é adequado como app para canalizadores e técnicos AVAC?',
        a: 'Sim. GeoTapp é usado por canalizadores e técnicos de aquecimento para gerir intervenções, relatórios, horas e provas fotográficas das instalações. Funciona tanto para urgências como para manutenções programadas.',
      },
      {
        q: 'Posso usar GeoTapp para documentar intervenções de canalização e aquecimento?',
        a: 'Sim. O técnico tira fotos antes e depois da intervenção a partir da app. Cada imagem fica ligada ao GPS, à marca temporal e à obra, e incluída num relatório em que qualquer alteração é detetável.',
      },
      {
        q: 'GeoTapp gere tanto intervenções de emergência como manutenção programada?',
        a: 'Sim. Cada tipo de intervenção, urgência, manutenção, ensaio, tem a sua obra em GeoTapp. O histórico de cada instalação está sempre disponível com todas as provas fotográficas.',
      },
    ],
  },
  cta: {
    title: 'Cada intervenção bem feita merece uma prova. GeoTapp gera-a.',
    subtitle: 'Relatórios verificáveis, posição nas picagens, fotos seladas no relatório.',
    primary: 'Começar teste gratuito de 14 dias',
    secondary: 'Ver preços',
  },
  pricing_hint: {
    label: 'Postos TimeTracker desde',
    per: 'por operário e por mês, mais o plano Flow desde 39 € por mês',
    note: 'Teste gratuito de 14 dias',
  },
  schema_sector_name: 'Canalizadores e técnicos AVAC',
  schema_faq: [
    {
      question: 'GeoTapp funciona como app para canalizadores e técnicos AVAC?',
      answer: 'Sim. GeoTapp é a app para canalizadores e técnicos AVAC que regista cada intervenção com GPS, fotos e horários registados. O técnico pica o ponto no terreno, o escritório vê tudo assim que chega, o cliente recebe um relatório selado.',
    },
    {
      question: 'Como selo uma intervenção de canalização com GeoTapp?',
      answer: 'O técnico regista em GeoTapp a hora de início e de fim com a posição, as fotos da instalação antes e depois, e as notas técnicas sobre os materiais usados. O sistema gera um relatório selado que o cliente pode verificar de forma autónoma.',
    },
    {
      question: 'GeoTapp gere urgências de canalização e manutenções programadas?',
      answer: 'Sim. Tanto as intervenções de emergência como as manutenções periódicas são geridas pela mesma app. Cada intervenção gera um histórico com provas fotográficas e horas e posições registadas nas picagens.',
    },
    {
      question: 'Os relatórios GeoTapp são aceites em caso de contestação?',
      answer: 'Os relatórios GeoTapp são selados com GPS, marca temporal e provas fotográficas. O cliente verifica-os por si. Ajudam a mostrar que o documento não foi alterado; por si sós não são prova absoluta do facto nem aconselhamento jurídico.',
    },
  ],
};

export default content;
