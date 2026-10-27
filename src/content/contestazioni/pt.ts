import type { ContestazioniCopy } from './types';

/**
 * Pagina "Quando qualcuno contesta il lavoro" (27/10/2026), scritta nativamente in portoghese del
 * Portogallo (pt-PT). Segue it.ts punto per punto. Le frasi sul prodotto riusano VERBATIM le stringhe
 * gia' pubblicate in dict.features (gps_desc, offline_desc, encryption_desc, realtime_desc, cms_desc,
 * datalake_desc, cdn_desc) e la formula sulla prova gia' pubblicata nella guida in pt
 * ("O pacote selado ajuda a mostrar ... nem aconselhamento juridico"). Cosa NON si scrive, mai:
 * "zero contestacoes", "prova legal/incontestavel", "certifica", "conforme ao RGPD" riferito a
 * GeoTapp, "garante", posizioni "cifradas", "tempo real"/"mapa ao vivo", foto "so ao vivo",
 * "nada e registado entre uma picagem e a seguinte" senza "automaticamente e de forma continua",
 * numeri senza fonte. Il permesso di posizione in background e' detto solo per Android e iPhone
 * (l'Apple Watch non e' verificato).
 */
const pt: ContestazioniCopy = {
  metaTitle: 'Contestações no trabalho: o que muda com a GeoTapp | GeoTapp',
  metaDesc:
    'Quando um cliente ou um colaborador contesta o trabalho, o que tem em mãos? A mesma discussão vista de três lados: empresa, quem trabalha e cliente.',
  kicker: 'Contestações no trabalho',
  h1: 'Quando alguém contesta o trabalho: o que muda com a GeoTapp',
  lede:
    'Uma contestação não se evita. Muda aquilo que tem em mãos quando ela chega: uma memória contra outra memória, ou um documento. Aqui vê a mesma discussão vista de três lados: a empresa, quem trabalha e quem encomendou o trabalho.',
  updatedLabel: 'Atualizado a 27 de outubro de 2026',
  scenes: [
    {
      kicker: 'A empresa',
      heading: 'Se é a empresa',
      scene: '«O cliente diz que não foram lá. Ou que estiveram uma hora, não três.»',
      haveTitle: 'O que tem em mãos',
      have: [
        'A hora de entrada, das pausas e de saída de cada intervenção.',
        'A posição registada na picagem. Na picagem, a app rejeita as posições simuladas por apps de localização falsa, as demasiado imprecisas e as deslocações impossíveis.',
        'As fotos de prova da intervenção. Nas fotos não se rejeita nada: assinala-se, comparando a hora e a posição da foto com as da picagem.',
        'Um relatório que, no fim da intervenção, se compõe com picagens, fotos e notas e é selado: qualquer alteração posterior é detetável.',
      ],
      changeTitle: 'O que muda',
      change: [
        'Em vez de reconstituir tudo de cabeça entre WhatsApp, emails e folhas de papel, envia um documento.',
        'Se não houver rede, a picagem fica guardada no telemóvel e segue sozinha quando o sinal volta, com a hora em que foi feita.',
        'As horas documentadas são horas que pode mostrar quando as fatura.',
      ],
    },
    {
      kicker: 'Quem trabalha',
      heading: 'Se é quem trabalha',
      scene: '«Fiz mais horas do que as que me pagaram.»',
      haveTitle: 'O que tem',
      have: [
        'As suas sessões de trabalho, com hora de início, pausas e fim, que pode rever na aplicação por período, com o total de horas.',
        'A posição é registada apenas quando pica o ponto ou tira uma foto de prova: entrada, início e fim de pausa, saída.',
        'Entre uma picagem e a seguinte não se regista nenhuma posição automaticamente e de forma contínua. No Android e no iPhone, a aplicação nem sequer pede a permissão de localização em segundo plano.',
      ],
      changeTitle: 'O que muda',
      change: [
        'Se houver uma discussão sobre as horas, existe uma hora registada por um gesto seu, que não depende da memória de ninguém.',
        'O escritório vê cada picagem assim que chega: o ecrã chama-se Picagens de hoje e mostra as que foram feitas, não onde alguém se encontra neste momento.',
      ],
      extra: {
        title: 'O que fica das posições, e por quanto tempo',
        paragraphs: [
          'No registo, as posições são apagadas ao fim de doze meses, num prazo que a empresa pode encurtar até trinta dias.',
          'Nos relatórios já entregues mantêm-se, porque são documentos selados, e seguem o prazo de conservação previsto na lei: ao fim de cinco anos o pacote é apagado. Um relatório entregue é uma fotografia: não se atualiza e não se mexe sem quebrar o selo que o torna verificável.',
        ],
      },
    },
    {
      kicker: 'O cliente',
      heading: 'Se é o cliente',
      scene: '«Dizem-me que o trabalho está feito. Como é que sei, sem ter de confiar na palavra deles?»',
      haveTitle: 'O que faz',
      have: [
        'Recebe uma ligação para o relatório e verifica-o sozinho, online ou com o verificador offline: um ficheiro único que não se liga à internet e traz lá dentro a chave pública.',
        'A verificação volta a calcular as impressões de cada evento e de cada foto e confere a assinatura. A página de verificação mostra duas coisas separadas: se o documento está íntegro e se a assinatura é válida.',
        'Funciona mesmo daqui a anos, mesmo sem a GeoTapp: quem tiver o pacote e o verificador pode repetir a verificação.',
      ],
      changeTitle: 'O que demonstra e o que não demonstra',
      change: [
        'O pacote selado ajuda a mostrar que o documento entregue não foi alterado; por si só, não é prova absoluta do facto material nem aconselhamento jurídico.',
        '«Documento íntegro» quer dizer que não foi adulterado. É a assinatura, que não se refaz sem a chave, que diz que o pacote foi emitido por nós.',
      ],
    },
  ],
  sample: {
    heading: 'Experimente com um relatório real',
    paragraphs: [
      'Aqui em baixo há um relatório de exemplo, a substituição de um quadro elétrico. Descarregue-o e verifique-o no seu navegador: a verificação corre no seu computador e o ficheiro não nos é enviado.',
    ],
  },
  limits: {
    heading: 'O que a GeoTapp não faz',
    items: [
      'Não acompanha ninguém de forma contínua, nem que quiséssemos: no Android e no iPhone, a aplicação nem sequer pede a permissão de localização em segundo plano.',
      'Não demonstra, por si só, que o facto aconteceu: diz se o pacote foi alterado depois da entrega.',
      'Não promete que as contestações desapareçam: muda aquilo com que se apresenta quando elas chegam.',
      'Não substitui um advogado laboralista, o encarregado de proteção de dados (DPO), nem os acordos com as estruturas representativas dos trabalhadores ou as autorizações que a lei do seu país possa exigir.',
    ],
    formula:
      'O pacote selado ajuda a mostrar que o documento entregue não foi alterado; por si só, não é prova absoluta do facto material nem aconselhamento jurídico.',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'Um relatório da GeoTapp basta para ganhar uma contestação?',
        a: 'Não, por si só. O relatório mostra o que foi registado e permite que qualquer pessoa verifique que não foi alterado depois da entrega; não demonstra, por si só, que o facto aconteceu, e não é aconselhamento jurídico. É um documento organizado e verificável, em vez de uma memória contra outra memória.',
      },
      {
        q: 'A GeoTapp segue os colaboradores durante o dia?',
        a: 'Não. A posição é registada apenas quando quem trabalha faz um gesto: entrada, início e fim de pausa, saída, foto de prova. Entre uma picagem e a seguinte não se regista nenhuma posição automaticamente e de forma contínua. No Android e no iPhone, a aplicação nem sequer pede a permissão de localização em segundo plano.',
      },
      {
        q: 'O cliente tem de confiar na GeoTapp para verificar o relatório?',
        a: 'Não. O verificador offline é um ficheiro único que não se liga à internet e traz lá dentro a chave pública: volta a calcular as impressões e confere a assinatura mesmo daqui a anos, mesmo sem a GeoTapp. O que a verificação diz é se o pacote foi alterado, não se o facto aconteceu.',
      },
      {
        q: 'O que acontece às posições depois da entrega?',
        a: 'No registo, são apagadas ao fim de doze meses, num prazo que a empresa pode encurtar até trinta dias. Nos relatórios já entregues mantêm-se, porque são documentos selados, e seguem o prazo de conservação previsto na lei: ao fim de cinco anos o pacote é apagado.',
      },
      {
        q: 'Onde ficam os dados?',
        a: 'Os dados de trabalho e as fotos ficam armazenados na União Europeia.',
      },
      {
        q: 'A GeoTapp substitui o advogado laboralista ou os acordos com os representantes dos trabalhadores?',
        a: 'Não. Ajuda a respeitar os limites do RGPD e da legislação laboral, mas não substitui um advogado laboralista, o encarregado de proteção de dados (DPO), nem os acordos com as estruturas representativas dos trabalhadores ou as autorizações que a lei do seu país possa exigir.',
      },
    ],
  },
  next: {
    heading: 'Para saber mais',
    paragraph: 'Se quer ver, função a função, o que lá está dentro, ou os preços, é por aqui.',
    featuresLabel: 'O que faz a GeoTapp, função a função →',
    pricingLabel: 'Ver os preços →',
  },
  card: {
    title: 'O que muda quando alguém contesta o trabalho',
    text: 'A empresa, quem trabalha e o cliente lado a lado.',
    cta: 'Ler a página',
  },
  disclaimer:
    'Esta página descreve o que a GeoTapp faz e não é aconselhamento jurídico. Para a sua situação concreta, recorra a um advogado laboralista ou a um encarregado de proteção de dados (DPO).',
};

export default pt;
