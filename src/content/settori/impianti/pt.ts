import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para Instaladores e Técnicos: Rastreamento GPS de Intervenções | GeoTapp',
    description: 'Controle intervenções, horas e materiais para instaladores de AVAC, eletricistas e canalizadores com GPS. Provas de serviço automáticas, zero disputas com clientes. Experimente GeoTapp grátis.',
  },
  hero: {
    badge: 'App para instaladores, técnicos e equipas de serviço',
    h1_line1: 'Cada intervenção documentada,',
    h1_line2: 'cada hora registada.',
    subtitle: 'Para instaladores elétricos, canalizadores, técnicos de AVAC e especialistas em instalações. GeoTapp liga Flow + TimeTracker para registar GPS, horas e fotos por projeto, da carrinha ao escritório sem chamadas.',
    cta_primary: 'Experimente GeoTapp grátis durante 14 dias',
    cta_note: 'Sem compromisso. Sem cartão de crédito.',
  },
  pain: {
    title: 'Problemas que resolvemos todos os dias',
    items: [
      {
        title: 'Os clientes contestam as horas trabalhadas',
        desc: 'Registos GPS com marca temporal como prova irrefutável. Os dados são certificados no momento da intervenção, não editáveis depois.',
      },
      {
        title: 'Perseguir técnicos para saber onde estão',
        desc: 'Mapa em tempo real com o estado de cada intervenção. Sabe onde estão todos os seus técnicos sem fazer uma única chamada.',
      },
      {
        title: 'Relatórios incompletos ou nunca entregues',
        desc: 'Os dados chegam tarde, incompletos ou não chegam. Reconstruir horas e intervenções no final do mês é um trabalho à parte que custa tempo e dinheiro.',
      },
    ],
  },
  workflow: {
    title: 'Como funciona',
    subtitle: 'Três passos simples. Zero papel. Zero chamadas.',
    steps: [
      {
        title: 'O técnico regista por GPS no início da intervenção',
        desc: 'Abre o projeto a partir do smartphone. GeoTapp regista coordenadas GPS reais, marca temporal e fotos, totalmente automático, à prova de manipulação.',
      },
      {
        title: 'As horas registam-se automaticamente por projeto',
        desc: 'Cada minuto trabalhado é associado ao projeto correto. O responsável vê em tempo real quem está a trabalhar onde.',
      },
      {
        title: 'O relatório para o cliente é gerado sem digitar nada',
        desc: 'No final da intervenção, o sistema gera um relatório com GPS, horas e assinatura digital. O cliente recebe-o e verifica-o de forma autónoma.',
      },
    ],
  },
  differenza: {
    title: 'App para instaladores: registo de horas ou certificação?',
    subtitle: 'A maioria das apps regista a hora. GeoTapp produz provas verificáveis.',
    rows: [
      {
        label: 'O que regista',
        competitor: 'Hora de entrada/saída',
        geotapp: 'Hora + GPS verificado + fotos + trabalho realizado',
      },
      {
        label: 'Quem pode verificar',
        competitor: 'Apenas o seu escritório',
        geotapp: 'Você, o cliente, um terceiro, de forma independente',
      },
      {
        label: 'Em caso de disputa',
        competitor: 'Dados não defensáveis',
        geotapp: 'Relatório selado, à prova de manipulação',
      },
      {
        label: 'Relatório de intervenção',
        competitor: 'Manual ou inexistente',
        geotapp: 'Gerado automaticamente com GPS e fotos',
      },
      {
        label: 'Conformidade RGPD',
        competitor: 'Frequentemente duvidosa',
        geotapp: 'Conforme por design, formulários incluídos',
      },
    ],
  },
  prima_dopo: {
    title: 'O que acontece agora. O que acontece com GeoTapp.',
    prima: [
      'O cliente contesta a hora de fim e pede um desconto.',
      'O técnico diz "trabalhei 4 horas". O cliente diz "só constam 2".',
      'Não tem provas. A discussão dura dias e o pagamento está em risco.',
      'No final do mês reconstrói horas e projetos a partir de mensagens WhatsApp.',
    ],
    dopo: [
      'O cliente contesta? Abre o relatório: fotos, GPS, hora, assinatura digital.',
      'Envia-o. A disputa acaba num minuto.',
      'O pagamento está seguro. O técnico está protegido.',
      'No final do mês a exportação já está pronta, horas e projetos agregados automaticamente.',
    ],
  },
  features: {
    title: 'Funcionalidades pensadas para instaladores e equipas de serviço',
    items: [
      {
        title: 'Registo GPS verificável',
        desc: 'Cada entrada e saída está ligada a localização, marca temporal e projeto. Defensável perante clientes e inspetores.',
      },
      {
        title: 'Provas fotográficas seladas',
        desc: 'O técnico tira fotos a partir da app. Cada imagem está ligada à intervenção com GPS e marca temporal, à prova de manipulação após geração.',
      },
      {
        title: 'Gestão multi-sede de projetos',
        desc: 'Atribua projetos, acompanhe o progresso em todas as sedes e receba alertas automáticos se um trabalho não for aberto ou fechado a tempo.',
      },
      {
        title: 'Relatórios digitais automáticos',
        desc: 'No final da intervenção o relatório está pronto: horas, fotos, notas e assinatura. Sem papel, sem chamadas. O técnico envia-o ao cliente a partir da app.',
      },
      {
        title: 'Exportação para salários e faturação',
        desc: 'Exporte presenças mensais e horas por projeto. Processamento salarial e faturação passam a ser questão de minutos.',
      },
      {
        title: 'Conformidade RGPD integrada',
        desc: 'Geolocalização conforme por design com a regulamentação RGPD. Modelos de aviso de privacidade para funcionários incluídos.',
      },
    ],
  },
  testimonial: {
    quote: 'Os clientes já não contestam as horas. Abrimos o relatório com GPS e fotos e a discussão acaba ali.',
    author: 'Roberto F.',
    role: 'Proprietário, empresa de instalações, 20 técnicos',
  },
  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que nos perguntam mais antes de começar.',
    items: [
      {
        q: 'Os clientes contestam as horas de intervenção?',
        a: 'Com GeoTapp, os registos GPS são marcados no momento da intervenção e não são editáveis. Constituem prova irrefutável das horas trabalhadas, eliminando qualquer disputa.',
      },
      {
        q: 'Como monitorizo várias equipas em projetos diferentes?',
        a: 'GeoTapp oferece um mapa em tempo real com o estado de cada intervenção. Sabe exatamente onde estão os seus técnicos e em que projeto trabalham, sem fazer chamadas.',
      },
      {
        q: 'Como acelero a faturação de intervenções concluídas?',
        a: 'GeoTapp gera automaticamente a exportação de horas e projetos pronta para o seu software de contabilidade. Sem inserção manual, sem risco de erros, a faturação passa a um clique.',
      },
    ],
  },
  cta: {
    title: 'Experimente GeoTapp grátis durante 14 dias',
    subtitle: 'Sem compromisso. Sem cartão de crédito. Resposta em 12 horas úteis.',
    primary: 'Começar gratuitamente',
    secondary: 'Ver preços',
  },
  pricing_hint: {
    label: 'A partir de',
    per: 'técnico/mês',
    note: 'Teste gratuito de 14 dias',
  },
  schema_sector_name: 'Instalações',
  schema_faq: [
    {
      question: 'Os clientes contestam as horas de intervenção?',
      answer: 'Com GeoTapp, os registos GPS são marcados no momento da intervenção e não são editáveis. Constituem prova irrefutável das horas trabalhadas, eliminando qualquer disputa.',
    },
    {
      question: 'Como monitorizo várias equipas em projetos diferentes?',
      answer: 'GeoTapp oferece um mapa em tempo real com o estado de cada intervenção. Sabe exatamente onde estão os seus técnicos e em que projeto trabalham, sem fazer chamadas.',
    },
    {
      question: 'Como acelero a faturação de intervenções concluídas?',
      answer: 'GeoTapp gera automaticamente a exportação de horas e projetos pronta para o seu software de contabilidade. Sem inserção manual, sem risco de erros, a faturação passa a um clique.',
    },
  ],
};

export default content;
