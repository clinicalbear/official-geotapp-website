import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App de manutenção: equipas e intervenções com GPS | GeoTapp',
    description:
      'Giro equipas de manutenção com GPS: intervenções, turnos, provas de serviço. Histórico completo por instalação ou local do cliente. Experimente o GeoTapp grátis.',
  },

  hero: {
    badge: 'App para equipas de manutenção',
    h1_line1: 'A sua equipa de manutenção,',
    h1_line2: 'cada visita documentada.',
    subtitle:
      'Registe as intervenções, planeie os turnos e documente cada visita com a localização na picagem e as fotos de prova. Histórico completo por instalação e por cliente, sem qualquer introdução manual.',
    cta_primary: 'Experimente o GeoTapp grátis durante 14 dias',
    cta_note: 'O teste não o obriga a nada. Não é pedido cartão de crédito.',
  },

  pain: {
    title: 'Problemas que resolvemos todos os dias',
    items: [
      {
        title: 'Como documenta as intervenções periódicas?',
        desc: 'Relatório automático com GPS, horas e fotos por cada visita. O histórico fica completo e descarregável, sem qualquer introdução manual.',
      },
      {
        title: 'Os técnicos chegam mesmo dentro dos prazos previstos?',
        desc: 'Vê-o assim que o técnico pica o ponto, sem chamadas: a hora e a localização de chegada já estão no Flow, para cada local.',
      },
      {
        title: 'Como demonstra o serviço prestado aos clientes?',
        desc: 'Histórico completo descarregável por cada local: datas, horas, GPS e fotos. O cliente verifica de forma autónoma, sem aceder ao seu sistema.',
      },
    ],
  },

  workflow: {
    title: 'Como funciona',
    subtitle: 'Três passos simples. Zero papel. Zero chamadas.',
    steps: [
      {
        title: 'O técnico pica o ponto com GPS à chegada ao local',
        desc: 'Abra a intervenção pelo telemóvel. O GeoTapp regista a hora e a localização nesse momento, e as fotos de prova. Entre uma picagem e outra não regista nada automaticamente.',
      },
      {
        title: 'As horas e a intervenção ficam registadas automaticamente',
        desc: 'As horas trabalhadas associam-se ao local e ao tipo de intervenção. O responsável vê, a cada picagem, o estado de cada visita.',
      },
      {
        title: 'O cliente recebe o relatório selado',
        desc: 'No fim da intervenção o sistema gera um relatório com GPS, horas e selo. O cliente verifica-o de forma autónoma, sem acesso ao seu sistema de gestão.',
      },
    ],
  },

  features: {
    title: 'App para manutenção: cada intervenção documentada.',
    items: [
      {
        title: 'Presenças com localização e hora',
        desc: 'Cada chegada, pausa e partida fica registada com localização, hora e local atribuído, e vai para o relatório selado. Para mostrar ao cliente ou à inspeção do trabalho quando for preciso.',
      },
      {
        title: 'Histórico de manutenção por instalação',
        desc: 'Cada intervenção fica ligada ao local ou à instalação. O histórico completo pode ser consultado e descarregado, por si e pelo cliente.',
      },
      {
        title: 'Relatórios automáticos e selados',
        desc: 'No fim da intervenção o sistema gera um relatório selado: horas, localizações, fotos e selo. O cliente pode verificá-lo por si próprio.',
      },
      {
        title: 'Planeamento de turnos e equipas',
        desc: 'Atribua intervenções, gira os turnos e receba um aviso se um turno ficar aberto.',
      },
      {
        title: 'Documentação fotográfica',
        desc: 'Os técnicos tiram fotos diretamente pela app: antes, durante e depois da intervenção. Cada imagem fica georreferenciada, com carimbo de data e hora.',
      },
      {
        title: 'Picagem com um toque',
        desc: 'O técnico pica a chegada com GPS, assinala as pausas e fecha a intervenção com um toque. Cada foto tirada fica ligada à intervenção e aos seus horários.',
      },
    ],
  },

  testimonial: {
    quote:
      'Com o GeoTapp cada intervenção de manutenção fica documentada, e aos clientes enviamos o relatório de cada visita.',
    author: 'Andrea L.',
    role: 'Responsável de manutenção, facility management - Centro de Itália',
  },

  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que nos perguntam com mais frequência antes de começar.',
    items: [
      {
        q: 'Como documenta as intervenções periódicas de manutenção?',
        a: 'O GeoTapp gera automaticamente um relatório por cada visita com GPS, horas e fotos. O histórico fica completo e descarregável por instalação ou por local do cliente, sem qualquer introdução manual.',
      },
      {
        q: 'Os técnicos chegam mesmo dentro dos prazos previstos?',
        a: 'Com o GeoTapp vê a hora de chegada e a localização de cada técnico no momento em que pica o ponto. Sem chamadas: o dado já está no Flow.',
      },
      {
        q: 'Como demonstro aos clientes o serviço de manutenção prestado?',
        a: 'O GeoTapp mantém um histórico completo descarregável por cada local do cliente: datas, horas, GPS e fotos de cada intervenção. Ao cliente envia o relatório selado, que ele verifica por si próprio sem aceder ao seu sistema.',
      },
      {
        q: 'O GeoTapp funciona para a manutenção de instalações e facility?',
        a: 'Sim. O GeoTapp é usado por empresas de manutenção, facility management e empresas com equipas distribuídas por vários locais. Serve desde uma equipa de poucas pessoas até uma empresa com centenas de técnicos.',
      },
      {
        q: 'O GeoTapp cumpre o RGPD na geolocalização?',
        a: 'O GeoTapp foi concebido para se manter dentro do RGPD: regista a localização apenas quando o técnico pica o ponto (entrada, pausas, saída) ou tira uma foto de prova, faz assinar a informação na app antes da primeira picagem e não recolhe dados desnecessários.',
      },
      {
        q: 'Quanto custa o GeoTapp para uma empresa de manutenção?',
        a: 'O GeoTapp Flow custa a partir de 39 € por mês; os postos TimeTracker para os técnicos custam 3 € por mês cada um até ao 25.º. Subscrição com duração mínima de 12 meses. Antes pode experimentá-lo grátis durante 14 dias, sem cartão. IVA não incluído.',
      },
    ],
  },

  cta: {
    title: 'Cada intervenção de manutenção merece uma prova. O GeoTapp gera-a.',
    subtitle:
      'Relatórios verificáveis, localização nas picagens, histórico completo por cada instalação.',
    primary: 'Começar teste gratuito de 14 dias',
    secondary: 'Ver preços',
  },

  pricing_hint: {
    label: 'Postos TimeTracker desde',
    per: 'por operador por mês, mais o plano Flow desde 39 € por mês',
    note: 'Teste gratuito de 14 dias',
  },

  schema_sector_name: 'Manutenção',

  schema_faq: [
    {
      question: 'Como documenta as intervenções periódicas de manutenção?',
      answer:
        'O GeoTapp gera automaticamente um relatório por cada visita com GPS, horas e fotos. O histórico fica completo e descarregável por instalação ou por local do cliente, sem qualquer introdução manual.',
    },
    {
      question: 'Os técnicos chegam mesmo dentro dos prazos previstos?',
      answer:
        'Com o GeoTapp vê a hora de chegada e a localização de cada técnico no momento em que pica o ponto. O dado já está no Flow, sem chamadas.',
    },
    {
      question: 'Como demonstro aos clientes o serviço de manutenção prestado?',
      answer:
        'O GeoTapp mantém um histórico completo descarregável por cada local do cliente: datas, horas, GPS e fotos de cada intervenção. Ao cliente envia o relatório selado, que ele verifica por si próprio.',
    },
  ],
};

export default content;
