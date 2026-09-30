import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para Empresas de Limpeza: Equipas com GPS | GeoTapp',
    description:
      'Gira equipas, turnos e presenças com picagens GPS. Provas de serviço automáticas para quando um cliente contesta. App pensada para o RGPD.',
  },

  hero: {
    badge: 'App para empresas de limpeza e multisserviços',
    h1_line1: 'A sua empresa de limpeza,',
    h1_line2: 'gerida, picagem após picagem.',
    subtitle:
      'Picagens GPS, provas de serviço automáticas e gestão de turnos numa só app. Zero Excel, menos contestações. O cliente contesta? Envie o relatório em vez de discutir de viva voz.',
    cta_primary: 'Experimente num contrato real',
    cta_note: '14 dias, até 50 operacionais no terreno, sem cartão de crédito.',
  },

  pain: {
    title: 'Problemas que resolvemos todos os dias',
    items: [
      {
        title: 'Os clientes contestam as horas trabalhadas?',
        desc: 'Cada picagem regista a posição e a hora. Envie o relatório e o cliente pode verificá-lo por si.',
      },
      {
        title: 'As folhas de presença em papel não são fiáveis?',
        desc: 'Picagens a partir do smartphone, sem inserir nada à mão. O dado fica tal como foi registado: qualquer alteração é detetável.',
      },
      {
        title: 'É difícil coordenar várias equipas?',
        desc: 'Vê quem picou o ponto, e onde, em todos os locais, a partir de um único painel. Sem telefonemas.',
      },
    ],
  },

  prima_dopo: {
    title: 'O que acontece agora. O que acontece com GeoTapp.',
    prima: [
      'O cliente liga e diz que a casa de banho não foi limpa.',
      'O operador diz «fiz». O cliente diz «não fez».',
      'Não tem nada em mãos para provar coisa alguma.',
      'A discussão dura dias. Às vezes perde o contrato.',
    ],
    dopo: [
      'O cliente liga e diz que a casa de banho não foi limpa.',
      'Abra o relatório do serviço: foto da casa de banho limpa, hora, posição.',
      'Envia-lho, e ele verifica por si.',
      'Tem algo para mostrar. O operador também.',
    ],
  },

  workflow: {
    title: 'Como funciona',
    subtitle: 'Três passos simples. Zero papel. Zero chamadas.',
    steps: [
      {
        title: 'O operador pica o ponto no local',
        desc: 'Abra e fecha o turno a partir do smartphone. GeoTapp regista a posição e a hora nesse momento e, se for preciso, fotos de prova. Entre uma picagem e outra não regista nada automaticamente.',
      },
      {
        title: 'O responsável vê cada picagem assim que chega',
        desc: 'Um único painel para todos os locais. Vê quem picou, onde e a que horas, sem andar atrás de ninguém.',
      },
      {
        title: 'O relatório fica pronto automaticamente',
        desc: 'No fim do turno, o sistema gera um relatório selado com GPS, fotos e selo criptográfico. Envie-o ao cliente, que pode verificá-lo de forma autónoma.',
      },
    ],
  },

  differenza: {
    title: 'Picagem ou prova de serviço.',
    subtitle: 'A maioria das apps regista horários. GeoTapp produz provas para o seu cliente.',
    rows: [
      {
        label: 'O que regista',
        competitor: 'Hora de entrada e saída',
        geotapp: 'Hora + posição na picagem + fotos + tarefas realizadas',
      },
      {
        label: 'Quem pode verificar',
        competitor: 'Apenas o seu escritório',
        geotapp: 'A própria empresa, o cliente ou um terceiro, de forma autónoma',
      },
      {
        label: 'Em caso de contestação',
        competitor: 'Apenas a sua palavra',
        geotapp: 'Relatório selado, qualquer alteração é detetável',
      },
      {
        label: 'Prova fotográfica',
        competitor: 'Ausente ou desligada',
        geotapp: 'Anexada ao relatório com marca temporal e GPS',
      },
      {
        label: 'Conformidade RGPD',
        competitor: 'Muitas vezes por verificar',
        geotapp: 'Construído para ficar dentro dos limites do RGPD, com modelos de documentação incluídos',
      },
    ],
  },

  features: {
    title: 'App para empresas de limpeza: provas de serviço, não só picagens.',
    items: [
      {
        title: 'Provas de serviço automáticas',
        desc: 'Cada serviço encerrado gera um relatório com GPS, fotos e marca temporal. O cliente recebe-o e verifica-o por si, sem acesso ao seu sistema.',
      },
      {
        title: 'Visão clara de todos os locais',
        desc: 'Vê quem picou o ponto, e onde, em todos os edifícios, à medida que cada picagem chega. Sem telefonemas, sem emails. Entre uma picagem e outra não se regista nada automaticamente.',
      },
      {
        title: 'Relatórios que qualquer pessoa pode verificar',
        desc: 'Cada relatório está selado e qualquer alteração é detetável. Um cliente, um inspetor ou um advogado pode verificá-lo de forma autónoma.',
      },
      {
        title: 'Gestão de turnos e equipas',
        desc: 'Atribua turnos, gira contratos e receba um aviso se um turno ficar aberto.',
      },
      {
        title: 'Documentação fotográfica',
        desc: 'Os operadores tiram fotos diretamente a partir da app. Cada imagem leva a hora e a posição: uma prova visual do trabalho realizado.',
      },
      {
        title: 'O seu pessoal fica protegido',
        desc: 'Um relatório verificável dá também ao operador com que responder a acusações infundadas. Quem trabalha bem demonstra-o com dados.',
      },
    ],
  },

  testimonial: {
    quote:
      'Quando um cliente contesta um serviço, enviamos o relatório com fotos e posição e ele verifica-o por si.',
    author: 'Rosa M.',
    role: 'Proprietária, empresa de limpeza',
  },

  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que nos perguntam com mais frequência antes de começar.',
    items: [
      {
        q: 'Como funciona a picagem GPS para empresas de limpeza?',
        a: 'O operador pica a entrada e a saída a partir do smartphone. GeoTapp regista a posição GPS nesse momento, sem ser inserida à mão. Cada picagem consta do relatório selado com marca temporal e posição, que o cliente pode verificar.',
      },
      {
        q: 'Posso provar ao cliente que o serviço foi realizado?',
        a: 'Sim. GeoTapp gera automaticamente um relatório selado com GPS, fotos e marca temporal no fim de cada serviço. O cliente recebe-o e verifica-o por si, sem acesso ao seu sistema.',
      },
      {
        q: 'GeoTapp está pensado para ficar dentro do RGPD na geolocalização dos trabalhadores?',
        a: 'GeoTapp foi construído para ficar dentro dos limites das regras de proteção de dados: regista a posição só quando o operador pica o ponto (início, pausa, fim) ou tira uma foto de prova, faz assinar aos trabalhadores a informação na app antes da primeira picagem e não recolhe dados desnecessários. Entre uma picagem e outra não se regista nada automaticamente.',
      },
      {
        q: 'Como giro equipas distribuídas por vários locais ao mesmo tempo?',
        a: 'Com GeoTapp Flow tem um único painel para todos os locais. Vê quem picou o ponto e onde, pode atribuir contratos e receber um aviso se um turno ficar aberto.',
      },
      {
        q: 'As folhas de presença em papel ainda são necessárias?',
        a: 'Não. GeoTapp substitui as folhas de presença em papel por picagens a partir do smartphone. Os dados são exportáveis em Excel ou CSV para o processamento salarial.',
      },
      {
        q: 'Quanto custa GeoTapp para uma empresa de limpeza?',
        a: 'GeoTapp Flow começa em 39 € por mês; cada operador com a app TimeTracker custa mais 3 € por mês (2,50 € a partir do 26.º posto). A subscrição tem a duração mínima de 12 meses. Os preços não incluem IVA. Pode experimentar grátis durante 14 dias, sem cartão de crédito.',
      },
      {
        q: 'GeoTapp faz seguimento GPS dos operadores?',
        a: 'Não há seguimento contínuo. O operador pica a entrada e a saída a partir do smartphone e cada picagem fica ligada a uma posição GPS e a uma marca temporal, registadas nesse momento (início, pausa, fim) e quando se tira uma foto de prova. É uma posição para demonstrar a presença, não vigilância: entre uma picagem e outra não se regista nada automaticamente, e a app não pede permissão de localização em segundo plano.',
      },
    ],
  },

  cta: {
    title: 'Os seus operadores trabalham bem. Faça com que o cliente o veja.',
    subtitle:
      'Cada serviço torna-se um relatório que pode mostrar e que o cliente pode verificar por si.',
    primary: 'Começar teste gratuito de 14 dias',
    secondary: 'Ver preços',
  },

  pricing_hint: {
    label: 'Postos TimeTracker desde',
    per: 'por operador e por mês, mais o plano Flow desde 39 € por mês (IVA não incluído)',
    note: 'Teste gratuito de 14 dias',
  },

  schema_sector_name: 'Empresa de limpeza',

  schema_faq: [
    {
      question: 'Como funciona a picagem GPS para empresas de limpeza?',
      answer:
        'O operador pica a entrada e a saída a partir do smartphone. GeoTapp regista a posição GPS nesse momento, sem ser inserida à mão. Cada picagem consta do relatório selado com marca temporal e posição, que o cliente pode verificar.',
    },
    {
      question: 'Posso provar ao cliente que o serviço foi realizado?',
      answer:
        'Sim. GeoTapp gera automaticamente um relatório selado com GPS, fotos e marca temporal. O cliente recebe-o e verifica-o por si.',
    },
    {
      question: 'GeoTapp está pensado para ficar dentro do RGPD na geolocalização dos trabalhadores?',
      answer:
        'GeoTapp foi construído para ficar dentro dos limites das regras de proteção de dados: regista a posição só quando o operador pica o ponto (início, pausa, fim) ou tira uma foto de prova, faz assinar aos trabalhadores a informação na app antes da primeira picagem e não recolhe dados desnecessários. Entre uma picagem e outra não se regista nada automaticamente.',
    },
    {
      question: 'GeoTapp faz seguimento GPS dos operadores?',
      answer:
        'Não há seguimento contínuo. O operador pica a entrada e a saída a partir do smartphone e cada picagem fica ligada a uma posição GPS e a uma marca temporal, registadas nesse momento (início, pausa, fim) e quando se tira uma foto de prova. Entre uma picagem e outra não se regista nada automaticamente.',
    },
  ],
};

export default content;
