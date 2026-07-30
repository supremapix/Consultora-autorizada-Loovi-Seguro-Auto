export interface CidadeInfo {
  slug: string;
  name: string;
  distanceFromCuritiba: string;
  mainRoads: string[];
  description: string;
  avgArrivalMinutes: number;
  faqs: { q: string; a: string }[];
}

export const CIDADES_METROPOLITANAS: CidadeInfo[] = [
  {
    slug: 'sao-jose-dos-pinhais',
    name: 'São José dos Pinhais',
    distanceFromCuritiba: '15 km do centro',
    mainRoads: ['Avenida das Torres (Comendador Franco)', 'BR-277', 'BR-376', 'Contorno Leste'],
    description: 'São José dos Pinhais é a segunda maior cidade e economia da Região Metropolitana de Curitiba, abrigando o Aeroporto Internacional Afonso Pena e grandes montadoras como Renault e Nissan. Com tráfego pesado nas rodovias BR-376 e BR-277, além do alto movimento urbano de Uber, 99 e frotas, ter o Seguro Loovi garante atendimento de guincho em até 20 minutos, 100% da FIPE e cobertura de danos a terceiros até R$ 100.000 com suporte da consultora Bárbara Durães.',
    avgArrivalMinutes: 20,
    faqs: [
      {
        q: 'O seguro Loovi tem reboque no Aeroporto Afonso Pena em São José dos Pinhais?',
        a: 'Sim! A assistência 24h atende rapidamente no Aeroporto Afonso Pena e rodovias de acesso.'
      },
      {
        q: 'Motorista de aplicativo de São José dos Pinhais tem garantia de 100% FIPE?',
        a: 'Com certeza! Garantia integral da Tabela FIPE sem desconto por perfil de motorista.'
      }
    ]
  },
  {
    slug: 'pinhais',
    name: 'Pinhais',
    distanceFromCuritiba: '10 km do centro',
    mainRoads: ['Avenida Camilo di Lellis', 'Rodovia Deputado João Leopoldo Jacomel (PR-415)', 'Avenida Iraí'],
    description: 'Pinhais é um próspero município colado à zona leste de Curitiba, famoso pela Rodovia João Leopoldo Jacomel e pelo Expotrade. Por possuir forte densidade populacional e rotas diárias para a capital, motoristas de Pinhais economizam e rodam protegidos com a assinatura mensal do Seguro Loovi.',
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'Como acionar o seguro Loovi se o carro quebrar na Rodovia João Leopoldo Jacomel em Pinhais?',
        a: 'Basta ligar no 0800 948 4888 ou usar o app Loovi para solicitar guincho imediato.'
      }
    ]
  },
  {
    slug: 'colombo',
    name: 'Colombo',
    distanceFromCuritiba: '18 km do centro',
    mainRoads: ['Rodovia da Uva (PR-417)', 'Estrada da Ribeira (BR-476)', 'Avenida São Gabriel'],
    description: 'Colombo é o maior município da zona norte da RMC, conhecido pela produção hortifrutigranjeira, turismo rural e forte comércio ao longo da Estrada da Ribeira e Rodovia da Uva. A Loovi assegura cobertura de colisão, furto, roubo com rastreador grátis e ressarcimento total da Tabela FIPE para os colombenses.',
    avgArrivalMinutes: 20,
    faqs: [
      {
        q: 'A Loovi aceita veículos antigos de moradores de Colombo?',
        a: 'Sim! Veículos fabricados a partir de 1986 são 100% aceitos sem restrições.'
      }
    ]
  },
  {
    slug: 'araucaria',
    name: 'Araucária',
    distanceFromCuritiba: '25 km do centro',
    mainRoads: ['Rodovia do Xisto (BR-476)', 'Avenida Archelau de Almeida Torres', 'Rodovia do Tatuquara'],
    description: 'Araucária é o principal polo petroquímico e industrial do Paraná, sede da REPAR. O tráfego intenso de caminhões pesados e veículos de trabalhadores na Rodovia do Xisto exige a proteção completa do Seguro Loovi com franquia reduzida e carro reserva.',
    avgArrivalMinutes: 22,
    faqs: [
      {
        q: 'O seguro Loovi cobre acidentes na Rodovia do Xisto em Araucária?',
        a: 'Sim! Cobertura completa contra colisão, capotamento e danos a terceiros.'
      }
    ]
  },
  {
    slug: 'campo-largo',
    name: 'Campo Largo',
    distanceFromCuritiba: '30 km do centro',
    mainRoads: ['BR-277 (Trecho Curitiba - Campo Largo)', 'Avenida Centenário', 'Rua Engenheiro Tourinho'],
    description: 'Conhecida como a Capital da Louça, Campo Largo fica estrategicamente na saída de Curitiba para o interior do Paraná pela BR-277. A Loovi garante guincho 24h sem limite de quilometragem conforme a modalidade do plano e socorro mecânico para você e sua família.',
    avgArrivalMinutes: 25,
    faqs: [
      {
        q: 'O seguro Loovi atende na BR-277 no trecho entre Curitiba e Campo Largo?',
        a: 'Sim, socorro rodoviário 24 horas pronto para emergências na BR-277.'
      }
    ]
  },
  {
    slug: 'campo-magro',
    name: 'Campo Magro',
    distanceFromCuritiba: '20 km do centro',
    mainRoads: ['Estrada Principal de Campo Magro (PR-090)', 'Rua Silveira Sampaio'],
    description: 'Município de ecoturismo e gastronomia rural colado a Santa Felicidade e Butiatuvinha. Estradas de chão e rodovias estaduais exigem proteção de pneus, vidros e socorro em pane mecânica, garantidos pelo Seguro Loovi.',
    avgArrivalMinutes: 25,
    faqs: [
      {
        q: 'O reboque da Loovi busca o carro em vias rurais de Campo Magro?',
        a: 'Sim, a rede de guinchos atende chamados urbanos e rurais em Campo Magro.'
      }
    ]
  },
  {
    slug: 'almirante-tamandare',
    name: 'Almirante Tamandaré',
    distanceFromCuritiba: '15 km do centro',
    mainRoads: ['Rodovia dos Minérios (PR-092)', 'Avenida Emilio Johnson'],
    description: 'Almirante Tamandaré é rota de ligação entre o norte da RMC e a capital pela movimentada Rodovia dos Minérios. Proteja seu carro contra colisões e quedas em canaletas com o seguro sem burocracia da Loovi ativado por Bárbara Durães.',
    avgArrivalMinutes: 20,
    faqs: [
      {
        q: 'Como cotar seguro na Rodovia dos Minérios em Almirante Tamandaré?',
        a: 'Fale com a executiva Bárbara Durães no WhatsApp (41) 99232-8005.'
      }
    ]
  },
  {
    slug: 'fazenda-rio-grande',
    name: 'Fazenda Rio Grande',
    distanceFromCuritiba: '28 km do centro',
    mainRoads: ['BR-116 (Trecho Curitiba - Fazenda Rio Grande)', 'Avenida Brasil', 'Avenida das Nações'],
    description: 'Fazenda Rio Grande é um dos municípios que mais crescem no Brasil, na zona sul da RMC ligada pela BR-116. Moradores da Fazenda encontram na Loovi a proteção perfeita para Uber, 99 e carros particulares com mensalidades que cabem no bolso.',
    avgArrivalMinutes: 22,
    faqs: [
      {
        q: 'Qual o valor da mensalidade do seguro em Fazenda Rio Grande?',
        a: 'A partir de R$ 98,56/mês com pagamento recorrente que não bloqueia o limite do cartão.'
      }
    ]
  },
  {
    slug: 'quatro-barras',
    name: 'Quatro Barras',
    distanceFromCuritiba: '25 km do centro',
    mainRoads: ['BR-116 (Rodovia Régis Bittencourt)', 'Avenida Dom Pedro II'],
    description: 'Polo industrial e de preservação ambiental no pé da Serra do Mar, cortado pela BR-116 rumo a São Paulo. A Loovi assegura rastreamento e proteção total para automóveis de Quatro Barras.',
    avgArrivalMinutes: 25,
    faqs: [
      {
        q: 'A Loovi tem reboque no trecho da BR-116 em Quatro Barras?',
        a: 'Sim! Atendimento de guincho 24h sem complicação.'
      }
    ]
  },
  {
    slug: 'campina-grande-do-sul',
    name: 'Campina Grande do Sul',
    distanceFromCuritiba: '30 km do centro',
    mainRoads: ['BR-116', 'Avenida Presidente Juscelino Kubitschek'],
    description: 'Com o Hospital Angelina Caron e acesso à represa do Capivari, Campina Grande do Sul atrai milhares de motoristas. Proteção Loovi ativada 100% online pela consultora Bárbara Durães.',
    avgArrivalMinutes: 25,
    faqs: [
      {
        q: 'Atende emergências no Hospital Angelina Caron em Campina Grande do Sul?',
        a: 'Sim, atendimento rápido de chaveiro, bateria e reboque no entorno do hospital e cidade.'
      }
    ]
  },
  {
    slug: 'mandirituba',
    name: 'Mandirituba',
    distanceFromCuritiba: '40 km do centro',
    mainRoads: ['BR-116 Sul', 'Estrada de Mandirituba'],
    description: 'Polo camponês e produtor agrícola no corredor sul da BR-116. A Loovi entrega seguro confiável com proteção contra roubo, furto, colisão e fenômenos da natureza.',
    avgArrivalMinutes: 30,
    faqs: [
      {
        q: 'Como funciona o ressarcimento FIPE em Mandirituba?',
        a: 'Até 100% da Tabela FIPE paga de forma rápida e sem burocracia após auditoria documental.'
      }
    ]
  },
  {
    slug: 'rio-branco-do-sul',
    name: 'Rio Branco do Sul',
    distanceFromCuritiba: '32 km do centro',
    mainRoads: ['Rodovia dos Minérios (PR-092)', 'Avenida Ermírio de Moraes'],
    description: 'Cidade de mineração de calcário e cimento na PR-092 com intenso tráfego de caminhões. Proteja seu carro particular ou de trabalho com a Loovi.',
    avgArrivalMinutes: 30,
    faqs: [
      {
        q: 'O Seguro Loovi cobre colisão com caminhões em Rio Branco do Sul?',
        a: 'Sim, com cobertura de colisão parcial, perda total e danos a terceiros.'
      }
    ]
  },
  {
    slug: 'itaperucu',
    name: 'Itaperuçu',
    distanceFromCuritiba: '35 km do centro',
    mainRoads: ['PR-092', 'Avenida Crispim Furquim de Siqueira'],
    description: 'Vizinha de Rio Branco do Sul no vale dos minérios. A Loovi atende a população local com socorro 24h, chaveiro e troca de pneu.',
    avgArrivalMinutes: 30,
    faqs: [
      {
        q: 'A Loovi aceita carro com GNV ou de leilão em Itaperuçu?',
        a: 'Sim, veículos com GNV, rebaixados e de leilão são 100% aceitos.'
      }
    ]
  },
  {
    slug: 'balsa-nova',
    name: 'Balsa Nova',
    distanceFromCuritiba: '45 km do centro',
    mainRoads: ['PR-510', 'Acesso à BR-277'],
    description: 'Conhecida por Bugre e São Luiz do Purunã, Balsa Nova é rota de ecoturismo e aventura. Rode seguro com a assistência 24h da Loovi no seu celular.',
    avgArrivalMinutes: 30,
    faqs: [
      {
        q: 'Tem guincho em São Luiz do Purunã / Balsa Nova?',
        a: 'Sim, guincho 24h em toda a região de Balsa Nova e Purunã.'
      }
    ]
  },
  {
    slug: 'tijucas-do-sul',
    name: 'Tijucas do Sul',
    distanceFromCuritiba: '55 km do centro',
    mainRoads: ['BR-376 (Rota para Santa Catarina)', 'PR-281'],
    description: 'Situada na divisa do Paraná com Santa Catarina ao longo da BR-376 (Serra do Mar). Contar com o seguro Loovi garante reboque rodoviário e socorro para toda a família.',
    avgArrivalMinutes: 35,
    faqs: [
      {
        q: 'O seguro Loovi cobre guincho na BR-376 sentido Santa Catarina?',
        a: 'Sim! Assistência 24h com abrangência nacional em todas as rodovias do Brasil.'
      }
    ]
  }
];
