import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para Obras: Presenças GPS e Gestão de Equipas | GeoTapp',
    description: 'Gira presenças, turnos e segurança em obra com picagens GPS. Relatórios selados e automáticos, pensados para o RGPD, para empresas de construção.',
  },
  hero: {
    badge: 'App para empresas de construção e obras',
    h1_line1: 'A sua obra documentada,',
    h1_line2: 'a cada picagem.',
    subtitle: 'Picagens com posição, gestão de equipas e relatórios selados automáticos. Zero papel, e quando alguém contesta tem uma prova para mostrar. GeoTapp une Flow + TimeTracker para quem gere obras, subempreiteiros e fiscalização.',
    cta_primary: 'Experimente numa obra real',
    cta_note: '14 dias, até 50 operacionais no terreno, sem cartão de crédito.',
  },
  pain: {
    title: 'Problemas que resolvemos todos os dias',
    items: [
      {
        title: 'Quem esteve em obra e quando?',
        desc: 'Cada picagem regista a hora e a posição captadas pelo telemóvel nesse momento, não inseridas à mão, e segue para o relatório selado que a fiscalização pode verificar.',
      },
      {
        title: 'Como gere os subempreiteiros?',
        desc: 'Registe as presenças de todas as equipas, incluindo os subempreiteiros, a partir de um único painel atualizado a cada picagem.',
      },
      {
        title: 'Os relatórios de obra demoram horas?',
        desc: 'Gerados automaticamente com GPS, horas e presenças. Prontos para a fiscalização e para os autos de medição, sem qualquer inserção manual.',
      },
    ],
  },
  workflow: {
    title: 'Como funciona',
    subtitle: 'Três passos simples. Zero papel. Zero chamadas.',
    steps: [
      {
        title: 'O operário pica o ponto à entrada da obra',
        desc: 'Abra o turno a partir do smartphone. GeoTapp regista a hora e a posição nesse momento e, se for preciso, as fotos de prova. Entre uma picagem e outra não regista nada automaticamente.',
      },
      {
        title: 'O diretor de obra vê as picagens assim que chegam',
        desc: 'Um único painel para todas as equipas e todas as obras. Quem picou, onde e a que horas, sem andar atrás de ninguém ao telefone.',
      },
      {
        title: 'O relatório está pronto para autos de medição e fiscalização',
        desc: 'No fim do dia ou da empreitada, o sistema gera um relatório selado com presenças, GPS e horas. Pronto para a fiscalização sem um minuto de trabalho manual.',
      },
    ],
  },
  differenza: {
    title: 'App de obra: picagem ou prova verificável?',
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
        geotapp: 'A própria empresa, a fiscalização ou um terceiro, de forma autónoma',
      },
      {
        label: 'Em caso de contestação',
        competitor: 'Apenas a sua palavra',
        geotapp: 'Relatório selado, qualquer alteração é detetável',
      },
      {
        label: 'Relatório de obra',
        competitor: 'Manual ou inexistente',
        geotapp: 'Gerado automaticamente com GPS e presenças',
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
      'A fiscalização pergunta quem esteve em obra na terça-feira. Ninguém sabe ao certo.',
      'As folhas de presença chegam incompletas, atrasadas ou ilegíveis.',
      'O subempreiteiro contesta as horas. Não há provas.',
      'Prepara o auto de medição à mão, reconstruindo os dados a partir de mensagens de WhatsApp.',
    ],
    dopo: [
      'A fiscalização pergunta quem esteve em obra na terça-feira. Abra as picagens desse dia: está tudo lá.',
      'As presenças ficam registadas a cada picagem, com hora e posição.',
      'O subempreiteiro contesta? Mostra o relatório selado.',
      'O auto de medição já está pronto: horas, presenças e GPS agregados automaticamente.',
    ],
  },
  features: {
    title: 'Funcionalidades pensadas para a obra',
    items: [
      {
        title: 'Presenças GPS seladas',
        desc: 'Cada entrada, pausa e saída da obra fica registada com posição e hora. Para mostrar à fiscalização, ao dono de obra e à inspeção quando for preciso.',
      },
      {
        title: 'Painel multiobra',
        desc: 'Acompanhe várias obras a partir de um único ecrã: em cada obra vê quem picou, onde e a que horas, assim que a picagem chega.',
      },
      {
        title: 'Relatórios automáticos para autos de medição',
        desc: 'O sistema gera relatórios com presenças, horas e GPS agregados. Prontos para os autos de medição e para a fiscalização, sem inserções manuais.',
      },
      {
        title: 'Controlo de subempreiteiros',
        desc: 'Cada equipa, interna ou externa, pica o ponto a partir do smartphone. O diretor de obra vê todos num único painel, sem andar atrás de ninguém.',
      },
      {
        title: 'Provas fotográficas seladas',
        desc: 'Os operários tiram fotos a partir da app. Cada imagem fica ligada à obra com GPS e marca temporal: qualquer alteração posterior é detetável.',
      },
      {
        title: 'Posição só quando se pica o ponto',
        desc: 'Geolocalização construída para ficar dentro dos limites do RGPD: posição só quando se pica o ponto, nunca de forma contínua, e informação aos trabalhadores assinada na app antes de picar.',
      },
    ],
  },
  testimonial: {
    quote: 'Desde que usamos GeoTapp, a fiscalização já não nos pede as folhas de presença. Abrimos o relatório e o auto de medição já está pronto.',
    author: 'José M.',
    role: 'Proprietário, empresa de construção, 35 funcionários',
  },
  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que nos perguntam com mais frequência antes de começar.',
    items: [
      {
        q: 'Quem esteve em obra e quando?',
        a: 'Cada picagem regista a hora e a posição captadas pelo telemóvel nesse momento, não inseridas à mão, e segue para o relatório selado que a fiscalização pode verificar.',
      },
      {
        q: 'Como gere os subempreiteiros em obra?',
        a: 'GeoTapp regista as presenças de todas as equipas, incluindo os subempreiteiros. Cada operário pica o ponto no seu próprio smartphone e o diretor de obra vê as picagens assim que chegam, num único painel.',
      },
      {
        q: 'Os relatórios de obra exigem horas de trabalho manual?',
        a: 'Não. GeoTapp gera os relatórios automaticamente com GPS, horas e presenças. Estão prontos para a fiscalização e para os autos de medição, sem qualquer inserção manual.',
      },
    ],
  },
  cta: {
    title: 'Experimente GeoTapp grátis durante 14 dias',
    subtitle: 'O teste não o obriga a nada. Sem cartão de crédito.',
    primary: 'Começar teste gratuito de 14 dias',
    secondary: 'Ver preços',
  },
  pricing_hint: {
    label: 'Postos TimeTracker desde',
    per: 'por operário e por mês, mais o plano Flow desde 39 € por mês',
    note: 'Teste gratuito de 14 dias',
  },
  schema_sector_name: 'Construção',
  schema_faq: [
    {
      question: 'Quem esteve em obra e quando?',
      answer: 'Cada picagem regista a hora e a posição captadas pelo telemóvel nesse momento, não inseridas à mão, e segue para o relatório selado que a fiscalização pode verificar.',
    },
    {
      question: 'Como gere os subempreiteiros em obra?',
      answer: 'GeoTapp regista as presenças de todas as equipas, incluindo os subempreiteiros. Cada operário pica o ponto no seu próprio smartphone e o diretor de obra vê as picagens assim que chegam, num único painel.',
    },
    {
      question: 'Os relatórios de obra exigem horas de trabalho manual?',
      answer: 'Não. GeoTapp gera os relatórios automaticamente com GPS, horas e presenças. Estão prontos para a fiscalização e para os autos de medição, sem qualquer inserção manual.',
    },
  ],
};

export default content;
