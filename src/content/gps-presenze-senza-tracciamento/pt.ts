import type { PresenzeCopy } from './types';

const pt: PresenzeCopy = {
  metaTitle: 'Pode usar-se o GPS no ponto sem vigiar os colaboradores? - GeoTapp',
  metaDesc:
    'Sim, se a posição só for registada no momento do ponto. O que decidiu um tribunal italiano em 2026, o que as autoridades realmente sancionam, e o que regista um sistema de ponto por GPS conforme.',
  h1: 'Pode usar-se o GPS no ponto sem vigiar os colaboradores?',
  lede:
    'Sim. Um sistema que só regista a posição no momento exato em que um colaborador bate o ponto de entrada, uma pausa ou a saída não vigia a pessoa: documenta um facto. Foi exatamente esta distinção que um tribunal italiano confirmou em 2026, e corresponde ao que as autoridades de proteção de dados realmente sancionam: o rastreio contínuo, não o registo pontual da posição.',
  updatedLabel: 'Atualizado a 25 de setembro de 2026',
  sections: [
    {
      heading: 'Quando é que o GPS é permitido para o controlo de presenças?',
      paragraphs: [
        'Na maioria dos países da UE vigora o mesmo princípio: as ferramentas que possam permitir um controlo contínuo da atividade do trabalhador exigem, antes de serem ativadas, um acordo com a representação dos trabalhadores ou uma autorização da autoridade competente. Em Itália, essa exigência está fixada no artigo 4.º do Estatuto dos Trabalhadores (lei n.º 300/1970) para os instrumentos de controlo à distância, exceptuando expressamente os instrumentos de simples registo de acessos e presenças.',
        'Um acórdão proferido em Itália a 1 de julho de 2026 (Tribunal de Cosenza, acórdão n.º 972) traça o limite para as aplicações de ponto por GPS: quando a posição só é captada no momento do registo de ponto, sem monitorização contínua dos deslocamentos entre registos, o sistema é considerado uma ferramenta de registo de presenças, não de vigilância à distância. O tribunal anulou assim uma coima de 50.000 euros que a autoridade italiana de proteção de dados tinha aplicado a um organismo público, precisamente com esse fundamento.',
        'A regra prática: um ponto GPS captado no início e no fim do turno regista um instante. Um rasto de pontos captado a cada minuto segue uma pessoa. É a mesma tecnologia de satélite, mas são duas ferramentas muito diferentes perante a lei.',
      ],
    },
    {
      heading: 'O que regista a GeoTapp, e o que não regista',
      paragraphs: [
        'A GeoTapp só regista a posição quando o colaborador realiza uma ação concreta: bater o ponto de entrada, iniciar ou terminar cada pausa, bater o ponto de saída, mais um ponto por cada foto de prova de trabalho tirada ao vivo. Entre um registo de ponto e outro, nada é registado automaticamente: nenhum rasto de deslocações, nenhuma monitorização em segundo plano, nenhuma posição recolhida sem o conhecimento do colaborador.',
      ],
    },
    {
      heading: 'Como pode um representante sindical, um advogado laboral ou um EPD verificar isto sem nos perguntar nada',
      paragraphs: [
        'Não é preciso confiar na nossa palavra: isto pode ser verificado de forma independente. Na aplicação Android, o manifesto só declara as permissões ACCESS_FINE_LOCATION e ACCESS_COARSE_LOCATION. Não é pedida a permissão ACCESS_BACKGROUND_LOCATION, necessária para seguir um colaborador com a aplicação fechada, e não existe nenhum serviço em primeiro plano dedicado à localização: sem essa permissão, o sistema operativo simplesmente não entrega a posição a uma aplicação que não está aberta no ecrã. No iOS, a aplicação só pede a autorização "durante a utilização da app" (requestWhenInUseAuthorization), nunca a autorização de monitorização em segundo plano.',
        'É uma verificação que um representante dos trabalhadores, um advogado especializado em direito laboral ou um encarregado de proteção de dados pode fazer sozinho em poucos minutos, lendo o manifesto da aplicação ou o rótulo de privacidade publicado pela loja de aplicações, ainda antes de ler a informação que a empresa lhe entrega.',
      ],
    },
    {
      heading: 'Durante quanto tempo ficam guardadas as posições registadas?',
      paragraphs: [
        'No registo de pontos, as coordenadas são eliminadas ao fim de doze meses; a empresa pode reduzir esse período até trinta dias. Nos relatórios já entregues a um cliente, pelo contrário, as posições mantêm-se: são documentos selados que servem como prova do trabalho realizado, e seguem o prazo de conservação próprio desse tipo de documentação, não o do registo.',
        'São duas regras diferentes para dois objetos diferentes. O registo operacional torna-se mais leve com o tempo; um documento já entregue a terceiros segue as suas próprias regras, tal como qualquer documento depois de sair dos nossos sistemas.',
      ],
    },
    {
      heading: 'E fora de Itália?',
      paragraphs: [
        'O RGPD (em particular os artigos 5.º, 6.º, 12.º a 14.º e 25.º do Regulamento UE 2016/679) aplica-se em toda a União Europeia e impõe os mesmos princípios em qualquer país: minimização de dados, finalidade declarada, informação clara ao trabalhador. O que muda de país para país é o procedimento sobre o controlo à distância: o equivalente local ao artigo 4.º italiano, o papel da representação dos trabalhadores, a autoridade de controlo competente. Para a situação de cada país, o mapa de GPS e trabalhadores na UE reúne fichas verificadas país a país.',
      ],
    },
  ],
  table: {
    title: 'O que regista e o que não regista',
    colLeft: 'Regista',
    colRight: 'Não regista',
    left: [
      'Posição no registo de ponto de entrada e de saída',
      'Posição no início e no fim de cada pausa',
      'Um ponto GPS por cada foto de prova de trabalho, tirada ao vivo',
      'Uma hora gerada pelo servidor, não pelo dispositivo do colaborador',
    ],
    right: [
      'Nenhuma deslocação durante o turno, entre um registo de ponto e outro',
      'Nenhuma posição fora do turno ou com a app fechada',
      'Nenhuma pontuação ou perfilamento de comportamentos',
      'Nenhuma posição a partir de fotos carregadas de uma galeria: apenas câmara ao vivo',
    ],
  },
  sourcesTitle: 'Fontes e referências',
  sources: [
    'Tribunal de Cosenza (Itália), acórdão n.º 972 de 1 de julho de 2026',
    'Autoridade italiana de proteção de dados (Garante), decisão n.º 382 de 28 de maio de 2026 (doc-web 10259916)',
    'Autoridade italiana de proteção de dados (Garante), decisão n.º 135 de 13 de março de 2025 (doc-web 10128005), anulada pelo acórdão acima',
    'Lei italiana n.º 300 de 20 de maio de 1970 (Estatuto dos Trabalhadores), art. 4.º',
    'Regulamento (UE) 2016/679 (RGPD), arts. 5.º, 6.º, 12.º a 14.º, 25.º',
  ],
  disclaimer:
    'Esta página descreve princípios gerais, verificáveis na fonte, e não constitui aconselhamento jurídico: para a sua situação específica, consulte um advogado especializado em direito laboral ou um encarregado de proteção de dados.',
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'O GPS aos colaboradores é proibido pelo RGPD?',
        a: 'Não. As autoridades de proteção de dados nunca proibiram o GPS nos trabalhadores como tal. O que sancionam é o rastreio contínuo, a falta de informação, a recolha de dados sem relação com o trabalho: não o registo pontual da posição no momento do ponto.',
      },
      {
        q: 'É sempre necessário o acordo da representação dos trabalhadores para usar o GPS no ponto?',
        a: 'É necessário quando o sistema pode permitir um controlo contínuo da atividade do trabalhador. O Tribunal de Cosenza decidiu, no entanto, que um sistema que só regista a posição no momento do ponto, sem monitorização contínua, se enquadra nas ferramentas de registo de presenças que não exigem esse procedimento.',
      },
      {
        q: 'O que acontece se o sistema também rastrear durante as pausas?',
        a: 'É um dos erros que já levou a coimas reais: uma empresa de transportes foi multada em 50.000 euros, em parte porque o rastreio continuava durante as pausas. O princípio da minimização de dados (art. 5.º do RGPD) exige que a recolha pare quando o turno termina.',
      },
      {
        q: 'A GeoTapp pode rastrear um colaborador de forma contínua se eu pedir?',
        a: 'Não. A aplicação nunca pede a permissão de localização em segundo plano e não tem nenhum serviço que siga um dispositivo com a app fechada: não é uma opção desativada, é uma permissão que o código nunca pede. Verificável lendo o manifesto da aplicação ou o rótulo de privacidade da loja.',
      },
      {
        q: 'As posições registadas ficam guardadas para sempre?',
        a: 'Não. No registo de pontos são eliminadas ao fim de doze meses, e a empresa pode reduzir esse prazo para trinta dias. Mantêm-se, no entanto, nos relatórios já entregues a um cliente, porque são documentos selados que servem como prova do trabalho realizado.',
      },
    ],
  },
  relatedTitle: 'Recursos relacionados',
};

export default pt;
