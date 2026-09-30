import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para canalizadores e aquecimento: GPS e fotos',
    description: 'Relatórios com GPS na picagem e fotos de cada instalação: as provas a mostrar quando o cliente contesta caldeiras e materiais substituídos. 14 dias grátis.',
  },
  hero: {
    badge: 'App para canalizadores e técnicos de aquecimento e águas',
    h1_line1: 'App para canalizadores e aquecimento:',
    h1_line2: 'relatórios GPS, provas fotográficas e menos contestações.',
    subtitle: 'O GeoTapp regista cada intervenção em caldeiras e instalações com GPS, fotos e horários registados. O cliente nega os materiais substituídos? Mostra o relatório em vez de discutir de viva voz.',
    cta_primary: 'Começar teste gratuito de 14 dias',
    cta_note: 'O teste não o obriga a nada. Sem cartão de crédito.',
  },
  pain: {
    title: 'O problema que toda a empresa de canalização e aquecimento conhece bem',
    items: [
      {
        title: 'O cliente nega os materiais substituídos na caldeira',
        desc: 'Diz que trocou componentes diferentes dos combinados, ou que a instalação já estava assim. Sem provas fotográficas, a contestação torna-se palavra contra palavra.',
      },
      {
        title: 'Sem documentação da instalação após a intervenção',
        desc: 'O técnico terminou a reparação, mas não há registo fotográfico nem nota técnica. Se a avaria voltar a aparecer, reconstituir o que foi feito é impossível.',
      },
      {
        title: 'As urgências noturnas e de fim de semana não ficam registadas',
        desc: 'As intervenções em avarias de aquecimento chegam a horas impossíveis. O técnico intervém, resolve o problema, mas não fica nada para mostrar ao cliente ou à seguradora.',
      },
    ],
  },
  workflow: {
    title: 'Como funciona em três passos',
    subtitle: 'Da obra ao escritório sem telefonemas.',
    steps: [
      {
        title: 'O técnico regista a intervenção no terreno',
        desc: 'Com o GeoTapp TimeTracker pica entrada, pausas e saída com a localização, tira fotos da instalação e da caldeira, e acrescenta notas sobre os componentes substituídos, tudo pelo telemóvel.',
      },
      {
        title: 'O escritório vê tudo assim que chega',
        desc: 'O GeoTapp Flow recebe os dados assim que o telefone tem rede. O responsável vê o serviço, o técnico atribuído, o andamento e as provas fotográficas sem ligar a ninguém.',
      },
      {
        title: 'O relatório de intervenção é a sua prova',
        desc: 'No fim da intervenção o sistema gera um relatório selado: hora GPS, fotos da instalação e dos componentes, notas técnicas. Qualquer alteração é detetável. O cliente pode verificá-lo de forma autónoma.',
      },
    ],
  },
  differenza: {
    title: 'App para canalizadores e aquecimento: registo ou prova verificável?',
    subtitle: 'A maioria das apps regista o horário. O GeoTapp produz provas verificáveis.',
    rows: [
      {
        label: 'O que regista',
        competitor: 'Hora de entrada e de saída',
        geotapp: 'Hora + localização na picagem + fotos da instalação + componentes substituídos',
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
        geotapp: 'A sua empresa, o cliente, uma entidade terceira',
      },
      {
        label: 'RGPD',
        competitor: 'Muitas vezes por verificar',
        geotapp: 'Concebido para se manter dentro do RGPD, com os modelos de documentos incluídos',
      },
    ],
  },
  prima_dopo: {
    title: 'Antes do GeoTapp. Depois do GeoTapp.',
    prima: [
      'O cliente nega que a válvula tenha sido substituída.',
      'Não tem fotos nem materiais documentados.',
      'A discussão dura semanas. Arrisca-se a não ser pago.',
      'O técnico não tem nada na mão para se defender.',
    ],
    dopo: [
      'O cliente nega que a válvula tenha sido substituída.',
      'Abra o relatório: foto do componente removido, do novo montado, hora GPS, notas técnicas.',
      'Envia-lho, e ele verifica-o por si próprio.',
      'Tem uma prova para mostrar. O técnico também tem algo na mão.',
    ],
  },
  scenario: {
    title: 'Um caso típico',
    body: 'Um cliente contesta a substituição de um queimador na caldeira e recusa-se a pagar a fatura. Com o GeoTapp abre o relatório: foto do componente defeituoso removido, do novo instalado, hora GPS da intervenção e notas técnicas do técnico, tudo gerado automaticamente pelo telemóvel no local.',
    resolution: 'Em vez de uma palavra contra a outra, há um documento que o cliente verifica por si próprio.',
  },
  features: {
    title: 'App para canalizadores e aquecimento: o que encontra no GeoTapp.',
    items: [
      {
        title: 'Picagem GPS verificável',
        desc: 'Cada entrada, pausa e saída fica registada com localização, carimbo de data e hora e serviço. Para mostrar ao cliente e à seguradora quando for preciso.',
      },
      {
        title: 'Provas fotográficas da instalação',
        desc: 'O técnico tira fotos pela app durante e depois da intervenção. Cada imagem fica ligada à localização e à hora, e vai para o relatório selado: qualquer alteração posterior é detetável.',
      },
      {
        title: 'Relatórios de intervenção digitais automáticos',
        desc: 'No fim dos trabalhos o relatório já está pronto: horas, fotos, componentes substituídos. O escritório envia-o ao cliente a partir do Flow com um clique.',
      },
      {
        title: 'Gestão de serviços e urgências',
        desc: 'Atribua intervenções urgentes, acompanhe o andamento serviço a serviço.',
      },
      {
        title: 'Exportação de presenças para o processamento salarial',
        desc: 'Exporte as presenças do mês em Excel ou CSV, prontas para o seu contabilista ou consultor laboral. O processamento salarial torna-se uma operação rápida.',
      },
      {
        title: 'Os seus técnicos também têm uma prova',
        desc: 'Um relatório verificável dá ao técnico algo na mão contra acusações infundadas sobre materiais ou horários. Quem trabalha bem demonstra-o com dados.',
      },
    ],
  },
  cta_mid: {
    title: 'Quer ver como funciona numa intervenção real de canalização e aquecimento?',
    body: 'Experimente numa intervenção real, da abertura do serviço ao relatório que o cliente recebe: 14 dias grátis, sem cartão de crédito.',
    cta: 'Começar teste gratuito de 14 dias',
  },
  trust: {
    title: 'Qualquer alteração aos nossos relatórios vê-se. Nem por si. Nem por nós.',
    body: 'Os relatórios do GeoTapp são gerados pelo sistema no momento da intervenção. Depois de o relatório ser selado, corrigir uma hora ou mover uma foto quebra o selo, e a verificação assinala-o.',
    badge: 'Verificável por qualquer pessoa, sem acesso à sua conta',
  },
  testimonial: {
    quote: 'Com o GeoTapp os meus técnicos fotografam a instalação antes e depois de cada intervenção. Quando um cliente contesta os materiais, temos as fotos para mostrar.',
    author: 'Marco S.',
    role: 'Proprietário, instalações de canalização e aquecimento residenciais e industriais',
  },
  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que nos perguntam os canalizadores e técnicos de aquecimento antes de começar.',
    items: [
      {
        q: 'O GeoTapp é adequado como app para canalizadores e técnicos de aquecimento?',
        a: 'Sim. O GeoTapp é usado por canalizadores e técnicos de aquecimento e águas para gerir intervenções em caldeiras, instalações de aquecimento e sanitárias, com relatórios GPS, fotos e horas verificáveis.',
      },
      {
        q: 'Posso usar o GeoTapp para documentar a substituição de componentes em caldeiras?',
        a: 'Sim. O técnico tira fotos pela app do componente removido e do instalado. Cada imagem fica ligada a GPS, carimbo de data e hora e serviço, e é incluída no relatório selado.',
      },
      {
        q: 'O GeoTapp ajuda a resolver as contestações dos clientes sobre as instalações?',
        a: 'É exatamente o principal caso de utilização: hora GPS, provas fotográficas dos materiais e relatório selado dão-lhe um documento para mostrar quando uma contestação é infundada.',
      },
    ],
  },
  cta: {
    title: 'Cada intervenção de canalização e aquecimento bem feita merece uma prova. O GeoTapp gera-a.',
    subtitle: 'Relatórios verificáveis, localização nas picagens, fotos seladas no relatório.',
    primary: 'Começar teste gratuito de 14 dias',
    secondary: 'Ver preços',
  },
  pricing_hint: {
    label: 'Postos TimeTracker desde',
    per: 'por operador por mês, mais o plano Flow desde 39 € por mês',
    note: 'Teste gratuito de 14 dias',
  },
  schema_sector_name: 'Canalizadores e aquecimento',
  schema_faq: [
    {
      question: 'O GeoTapp funciona como app para canalizadores e técnicos de aquecimento?',
      answer: 'Sim. O GeoTapp é a app para canalizadores e técnicos de instalações que regista cada intervenção em caldeiras e instalações com GPS, fotos e horários registados. O técnico pica o ponto no terreno, o escritório vê tudo assim que chega, o cliente recebe um relatório selado.',
    },
    {
      question: 'Como selo uma intervenção numa caldeira com o GeoTapp?',
      answer: 'O técnico regista no GeoTapp a hora de início e de fim com a localização, as fotos dos componentes substituídos e as notas técnicas. O sistema gera um relatório selado que o cliente pode verificar de forma autónoma.',
    },
    {
      question: 'O GeoTapp ajuda a gerir várias equipas de canalizadores em intervenções diferentes?',
      answer: 'Sim. O GeoTapp Flow permite ao responsável coordenar várias equipas, atribuir serviços urgentes, acompanhar o estado das intervenções e recolher provas fotográficas de todas as obras ativas, assim que são carregadas.',
    },
    {
      question: 'Os relatórios do GeoTapp servem em caso de contestação sobre instalações térmicas?',
      answer: 'Os relatórios do GeoTapp são selados com GPS, carimbo de data e hora e provas fotográficas. O cliente verifica-os por si próprio. Ajudam a mostrar que o documento não foi alterado; por si sós não são prova absoluta dos factos nem aconselhamento jurídico.',
    },
  ],
};

export default content;
