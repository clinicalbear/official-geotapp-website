import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software de segurança privada | GeoTapp - Turnos com GPS',
    description: 'Software para empresas de segurança privada: turnos com localização nas picagens, rondas documentadas e fotos de prova. Pensado para o RGPD. Experimente grátis.',
  },
  hero: {
    badge: 'Software para segurança privada, vigilantes e assistentes de recinto',
    h1_line1: 'Presenças e turnos verificáveis',
    h1_line2: 'para vigilância e segurança privada',
    subtitle: 'O GeoTapp Flow e o TimeTracker documentam a presença dos vigilantes nos postos atribuídos: localização e hora em cada picagem, fotos de prova, relatórios selados. Turnos, pedidos de troca de turno e comunicações numa única plataforma. A app para segurança privada que sela cada turno, cada ronda, cada presença.',
    cta_primary: 'Começar teste gratuito de 14 dias',
    cta_note: 'O teste não o obriga a nada. Sem cartão de crédito.',
  },
  pain: {
    title: 'Os problemas que já conhece',
    items: [
      {
        title: 'Demonstrar a presença nos postos atribuídos',
        desc: 'O cliente contesta a presença do vigilante a uma hora precisa. Sem localização e horários registados, fica a sua palavra contra a dele, e arrisca o contrato.',
      },
      {
        title: 'Relatórios de incidentes sem prova de localização',
        desc: 'Um relatório de incidente escrito à mão, sem localização nem hora registadas, é fácil de contestar.',
      },
      {
        title: 'Passagem de turno ainda em papel',
        desc: 'A troca de turno entre vigilantes faz-se com papelinhos ou telefonemas. Perde-se informação crítica, as responsabilidades ficam pouco claras e reconstituir depois é difícil.',
      },
    ],
  },
  workflow: {
    title: 'Como funciona em três passos',
    subtitle: 'Do posto de vigilância ao escritório sem papel.',
    steps: [
      {
        title: 'O vigilante pica o ponto no posto atribuído',
        desc: 'O GeoTapp TimeTracker regista entrada, pausas e saída com localização e hora, e as fotos de prova nos pontos de controlo. Cada controlo é documentado pelo vigilante com um gesto: entre uma picagem e outra não se regista nada automaticamente.',
      },
      {
        title: 'O responsável vê os turnos assim que chegam',
        desc: 'O Flow recebe os dados assim que chegam. O responsável operacional verifica a cobertura de todos os postos, as trocas de turno e eventuais desvios sem ligar para o terreno.',
      },
      {
        title: 'O relatório é a sua prova, defensável em auditoria',
        desc: 'No fim do turno o registo de presenças é gerado com as localizações registadas nas picagens, e qualquer alteração é detetável. O cliente ou as autoridades podem verificar a sua integridade por si próprios.',
      },
    ],
  },
  differenza: {
    title: 'Software para empresas de segurança: registo de presenças ou provas verificáveis?',
    subtitle: 'A maioria dos softwares regista os turnos. O GeoTapp sela cada presença num relatório verificável.',
    rows: [
      {
        label: 'O que regista',
        competitor: 'Hora de início e de fim do turno',
        geotapp: 'Hora + localização na picagem + fotos + localização no posto atribuído',
      },
      {
        label: 'Quem pode verificar',
        competitor: 'Apenas o seu escritório',
        geotapp: 'A sua empresa, o cliente, as autoridades, de forma autónoma',
      },
      {
        label: 'Em caso de contestação',
        competitor: 'Apenas a sua palavra',
        geotapp: 'Relatório selado, verificável por terceiros',
      },
      {
        label: 'Prova de ronda',
        competitor: 'Ausente ou em papel',
        geotapp: 'Localização, hora e foto no ponto de controlo',
      },
      {
        label: 'RGPD',
        competitor: 'Muitas vezes por verificar',
        geotapp: 'Concebido para se manter dentro do RGPD, com os modelos de documentos incluídos',
      },
    ],
  },

  prima_dopo: {
    title: 'O que acontece agora. O que acontece com o GeoTapp.',
    prima: [
      'O cliente contesta a presença do vigilante a uma hora específica.',
      'O vigilante diz «estava lá». O cliente diz «não consta».',
      'Não tem nada para o demonstrar. A disputa arrasta-se.',
      'Arrisca-se a perder o contrato.',
    ],
    dopo: [
      'O cliente contesta a presença do vigilante a uma hora específica.',
      'Abra o relatório: localização no posto atribuído, horários, foto do local.',
      'Envia-lho, e ele verifica-o por si próprio.',
      'Tem uma prova para mostrar.',
    ],
  },

  scenario: {
    title: 'Um caso típico',
    body: 'O cliente afirma que o vigilante não estava no seu posto a uma hora crítica. Com o GeoTapp abre o relatório do turno: localização registada no ponto de controlo, carimbo de data e hora selado, foto do local, tudo registado pelo telemóvel do vigilante quando picou o ponto e tirou as fotos.',
    resolution: 'Em vez de uma palavra contra a outra, há um documento que o cliente verifica por si próprio.',
  },

  features: {
    title: 'Software para empresas de segurança: turnos selados, controlos documentados.',
    items: [
      {
        title: 'Picagem GPS verificável para cada vigilante',
        desc: 'Cada presença fica ligada a uma localização, uma hora e um posto atribuído. Para mostrar ao cliente, à inspeção do trabalho ou numa auditoria contratual quando for preciso.',
      },
      {
        title: 'Ficha de cada vigilante',
        desc: 'Mantenha na ficha de cada vigilante a função, os contactos e os postos atribuídos, e decida quem vê o quê na app.',
      },
      {
        title: 'Exportação em Excel ou CSV para o processamento salarial',
        desc: 'Exporte as presenças do mês em Excel ou CSV, prontas para o seu contabilista ou consultor laboral. O processamento salarial torna-se uma operação rápida e sem erros de transcrição.',
      },
      {
        title: 'Passagem de turno digital',
        desc: 'Os pedidos de troca de turno passam pela app e as comunicações ficam no canal do serviço: menos papelinhos e telefonemas entre um turno e o seguinte.',
      },
      {
        title: 'Painel de vários locais atualizado a cada picagem',
        desc: 'O responsável vê a última localização picada de cada vigilante, o estado de cada posto e as trocas de turno ativas, a partir de qualquer dispositivo, sem telefonemas.',
      },
      {
        title: 'Relatórios defensáveis em auditorias e perante as autoridades',
        desc: 'Cada turno gera um relatório selado com localizações, horários e fotos de prova, que o cliente e as autoridades podem verificar por si próprios.',
      },
    ],
  },

  // Modulo Emergenze (13/11/2026): explanation on the sector page, requested by Mike.
  // Cautious wording: the plan belongs to the customer, notifications may not
  // arrive, no "certification".
  cosa_cambia: {
    title: 'Emergências e simulacros: o seu plano, ativável com um toque',
    items: [
      {
        title: 'Planta com saídas e meios',
        desc: 'Carregue a planta do local ou do evento, em imagem ou PDF, e assinale saídas, pontos de reunião, extintores, desfibrilhadores e acessos dos meios de socorro. Desenhe as zonas e, para cada uma, a ordem das saídas. O plano continua a ser seu: a GeoTapp torna-o ativável, não o substitui nem o valida.',
      },
      {
        title: 'Protocolos e equipas por certificado',
        desc: 'Para cada cenário, como incêndio, evacuação ou mal-estar, escreva os passos e as funções. A GeoTapp assinala quando numa equipa falta alguém com o certificado válido na data do evento, e lembra os prazos dos certificados e das verificações dos meios que tiver registado. A decisão continua a ser sua.',
      },
      {
        title: 'Ativação com dupla confirmação',
        desc: 'O coordenador escolhe o cenário e toca na planta o ponto do perigo. Cada elemento da equipa recebe no telemóvel a sua função, os passos e as saídas por ordem, sem as que estão bloqueadas ou perto do perigo. Uma notificação pode não chegar, por exemplo com o telemóvel desligado: por isso cada um confirma.',
      },
      {
        title: 'Quem respondeu, e em quanto tempo',
        desc: 'Cada um responde com um toque: presente, a caminho, não posso. O painel mostra quem respondeu e ao fim de quanto tempo, volta a avisar quem falta e, se uma saída estiver bloqueada, atualiza as saídas de todos.',
      },
      {
        title: 'Simulacros com os tempos medidos',
        desc: 'O mesmo fluxo em modo simulacro: não se chama nenhum socorro e ficam os tempos de resposta de cada um, para exportar em PDF ou CSV.',
      },
      {
        title: 'O plano no telemóvel, mesmo sem rede',
        desc: 'O PDF do plano de emergência é descarregado com antecedência para o telemóvel de quem está na equipa e abre-se sem ligação. O registo de quem fez o quê é encadeado: uma entrada alterada depois já não corresponde às restantes.',
      },
    ],
  },

  cta_mid: {
    title: 'Quer ver como funciona num caso real de contestação?',
    body: 'Experimente no serviço real, do vigilante que pica o ponto no posto atribuído ao relatório que o cliente recebe: 14 dias grátis, sem cartão de crédito.',
    cta: 'Começar teste gratuito de 14 dias',
  },

  trust: {
    title: 'Qualquer alteração aos nossos relatórios vê-se, mesmo que a faça a sua equipa ou que a façamos nós.',
    body: 'Os relatórios do GeoTapp são gerados pelo sistema no momento do turno. Depois de o relatório ser selado, corrigir uma hora ou mover uma foto quebra o selo, e a verificação assinala-o. Quem o recebe, cliente ou autoridades, pode verificá-lo por si próprio.',
    badge: 'Verificável por qualquer pessoa, sem acesso à sua conta',
  },
  testimonial: {
    quote: 'Aos clientes enviamos o registo de presenças selado, com as localizações das picagens: quando contestam, verificam por si próprios.',
    author: 'Luca M.',
    role: 'Diretor de operações, empresa de segurança privada',
  },
  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que nos perguntam com mais frequência antes de começar.',
    items: [
      {
        q: 'O GeoTapp é adequado para a segurança privada e os vigilantes?',
        a: 'Sim. O GeoTapp é usado por empresas de segurança privada para documentar as presenças nos postos atribuídos com a localização, gerir turnos e trocas de turno e recolher as fotos de prova nos pontos de controlo.',
      },
      {
        q: 'Como ajuda o GeoTapp na gestão dos relatórios de incidentes?',
        a: 'O TimeTracker liga cada evento a uma localização e a uma hora, seladas no relatório. O relatório de incidente gerado pelo GeoTapp inclui coordenadas, hora e fotos, e o cliente pode verificar por si próprio que o documento não foi alterado.',
      },
      {
        q: 'O GeoTapp ajuda na troca de turno entre vigilantes?',
        a: 'Sim. Os pedidos de troca de turno passam pela app, os turnos estão no calendário do Flow e as comunicações ficam no canal do serviço. O responsável vê quem cobre o quê sem depender de telefonemas.',
      },
    ],
  },
  cta: {
    title: 'O turno foi cumprido. Agora demonstre-o.',
    subtitle: 'O GeoTapp gera provas verificáveis de cada serviço de vigilância: relatórios selados que o cliente e as autoridades podem verificar por si próprios.',
    primary: 'Começar teste gratuito de 14 dias',
    secondary: 'Ver preços',
  },
  pricing_hint: {
    label: 'Postos TimeTracker desde',
    per: 'por operador por mês, mais o plano Flow desde 39 € por mês',
    note: 'Teste gratuito de 14 dias',
  },

  schema_sector_name: 'Segurança privada',
  schema_faq: [
    {
      question: 'O GeoTapp funciona para a gestão de vigilantes e rondas de segurança?',
      answer: 'Sim. O GeoTapp permite às empresas de segurança selar cada turno e cada ronda: os vigilantes picam o ponto pelo telemóvel com a localização, e daí saem provas documentadas do serviço prestado.',
    },
    {
      question: 'Como documento as rondas e os controlos periódicos?',
      answer: 'Cada controlo é registado com o GeoTapp TimeTracker: hora, localização, foto do local e notas. O relatório selado fica disponível para o cliente assim que é gerado, ou no fim do turno.',
    },
    {
      question: 'Posso demonstrar ao cliente que as rondas foram feitas com regularidade?',
      answer: 'Sim. Os relatórios do GeoTapp são selados e incluem localizações, horários e fotos de prova dos pontos de controlo. O cliente pode verificar por si próprio que o relatório não foi alterado e ver a que horas e onde o vigilante picou o ponto.',
    },
    {
      question: 'O GeoTapp ajuda com o trabalho noturno e as convenções coletivas da vigilância?',
      answer: 'O GeoTapp regista horários, horas extraordinárias e acréscimos noturnos e de feriados, e exporta-os para o seu contabilista ou consultor laboral, que os aplica segundo a convenção coletiva. Foi concebido para se manter dentro do RGPD: localização apenas quando o vigilante pica o ponto.',
    },
    {
      question: 'Funciona também para coordenar várias equipas em locais diferentes?',
      answer: 'Sim. Com o GeoTapp Flow, o responsável vê a última localização picada de todos os vigilantes, atribui os turnos, gere as substituições urgentes e recolhe os relatórios de todos os locais num único ecrã.',
    },
  ],
};

export default content;
