import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para eletricistas: relatório com hora, posição e fotos',
    description: 'Um toque à chegada, outro à saída, as fotos do quadro anexadas à intervenção. O relatório está pronto quando parte. 14 dias grátis.',
  },
  hero: {
    badge: 'App para eletricistas e instaladores elétricos',
    h1_line1: 'App para eletricistas:',
    h1_line2: 'relatórios GPS, provas fotográficas e menos contestações.',
    subtitle: 'GeoTapp regista cada intervenção elétrica com GPS, fotos e horários registados. O cliente contesta? Mostre o relatório em vez de discutir de viva voz.',
    cta_primary: 'Começar teste gratuito de 14 dias',
    cta_note: 'O teste não o obriga a nada. Sem cartão de crédito.',
  },
  pain: {
    title: 'O problema que toda a empresa de eletricidade conhece bem',
    items: [
      {
        title: 'O cliente nega a intervenção ou o horário',
        desc: 'Diz que o técnico não estava presente ou que a instalação não ficou concluída. Sem provas verificáveis, a contestação arrasta-se durante semanas.',
      },
      {
        title: 'Sem documentação da instalação depois da intervenção',
        desc: 'O técnico terminou o trabalho, mas não há registo fotográfico nem nota técnica. Reconstruir o que foi feito torna-se impossível.',
      },
      {
        title: 'O escritório não sabe onde estão os técnicos',
        desc: 'Telefonemas, mensagens, incerteza. Sempre que tem de atualizar um cliente sobre o andamento dos trabalhos, tem primeiro de localizar o técnico.',
      },
    ],
  },
  workflow: {
    title: 'Como funciona em três passos',
    subtitle: 'Da obra ao escritório, sem telefonemas.',
    steps: [
      {
        title: 'O técnico regista a intervenção no terreno',
        desc: 'Com o GeoTapp TimeTracker pica o ponto à entrada, nas pausas e à saída com a posição, tira fotos da instalação e acrescenta notas técnicas a partir do smartphone.',
      },
      {
        title: 'O escritório vê tudo assim que chega',
        desc: 'O GeoTapp Flow recebe os dados assim que o telemóvel tem rede. O responsável vê obra, técnico atribuído, andamento e provas fotográficas sem telefonar.',
      },
      {
        title: 'O relatório é a sua prova',
        desc: 'No fim da intervenção, o sistema gera um relatório selado: hora e posição GPS, fotos da instalação, notas técnicas. Qualquer alteração é detetável. O cliente pode verificá-lo de forma autónoma.',
      },
    ],
  },
  differenza: {
    title: 'App para eletricistas: registo ou prova verificável?',
    subtitle: 'A maioria das apps regista a hora. GeoTapp produz provas verificáveis.',
    rows: [
      {
        label: 'O que regista',
        competitor: 'Hora de entrada e saída',
        geotapp: 'Hora + posição na picagem + fotos da instalação + notas técnicas',
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
      'O cliente nega que a instalação tenha sido concluída.',
      'Não há fotos nem horários verificáveis.',
      'A discussão dura semanas. Arrisca-se a não ser pago.',
      'O técnico não tem nada em mãos para se defender.',
    ],
    dopo: [
      'O cliente nega que a instalação tenha sido concluída.',
      'Abra o relatório: fotos GPS da instalação, hora selada, assinatura.',
      'Envia-lho, e ele verifica por si.',
      'Tem uma prova para mostrar. O técnico também fica com algo em mãos.',
    ],
  },
  scenario: {
    title: 'Um caso típico',
    body: 'Um cliente contesta a conclusão da instalação elétrica e recusa-se a pagar a última fatura. Com GeoTapp abre o relatório: fotos do quadro concluído, hora GPS de início e fim dos trabalhos, notas técnicas do técnico, tudo gerado automaticamente pelo smartphone no local.',
    resolution: 'Em vez de uma palavra contra a outra, há um documento que o cliente verifica por si.',
  },
  cosa_cambia: {
    title: 'O que muda de facto, desde a primeira intervenção',
    items: [
      {
        title: 'À noite já não se copia nada',
        desc: 'As horas não passam pela folha, depois pela mensagem, depois pelo programa de gestão. Nascem já na obra certa, com a posição e a hora de quando foram feitas, e no fim do mês a exportação para o processamento salarial fica pronta sem que ninguém as volte a transcrever.',
      },
      {
        title: 'O relatório deixa de ser uma discussão',
        desc: 'Quando o cliente pergunta quantas horas foram feitas na sua instalação, a resposta não é a palavra do técnico contra a dele, é um documento selado com as fotos do quadro, os horários e as notas técnicas, que pode verificar sozinho sem entrar na sua conta.',
      },
      {
        title: 'O técnico também fica com algo em mãos',
        desc: 'Vale nos dois sentidos. Quem trabalha bem e ouve dizer que chegou tarde tem a prova da hora, e não precisa de se lembrar de memória do que fez há três semanas para se defender.',
      },
    ],
  },
  features: {
    title: 'App para eletricistas: o que encontra em GeoTapp.',
    items: [
      {
        title: 'Picagem GPS verificável',
        desc: 'Cada entrada, pausa e saída fica registada com posição, marca temporal e obra. Para mostrar ao cliente quando for preciso.',
      },
      {
        title: 'Provas fotográficas da instalação',
        desc: 'O técnico tira fotos a partir da app no fim da intervenção. Cada imagem fica ligada ao GPS e à marca temporal: qualquer alteração posterior é detetável.',
      },
      {
        title: 'Relatórios digitais automáticos',
        desc: 'No fim dos trabalhos o relatório já está pronto: horas, fotos e notas técnicas. O escritório envia-o ao cliente a partir do Flow com um clique.',
      },
      {
        title: 'Gestão de obras em paralelo',
        desc: 'Atribua intervenções e acompanhe o andamento obra a obra.',
      },
      {
        title: 'Exportação de presenças para o processamento salarial',
        desc: 'Exporte as presenças do mês em Excel ou CSV, prontas para o contabilista. O processamento salarial torna-se uma operação rápida.',
      },
      {
        title: 'Os seus eletricistas ficam protegidos',
        desc: 'Um relatório verificável dá ao técnico algo em mãos contra acusações infundadas. Quem trabalha bem demonstra-o com dados.',
      },
    ],
  },
  cta_mid: {
    title: 'Quer ver como funciona numa intervenção elétrica real?',
    body: 'Experimente numa intervenção verdadeira, desde a abertura da obra até ao relatório que o cliente recebe: 14 dias grátis, sem cartão de crédito.',
    cta: 'Começar teste gratuito de 14 dias',
  },
  trust: {
    title: 'Nos nossos relatórios qualquer alteração vê-se, quer a faça a sua empresa, quer a façamos nós.',
    body: 'Os relatórios GeoTapp são gerados pelo sistema no momento da intervenção. Depois de selado o relatório, corrigir uma hora ou mudar uma foto quebra o selo, e a verificação assinala-o.',
    badge: 'Verificável por qualquer pessoa, sem acesso à sua conta',
  },
  testimonial: {
    quote: 'Com GeoTapp os meus técnicos registam a instalação assim que terminam. Quando um cliente contesta, temos o relatório para mostrar.',
    author: 'Carlos M.',
    role: 'Proprietário, instalações elétricas civis e industriais',
  },
  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que os eletricistas nos perguntam antes de começar.',
    items: [
      {
        q: 'GeoTapp é adequado como app para eletricistas?',
        a: 'Sim. GeoTapp é usado por eletricistas e instaladores para gerir intervenções, relatórios, horas e provas fotográficas das instalações. Funciona tanto para trabalhos numa só obra como para várias obras em paralelo.',
      },
      {
        q: 'Posso usar GeoTapp para documentar instalações e intervenções elétricas?',
        a: 'Sim. O técnico tira fotos a partir da app durante ou no fim da intervenção. Cada imagem fica ligada ao GPS, à marca temporal e à obra, e incluída num relatório em que qualquer alteração é detetável.',
      },
      {
        q: 'GeoTapp ajuda a resolver as contestações dos clientes?',
        a: 'É exatamente o caso de uso principal: hora GPS, provas fotográficas e relatório selado dão-lhe um documento para mostrar quando uma contestação é infundada.',
      },
      {
        q: 'Serve também como app para instaladores, não só para eletricistas?',
        a: 'Sim. Instalações elétricas, canalização e aquecimento, climatização, combate a incêndios, fotovoltaico. O ofício muda, o problema continua a ser o mesmo, isto é, demonstrar quem foi onde, quanto tempo lá ficou e o que deixou concluído. O relatório sai igual para todos.',
      },
      {
        q: 'Como funcionam os relatórios para instaladores?',
        a: 'O técnico fecha a intervenção a partir do telemóvel e o relatório já está escrito, com horas, posição, fotos da instalação e notas técnicas. Não fica um formulário para preencher à noite, que é o motivo por que os relatórios chegam tarde ou não chegam.',
      },
      {
        q: 'Podemos deixar de recolher horas e fotos no WhatsApp?',
        a: 'É o motivo por que a maioria das empresas chega até nós. No chat as horas perdem-se entre as mensagens, as fotos são comprimidas e no fim do mês alguém tem de copiar tudo à mão. Aqui o dado nasce já ligado à obra e à pessoa.',
      },
    ],
  },
  cta: {
    title: 'Cada instalação bem feita merece uma prova. GeoTapp gera-a.',
    subtitle: 'Relatórios verificáveis, posição nas picagens, fotos seladas no relatório.',
    primary: 'Começar teste gratuito de 14 dias',
    secondary: 'Ver preços',
  },
  pricing_hint: {
    label: 'Postos TimeTracker desde',
    per: 'por operário e por mês, mais o plano Flow desde 39 € por mês',
    note: 'Teste gratuito de 14 dias',
  },
  schema_sector_name: 'Eletricistas',
  schema_faq: [
    {
      question: 'GeoTapp funciona como app para eletricistas?',
      answer: 'Sim. GeoTapp é a app para eletricistas e instaladores que regista cada intervenção com GPS, fotos e horários registados. O técnico pica o ponto no terreno, o escritório vê tudo assim que chega, o cliente recebe um relatório selado.',
    },
    {
      question: 'Como selo uma intervenção elétrica com GeoTapp?',
      answer: 'O técnico regista em GeoTapp a hora de início e de fim com a posição, as fotos da instalação e as notas técnicas. O sistema gera um relatório selado que o cliente pode verificar de forma autónoma.',
    },
    {
      question: 'GeoTapp ajuda a gerir várias equipas de eletricistas em obras diferentes?',
      answer: 'Sim. GeoTapp Flow permite ao responsável coordenar várias equipas, atribuir obras, acompanhar o estado das intervenções e recolher provas fotográficas de todas as obras ativas, assim que são carregadas.',
    },
    {
      question: 'Os relatórios GeoTapp são aceites em caso de contestação?',
      answer: 'Os relatórios GeoTapp são selados com GPS, marca temporal e provas fotográficas. O cliente verifica-os por si. Ajudam a mostrar que o documento não foi alterado; por si sós não são prova absoluta do facto nem aconselhamento jurídico.',
    },
    {
      question: 'GeoTapp funciona também como app para instaladores?',
      answer: 'Sim. Além das instalações elétricas, cobre canalização e aquecimento, climatização, combate a incêndios e fotovoltaico. O técnico regista a intervenção no terreno com GPS e fotos, e o relatório é gerado da mesma forma para cada tipo de instalação.',
    },
    {
      question: 'GeoTapp rastreia a posição dos técnicos durante o dia?',
      answer: 'Não. A posição é registada apenas quando o técnico pica o ponto (entrada, pausas, saída) ou tira uma foto de prova. Entre uma picagem e outra não se regista nada automaticamente: a app nem sequer pede permissão para ler a posição em segundo plano.',
    },
  ],
};

export default content;
