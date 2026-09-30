import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para Instaladores: Intervenções com GPS | GeoTapp',
    description: 'Documente intervenções, horas e materiais, com a posição nas picagens. Provas de serviço automáticas, prontas para mostrar quando alguém contesta.',
  },
  hero: {
    badge: 'App para instaladores, técnicos de instalações e equipas de serviço',
    h1_line1: 'Cada intervenção documentada,',
    h1_line2: 'cada hora registada.',
    subtitle: 'Para instaladores elétricos, canalizadores, técnicos de aquecimento e técnicos de instalações. GeoTapp une Flow + TimeTracker para acompanhar GPS, horas e fotos por projeto, da carrinha ao escritório, sem telefonemas.',
    cta_primary: 'Experimente GeoTapp grátis durante 14 dias',
    cta_note: 'O teste não o obriga a nada. Não é preciso cartão de crédito.',
  },
  pain: {
    title: 'Problemas que resolvemos todos os dias',
    items: [
      {
        title: 'Os clientes contestam as horas de intervenção',
        desc: 'Picagens GPS com marca temporal como prova verificável. O dado é selado no momento da intervenção: qualquer alteração posterior é detetável.',
      },
      {
        title: 'Anda atrás dos técnicos para saber onde estão',
        desc: 'Cada picagem do técnico chega logo ao painel, com hora e posição. Fica a saber onde estiveram sem fazer um telefonema.',
      },
      {
        title: 'Relatórios incompletos ou nunca entregues',
        desc: 'Os dados chegam tarde, incompletos ou não chegam. Reconstruir horas e intervenções no fim do mês é um trabalho à parte que custa tempo e dinheiro.',
      },
    ],
  },
  workflow: {
    title: 'Como funciona',
    subtitle: 'Três passos simples. Zero papel. Zero chamadas.',
    steps: [
      {
        title: 'O técnico pica o ponto com GPS no início da intervenção',
        desc: 'Abra o projeto a partir do smartphone. GeoTapp regista as coordenadas GPS, a marca temporal e as fotos no momento da picagem: qualquer alteração é detetável.',
      },
      {
        title: 'As horas registam-se automaticamente por projeto',
        desc: 'Cada minuto trabalhado fica associado ao projeto certo. O responsável vê, picagem após picagem, quem está a trabalhar onde.',
      },
      {
        title: 'O relatório para o cliente é gerado sem escrever nada',
        desc: 'No fim da intervenção, o sistema gera um relatório com GPS, horas e selo. O cliente recebe-o e verifica-o de forma autónoma.',
      },
    ],
  },
  differenza: {
    title: 'App para instaladores: picagem ou prova verificável?',
    subtitle: 'A maioria das apps regista a hora. GeoTapp produz provas verificáveis.',
    rows: [
      {
        label: 'O que regista',
        competitor: 'Hora de entrada e saída',
        geotapp: 'Hora + posição na picagem + fotos + trabalho realizado',
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
        label: 'Relatório de intervenção',
        competitor: 'Manual ou inexistente',
        geotapp: 'Gerado automaticamente com GPS e fotos',
      },
      {
        label: 'Conformidade RGPD',
        competitor: 'Muitas vezes por verificar',
        geotapp: 'Construído para ficar dentro dos limites do RGPD, com modelos de documentação incluídos',
      },
    ],
  },
  prima_dopo: {
    title: 'O que acontece agora. O que acontece com GeoTapp.',
    prima: [
      'O cliente contesta a hora de fim da intervenção e pede um desconto.',
      'O técnico diz «fiz 4 horas». O cliente diz «constam 2».',
      'Não há provas. A discussão dura dias e o pagamento fica em risco.',
      'No fim do mês reconstrói horas e projetos a partir de mensagens de WhatsApp.',
    ],
    dopo: [
      'O cliente contesta? Abra o relatório: fotos, posição, horas, selo.',
      'Envia-lho. A discussão acaba num minuto.',
      'Tem uma prova para mostrar. O técnico também fica com algo em mãos.',
      'No fim do mês a exportação já está pronta, com horas e projetos agregados automaticamente.',
    ],
  },
  features: {
    title: 'Funcionalidades pensadas para instaladores e técnicos de instalações',
    items: [
      {
        title: 'Picagem GPS verificável',
        desc: 'Cada entrada, pausa e saída fica ligada a posição, hora e projeto. Para mostrar ao cliente ou à inspeção quando for preciso.',
      },
      {
        title: 'Provas fotográficas seladas',
        desc: 'O técnico tira fotos a partir da app. Cada imagem fica ligada à intervenção com GPS e marca temporal: qualquer alteração posterior à geração é detetável.',
      },
      {
        title: 'Gestão de projetos em várias obras',
        desc: 'Atribua projetos, acompanhe o andamento de cada intervenção e receba um aviso se um turno ficar aberto.',
      },
      {
        title: 'Relatórios digitais automáticos',
        desc: 'No fim da intervenção o relatório já está pronto: horas, fotos e notas. Sem papel, sem telefonemas. O escritório envia-o ao cliente a partir do Flow com um clique.',
      },
      {
        title: 'Exportação para salários e faturação',
        desc: 'Exporte presenças mensais e horas por projeto. Salários e faturação partem de dados já prontos, sem copiar nada.',
      },
      {
        title: 'Posição só quando se pica o ponto',
        desc: 'Geolocalização construída para ficar dentro dos limites do RGPD: nunca de forma contínua, e informação aos trabalhadores assinada na app antes de picar.',
      },
    ],
  },
  testimonial: {
    quote: 'Quando um cliente contesta as horas, abrimos o relatório com posição e fotos e ele verifica-o por si.',
    author: 'Roberto F.',
    role: 'Proprietário, empresa de instalações, 20 técnicos',
  },
  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que nos perguntam com mais frequência antes de começar.',
    items: [
      {
        q: 'Os clientes contestam as horas de intervenção?',
        a: 'Com GeoTapp, as picagens GPS ficam com marca temporal no momento da intervenção e qualquer alteração é detetável. São uma prova verificável das horas realizadas quando alguém as põe em dúvida.',
      },
      {
        q: 'Como acompanho várias equipas em projetos diferentes?',
        a: 'GeoTapp mostra no mapa as picagens de hoje, atualizadas a cada intervenção aberta ou fechada. Fica a saber em que projeto estão a trabalhar os seus técnicos, sem telefonar.',
      },
      {
        q: 'Como acelerar a faturação das intervenções?',
        a: 'GeoTapp gera automaticamente a exportação de horas e projetos pronta para o seu programa de gestão. Nada para copiar à mão: menos erros, e a faturação parte de dados já prontos.',
      },
    ],
  },
  cta: {
    title: 'Experimente GeoTapp grátis durante 14 dias',
    subtitle: 'O teste não o obriga a nada. Não é preciso cartão de crédito.',
    primary: 'Começar teste gratuito de 14 dias',
    secondary: 'Ver preços',
  },
  pricing_hint: {
    label: 'Postos TimeTracker desde',
    per: 'por operário e por mês, mais o plano Flow desde 39 € por mês',
    note: 'Teste gratuito de 14 dias',
  },
  schema_sector_name: 'Instalações',
  schema_faq: [
    {
      question: 'Os clientes contestam as horas de intervenção?',
      answer: 'Com GeoTapp, as picagens GPS ficam com marca temporal no momento da intervenção e qualquer alteração é detetável. São uma prova verificável das horas realizadas quando alguém as põe em dúvida.',
    },
    {
      question: 'Como acompanho várias equipas em projetos diferentes?',
      answer: 'GeoTapp mostra no mapa as picagens de hoje, atualizadas a cada intervenção aberta ou fechada. Fica a saber em que projeto estão a trabalhar os seus técnicos, sem telefonar.',
    },
    {
      question: 'Como acelerar a faturação das intervenções?',
      answer: 'GeoTapp gera automaticamente a exportação de horas e projetos pronta para o seu programa de gestão. Nada para copiar à mão: menos erros, e a faturação parte de dados já prontos.',
    },
  ],
};

export default content;
