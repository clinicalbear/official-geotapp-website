import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App para instaladores e canalizadores | GeoTapp - GPS',
    description: 'Relatórios de intervenção com localização e fotos, provas fotográficas e relatórios onde qualquer alteração é detetável. Experimente o GeoTapp grátis.',
  },
  hero: {
    badge: 'App para instaladores, canalizadores e técnicos de climatização',
    h1_line1: 'O cliente contesta as horas?',
    h1_line2: 'Mostre-lhe o relatório GPS.',
    subtitle: 'Os seus técnicos picam o ponto no telemóvel com um toque. O sistema gera um relatório de intervenção com localização registada e fotos: qualquer alteração é detetável. Quando o cliente pergunta «quanto tempo demoraram?», tem a resposta pronta.',
    cta_primary: 'Experimente grátis 14 dias',
    cta_note: 'Sem cartão de crédito. Operacional desde o primeiro dia.',
  },
  pain: {
    title: 'O problema que já conhece',
    items: [
      {
        title: 'Contestações sobre horas e intervenções',
        desc: 'O cliente nega o horário. O técnico não tem provas. A disputa arrasta-se durante semanas e custa mais do que a própria intervenção.',
      },
      {
        title: 'Escritório a correr atrás do terreno',
        desc: 'O responsável liga aos técnicos para saber onde estão, o que fizeram, quando acabam. Cada chamada é uma interrupção para ambos.',
      },
      {
        title: 'Relatórios incompletos ou perdidos',
        desc: 'Papelinhos, WhatsApp, e-mails: os dados chegam incompletos, atrasados ou não chegam. Reconstruir o balanço é um trabalho à parte.',
      },
    ],
  },
  workflow: {
    title: 'Como funciona em três passos',
    subtitle: 'Da carrinha ao escritório sem telefonemas.',
    steps: [
      {
        title: 'O técnico pica o ponto no terreno',
        desc: 'Com o GeoTapp TimeTracker regista entrada, pausas, saída, fotos e notas diretamente pelo telemóvel. A localização só é obtida quando pica o ponto, como exige o RGPD.',
      },
      {
        title: 'O escritório vê tudo assim que chega',
        desc: 'O Flow recebe os dados de imediato. O responsável vê o serviço, o andamento, o técnico atribuído e as provas fotográficas sem ligar a ninguém.',
      },
      {
        title: 'O relatório é a sua prova, para mostrar ao cliente',
        desc: 'No fim da intervenção o relatório é gerado com dados GPS reais e provas fotográficas. Qualquer alteração é detetável. O cliente pode verificar a autenticidade por si próprio. Quando surge uma dúvida, não tem de explicar. Tem de mostrar.',
      },
    ],
  },
  differenza: {
    title: 'App para instaladores: picagem ou prova verificável?',
    subtitle: 'A maioria das apps regista o horário. O GeoTapp produz provas verificáveis.',
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
        label: 'Relatório de intervenção',
        competitor: 'Manual ou inexistente',
        geotapp: 'Gerado automaticamente com GPS e fotos',
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
      'O cliente nega a hora ou a intervenção realizada.',
      'O técnico diz «fiz». O cliente diz «não consta».',
      'Não tem nada na mão. A discussão dura dias.',
      'Às vezes perde o pagamento. Perde sempre tempo.',
    ],
    dopo: [
      'O cliente nega a hora ou a intervenção realizada.',
      'Abra o relatório: fotos, GPS, hora, selo.',
      'Envia-lho. A discussão acaba em um minuto.',
      'Tem uma prova para mostrar. O técnico também tem algo na mão.',
    ],
  },

  scenario: {
    title: 'Um caso típico',
    body: 'O cliente contesta a hora de fim do trabalho e pede um desconto na fatura. Com o GeoTapp abre o relatório da intervenção: foto da instalação concluída, horas e localizações das picagens, duração calculada automaticamente, tudo gerado pelo telemóvel do técnico no momento do trabalho.',
    resolution: 'Em vez de uma palavra contra a outra, há um documento que o cliente verifica por si próprio.',
  },

  features: {
    title: 'App para instaladores e canalizadores: relatórios GPS e provas fotográficas.',
    items: [
      {
        title: 'Picagem GPS verificável',
        desc: 'Cada entrada, pausa e saída fica ligada à localização, à hora e ao serviço. Para mostrar ao cliente ou à inspeção do trabalho quando for preciso.',
      },
      {
        title: 'Provas fotográficas seladas',
        desc: 'O técnico tira fotos pela app. Cada imagem fica ligada à intervenção com GPS e carimbo de data e hora, e é incluída no relatório. Ninguém as pode alterar sem que o sistema o detete.',
      },
      {
        title: 'Exportação para o processamento salarial',
        desc: 'Exporte as presenças do mês em Excel ou CSV, prontas para o seu contabilista ou consultor laboral.',
      },
      {
        title: 'Gestão de serviços em várias obras',
        desc: 'Atribua serviços, acompanhe o andamento de cada obra e receba um aviso se um turno ficar aberto.',
      },
      {
        title: 'Relatórios digitais automáticos',
        desc: 'No fim da intervenção o relatório já está pronto: horas, fotos e notas. Sem papel, sem chamadas. O escritório envia-o ao cliente a partir do Flow com um clique.',
      },
      {
        title: 'Os seus técnicos também têm uma prova',
        desc: 'Um relatório verificável dá ao técnico algo na mão contra acusações infundadas. Quem trabalha bem demonstra-o com dados. Nenhuma zona cinzenta entre o terreno e o escritório.',
      },
    ],
  },

  cta_mid: {
    title: 'Quer ver como funciona numa intervenção real?',
    body: 'Mostramos-lhe o fluxo completo: da abertura do serviço ao relatório que o cliente recebe.',
    cta: 'Começar teste gratuito de 14 dias',
  },

  trust: {
    title: 'Os nossos relatórios: qualquer alteração é detetável. Nem por si. Nem por nós.',
    body: 'Os relatórios do GeoTapp são gerados pelo sistema no momento da intervenção. Depois de o relatório ser selado, corrigir uma hora ou mover uma foto quebra o selo, e a verificação assinala-o. Quem o recebe, cliente ou consultor, pode verificá-lo por si próprio.',
    badge: 'Verificável por qualquer pessoa, sem acesso à sua conta',
  },
  testimonial: {
    quote: 'Antes passávamos horas a recolher as folhas do terreno. Agora o relatório já está pronto quando o técnico volta à carrinha.',
    author: 'Marco R.',
    role: 'Responsável operacional, instalações civis',
  },
  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'O que nos perguntam com mais frequência antes de começar.',
    items: [
      {
        q: 'O GeoTapp é adequado como software para instaladores e técnicos de manutenção?',
        a: 'Sim. O GeoTapp ajuda instaladores, eletricistas, canalizadores e técnicos de manutenção a gerir intervenções, relatórios, horas, deslocações e provas do trabalho realizado entre o terreno e o escritório.',
      },
      {
        q: 'Posso usar o GeoTapp para relatórios de intervenção e provas fotográficas?',
        a: 'Sim. O TimeTracker recolhe fotos, notas e picagens verificáveis no terreno, enquanto o Flow liga tudo ao serviço e ao histórico operacional.',
      },
      {
        q: 'O GeoTapp ajuda a reduzir contestações sobre horas e trabalhos realizados?',
        a: 'É um dos principais casos de utilização: tempos, localização, notas e provas fotográficas tornam a reconstituição da intervenção mais clara e mais fácil de mostrar.',
      },
    ],
  },
  cta: {
    title: 'O trabalho foi feito. Agora demonstre-o.',
    subtitle: 'O GeoTapp gera provas verificáveis de cada intervenção, relatórios selados que o cliente pode verificar por si próprio.',
    primary: 'Começar teste gratuito de 14 dias',
    secondary: 'Ver preços',
  },
  pricing_hint: {
    label: 'Postos TimeTracker desde',
    per: 'por operador por mês, mais o plano Flow desde 39 € por mês',
    note: 'Teste gratuito de 14 dias',
  },

  schema_sector_name: 'Instaladores',
  schema_faq: [
    {
      question: 'O GeoTapp funciona para canalizadores e técnicos de climatização em mobilidade?',
      answer: 'Sim. O GeoTapp é a app para instaladores e técnicos de climatização pensada para quem trabalha em obras e em casas particulares. Com a gestão de relatórios integrada, os técnicos registam intervenções, fotos e horas diretamente pelo telemóvel, sem voltar ao escritório.',
    },
    {
      question: 'Como documento uma intervenção de manutenção ou instalação?',
      answer: 'No fim de cada intervenção, o técnico regista no GeoTapp: hora de início e de fim com a localização, fotos do trabalho realizado e notas técnicas. O sistema produz um relatório selado que o cliente pode verificar de forma autónoma.',
    },
    {
      question: 'Posso usar o GeoTapp para gerir várias equipas de instaladores em obras diferentes?',
      answer: 'Sim. O GeoTapp Flow permite ao responsável coordenar várias equipas, atribuir serviços, acompanhar o estado das intervenções e recolher as provas fotográficas de todas as obras ativas assim que chegam.',
    },
    {
      question: 'Os relatórios servem em caso de disputa com o cliente?',
      answer: 'Os relatórios do GeoTapp são selados com a localização, o carimbo de data e hora e as provas fotográficas. O cliente verifica-os por si próprio. Ajudam a mostrar que o documento não foi alterado; por si sós não são prova absoluta dos factos nem aconselhamento jurídico.',
    },
    {
      question: 'O GeoTapp cumpre o RGPD na geolocalização dos técnicos?',
      answer: 'Foi concebido para se manter dentro dele: a localização só é registada quando o técnico pica o ponto ou tira uma foto de prova, nunca de forma contínua, e a informação aos trabalhadores assina-se na app antes da primeira picagem. O resto (acordo com os representantes dos trabalhadores ou autorização, quando exigidos) cabe ao empregador.',
    },
  ],
};

export default content;
