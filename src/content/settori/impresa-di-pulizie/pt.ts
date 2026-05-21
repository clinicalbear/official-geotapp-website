import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para Empresa de Limpeza: Gestão GPS de Equipas & Prova de Serviço | GeoTapp',
    description:
      'Gerencie equipas de limpeza, turnos e presenças com GPS em tempo real. Provas automáticas de serviço, zero disputas com clientes. App conforme com RGPD.',
  },

  hero: {
    badge: 'App para empresas de limpeza e multiservicos',
    h1_line1: 'A sua empresa de limpeza,',
    h1_line2: 'gerida em tempo real.',
    subtitle:
      'Registos GPS, provas de serviço automáticas e gestão de turnos numa só app. Sem folhas de cálculo, sem disputas. O cliente contesta? Envie o relatório e a discussão acaba.',
    cta_primary: 'Experimente GeoTapp grátis durante 14 dias',
    cta_note: 'Sem compromisso. Sem cartão de crédito.',
  },

  pain: {
    title: 'Problemas que resolvemos todos os dias',
    items: [
      {
        title: 'Os clientes contestam as horas trabalhadas?',
        desc: 'Cada registo é verificado por GPS e com carimbo temporal. Envie o relatório e a discussão termina em trinta segundos.',
      },
      {
        title: 'As folhas de presença em papel são pouco fiáveis?',
        desc: 'Registo automático a partir do smartphone, sem introduções manuais. O dado é o que é — e não se pode alterar.',
      },
      {
        title: 'Difícil coordenar várias equipas?',
        desc: 'Veja onde estão todos em tempo real, em todas as sedes, a partir de um único painel. Sem telefonemas.',
      },
    ],
  },

  prima_dopo: {
    title: 'O que acontece agora. O que acontece com GeoTapp.',
    prima: [
      'O cliente liga e diz que a casa de banho não foi limpa.',
      'O operador diz "Fiz isso". O cliente diz "Não fez".',
      'Não tem nada em mãos para provar coisa alguma.',
      'A discussão arrasta-se durante dias. Às vezes perde o contrato.',
    ],
    dopo: [
      'O cliente liga e diz que a casa de banho não foi limpa.',
      'Abre o relatório da intervenção: foto da casa de banho limpa, hora, GPS.',
      'Envia-o. A discussão termina em trinta segundos.',
      'O contrato está seguro. O operador está protegido.',
    ],
  },

  workflow: {
    title: 'Como funciona',
    subtitle: 'Três passos simples. Zero papel. Zero chamadas.',
    steps: [
      {
        title: 'O operador regista com GPS',
        desc: 'Abre e fecha o turno a partir do smartphone. GeoTapp regista coordenadas GPS reais, fotos e carimbo temporal — tudo automático e inalterável.',
      },
      {
        title: 'O responsável vê tudo em tempo real',
        desc: 'Um painel para todas as sedes. Sabe exatamente quem está em cada local, onde e desde quando — sem andar atrás de ninguém.',
      },
      {
        title: 'O relatório está pronto automaticamente',
        desc: 'No final do turno, o sistema gera um relatório selado com GPS, fotos e assinatura digital. Envie ao cliente — verificável de forma autónoma.',
      },
    ],
  },

  differenza: {
    title: 'Registo de ponto vs Prova de serviço.',
    subtitle: 'A maioria das apps regista horários. GeoTapp produz provas para o seu cliente.',
    rows: [
      {
        label: 'O que regista',
        competitor: 'Hora de entrada/saída',
        geotapp: 'Hora + GPS verificado + fotos + tarefas realizadas',
      },
      {
        label: 'Quem pode verificar',
        competitor: 'Apenas o seu escritório',
        geotapp: 'Você, o cliente, um terceiro — de forma independente',
      },
      {
        label: 'Em caso de disputa',
        competitor: 'Dados não defensáveis',
        geotapp: 'Relatório selado, inalterável',
      },
      {
        label: 'Prova fotográfica',
        competitor: 'Ausente ou desligada',
        geotapp: 'Anexada ao relatório com carimbo temporal e GPS',
      },
      {
        label: 'Conformidade RGPD',
        competitor: 'Frequentemente por verificar',
        geotapp: 'Conforme por design, formulários incluídos',
      },
    ],
  },

  features: {
    title: 'App para empresa de limpeza: provas de serviço, não apenas registos de ponto.',
    items: [
      {
        title: 'Provas de serviço automáticas',
        desc: 'Cada intervenção concluída gera um relatório com GPS, fotos e carimbo temporal. O cliente recebe-o e verifica de forma autónoma.',
      },
      {
        title: 'Controlo real em todas as sedes',
        desc: 'Veja em tempo real quem está ativo onde, em todos os edifícios simultaneamente. Sem telefonemas, sem emails.',
      },
      {
        title: 'Relatórios defensáveis em qualquer âmbito',
        desc: 'Cada relatório é assinado digitalmente e inalterável. Válido perante um cliente, um inspetor ou um advogado.',
      },
      {
        title: 'Gestão de turnos e equipas',
        desc: 'Atribua turnos, gerencie encomendas e receba alertas automáticos se uma intervenção não for aberta ou encerrada a tempo.',
      },
      {
        title: 'Documentação fotográfica',
        desc: 'Os operadores tiram fotos diretamente da app. Cada imagem é georreferenciada com carimbo temporal — prova visual do trabalho realizado.',
      },
      {
        title: 'O seu pessoal está protegido',
        desc: 'Um relatório verificável protege também o operador contra acusações infundadas. O bom trabalho é provado pelos dados.',
      },
    ],
  },

  testimonial: {
    quote:
      'Desde que usamos GeoTapp, as disputas com clientes resolvem-se em um minuto. Enviamos o relatório com fotos e GPS, e a discussão termina aí. Não perdemos nenhum contrato em um ano.',
    author: 'Rosa M.',
    role: 'Proprietária, empresa de limpeza industrial — Portugal',
  },

  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que nos perguntam mais frequentemente antes de começar.',
    items: [
      {
        q: 'Como funciona o registo GPS para empresas de limpeza?',
        a: 'O operador regista entrada e saída a partir do smartphone. GeoTapp regista as coordenadas GPS nesse momento — não introduzidas manualmente. Cada registo é certificado com carimbo temporal e posição verificável pelo cliente.',
      },
      {
        q: 'Posso provar ao cliente que o serviço foi realizado?',
        a: 'Sim. GeoTapp gera automaticamente um relatório selado com GPS, fotos e carimbo temporal no final de cada intervenção. O cliente recebe-o e verifica de forma autónoma.',
      },
      {
        q: 'GeoTapp é compatível com o RGPD para geolocalização de colaboradores?',
        a: 'Sim. GeoTapp só geolocaliza durante o horário de trabalho ativo, inclui formulários de informação ao colaborador e não recolhe dados desnecessários.',
      },
      {
        q: 'Como gerir equipas em várias sedes ao mesmo tempo?',
        a: 'Com GeoTapp Flow tem um painel único para todas as sedes. Veja em tempo real quem está ativo onde, atribua encomendas e receba alertas automáticos.',
      },
      {
        q: 'As folhas de presença em papel ainda são necessárias?',
        a: 'Não. GeoTapp substitui completamente as folhas de presença por registo GPS automático a partir de smartphones. Os dados são exportáveis para processamento de salários.',
      },
      {
        q: 'Quanto custa GeoTapp para uma empresa de limpeza?',
        a: 'Os planos começam a partir de poucos euros por operador por mês. Experimente grátis durante 14 dias — sem compromisso.',
      },
    ],
  },

  cta: {
    title: 'Os seus operadores trabalham bem. Faça com que o cliente veja.',
    subtitle:
      'Cada intervenção torna-se prova de serviço verificável. Zero disputas, zero contratos perdidos.',
    primary: 'Comece grátis agora!',
    secondary: 'Ver Preços',
  },

  pricing_hint: {
    label: 'A partir de',
    per: 'operador/mês',
    note: 'Teste grátis de 14 dias',
  },

  schema_sector_name: 'Empresa de Limpeza',

  schema_faq: [
    {
      question: 'Como funciona o registo GPS para empresas de limpeza?',
      answer:
        'O operador regista a partir do smartphone. GeoTapp regista coordenadas GPS — não introduzidas manualmente. Cada registo é certificado com carimbo temporal e posição verificável pelo cliente.',
    },
    {
      question: 'Posso provar ao cliente que o serviço foi realizado?',
      answer:
        'Sim. GeoTapp gera automaticamente um relatório selado com GPS, fotos e carimbo temporal. O cliente recebe-o e verifica de forma autónoma.',
    },
    {
      question: 'GeoTapp é compatível com o RGPD para geolocalização de colaboradores?',
      answer:
        'Sim. GeoTapp só geolocaliza durante o horário de trabalho ativo, inclui formulários de informação ao colaborador e não recolhe dados desnecessários.',
    },
  ],
};

export default content;
