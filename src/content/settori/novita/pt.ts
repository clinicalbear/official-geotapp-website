import type { NovitaCopy } from './types';

const copy: NovitaCopy = {
  ui: {
    kicker: 'Novidade',
    flowCaption: 'Flow, o painel do responsável',
    phoneCaption: 'TimeTracker, no telemóvel',
    altFlow: 'Flow, o painel do responsável: ecrã de {tool}',
    altPhone: 'TimeTracker no telemóvel: ecrã de {tool}',
    flowOnly: 'Esta ferramenta usa-se no painel Flow: não é preciso nada no telemóvel dos seus colaboradores.',
    seeAlso: 'Para verificações elétricas, caldeiras e gases fluorados há ferramentas dedicadas:',
  },
  sections: {
    sicurezza: {
      title: 'Novas ferramentas para a segurança privada: ronda, trabalho isolado, passagem de turno e Emergências',
      intro: 'Quando escolhe o setor, o GeoTapp ativa só as ferramentas do seu ofício. Na segurança privada são três, mais o módulo Emergências, que vale para todos os setores. Cada uma tem a sua parte no Flow, onde decide e controla, e a sua parte no telemóvel do vigilante.',
    },
    pulizie: {
      title: 'Novas ferramentas para a limpeza: controlo de qualidade e fichas de segurança',
      intro: 'Duas ferramentas pensadas para as reclamações e os controlos que uma empresa de limpeza enfrenta todas as semanas. Ativam-se quando indica o setor; as outras ficam escondidas.',
    },
    elettricisti: {
      title: 'Novas ferramentas para eletricistas: medições de fim de obra e calendário de inspeções',
      intro: 'Para quem fecha uma instalação e para quem tem de se lembrar das inspeções periódicas dos clientes. O GeoTapp recolhe, formata e lembra: as medições, os termos de responsabilidade e as assinaturas ficam com quem os faz.',
    },
    edilizia: {
      title: 'Novas ferramentas para a construção: documentos das empresas e estimativa de mão de obra',
      intro: 'Duas ferramentas para quem coordena obras com subempreiteiros, pensadas para chegar às reuniões com os papéis já em ordem. Usam-se no Flow, o painel do responsável.',
    },
    idraulici: {
      title: 'Novas ferramentas para canalizadores e técnicos de climatização: caldeiras e registo de gases fluorados',
      intro: 'O trabalho que volta todos os anos e que se esquece mesmo quando é preciso: chamar os clientes para a revisão da instalação e manter em ordem os equipamentos com gases fluorados.',
    },
    installatori: {
      title: 'Novas ferramentas para instaladores: entrega com assinatura e armazém da carrinha',
      intro: 'Duas ferramentas para as duas coisas que lhe fazem perder tempo em cada trabalho: fechar a entrega com o cliente e saber o que há mesmo na carrinha.',
    },
    manutenzione: {
      title: 'Novas ferramentas para a manutenção: tempos de intervenção e QR nos equipamentos',
      intro: 'Para quem trabalha com contratos de serviço e muitos equipamentos espalhados por vários edifícios: saber quanto tempo resta para cada pedido e encontrar o histórico de uma máquina num gesto.',
    },
    impianti: {
      title: 'Novas ferramentas para instaladores de sistemas: entrega com assinatura e armazém da carrinha',
      intro: 'Esta página fala a quem monta e entrega instalações, de qualquer tipo: por isso encontra aqui as duas ferramentas que servem a todos, entrega com assinatura e armazém da carrinha. As verificações elétricas e os controlos de caldeiras são ofícios à parte e têm ferramentas dedicadas.',
    },
  },
  tools: {
    giro_ronda: {
      title: 'Ronda',
      body: 'São três da manhã e o cliente quer saber se a ronda passou por todos os pontos do armazém. No Flow desenha os pontos no mapa e define as rondas com os respetivos horários; o vigilante, ao passar, toca em «Passagem» no telemóvel. De manhã tem o relatório da noite, já formatado.',
      note: 'A posição só é lida no momento em que o vigilante toca em «Passagem»: entre um ponto e outro não se regista nada.',
    },
    lavoratore_isolato: {
      title: 'Trabalho isolado',
      body: 'Um vigilante sozinho num local, de noite. Para cada instalação escolhe um plano com o intervalo que preferir: a essas horas o telemóvel pergunta «Está tudo bem?» e, se a resposta não chegar, avisa o coordenador. No Flow vê os turnos em curso e o histórico de quem respondeu e quando.',
      note: 'Nenhuma posição é enviada. É uma ferramenta de apoio: não substitui as medidas de segurança previstas para quem trabalha sozinho.',
    },
    consegne_turno: {
      title: 'Passagem de turno',
      body: 'Às seis o vigilante da noite deixa o local ao da manhã. Antes eram chaves na caixa e uma mensagem de voz; agora, no fim do turno, escreve notas, chaves e anomalias para quem chega, que as assume no telemóvel. No Flow vê as passagens por assumir e as anomalias abertas. O histórico não se pode alterar.',
    },
    emergenze: {
      title: 'Emergências e simulacros',
      body: 'Simulacro de evacuação num edifício ou num evento: o coordenador escolhe o cenário e toca na planta o ponto do perigo. Cada pessoa da equipa recebe no telemóvel o seu papel, o que fazer e as saídas por ordem, e responde com um toque: presente, a caminho, não posso. O painel mostra quem respondeu e ao fim de quanto tempo; os planos abrem-se mesmo sem rede.',
      note: 'É uma ferramenta de coordenação e de treino: não substitui nem valida o seu plano de emergência, e uma notificação pode não chegar, por isso cada um confirma.',
    },
    qualita_pulizie: {
      title: 'Controlo de qualidade',
      body: 'O responsável do cliente diz que o terceiro piso não foi bem limpo. A encarregada percorre a área com a lista de itens, marca conforme, não conforme ou não aplicável e anexa a fotografia. No Flow cada item tem um peso de 1 a 3, a pontuação do mês é por local e por área, e no fim do mês sai o PDF para mostrar ao cliente, com as intervenções em aberto.',
    },
    schede_consumi: {
      title: 'Fichas de segurança e consumos',
      body: 'Quem fiscaliza quer ver a ficha de dados de segurança do produto que está no carrinho. No Flow cada local tem os seus produtos, cada um com a ficha em PDF, e vê os levantamentos e os custos do mês. No telemóvel as fichas leem-se mesmo onde não há rede, e o levantamento regista-se na hora.',
    },
    verifiche_misure: {
      title: 'Verificações e medições',
      body: 'Quadro fechado, último dia de obra: continuidade, isolamento, diferenciais, terra. O eletricista insere cada medição no telemóvel com o resultado e a fotografia do aparelho; o Flow reúne as medições por obra e formata-as como anexo ao termo de responsabilidade e ao certificado de exploração (RTIEBT).',
      note: 'O GeoTapp recolhe e formata: não verifica, não valida, não garante a conformidade. O termo de responsabilidade e a assinatura ficam com o técnico responsável pela instalação.',
    },
    impianti_terra: {
      title: 'Calendário de inspeções elétricas',
      body: 'Para cada cliente regista a data da última inspeção periódica da instalação elétrica: o Flow avisa antes do prazo, para não dar por ele quando já passou. A inspeção periódica faz-se através de uma entidade inspetora reconhecida (DL 96/2017).',
      note: 'As datas são inseridas pela sua empresa: o GeoTapp lembra-as, não faz a inspeção e não diz se está válida.',
    },
    documenti_imprese: {
      title: 'Documentos das empresas',
      body: 'Antes de deixar um subempreiteiro entrar em obra quer ter os documentos dele em ordem e lembrar-se de quando caducam. O Flow mantém o calendário dos documentos de cada empresa subempreiteira e avisa antes da data. Os documentos e os prazos são os que a sua empresa indica.',
      note: 'Avisa antes do prazo, não diz se um documento é válido: isso verifica-o você ou o seu consultor.',
    },
    congruita: {
      title: 'Estimativa de mão de obra',
      body: 'No fim da obra o consultor pergunta quanto pesa a mão de obra no valor dos trabalhos. O Flow faz uma estimativa interna para cada obra com as horas registadas e exporta-a em CSV ou PDF, pronta a enviar.',
      note: 'É uma estimativa interna, não um cálculo oficial nem um requisito legal: serve para a sua própria análise de custos.',
    },
    caldaie: {
      title: 'Controlos de caldeiras',
      body: 'Setembro: vários clientes têm a revisão a caducar. O Flow mostra as instalações a contactar no mês e prepara o rascunho da mensagem ao cliente, que só sai se a enviar você. No telemóvel o técnico tem a lista de instalações com os prazos e preenche o relatório de intervenção com as medições.',
      note: 'As inspeções das instalações de gás fazem-se por entidade inspetora (DL 97/2017). O GeoTapp recolhe e formata os dados do técnico, não verifica nem garante a conformidade.',
    },
    fgas: {
      title: 'Registo de gases fluorados',
      body: 'Um equipamento com gases fluorados tem uma carga, um equivalente em CO2 e um historial de intervenções. No Flow vê os equipamentos e o que há a comunicar; do telemóvel o técnico abre o registo e acrescenta logo uma nova intervenção, sem copiar à noite.',
      note: 'A comunicação anual via SILiAmb, até 31 de março (DL 145/2017), é feita pelo técnico certificado ou pela empresa: o GeoTapp não a envia.',
    },
    consegna_firma: {
      title: 'Entrega com assinatura',
      body: 'Acabou a montagem. O técnico lê com o telemóvel o código de barras de cada número de série, tira as fotografias finais e faz o cliente assinar no ecrã. Sai um auto de entrega em PDF com o seu logótipo, os dados da empresa e o código de barras de cada número de série, que entra no relatório do trabalho. No Flow vê as entregas do mês e escolhe o aspeto do auto: logótipo, dados, textos, cor.',
    },
    magazzino_furgone: {
      title: 'Armazém da carrinha',
      body: 'O técnico chega ao cliente e descobre que já não tem a ligação certa. No telemóvel vê o que há na carrinha e o que está a acabar, e regista o material usado em cada trabalho. No Flow define os mínimos por carrinha, vê o que há a repor e quanto custa o material de cada trabalho.',
    },
    sla: {
      title: 'Tempos de intervenção (SLA)',
      body: 'O contrato com o condomínio diz em quanto tempo aceitar um pedido e em quanto tempo resolvê-lo. No Flow cada pedido mostra o tempo que resta para uma coisa e para a outra, por contrato; no fim do mês há o relatório. No telemóvel o técnico vê os pedidos atribuídos, assume-os e marca-os como resolvidos.',
    },
    qr_apparecchi: {
      title: 'QR nos equipamentos',
      body: 'Diante de uma bomba ou de um quadro, o técnico lê a etiqueta QR e tem logo o historial e as intervenções desse equipamento. Quem lê sem conta, por exemplo um inquilino, pode comunicar um problema. No Flow gere os equipamentos e imprime as etiquetas.',
    },
  },
  shots: {
    flow_emergenze_attiva: 'Flow: o coordenador escolhe o cenário e toca na planta o ponto do perigo para ativar o simulacro',
    flow_emergenze_evento: 'Flow: painel do simulacro em curso, com quem respondeu e em quanto tempo',
    flow_emergenze_evento_persone: 'Flow: a lista das pessoas da equipa com a sua resposta, presente, a caminho ou não posso',
    flow_emergenze_sito: 'Flow: a planta do local com saídas, equipamentos de combate e zonas',
    flow_emergenze_protocolli: 'Flow: os protocolos por cenário e por papel',
    flow_emergenze_squadre: 'Flow: as equipas com os certificados, e quem falta fica assinalado',
    flow_emergenze_scadenzario: 'Flow: calendário dos certificados e das verificações dos equipamentos de segurança',
    tt_emergenze_dashboard: 'Telemóvel: o ecrã inicial com o aviso de simulacro',
    tt_emergenze_indicazioni: 'Telemóvel: as indicações pessoais, com o papel e o que fazer',
    tt_emergenze_indicazioni_2: 'Telemóvel: as saídas por ordem, sem as bloqueadas',
    tt_emergenze_risposta: 'Telemóvel: a resposta com um toque, presente, a caminho ou não posso',
    tt_emergenze_piani: 'Telemóvel: os planos, consultáveis mesmo sem rede',
  },
};

export default copy;
