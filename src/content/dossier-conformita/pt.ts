import type { DossierCopy } from './types';

const pt: DossierCopy = {
  metaTitle: 'Dossiê GeoTapp: prova do trabalho, não vigilância',
  metaDesc:
    'O que a GeoTapp faz e o que não faz, com as fontes legais à vista e os limites sem rodeios. RGPD, Código do Trabalho, integridade da prova.',
  badge: 'Dossiê de conformidade',
  h1: 'Prova do trabalho, não vigilância',
  subtitle:
    'O que a GeoTapp faz e, sobretudo, o que não faz. Com as fontes legais à vista e os limites ditos sem rodeios. Um documento para ler, verificar e citar.',
  sections: [
    {
      heading: 'Porque existe este documento',
      paragraphs: [
        'Em Bruxelas estão a escrever-se agora as regras sobre como se podem monitorizar os trabalhadores, entre a diretiva sobre o trabalho em plataformas, a gestão algorítmica e o Regulamento da Inteligência Artificial aplicado ao trabalho. Entretanto, quem envia equipas para o terreno já tem de registar as horas, prová-las quando alguém as contesta, e fazê-lo sem pisar a privacidade das pessoas. É um equilíbrio difícil, e nesse equilíbrio joga-se boa parte da confiança entre quem organiza o trabalho e quem o realiza.',
        'A GeoTapp nasce dentro deste problema, não ao lado dele. Por isso, em vez de prometer, põe por escrito o que faz e o que não faz, com as fontes legais à vista e os limites ditos sem rodeios. O que se segue pode ler-se, verificar-se e citar-se. Quem encontrar um ponto fraco é convidado a assinalá-lo: um dossiê de conformidade vale pelo que sustenta, não por como soa.',
      ],
    },
    {
      heading: 'O que faz, e sobretudo o que não faz',
      paragraphs: [
        'O princípio é apenas um: registar o facto, não seguir a pessoa.',
        'A GeoTapp deteta a posição apenas quando o trabalhador pica o ponto (entrada, início e fim de pausa, saída) ou tira uma fotografia de prova, e não ao longo do dia. Entre uma picagem e outra não se regista nada automaticamente: nenhum rasto de deslocações, nenhuma posição recolhida à revelia, nenhuma perseguição digital. A aplicação nem sequer pede a permissão para ler a posição em segundo plano, pelo que não o poderia fazer mesmo que quisesse. Na versão atual da aplicação, a fotografia de prova só pode ser tirada com a câmara ao vivo: não é possível carregar uma imagem da galeria. Os dados recolhidos são reduzidos ao mínimo necessário por opção de projeto, não como remendo posterior.',
        'O que a GeoTapp não faz é igualmente importante. Não persegue o trabalhador fora do horário, não traça perfis de comportamento, não mede a atividade sindical, não interpreta estados emocionais, não constrói pontuações sobre as pessoas. É o perímetro que as propostas europeias sobre o trabalho em plataformas e a gestão algorítmica indicam como a proibir, e a GeoTapp foi concebida para ficar fora dele.',
      ],
    },
    {
      heading: 'Os princípios do RGPD, aplicados e não recitados',
      paragraphs: [
        'Minimização dos dados (art. 5.º, n.º 1, al. c) do RGPD): a posição recolhe-se apenas na picagem, não em contínuo.',
        'Limitação das finalidades (art. 5.º, n.º 1, al. b)): o propósito é a prova do trabalho realizado, não o controlo à distância da pessoa.',
        'Fundamento de licitude (art. 6.º): execução do contrato de trabalho e interesse legítimo documentado, acompanhados da informação prévia ao trabalhador.',
        'Transparência (arts. 12.º a 14.º): o trabalhador recebe uma informação clara. A GeoTapp disponibiliza um modelo de informação sobre GPS, gratuito e descarregável.',
        'Proteção desde a conceção (art. 25.º): a recolha mínima é o comportamento predefinido da ferramenta, não uma opção a ativar.',
      ],
    },
    {
      heading: 'O alinhamento com o quadro português',
      paragraphs: [
        'Em Portugal o controlo à distância dos trabalhadores rege-se pelo RGPD e pelo Código do Trabalho, sob a fiscalização da Comissão Nacional de Proteção de Dados. O empregador só pode tratar dados de localização para finalidades legítimas e determinadas, no respeito pelo princípio da proporcionalidade, e tem de informar previamente o trabalhador sobre a existência e os fins dos meios utilizados. A localização não pode servir para vigiar o desempenho da pessoa, mas para a finalidade declarada do registo de presenças.',
        'A GeoTapp coloca-se dentro deste quadro como ferramenta que facilita a conformidade, não como atalho que a contorna. O responsável pelo tratamento continua a ser a empresa, com os seus deveres: a GeoTapp fornece uma ferramenta concebida para estar dentro das regras, e os recursos para as aplicar. Para os outros países europeus, o mapa GPS dos trabalhadores na UE reúne trinta e nove fichas nacionais verificadas à mão, com os deveres, a autoridade competente e as sanções de cada país.',
      ],
    },
    {
      heading: 'A integridade da prova',
      paragraphs: [
        'Quando a GeoTapp diz «prova do trabalho», refere-se a algo que se possa mostrar quando alguém contesta; para servir esse fim, tem de ser difícil de falsificar, e qualquer retoque posterior tem de ficar à vista. A defesa é por camadas.',
        'A captura da foto está bloqueada na câmara ao vivo: o valor que identifica este modo está fixado nos clientes e, sobretudo, é verificado pelas regras da base de dados no momento da escrita, que rejeitam uma picagem com um modo diferente. Em cada foto o cliente calcula uma impressão criptográfica SHA-256, condição necessária para prosseguir.',
        'Uma vez criadas, as sessões de trabalho ficam protegidas: a hora de início, a posição registada na picagem e a identidade do utilizador não são modificáveis pelo trabalhador, e a eliminação está reservada aos administradores. As sessões com posição nascem apenas através de uma função do lado do servidor com privilégios administrativos, não por escrita direta a partir da aplicação, de modo que o operador não pode antedatar uma picagem, mudar-lhe a posição ou fazê-la desaparecer.',
        'A deteção de GPS falso atua antes mesmo de a picagem partir. Nos dispositivos Android o controlo é em vários níveis, com uma lista de aplicações de spoofing conhecidas e a verificação das permissões de localização fictícia: se dispara, a picagem é recusada, não apenas sinalizada. Os sinais de root são detetados e a empresa pode optar por bloquear a picagem nesses telemóveis. São também recusadas as posições demasiado imprecisas. Em iOS usa-se o sinal nativo do sistema operativo que indica uma posição simulada por software. É ainda intercetado o «teletransporte», ou seja, uma deslocação a uma velocidade fisicamente impossível entre duas picagens.',
        'Cada picagem deixa, por fim, um rasto num registo de auditoria do lado do servidor, com a hora gerada pelo servidor e não pelo dispositivo, e nenhuma aplicação pode escrever nesse registo, nem sequer a de um administrador.',
      ],
    },
    {
      heading: 'Os limites, ditos com clareza',
      paragraphs: [
        'Esta é a secção que muitos omitiriam, e é precisamente a que torna credível tudo o resto. A GeoTapp torna o spoofing difícil e atesta o contexto da picagem, mas não promete o impossível, e dizê-lo é uma forma de respeito por quem lê.',
        'O servidor não reverifica criptograficamente as coordenadas: controla que sejam plausíveis e dentro da eventual geofence (perímetro geográfico), mas confia na posição que o dispositivo comunica. A atestação do dispositivo atesta que a aplicação provém dos canais oficiais, mas não protege contra um cliente modificado e analisado por quem tem competências para isso. O modo «apenas câmara ao vivo» é uma declaração honesta do dispositivo, não uma prova criptográfica que o servidor possa refazer sobre a imagem. Os controlos são mais completos no smartphone do que no relógio. E, sobretudo, a ferramenta não liberta a empresa do seu papel de responsável pelo tratamento: continua a ser dela o dever de informação prévia, do acordo onde seja necessário, da proporcionalidade.',
        'Por outras palavras: a GeoTapp eleva a fasquia e documenta o facto, não vende a invulnerabilidade. Quem promete a invulnerabilidade, em regra, nunca a teve de demonstrar em tribunal.',
      ],
    },
    {
      heading: 'Os recursos públicos de apoio',
      paragraphs: [
        'Tudo o que é necessário para aplicar estes princípios é público e gratuito: o mapa GPS dos trabalhadores na UE com as fichas dos trinta e nove países, o modelo de informação sobre GPS, a calculadora das sanções, o índice da vigilância. Verificados na fonte, livres para usar e citar indicando a proveniência. Estão ali porque pôr o trabalho em conformidade não deveria ser um privilégio de quem pode pagar um gabinete jurídico.',
      ],
    },
    {
      heading: 'Atestação',
      paragraphs: [
        'As afirmações técnicas deste documento são redigidas e assinadas por Michele Angelo Petraroli, fundador da GeoTapp, que assume a sua responsabilidade e se disponibiliza para verificação e contraditório.',
      ],
    },
  ],
  sourcesTitle: 'Fontes e referências',
  sources: [
    'Regulamento (UE) 2016/679 (RGPD), em particular os arts. 5.º, 6.º, 12.º a 14.º e 25.º.',
    'Código do Trabalho (Lei n.º 7/2009, de 12 de fevereiro), normas sobre meios de vigilância à distância e tratamento de dados do trabalhador.',
    'Deliberações e orientações da Comissão Nacional de Proteção de Dados (CNPD) em matéria de controlo à distância dos trabalhadores.',
    'Textos da UE em discussão: diretiva sobre o trabalho mediante plataformas digitais; disposições sobre a gestão algorítmica; Regulamento da Inteligência Artificial aplicado ao trabalho.',
  ],
  lastUpdated: 'Versão 1.1 · atualizado a 30 de setembro de 2026',
  faq: {
    title: 'Perguntas frequentes',
    items: [
      { q: 'O que é o dossiê de conformidade?', a: 'É o documento que explica, com as fontes à mão, porque é que a GeoTapp é uma ferramenta de prova do trabalho e não de vigilância, e como isso se sustenta no RGPD e nas regras laborais. Serve a quem quer perceber a sério como os dados são tratados, não a quem se contenta com um slogan.' },
      { q: 'A GeoTapp é um sistema de vigilância?', a: 'Não, não foi pensada para vigiar. Regista a posição apenas quando o operador pica o ponto (entrada, pausas, saída) ou tira uma fotografia de prova, nunca em contínuo, e prepara a informação que o trabalhador assina na aplicação antes de picar o ponto. Prova o que foi feito e onde, não observa as pessoas.' },
      { q: 'Para que me serve este dossiê?', a: 'Para responder quando um trabalhador, um cliente ou um consultor lhe pergunta se aquilo que utiliza está em conformidade. Em vez de improvisar, tem um texto que expõe o raciocínio e as fontes, e que pode reencaminhar tal como está.' },
      { q: 'As fontes estão verificadas?', a: 'Sim, o dossiê remete para normas e decisões reais, listadas no final com a data de atualização. Continua, ainda assim, a ser um recurso informativo e não aconselhamento jurídico: para a sua situação específica, peça a um profissional que verifique tudo.' },
      { q: 'Posso mostrá-lo a um cliente ou num litígio?', a: 'Pode usá-lo para explicar como a GeoTapp está concebida e mostrar que a conformidade não é uma afirmação atirada ao ar. Num litígio, porém, o que conta são os seus dados reais e a sua informação aos trabalhadores: o dossiê é o contexto, a prova é a sessão de trabalho registada.' },
      { q: 'Aplica-se apenas a Portugal?', a: 'O raciocínio de base vale em toda a União, porque parte do RGPD, mas os pormenores sobre o controlo dos trabalhadores mudam de país para país. Para a situação de um Estado em concreto, comece pela respetiva ficha, aqui nos recursos.' },
    ],
  },
};

export default pt;
