import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para empresas de limpeza: GPS e fotos por local',
    description: 'Picagens com GPS só no início e no fim e fotos de cada intervenção: as provas a mostrar ao cliente quando contesta um serviço. 14 dias grátis.',
  },

  hero: {
    badge: 'App para empresas de limpeza, facility management e multisserviços',
    h1_line1: 'A app para empresas de limpeza',
    h1_line2: 'que sela cada intervenção.',
    subtitle:
      'O GeoTapp é a app para empresas de limpeza que transforma cada intervenção numa prova para mostrar. Os clientes contestam, e um horário escrito não chega. O GeoTapp regista a localização em cada picagem, recolhe as fotos de prova e fecha tudo num relatório selado, em que qualquer alteração é detetável, que o cliente pode verificar por si próprio.',
    cta_primary: 'Experimente num contrato real',
    cta_note: '14 dias, até 50 operadores no terreno, sem cartão de crédito.',
  },

  pain: {
    title: 'Se não o pode demonstrar, para o cliente nunca aconteceu.',
    items: [
      {
        title: 'O cliente nega a intervenção',
        desc: 'Diz que a área não foi limpa ou que o operador não esteve lá. Tem um horário escrito, ele tem a sua versão. Sem provas verificáveis, arrisca o contrato.',
      },
      {
        title: 'Operadores no terreno que não consegue verificar',
        desc: 'Não pode estar em todos os locais. Não sabe se o trabalho foi feito até o cliente se queixar, e nessa altura já é tarde para reconstruir o que quer que seja.',
      },
      {
        title: 'A inspeção pede documentação real',
        desc: 'Horários, presenças, horas extraordinárias, pausas: a folha de presenças não chega. Quem fiscaliza quer horários registados, não reconstruídos de memória.',
      },
    ],
  },

  prima_dopo: {
    title: 'O que acontece agora. O que acontece com o GeoTapp.',
    prima: [
      'O cliente liga e diz que a casa de banho não foi limpa.',
      'O operador diz «fiz». O cliente diz «não fez».',
      'Não tem nada na mão para demonstrar o que quer que seja.',
      'A discussão arrasta-se durante dias. Às vezes perde o contrato.',
    ],
    dopo: [
      'O cliente liga e diz que a casa de banho não foi limpa.',
      'Abra o relatório da intervenção: foto da casa de banho limpa, hora, localização.',
      'Envia-lho. Respondeu com dados, e ele verifica-os por si próprio.',
      'Tem uma prova para mostrar. O operador também tem algo na mão.',
    ],
  },

  scenario: {
    title: 'Um caso típico',
    body: 'O cliente diz que a casa de banho não foi limpa. Com o GeoTapp abre o relatório e mostra a foto do espaço, a hora da fotografia e a localização, tudo gerado automaticamente pela app do operador no momento da intervenção.',
    resolution: 'Respondeu com dados, e não com a sua palavra contra a dele.',
  },

  differenza: {
    title: 'Picagem versus prova verificável do trabalho.',
    subtitle: 'A maioria das apps regista dados. O GeoTapp produz provas.',
    rows: [
      {
        label: 'O que regista',
        competitor: 'Hora de entrada e de saída',
        geotapp: 'Hora + localização na picagem + fotos + atividade realizada',
      },
      {
        label: 'Quem pode verificar',
        competitor: 'Apenas o seu escritório',
        geotapp: 'A sua empresa, o cliente, uma entidade terceira, de forma autónoma',
      },
      {
        label: 'Em caso de contestação',
        competitor: 'Apenas a sua palavra',
        geotapp: 'Relatório selado, qualquer alteração é detetável',
      },
      {
        label: 'Prova fotográfica',
        competitor: 'Ausente ou desligada',
        geotapp: 'Anexada ao relatório com hora e localização',
      },
      {
        label: 'RGPD',
        competitor: 'Muitas vezes por verificar',
        geotapp: 'Concebido para se manter dentro do RGPD, com os modelos de documentos incluídos',
      },
      {
        label: 'Visibilidade atualizada a cada picagem',
        competitor: 'Não',
        geotapp: 'Sim, todos os locais, todos os operadores',
      },
    ],
  },

  non_gestionale: {
    title: 'Não é apenas um software de gestão.',
    subtitle: 'Os programas de gestão organizam o trabalho. O GeoTapp organiza-o e, além disso, sela-o.',
    items: [
      {
        label: 'Objetivo principal',
        gestionale: 'Planear e organizar',
        geotapp: 'Gerar provas verificáveis',
      },
      {
        label: 'O que produz',
        gestionale: 'Dados internos ao seu sistema',
        geotapp: 'Relatórios selados verificáveis por terceiros',
      },
      {
        label: 'Em caso de contestação',
        gestionale: 'Mostra dados que só a sua empresa pode ler',
        geotapp: 'Envia um relatório que o cliente verifica por si próprio',
      },
      {
        label: 'Valor para o cliente',
        gestionale: 'Nenhum, é uma ferramenta interna',
        geotapp: 'Elevado: o cliente verifica-o por si próprio',
      },
      {
        label: 'Prova fotográfica',
        gestionale: 'Não prevista ou separada',
        geotapp: 'Integrada no relatório com GPS e carimbo de data e hora',
      },
    ],
  },

  workflow: {
    title: 'Da obra ao escritório, cada intervenção torna-se uma prova.',
    subtitle: 'Três passos. Zero papel. Zero chamadas.',
    steps: [
      {
        title: 'O operador sela a prova no local',
        desc: 'Com o GeoTapp TimeTracker regista entrada, pausas, saída, fotos dos espaços e notas a partir do telemóvel. A localização é obtida pelo telefone nesse momento, não é introduzida à mão, e qualquer alteração posterior é detetável.',
      },
      {
        title: 'O escritório fica atualizado a cada picagem',
        desc: 'O Flow mostra num único ecrã quem picou o ponto, onde e a que horas. Vê o estado de cada edifício, recebe um aviso se um turno ficar aberto e atribui os serviços, sem andar atrás de ninguém.',
      },
      {
        title: 'O relatório já está pronto. Selado: qualquer alteração vê-se.',
        desc: 'No fim do turno o sistema gera automaticamente um relatório selado com localizações, fotos e selo. O cliente recebe-o e verifica-o por si próprio, sem acesso ao seu sistema, sem ter de confiar na sua palavra.',
      },
    ],
  },

  features: {
    title: 'App para empresas de limpeza: menos discussões, mais provas.',
    items: [
      {
        title: 'Responda a cada contestação com dados',
        desc: 'Quando cada intervenção tem um relatório verificável, tem a documentação para responder de imediato. Menos negociações de viva voz que duram semanas.',
      },
      {
        title: 'Controlo real em todos os locais',
        desc: 'Sabe onde e a que horas cada operador picou o ponto, assim que a picagem chega, em todos os edifícios e a partir de qualquer dispositivo. Entre uma picagem e outra não se regista nada automaticamente.',
      },
      {
        title: 'Relatórios defensáveis em qualquer instância',
        desc: 'Cada relatório é selado: qualquer alteração é detetável. Quem o recebe, cliente, inspetor ou consultor, pode verificá-lo por si próprio.',
      },
      {
        title: 'Pronto para a inspeção',
        desc: 'Horários, pausas, horas extraordinárias e acréscimos ficam registados turno a turno e saem no resumo para o seu contabilista ou consultor laboral. Em caso de fiscalização, a documentação já está em ordem.',
      },
      {
        title: 'Gestão de vários locais sem chamadas',
        desc: 'Dezenas de locais, um único ecrã. Atribui os serviços, vê quem picou o ponto onde e recebe um aviso se um turno ficar aberto.',
      },
      {
        title: 'A sua equipa fica protegida',
        desc: 'Um relatório verificável dá também ao operador algo na mão contra acusações infundadas. Quem trabalha bem demonstra-o.',
      },
    ],
  },

  cosa_cambia: {
    title: 'O que muda de facto.',
    items: [
      {
        title: 'Já não precisa de confiar nos operadores.',
        desc: 'Não porque não sejam de confiança, mas porque não tem de o fazer. O sistema gera a prova no momento da intervenção, independentemente do que lhe dizem. O dado fica o que foi registado.',
      },
      {
        title: 'Já não precisa de se defender de viva voz.',
        desc: 'Deixe de explicar, justificar, lembrar. Quando um cliente contesta, abre o relatório e envia-o. Não é a sua palavra contra a dele. É um documento verificável.',
      },
      {
        title: 'Tem provas verificáveis. Sempre.',
        desc: 'Cada intervenção concluída torna-se automaticamente um relatório: localizações, fotos, horários e selo. Não tem de fazer nada de extra. O sistema fá-lo enquanto os seus operadores trabalham.',
      },
    ],
  },

  prova_visiva: {
    title: 'O que vê a sua equipa, o que vê o cliente.',
    subtitle: 'A app para quem trabalha no terreno. O relatório para quem tem de responder.',
  },

  cta_mid: {
    title: 'Quer ver como funciona num caso real?',
    body: 'Experimente num contrato real, desde o operador que abre a intervenção até ao relatório que o cliente recebe: 14 dias grátis, sem cartão de crédito.',
    cta: 'Começar teste gratuito de 14 dias',
  },

  testimonial: {
    quote:
      'Antes havia sempre algum cliente que contestava. Desde que usamos o GeoTapp, enviamos o relatório e a conversa muda logo: fala-se de dados, não de palavras. As discussões encurtam bastante.',
    author: 'Roberta M.',
    role: 'Responsável de operações, empresa de limpeza industrial - Norte de Itália',
  },

  trust: {
    title: 'Se um relatório nosso for alterado, vê-se. Mesmo que sejamos nós a fazê-lo.',
    body:
      'Os relatórios do GeoTapp são gerados pelo sistema no momento da intervenção. Depois de o relatório ser selado, corrigir uma hora ou mover uma foto quebra o selo, e a verificação assinala-o. Quem o recebe, cliente, inspetor ou consultor, pode verificá-lo por si próprio.',
    badge: 'Verificável por qualquer pessoa, sem acesso à sua conta',
  },

  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que nos perguntam com mais frequência antes de começar.',
    items: [
      {
        q: 'O GeoTapp é apenas uma app de picagem para empresas de limpeza?',
        a: 'Não. O GeoTapp é um sistema de prova verificável do trabalho, não apenas uma app de picagem. As apps de picagem registam uma hora. O GeoTapp produz um relatório selado com a localização, provas fotográficas e carimbo de data e hora, que o cliente pode verificar de forma autónoma. A diferença entre «está escrito» e «pode demonstrar-se».',
      },
      {
        q: 'É compatível com a convenção coletiva do meu setor?',
        a: 'O GeoTapp regista horários, pausas, horas extraordinárias e acréscimos, incluindo noturnos e feriados, e exporta-os em Excel ou CSV para o seu contabilista ou consultor laboral, que os aplica segundo a convenção coletiva em vigor na sua empresa. Em caso de fiscalização, tem toda a documentação pronta.',
      },
      {
        q: 'Como giro equipas distribuídas por vários locais em simultâneo?',
        a: 'Com o GeoTapp Flow tem um único ecrã para todos os locais. Vê quem picou o ponto onde assim que a picagem chega, atribui os serviços e recebe um aviso se um turno ficar aberto. Sem telefonemas, sem e-mails.',
      },
      {
        q: 'Como verifico se os operadores realizaram o trabalho?',
        a: 'Cada intervenção é aberta e fechada com a localização registada pelo telemóvel do operador. O operador envia as fotos de prova associadas ao serviço, com hora e localização. O relatório é gerado automaticamente e é selado no fecho: qualquer alteração vê-se.',
      },
      {
        q: 'O GeoTapp cumpre o RGPD na geolocalização dos trabalhadores?',
        a: 'O GeoTapp foi concebido para se manter dentro do RGPD e das indicações das autoridades de proteção de dados: regista a localização apenas quando o operador pica o ponto (entrada, pausas, saída) ou tira uma foto de prova, faz assinar a informação na app antes da primeira picagem e não recolhe dados desnecessários.',
      },
      {
        q: 'Funciona também para facility management e multisserviços?',
        a: 'Sim. O GeoTapp é usado por empresas de limpeza, multisserviços, facility management e qualquer organização com operadores distribuídos por vários locais. Serve desde uma equipa de poucas pessoas até uma empresa com centenas de operadores, sem configurações complexas.',
      },
      {
        q: 'Quanto custa o GeoTapp para uma empresa de limpeza?',
        a: 'O GeoTapp Flow custa a partir de 39 € por mês; os postos TimeTracker para os operadores custam 3 € por mês cada um até ao 25.º e 2,50 € a partir do 26.º. Subscrição com duração mínima de 12 meses. Antes pode experimentá-lo grátis durante 14 dias, sem cartão. IVA não incluído.',
      },
    ],
  },

  cta: {
    title: 'Os seus operadores trabalham bem. Faça com que se veja.',
    subtitle:
      'Todos os dias o trabalho é feito. O problema é que, sem provas verificáveis, quando alguém contesta fica a sua palavra contra a dele. O GeoTapp transforma cada intervenção em documentação para mostrar.',
    primary: 'Começar teste gratuito de 14 dias',
    secondary: 'Ver preços',
  },

  pricing_hint: {
    label: 'Postos TimeTracker desde',
    per: 'por operador por mês, mais o plano Flow desde 39 € por mês',
    note: 'Teste gratuito de 14 dias',
  },

  schema_sector_name: 'Empresas de limpeza',

  schema_faq: [
    {
      question: 'O GeoTapp é apenas uma app de picagem para empresas de limpeza?',
      answer: 'Não. O GeoTapp é a app e o software para empresas de limpeza e multisserviços que vai além da picagem: produz relatórios selados com localizações, fotos e horários, que o cliente verifica por si próprio: não um simples registo de horários.',
    },
    {
      question: 'É compatível com a convenção coletiva do meu setor?',
      answer: 'O GeoTapp regista horários, pausas, horas extraordinárias e acréscimos e exporta-os em Excel ou CSV para o seu contabilista ou consultor laboral, que os aplica segundo a convenção coletiva em vigor na sua empresa.',
    },
    {
      question: 'Como giro vários locais em simultâneo?',
      answer: 'Um único ecrã para todos os locais. Vê quem picou o ponto onde assim que a picagem chega, atribui os serviços e recebe um aviso se um turno ficar aberto, sem telefonemas.',
    },
    {
      question: 'Como documento que o trabalho foi realizado?',
      answer: 'Cada intervenção é aberta e fechada com a localização registada. O operador envia as fotos de prova associadas ao serviço. O relatório é gerado automaticamente e é selado no fecho: qualquer alteração vê-se.',
    },
    {
      question: 'O GeoTapp cumpre o RGPD na geolocalização dos trabalhadores?',
      answer: 'Concebido para se manter dentro do RGPD: regista a localização apenas quando o operador pica o ponto ou tira uma foto de prova, nunca de forma contínua, e faz assinar a informação na app antes da primeira picagem.',
    },
    {
      question: 'Funciona também para facility management e multisserviços?',
      answer: 'Sim. O GeoTapp serve para empresas de limpeza, multisserviços e facility management, desde uma equipa de poucas pessoas até uma empresa com centenas de operadores.',
    },
    {
      question: 'Quanto custa?',
      answer: 'O GeoTapp Flow desde 39 € por mês, mais os postos TimeTracker desde 3 € por operador por mês. Subscrição com duração mínima de 12 meses. Antes pode experimentá-lo grátis durante 14 dias, sem cartão. IVA não incluído.',
    },
  ],
};

export default content;
