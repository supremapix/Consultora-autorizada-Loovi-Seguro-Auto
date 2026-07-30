export interface BairroInfo {
  slug: string;
  name: string;
  zone: 'Central' | 'Norte' | 'Sul' | 'Leste' | 'Oeste';
  description: string;
  landmarks: string[];
  mainAvenues: string[];
  avgArrivalMinutes: number;
  faqs: { q: string; a: string }[];
}

export const BAIRROS_CURITIBA: BairroInfo[] = [
  {
    slug: 'abranches',
    name: 'Abranches',
    zone: 'Norte',
    description: 'O bairro Abranches, localizado na zona norte de Curitiba, possui vias de forte movimentação como a Rua Mateus Leme. Com o crescimento urbano na região, proteger seu veículo contra colisão, furto e falta de combustível é fundamental. A executiva Bárbara Durães oferece cotação personalizada do Seguro Loovi para moradores do Abranches com assistência 24h e 100% da FIPE.',
    landmarks: ['Parque Barreirinha (divisa)', 'Ópera de Arame (proximidades)', 'Rua Mateus Leme'],
    mainAvenues: ['Rua Mateus Leme', 'Rua José Gulin', 'Rua Domingos Antonio Moro'],
    avgArrivalMinutes: 20,
    faqs: [
      {
        q: 'O Seguro Loovi tem cobertura para reboque 24h no bairro Abranches?',
        a: 'Sim! O guincho 24 horas da Loovi atende rapidamente em todas as ruas do Abranches e vias de acesso ao centro de Curitiba.'
      },
      {
        q: 'Como solicitar simulação do seguro no Abranches?',
        a: 'Basta enviar uma mensagem no WhatsApp da executiva Bárbara Durães para receber sua cotação instantânea em minutos.'
      }
    ]
  },
  {
    slug: 'agua-verde',
    name: 'Água Verde',
    zone: 'Central',
    description: 'O Água Verde é um dos bairros mais valorizados e movimentados de Curitiba, com vias de grande fluxo como a Avenida República Argentina, Avenida Iguaçu e Getúlio Vargas. Devido ao alto volume diário de veículos e riscos de colisão e furtos em estacionamentos de rua, ter o Seguro Loovi garante cobertura de 100% da FIPE, proteção contra terceiros de até R$ 100 mil e guincho rápido na região.',
    landmarks: ['Praça do Japão', 'Clube Curitibano', 'Avenida República Argentina'],
    mainAvenues: ['Avenida República Argentina', 'Avenida Iguaçu', 'Avenida Getúlio Vargas', 'Avenida Sete de Setembro'],
    avgArrivalMinutes: 15,
    faqs: [
      {
        q: 'Qual o tempo médio do guincho Loovi no bairro Água Verde em Curitiba?',
        a: 'Devido à localização central e rotas estratégicas, o atendimento de socorro mecânico e guincho 24h no Água Verde leva em média 15 minutos.'
      },
      {
        q: 'A Loovi aceita carros de moradores do Água Verde sem análise de perfil?',
        a: 'Sim, a aceitação é garantida sem restrição por idade, gênero ou consulta ao SPC/Serasa.'
      }
    ]
  },
  {
    slug: 'ahu',
    name: 'Ahú',
    zone: 'Norte',
    description: 'Tranquilo e residencial, o Ahú abriga importantes sedes administrativas e residências na zona norte de Curitiba, cortado pela Avenida Anita Garibaldi e Rua Justo Manfron. Moradores do Ahú contam com a proteção completa da Loovi sem burocracia e com a consultoria exclusiva da executiva Bárbara Durães.',
    landmarks: ['Centro Cívico (divisa)', 'Avenida Anita Garibaldi', 'Parque São Lourenço (proximidades)'],
    mainAvenues: ['Avenida Anita Garibaldi', 'Rua Brasilino Moura', 'Rua Marechal Hermes'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'O seguro Loovi cobre danos a terceiros para quem circula no Ahú?',
        a: 'Sim, oferecemos cobertura de até R$ 100.000 para danos materiais e corporais a terceiros com indenização sem complicações.'
      }
    ]
  },
  {
    slug: 'alto-boqueirao',
    name: 'Alto Boqueirão',
    zone: 'Sul',
    description: 'Um dos bairros mais populosos da zona sul de Curitiba, o Alto Boqueirão se destaca pelo comércio dinâmico e vias com tráfego intenso como a Rua Eduardo Pinto da Rocha e Rua Francisco Derosso. A Loovi assegura proteção total para carros de passeio, Uber e entregadores na região com pagamentos mensais recorrentes sem comprometer o cartão.',
    landmarks: ['Zoológico de Curitiba (proximidades)', 'Rua Eduardo Pinto da Rocha', 'Rua Francisco Derosso'],
    mainAvenues: ['Rua Eduardo Pinto da Rocha', 'Rua Francisco Derosso', 'Rua Pastor Antonio Polito'],
    avgArrivalMinutes: 20,
    faqs: [
      {
        q: 'Motorista de aplicativo do Alto Boqueirão recebe 100% da Tabela FIPE?',
        a: 'Com certeza! A Loovi garante 100% FIPE para Uber, 99 e táxis no Alto Boqueirão em caso de perda total ou roubo.'
      }
    ]
  },
  {
    slug: 'alto-da-gloria',
    name: 'Alto da Glória',
    zone: 'Central',
    description: 'Bairro nobre e histórico de Curitiba, o Alto da Glória abriga o Estádio Couto Pereira e importantes vias de acesso ao centro. Nos dias de jogos e eventos, a região registra tráfego elevado e risco aumentado de colisões e pequenos acidentes. O seguro Loovi protege seu carro com rastreador gratuito e socorro 24h na porta de casa.',
    landmarks: ['Estádio Couto Pereira', 'Igreja Nossa Senhora da Glória', 'Avenida João Gualberto'],
    mainAvenues: ['Avenida João Gualberto', 'Rua Ubaldino do Amaral', 'Rua Amintas de Barros'],
    avgArrivalMinutes: 15,
    faqs: [
      {
        q: 'O rastreador da Loovi é grátis para quem mora no Alto da Glória?',
        a: 'Sim, o rastreador inteligente Loovi é fornecido e instalado sem custo adicional em modelos elegíveis.'
      }
    ]
  },
  {
    slug: 'alto-da-rua-xv',
    name: 'Alto da Rua XV',
    zone: 'Central',
    description: 'Conhecido por sua gastronomia e avenidas movimentadas como a Rua XV de Novembro e Conselheiro Carrão, o Alto da Rua XV exige um seguro veicular moderno e ágil. Com o suporte direto da consultora Bárbara Durães, contratar Loovi garante cobertura completa de vidros, faróis, retrovisores e Guincho 24h.',
    landmarks: ['Praça das Nações', 'Rua XV de Novembro', 'Avenida Nossa Senhora da Luz'],
    mainAvenues: ['Rua XV de Novembro', 'Avenida Nossa Senhora da Luz', 'Rua Conselheiro Carrão'],
    avgArrivalMinutes: 15,
    faqs: [
      {
        q: 'Como funciona a proteção contra quebra de vidros no Alto da Rua XV?',
        a: 'Cobre troca e reparo de para-brisa, vidros laterais, traseiro, faróis e retrovisores com agendamento rápido em Curitiba.'
      }
    ]
  },
  {
    slug: 'atuba',
    name: 'Atuba',
    zone: 'Norte',
    description: 'Situado no limite entre Curitiba e Colombo, o Atuba é cortado pelo Trevo do Atuba e pela Linha Verde Norte, com grande fluxo de caminhões e automóveis. Proteja seu carro contra colisão e acidentes em rodovias com o seguro Loovi, sem limite de Km de reboque conforme o plano.',
    landmarks: ['Trevo do Atuba', 'Linha Verde Norte', 'Parque Atuba'],
    mainAvenues: ['Avenida Mascarenhas de Moraes', 'Estrada da Ribeira', 'Linha Verde (BR-476)'],
    avgArrivalMinutes: 20,
    faqs: [
      {
        q: 'A Loovi atende acidentes na Linha Verde no bairro Atuba?',
        a: 'Sim, a assistência 24h conta com equipes de emergência prontas para socorro e guincho no trecho do Atuba.'
      }
    ]
  },
  {
    slug: 'augusta',
    name: 'Augusta',
    zone: 'Oeste',
    description: 'Localizado na zona oeste próximo à Cidade Industrial, o bairro Augusta concentra empresas e áreas residenciais. Moradores e trabalhadores da região encontram na Loovi a proteção ideal contra roubo e furto, com rastreamento ativo e ressarcimento de até 100% da FIPE.',
    landmarks: ['Contorno Sul', 'Divisa com Campo Magro', 'Rua Eduardo Sprada'],
    mainAvenues: ['Rua Eduardo Sprada', 'Contorno Sul (BR-376)', 'Estrada Velha de Barigui'],
    avgArrivalMinutes: 22,
    faqs: [
      {
        q: 'Aceita carros com passagem por leilão no bairro Augusta?',
        a: 'Sim, a Loovi aceita veículos com histórico de leilão, rebaixados e com GNV no bairro Augusta.'
      }
    ]
  },
  {
    slug: 'bacacheri',
    name: 'Bacacheri',
    zone: 'Norte',
    description: 'Com o famoso Parque Bacacheri e o Aeroclube de Curitiba, o bairro Bacacheri conta com avenidas movimentadas como a Avenida Erasto Gaertner e Prefeito Erasto Gaertner. Garanta o seguro do seu veículo sem burocracia com a executiva Bárbara Durães e rode seguro por toda a zona norte.',
    landmarks: ['Parque Bacacheri', 'Aeroclube do Paraná', 'Cindacta II'],
    mainAvenues: ['Avenida Erasto Gaertner', 'Rua Nicarágua', 'Avenida Prefeito Erasto Gaertner'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'Qual o valor do seguro Loovi no Bacacheri?',
        a: 'Planos a partir de R$ 98,56/mês com pagamento recorrente que não compromete o limite do seu cartão de crédito.'
      }
    ]
  },
  {
    slug: 'bairro-alto',
    name: 'Bairro Alto',
    zone: 'Norte',
    description: 'O Bairro Alto é um dos polos residenciais e comerciais mais ativos da região norte, conectado à Linha Verde e ao Jockey Plaza Shopping. Para proteger seu carro no trânsito diário do Bairro Alto, o seguro Loovi entrega reboque 24h, chaveiro, pane elétrica e carro reserva.',
    landmarks: ['Unidade de Saúde Bairro Alto', 'Acesso ao Jockey Plaza Shopping', 'Rua Alberico Flores Bueno'],
    mainAvenues: ['Rua Alberico Flores Bueno', 'Rua Marco Polo', 'Rua José de Oliveira Franco'],
    avgArrivalMinutes: 20,
    faqs: [
      {
        q: 'Posso contratar o seguro Loovi no Bairro Alto pelo WhatsApp?',
        a: 'Sim! A contratação é 100% digital e pode ser feita diretamente no WhatsApp da executiva Bárbara Durães.'
      }
    ]
  },
  {
    slug: 'barreirinha',
    name: 'Barreirinha',
    zone: 'Norte',
    description: 'Rico em áreas verdes como o Parque Barreirinha, o bairro se destaca pelo ambiente residencial e vias importantes como a Av. Anita Garibaldi. Com a Loovi, moradores da Barreirinha garantem proteção total contra alagamentos, queda de árvores e colisões.',
    landmarks: ['Parque Barreirinha', 'Terminal da Barreirinha', 'Avenida Anita Garibaldi'],
    mainAvenues: ['Avenida Anita Garibaldi', 'Rua Fernando de Noronha', 'Rua Anita Garibaldi'],
    avgArrivalMinutes: 20,
    faqs: [
      {
        q: 'O seguro Loovi cobre danos causados por tempestades e queda de árvores na Barreirinha?',
        a: 'Sim! Fenômenos da natureza como granizo, alagamento e queda de árvore estão inclusos na cobertura contra colisão e desastres.'
      }
    ]
  },
  {
    slug: 'batel',
    name: 'Batel',
    zone: 'Central',
    description: 'O Batel é o centro financeiro e gastronômico de alta sofisticação de Curitiba, cortado pela Avenida Batel e Praça da Espanha. Para proprietários de SUVs, sedans de luxo, híbridos e elétricos que circulam no Batel, o Seguro Loovi oferece cobertura completa sem burocracia, proteção a terceiros de até R$ 100.000 e atendimento VIP com a executiva Bárbara Durães.',
    landmarks: ['Praça da Espanha', 'Shopping Pátio Batel', 'Avenida Batel', 'Praça do do Batel'],
    mainAvenues: ['Avenida Batel', 'Rua Bispo Dom José', 'Avenida Visconde de Guarapuava', 'Avenida Silva Jardim'],
    avgArrivalMinutes: 12,
    faqs: [
      {
        q: 'A Loovi aceita veículos importados e elétricos no bairro Batel?',
        a: 'Sim, aceitamos veículos premium, importados, 100% elétricos e híbridos com condições especiais no Batel.'
      },
      {
        q: 'Como é o atendimento da executiva Bárbara Durães no Batel?',
        a: 'Atendimento humanizado, rápido e direto por WhatsApp para tirar todas as dúvidas e enviar sua cotação.'
      }
    ]
  },
  {
    slug: 'bigorrilho',
    name: 'Bigorrilho',
    zone: 'Central',
    description: 'Também conhecido como Champagnat, o Bigorrilho é famoso pela Alameda Princesa Izabel e Praça da Ucrânia. Por ser um bairro denso e movimentado, incidentes de trânsito e pequenos acidentes são comuns. Proteja seu automóvel com a Loovi com pagamento mensal sem prender seu cartão.',
    landmarks: ['Praça da Ucrânia', 'Alameda Princesa Izabel', 'Parque Barigui (divisa)'],
    mainAvenues: ['Alameda Princesa Izabel', 'Rua Padre Anchieta', 'Rua Martim Afonso'],
    avgArrivalMinutes: 14,
    faqs: [
      {
        q: 'Qual o tempo de chegada da assistência 24h no Bigorrilho / Champagnat?',
        a: 'Em média de 12 a 15 minutos, cobrindo panes, troca de pneu e reboque imediato.'
      }
    ]
  },
  {
    slug: 'boa-vista',
    name: 'Boa Vista',
    zone: 'Norte',
    description: 'O bairro Boa Vista abriga a Rua Fernando de Noronha e Avenida Paraná, sendo um importante entroncamento comercial da zona norte. A Loovi entrega proteção total contra roubo e furto qualificado com rastreador de última geração instalado sem custo extra.',
    landmarks: ['Terminal do Boa Vista', 'Avenida Paraná', 'Rua Fernando de Noronha'],
    mainAvenues: ['Avenida Paraná', 'Rua Fernando de Noronha', 'Rua Jovino do Rosário'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'Preciso pagar para instalar o rastreador Loovi no Boa Vista?',
        a: 'Não! O rastreador inteligente é fornecido e instalado gratuitamente para veículos elegíveis.'
      }
    ]
  },
  {
    slug: 'bom-retiro',
    name: 'Bom Retiro',
    zone: 'Central',
    description: 'Próximo ao Centro Cívico e ao Hospital Pilar, o Bom Retiro conecta vias estratégicas como a Rua Nilo Peçanha. Garanta socorro 24h em qualquer hora do dia ou da noite com o Seguro Loovi ativado pela consultora Bárbara Durães.',
    landmarks: ['Hospital Pilar', 'Unilivre (proximidades)', 'Rua Nilo Peçanha'],
    mainAvenues: ['Rua Nilo Peçanha', 'Rua Desembargador Hugo Simas', 'Rua Teffé'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'O seguro Loovi tem carência para novos clientes do Bom Retiro?',
        a: 'A ativação é imediata após a vistoria digital simples pelo celular, sem carências demoradas.'
      }
    ]
  },
  {
    slug: 'boqueirao',
    name: 'Boqueirão',
    zone: 'Sul',
    description: 'O Boqueirão é um dos maiores e mais vibrantes bairros comerciais e industriais da zona sul de Curitiba, famoso pela Rua Marechal Floriano Peixoto e Terminal do Boqueirão. Motoristas particulares e profissionais que trafegam pelo Boqueirão contam com 100% da FIPE na Loovi e suporte humanizado no WhatsApp.',
    landmarks: ['Terminal do Boqueirão', 'Rua Marechal Floriano Peixoto', 'Praça do Carmo'],
    mainAvenues: ['Rua Marechal Floriano Peixoto', 'Avenida Marechal Floriano Peixoto', 'Rua Waldemar Loureiro Campos', 'Rua Desembargador Antonio de Paula'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'Uber que trabalha no Boqueirão tem desconto e garantia de 100% FIPE?',
        a: 'Sim! Garantimos 100% da Tabela FIPE para motoristas de app do Boqueirão em caso de sinistro.'
      }
    ]
  },
  {
    slug: 'butiatuvinha',
    name: 'Butiatuvinha',
    zone: 'Norte',
    description: 'Com forte presença gastronômica e chácaras, o Butiatuvinha é cortado pela Avenida Manoel Ribas em direção a Santa Felicidade e Campo Magro. A Loovi atende a região com socorro mecânico, chaveiro e reboque rápido para garantir suas viagens sem preocupações.',
    landmarks: ['Avenida Manoel Ribas', 'Divisa com Santa Felicidade', 'Via do Vinho'],
    mainAvenues: ['Avenida Manoel Ribas', 'Rua Francisco Dallalibera', 'Rua Saturnino Miranda'],
    avgArrivalMinutes: 22,
    faqs: [
      {
        q: 'O seguro cobre acidentes na Av. Manoel Ribas no Butiatuvinha?',
        a: 'Sim, a cobertura contra colisões e danos a terceiros vale para toda a extensão da Av. Manoel Ribas.'
      }
    ]
  },
  {
    slug: 'cabral',
    name: 'Cabral',
    zone: 'Central',
    description: 'O Cabral é um bairro nobre de Curitiba, endereço da executiva Bárbara Durães na Rua São Pedro. Conhecido pela Avenida Paraná e Praça da Bíblia, conta com tráfego constante de veículos executivos. Moradores do Cabral contam com atendimento prioritário e consultoria personalizada presencial ou online.',
    landmarks: ['Praça da Bíblia', 'Terminal do Cabral', 'Rua São Pedro, 593 (Atendimento Bárbara Durães)'],
    mainAvenues: ['Avenida Paraná', 'Rua São Pedro', 'Rua Munhoz da Rocha', 'Avenida Anita Garibaldi'],
    avgArrivalMinutes: 12,
    faqs: [
      {
        q: 'Onde fica o atendimento da consultora Bárbara Durães no Cabral?',
        a: 'Na Rua São Pedro, 593 — Apto 504, Cabral, Curitiba/PR. O atendimento também é feito de forma 100% online por WhatsApp.'
      }
    ]
  },
  {
    slug: 'cachoeira',
    name: 'Cachoeira',
    zone: 'Norte',
    description: 'Localizado no extremo norte de Curitiba na divisa com Almirante Tamandaré, o bairro Cachoeira exige uma cobertura robusta contra furto, roubo e acidentes em vias secundárias. A Loovi oferece assistência 24h com acionamento simples pelo celular.',
    landmarks: ['Divisa com Almirante Tamandaré', 'Parque Barreirinha (proximidades)', 'Rua Flávio Dallegrave'],
    mainAvenues: ['Avenida Anita Garibaldi', 'Rua Flávio Dallegrave', 'Rua Professor Guilherme Butler'],
    avgArrivalMinutes: 22,
    faqs: [
      {
        q: 'Atende no bairro Cachoeira na divisa com Almirante Tamandaré?',
        a: 'Sim, a assistência 24h e o reboque operam sem restrições na divisa dos municípios.'
      }
    ]
  },
  {
    slug: 'cajuru',
    name: 'Cajuru',
    zone: 'Leste',
    description: 'O Cajuru é um grande centro residencial e comercial da zona leste, conectado à BR-277 e Avenida Maurício Fruet. Com alto índice de circulação diária, ter o Seguro Loovi garante reboque nacional, carro reserva e proteção contra danos a terceiros até R$ 100.000.',
    landmarks: ['Terminal do Cajuru', 'Avenida Maurício Fruet', 'Acesso à BR-277'],
    mainAvenues: ['Avenida Maurício Fruet', 'Rua Prefeito Lothário Meissner', 'Rua Professora Olga Balster'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'O Seguro Loovi cobre colisão na BR-277 perto do Cajuru?',
        a: 'Sim, a cobertura contra colisão e terceiros abrange rodovias federais, estaduais e vias urbanas.'
      }
    ]
  },
  {
    slug: 'campina-do-siqueira',
    name: 'Campina do Siqueira',
    zone: 'Oeste',
    description: 'Com o Terminal Campina do Siqueira e o ParkShoppingBarigüi nas proximidades, o bairro concentra vias expressas como a Rua Padre Anchieta e Mário Tourinho. Mantenha seu carro protegido contra qualquer imprevisto com a Loovi e suporte via WhatsApp.',
    landmarks: ['Terminal Campina do Siqueira', 'ParkShoppingBarigüi (proximidades)', 'Rua Mário Tourinho'],
    mainAvenues: ['Rua Mário Tourinho', 'Rua Padre Anchieta', 'Rua Martim Afonso'],
    avgArrivalMinutes: 15,
    faqs: [
      {
        q: 'Qual a vantagem da Loovi na Rua Mário Tourinho?',
        a: 'Sendo um corredor intenso de veículos, contar com o guincho rápido de 15 minutos traz segurança máxima.'
      }
    ]
  },
  {
    slug: 'campo-comprido',
    name: 'Campo Comprido',
    zone: 'Oeste',
    description: 'Bairro em forte expansão imobiliária na zona oeste, o Campo Comprido possui universidades e grandes condomínios residenciais ligados pela Rua Professor Pedro Viriato Parigot de Souza. A Loovi oferece seguro auto democrático sem análise de idade do condutor.',
    landmarks: ['Universidade Positivo', 'Terminal do Campo Comprido', 'Rua Pedro Viriato Parigot de Souza'],
    mainAvenues: ['Rua Professor Pedro Viriato Parigot de Souza', 'Rua Eduardo Sprada', 'Rua Monsenhor Ivo Zanlorenzi'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'Estudantes universitários do Campo Comprido pagam mais caro no seguro Loovi?',
        a: 'Não! A Loovi NÃO faz análise de perfil por idade do condutor. O valor é o mesmo para jovens de 18 anos ou motoristas experientes.'
      }
    ]
  },
  {
    slug: 'campo-de-santana',
    name: 'Campo de Santana',
    zone: 'Sul',
    description: 'Localizado no extremo sul perto da BR-116 e Fazenda Rio Grande, o Campo de Santana tem crescido aceleradamente. Moradores da região contam com o Seguro Loovi para garantir rastreador gratuito, Guincho 24h e ressarcimento integral FIPE.',
    landmarks: ['Acesso à BR-116', 'Divisa com Fazenda Rio Grande', 'Estrada do Ganchinho'],
    mainAvenues: ['BR-116', 'Estrada do Ganchinho', 'Rua Aniolas'],
    avgArrivalMinutes: 22,
    faqs: [
      {
        q: 'Tem guincho no Campo de Santana na divisa com Fazenda Rio Grande?',
        a: 'Sim, a rede de guinchos credenciados da Loovi atende em minutos todo o Campo de Santana e RMC.'
      }
    ]
  },
  {
    slug: 'capao-raso',
    name: 'Capão Raso',
    zone: 'Sul',
    description: 'O Capão Raso é um dos maiores polos de transporte e comércio da zona sul, abrigando a Avenida Brasília e o Terminal do Capão Raso. Para rodar tranquilo pela canaleta de ônibus e vias paralelas, garanta seu seguro veicular mensal sem comprometer seu orçamento com Bárbara Durães.',
    landmarks: ['Terminal do Capão Raso', 'Avenida Brasília', 'Shopping Popular'],
    mainAvenues: ['Avenida Brasília', 'Rua Winston Churchill', 'Avenida das Indústrias'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'Como contratar o Seguro Loovi no Capão Raso?',
        a: 'Directamente no WhatsApp com a consultora Bárbara Durães. Cotação pronta em menos de 3 minutos.'
      }
    ]
  },
  {
    slug: 'capao-da-imbuia',
    name: 'Capão da Imbuia',
    zone: 'Leste',
    description: 'Famoso pelo Museu de História Natural e Bosque Capão da Imbuia, o bairro conecta a Rua Prof. Nivaldo Braga à Linha Verde. Proteja seu patrimônio contra furto, roubo e colisão com o suporte 24h da Loovi.',
    landmarks: ['Museu de História Natural', 'Rua Professor Nivaldo Braga', 'Rua Delegado Leopoldo Belczak'],
    mainAvenues: ['Rua Professor Nivaldo Braga', 'Rua Delegado Leopoldo Belczak', 'Avenida Victor Ferreira do Amaral'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'Qual o valor da franquia reduzida no Capão da Imbuia?',
        a: 'Apenas 5% da Tabela Fipe para carros de passeio tradicionais (mínimo R$ 2.500).'
      }
    ]
  },
  {
    slug: 'cascatinha',
    name: 'Cascatinha',
    zone: 'Norte',
    description: 'Vizinho de Santa Felicidade, o Cascatinha combina restaurantes tradicionais e vias sinuosas. A Loovi garante guincho 24h, socorro em pane seca e cobertura de vidros completa para motoristas que transitam pelo bairro.',
    landmarks: ['Restaurantes de Santa Felicidade (divisa)', 'Rua Fredolin Wolf', 'Parque Tingui (proximidades)'],
    mainAvenues: ['Rua Fredolin Wolf', 'Avenida Manoel Ribas'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'O Seguro Loovi cobre chaveiro 24h no Cascatinha?',
        a: 'Sim, a assistência 24h inclui serviço de chaveiro em caso de perda ou trancamento das chaves no veículo.'
      }
    ]
  },
  {
    slug: 'caximba',
    name: 'Caximba',
    zone: 'Sul',
    description: 'No extremo sul de Curitiba próximo ao Rio Iguaçu, o bairro Caximba exige um seguro confiável com cobertura de guincho eficiente em caso de imprevistos. A Loovi assegura proteção veicular com custo acessível a partir de R$ 98,56/mês.',
    landmarks: ['Rio Iguaçu', 'Acesso a Araucária (divisa)', 'Estrada do Caximba'],
    mainAvenues: ['Estrada do Caximba', 'Rua Delegado Bruno de Almeida'],
    avgArrivalMinutes: 25,
    faqs: [
      {
        q: 'A Loovi atende a região da Caximba?',
        a: 'Sim! Atendemos todas as regiões periféricas e limites de Curitiba com assistência total.'
      }
    ]
  },
  {
    slug: 'centro',
    name: 'Centro',
    zone: 'Central',
    description: 'O Centro de Curitiba é o coração pulsante da cidade, com vias de altíssimo tráfego como a Rua Marechal Deodoro, Visconde de Nacar e Praça Tiradentes. Devido ao alto risco de arranhões, colisões no trânsito lento e furtos noturnos, o Seguro Loovi é a escolha número 1 dos motoristas que trabalham e moram no Centro, garantindo proteção a terceiros e socorro rápido 24 horas.',
    landmarks: ['Praça Tiradentes', 'Rua das Flores (Rua XV)', 'Praça Santos Andrade', 'Boca do Lixo / Boca do Mape'],
    mainAvenues: ['Rua Marechal Deodoro', 'Avenida Marechal Floriano Peixoto', 'Rua Visconde de Nacar', 'Rua Benjamin Constant'],
    avgArrivalMinutes: 12,
    faqs: [
      {
        q: 'Tenho vaga de garagem de rua no Centro de Curitiba, a Loovi aceita meu seguro?',
        a: 'Sim! A Loovi não faz restrições por local de pernoite do veículo ou falta de garagem coberta.'
      }
    ]
  },
  {
    slug: 'centro-civico',
    name: 'Centro Cívico',
    zone: 'Central',
    description: 'Sede dos poderes governamentais do Paraná, o Centro Cívico abriga o Palácio Iguaçu, Museu Oscar Niemeyer (MON) e a Avenida Cândido de Abreu. Ter o Seguro Loovi ativado com a executiva Bárbara Durães traz tranquilidade para servidores públicos, advogados e moradores.',
    landmarks: ['Museu Oscar Niemeyer (MON)', 'Palácio Iguaçu', 'Prefeitura de Curitiba', 'Avenida Cândido de Abreu'],
    mainAvenues: ['Avenida Cândido de Abreu', 'Rua Mateus Leme', 'Rua Deputado Mário de Barros'],
    avgArrivalMinutes: 12,
    faqs: [
      {
        q: 'Servidor público tem condição especial no Seguro Loovi no Centro Cívico?',
        a: 'Os valores são super acessíveis para todos, com pagamento mensal recorrente sem bloquear limite bancário.'
      }
    ]
  },
  {
    slug: 'cidade-industrial-cic',
    name: 'Cidade Industrial (CIC)',
    zone: 'Oeste',
    description: 'A Cidade Industrial de Curitiba (CIC) é o maior bairro da capital em extensão territorial e polo fabril do estado, cortado pelo Contorno Sul e Rodovia do Xisto. Com milhares de caminhões, vans de carga, automóveis de trabalhadores e motoristas de aplicativo circulando diariamente, ter o Seguro Loovi com 100% da FIPE e guincho 24h sem limite de Km é essencial.',
    landmarks: ['Polo Industrial da CIC', 'Contorno Sul', 'Terminal da CIC', 'Bosque do Trabalhador'],
    mainAvenues: ['Contorno Sul (BR-376)', 'Rua Juscelino Kubitschek de Oliveira', 'Avenida das Indústrias', 'Rua João Bettega'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'Carro de empresa ou van de entregas na CIC pode contratar Loovi?',
        a: 'Sim! Atendemos veículos de passeio, comerciais, utilitários, Uber e frotas de pequenas empresas na CIC.'
      },
      {
        q: 'O que fazer se o carro quebrar no Contorno Sul na CIC?',
        a: 'Acione o 0800 da Loovi ou o aplicativo para reboque e sinalização imediata de emergência.'
      }
    ]
  },
  {
    slug: 'cristo-rei',
    name: 'Cristo Rei',
    zone: 'Central',
    description: 'Com acesso rápido ao Jardim Botânico e ao Centro, o Cristo Rei se destaca pela Avenida Presidente Affonso Camargo e Linha de Ônibus Expressa. Garanta a proteção de vidros, colisão e danos a terceiros com a consultoria da executiva Bárbara Durães.',
    landmarks: ['Jardim Botânico (divisa)', 'Avenida Presidente Affonso Camargo', 'Rua do Herval'],
    mainAvenues: ['Avenida Presidente Affonso Camargo', 'Rua do Herval', 'Rua Padre Germano Mayer'],
    avgArrivalMinutes: 14,
    faqs: [
      {
        q: 'Qual o tempo médio de reboque no Cristo Rei?',
        a: 'Atendimento ágil em cerca de 12 a 15 minutos na região do Cristo Rei e Jardim Botânico.'
      }
    ]
  },
  {
    slug: 'fanny',
    name: 'Fanny',
    zone: 'Sul',
    description: 'Pequeno e aconchegante bairro da zona sul entre o Hauer e o Lindoia, cortado pela Avenida Marechal Floriano Peixoto e Linha Verde. A Loovi assegura socorro mecânico, bateria e reboque 24h para os moradores do Fanny.',
    landmarks: ['Linha Verde (divisa)', 'Avenida Marechal Floriano Peixoto', 'Rua Maestro Francisco Antonello'],
    mainAvenues: ['Linha Verde', 'Avenida Marechal Floriano Peixoto', 'Rua Maestro Francisco Antonello'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'A Loovi aceita carro antigo fabricado em 1995 no Fanny?',
        a: 'Sim! A Loovi aceita veículos fabricados a partir do ano de 1986 sem burocracia.'
      }
    ]
  },
  {
    slug: 'fazendinha',
    name: 'Fazendinha',
    zone: 'Sul',
    description: 'Com o Terminal da Fazendinha e o Parque da Barreirinha/Fazendinha, a região possui forte comércio local na Rua Raul Pompéia e Avenida João Bettega. Proteja seu automóvel com o plano de assinatura da Loovi sem fidelidade abusiva.',
    landmarks: ['Terminal da Fazendinha', 'Rua Raul Pompéia', 'Avenida João Bettega'],
    mainAvenues: ['Rua Raul Pompéia', 'Avenida João Bettega', 'Rua Carlos Klemtz'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'O seguro Loovi tem fidelidade no bairro Fazendinha?',
        a: 'Não! Pagamento mês a mês com total liberdade para cancelar a qualquer momento sem multas.'
      }
    ]
  },
  {
    slug: 'ganchinho',
    name: 'Ganchinho',
    zone: 'Sul',
    description: 'Localizado no extremo sul perto do Parque Iguaçu, o Ganchinho vem crescendo com novos loteamentos. Moradores contam com a proteção da Loovi contra roubo, furto, colisão e terceiros com assistência 24h em todo o estado.',
    landmarks: ['Parque Iguaçu', 'Estrada do Ganchinho', 'Rua Eduardo Pinto da Rocha'],
    mainAvenues: ['Estrada do Ganchinho', 'Rua Eduardo Pinto da Rocha'],
    avgArrivalMinutes: 22,
    faqs: [
      {
        q: 'Como acionar o guincho Loovi no Ganchinho de madrugada?',
        a: 'Basta ligar no 0800 948 4888 com atendimento 24 horas todos os dias do ano.'
      }
    ]
  },
  {
    slug: 'guabirotuba',
    name: 'Guabirotuba',
    zone: 'Sul',
    description: 'Cortado pela Avenida das Torres (Comendador Franco) e Salgado Filho, o Guabirotuba é rota obrigatória de quem vai ao Aeroporto de Afonso Pena. Proteja seu carro contra colisões na Av. das Torres com o Seguro Loovi da executiva Bárbara Durães.',
    landmarks: ['Avenida das Torres', 'Ponte estaiada de Curitiba', 'PUCPR (proximidades)'],
    mainAvenues: ['Avenida Comendador Franco (Av. das Torres)', 'Avenida Salgado Filho', 'Rua Guabirotuba'],
    avgArrivalMinutes: 15,
    faqs: [
      {
        q: 'Cobre sinistro na Avenida das Torres no Guabirotuba?',
        a: 'Sim, a cobertura contra colisão e danos a terceiros é completa para a Avenida das Torres.'
      }
    ]
  },
  {
    slug: 'guaira',
    name: 'Guaíra',
    zone: 'Sul',
    description: 'Vizinho da Água Verde e Parolin, o bairro Guaíra possui fácil acesso pelas vias como a Avenida Presidente Kennedy e Rua Guilherme Pugsley. A Loovi garante carro reserva e socorro mecânico para os moradores do Guaíra.',
    landmarks: ['Avenida Presidente Kennedy', 'Rua Guilherme Pugsley (Rápida do Portão)', 'Praça do Guaíra'],
    mainAvenues: ['Avenida Presidente Kennedy', 'Rua Guilherme Pugsley', 'Rua Minas Gerais'],
    avgArrivalMinutes: 15,
    faqs: [
      {
        q: 'Como solicitar carro reserva no bairro Guaíra?',
        a: 'Em caso de sinistro coberto, o carro reserva de 7 dias é disponibilizado rapidamente em locadoras parceiras.'
      }
    ]
  },
  {
    slug: 'hauer',
    name: 'Hauer',
    zone: 'Sul',
    description: 'Polo industrial e de autopeças na zona sul de Curitiba, o Hauer abriga o Terminal do Hauer e a Avenida Marechal Floriano Peixoto. O seguro Loovi protege seu carro com rastreador inteligente e indenização de 100% da FIPE em caso de furto qualificado.',
    landmarks: ['Terminal do Hauer', 'Avenida Marechal Floriano Peixoto', 'Rua Anne Frank'],
    mainAvenues: ['Avenida Marechal Floriano Peixoto', 'Rua Anne Frank', 'Rua Professor João Soares Barcelos'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'O Seguro Loovi é indicado para quem trabalha nas lojas do Hauer?',
        a: 'Com certeza! Preço justo, sem burocracia e com acionamento 100% digital pelo celular.'
      }
    ]
  },
  {
    slug: 'hugo-lange',
    name: 'Hugo Lange',
    zone: 'Central',
    description: 'Bairro estritamente residencial e arborizado, o Hugo Lange fica ao lado do Juvevê e Cabral, com vias como a Rua Augusto Stresser. Moradores buscam a conveniência do seguro digital Loovi sem precisar sair de casa.',
    landmarks: ['Rua Augusto Stresser', 'Setor Histórico (proximidades)', 'Graciosa Country Club (divisa)'],
    mainAvenues: ['Rua Augusto Stresser', 'Rua Itupava', 'Rua Machado de Assis'],
    avgArrivalMinutes: 14,
    faqs: [
      {
        q: 'Posso cotar o seguro do meu carro no Hugo Lange online?',
        a: 'Sim, a cotação e a vistoria são feitas pelo WhatsApp com auxílio da executiva Bárbara Durães.'
      }
    ]
  },
  {
    slug: 'jardim-botanico',
    name: 'Jardim Botânico',
    zone: 'Central',
    description: 'Endereço do cartão-postal mais famoso de Curitiba, o Jardim Botânico conecta a Linha Verde, a Avenida Prefeito Lothário Meissner e a Rodovia do Café. Com grande fluxo turístico e diário, o seguro Loovi garante reboque e seguro para terceiros em qualquer situação.',
    landmarks: ['Jardim Botânico de Curitiba', 'Estufa do Jardim Botânico', 'Campus Sociais da UFPR'],
    mainAvenues: ['Avenida Prefeito Lothário Meissner', 'Linha Verde', 'Rua Doutor Jorge Meyer'],
    avgArrivalMinutes: 14,
    faqs: [
      {
        q: 'Tem assistência 24h nos arredores do Jardim Botânico?',
        a: 'Sim, socorro imediato para motoristas no entorno do parque e avenidas principais.'
      }
    ]
  },
  {
    slug: 'jardim-social',
    name: 'Jardim Social',
    zone: 'Norte',
    description: 'Bairro nobre caracterizado por amplas casas e tranquilidade, próximo à Avenida Washington Luiz e Nossa Senhora da Luz. Proprietários de veículos no Jardim Social aproveitam a cobertura de vidros e faróis da Loovi com mensalidades justas.',
    landmarks: ['Avenida Washington Luiz', 'Praça Nicolau Naumovich', 'Avenida Nossa Senhora da Luz'],
    mainAvenues: ['Avenida Washington Luiz', 'Avenida Nossa Senhora da Luz', 'Rua Edgard Cavalheiro'],
    avgArrivalMinutes: 15,
    faqs: [
      {
        q: 'A Loovi atende SUVs e carros de alto padrão no Jardim Social?',
        a: 'Sim, com cobertura completa para sinistros, danos a terceiros até R$ 100.000 e vidros.'
      }
    ]
  },
  {
    slug: 'jardim-das-americas',
    name: 'Jardim das Américas',
    zone: 'Leste',
    description: 'Com o Centro Politécnico da UFPR e o Shopping Jardim das Américas, o bairro é um ponto nodal da zona leste ligado à Avenida das Torres. A Loovi assegura atendimento 24h, carga de bateria e troca de pneu na região.',
    landmarks: ['Centro Politécnico da UFPR', 'Shopping Jardim das Américas', 'Avenida das Torres'],
    mainAvenues: ['Avenida Comendador Franco (Av. das Torres)', 'Rua Professor Francisco H. dos Santos', 'Rua Capitão Leônidas Marques'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'Estudantes da UFPR no Jardim das Américas podem contratar Loovi?',
        a: 'Sim, aceitação sem análise de idade ou perfil do condutor, direto no cartão ou boleto.'
      }
    ]
  },
  {
    slug: 'juveve',
    name: 'Juvevê',
    zone: 'Central',
    description: 'Gastronômico e vibrante, o Juvevê fica entre o Cabral e o Alto da Glória, cortado pela Rua João Gualberto e Augusto Stresser. Conte com o suporte da moradora e executiva local Bárbara Durães para proteger seu carro com a Loovi.',
    landmarks: ['Feira do Juvevê', 'Rua Augusto Stresser', 'Avenida João Gualberto'],
    mainAvenues: ['Avenida João Gualberto', 'Rua Augusto Stresser', 'Rua Rocha Pombo'],
    avgArrivalMinutes: 12,
    faqs: [
      {
        q: 'A executiva Bárbara Durães atende presencialmente no Juvevê/Cabral?',
        a: 'Sim! Atendimento personalizado com agendamento prévio ou diretamente pelo WhatsApp.'
      }
    ]
  },
  {
    slug: 'lamenha-pequena',
    name: 'Lamenha Pequena',
    zone: 'Norte',
    description: 'Localizado no extremo norte de Curitiba perto de Almirante Tamandaré, a Lamenha Pequena tem perfil residencial e bucólico. A Loovi atende o bairro com socorro 24h e guincho sem complicações.',
    landmarks: ['Divisa com Almirante Tamandaré', 'Estrada da Lamenha', 'Contorno Norte (proximidades)'],
    mainAvenues: ['Estrada da Lamenha', 'Rua Doutor Eugênio Bertolli'],
    avgArrivalMinutes: 22,
    faqs: [
      {
        q: 'O seguro Loovi cobre emergências na Lamenha Pequena?',
        a: 'Sim, cobrimos toda a região da Lamenha Pequena com reboque e assistência nacional.'
      }
    ]
  },
  {
    slug: 'lindoia',
    name: 'Lindóia',
    zone: 'Sul',
    description: 'Tranquilo e residencial, o bairro Lindóia se situa entre o Novo Mundo e o Fanny, cortado pela Avenida Wenceslau Braz. Mantenha seu veículo protegido contra furtos e colisões com o plano recorrente mensal da Loovi.',
    landmarks: ['Avenida Wenceslau Braz', 'Rua Doutor Mário de Mello', 'Praça do Lindóia'],
    mainAvenues: ['Avenida Wenceslau Braz', 'Rua Doutor Mário de Mello'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'Como cancelar se eu vender meu carro no Lindóia?',
        a: 'O cancelamento é simples e sem multas contratuais abusivas.'
      }
    ]
  },
  {
    slug: 'merces',
    name: 'Mercês',
    zone: 'Central',
    description: 'O bairro Mercês abriga a famosa Torre Panorâmica de Curitiba e a Praça 29 de Março. Com ruas íngremes e tráfego constante rumo ao centro, contar com socorro em pane mecânica e guincho 24h da Loovi traz total segurança.',
    landmarks: ['Torre Panorâmica de Curitiba', 'Praça 29 de Março', 'Avenida Manoel Ribas'],
    mainAvenues: ['Avenida Manoel Ribas', 'Rua Padre Agostinho', 'Rua Jaime Reis'],
    avgArrivalMinutes: 14,
    faqs: [
      {
        q: 'Qual o tempo de chegada do guincho nas subidas das Mercês?',
        a: 'Atendimento rápido em 12 a 15 minutos na região das Mercês.'
      }
    ]
  },
  {
    slug: 'mossungue',
    name: 'Mossunguê',
    zone: 'Oeste',
    description: 'Também chamado de Ecoville, o Mossunguê destaca-se pelos edifícios residenciais de alto padrão ao longo da Rua Professor Pedro Viriato Parigot de Souza. A Loovi entrega cobertura completa para carros novos, seminovos, elétricos e importados.',
    landmarks: ['Ecoville', 'ParkShoppingBarigüi', 'Rua Professor Pedro Viriato Parigot de Souza'],
    mainAvenues: ['Rua Professor Pedro Viriato Parigot de Souza', 'Rua Monsenhor Ivo Zanlorenzi', 'Rua Deputado Heitor Alencar Furtado'],
    avgArrivalMinutes: 15,
    faqs: [
      {
        q: 'A Loovi aceita veículos elétricos e híbridos no Ecoville / Mossunguê?',
        a: 'Sim, oferecemos seguro completo preparado para a tecnologia híbrida e elétrica.'
      }
    ]
  },
  {
    slug: 'novo-mundo',
    name: 'Novo Mundo',
    zone: 'Sul',
    description: 'Com forte comércio e grande frota de veículos na Avenida Brasília e Avenida República Argentina, o Novo Mundo é um polo da zona sul. A executiva Bárbara Durães ajuda você a contratar o melhor seguro sem burocracia.',
    landmarks: ['Hospital Trabalhador (proximidades)', 'Avenida Brasília', 'Terminal do Capão Raso (divisa)'],
    mainAvenues: ['Avenida Brasília', 'Avenida República Argentina', 'Rua Eduardo Carlos Pereira'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'Posso parcelar no boleto ou PIX no Novo Mundo?',
        a: 'Sim, a assinatura da Loovi aceita cartão de crédito recorrente, PIX ou boleto.'
      }
    ]
  },
  {
    slug: 'orleans',
    name: 'Orleans',
    zone: 'Oeste',
    description: 'Localizado no limite oeste na saída para Campo Largo pela BR-277, o Orleans tem forte movimento rodoviário. Proteja seu automóvel contra acidentes e colisões em rodovias com a cobertura completa Loovi.',
    landmarks: ['Acesso à BR-277', 'Viaduto do Orleans', 'Divisa com Campo Largo'],
    mainAvenues: ['BR-277', 'Rua Professor João Falarz', 'Rua Toaldo Tulio'],
    avgArrivalMinutes: 20,
    faqs: [
      {
        q: 'O seguro Loovi tem reboque para trecho da BR-277 no Orleans?',
        a: 'Sim, guincho 24h sem limite de Km conforme a modalidade do seu plano.'
      }
    ]
  },
  {
    slug: 'parolin',
    name: 'Parolin',
    zone: 'Sul',
    description: 'Próximo à Linha Verde e Avenida Marechal Floriano Peixoto, o Parolin concentra empresas, comércios e residências. A Loovi garante rastreamento veicular e ressarcimento de 100% da FIPE em caso de furto ou roubo.',
    landmarks: ['Avenida Marechal Floriano Peixoto', 'Linha Verde', 'Rua BR-116'],
    mainAvenues: ['Avenida Marechal Floriano Peixoto', 'Linha Verde', 'Rua Brigadeiro Franco'],
    avgArrivalMinutes: 15,
    faqs: [
      {
        q: 'O rastreador da Loovi ajuda a recuperar veículos no Parolin?',
        a: 'Sim, o sistema de rastreamento possui alta taxa de recuperação em Curitiba e região.'
      }
    ]
  },
  {
    slug: 'pilarzinho',
    name: 'Pilarzinho',
    zone: 'Norte',
    description: 'Conhecido pela Ópera de Arame e Parque Tanguá, o Pilarzinho possui relevo acidentado e curvas acentuadas na Rua Desembargador Hugo Simas. Conte com socorro 24h e seguro completo contra acidentes com a Loovi.',
    landmarks: ['Ópera de Arame', 'Parque Tanguá', 'Pedreira Paulo Leminski'],
    mainAvenues: ['Rua Desembargador Hugo Simas', 'Rua Amauri Lange Silveira', 'Rua Nilo Peçanha'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'Tem socorro mecânico e guincho nas ladeiras do Pilarzinho?',
        a: 'Sim, reboques equipados para socorro rápido em qualquer aclive da região.'
      }
    ]
  },
  {
    slug: 'pinheirinho',
    name: 'Pinheirinho',
    zone: 'Sul',
    description: 'O Pinheirinho é um dos centros urbanos mais movimentados da zona sul de Curitiba, abrigando a Linha Verde Sul, a Rua Winston Churchill e o Terminal do Pinheirinho. Moradores e motoristas de aplicativos contam com a consultora Bárbara Durães para simulação rápida e sem burocracia do Seguro Loovi.',
    landmarks: ['Terminal do Pinheirinho', 'Rua Winston Churchill', 'Hospital do Idoso', 'Linha Verde Sul'],
    mainAvenues: ['Rua Winston Churchill', 'Linha Verde (BR-116)', 'Avenida das Indústrias', 'Rua Izaac Ferreira da Cruz'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'Como simular o seguro Loovi no Pinheirinho?',
        a: 'Envie marca, modelo e ano do seu carro no WhatsApp da executiva Bárbara Durães para cotação na hora.'
      },
      {
        q: 'Motoristas da Uber no Pinheirinho têm aceitação garantida?',
        a: 'Sim! 100% da FIPE garantidos para Uber, 99 e táxis no Pinheirinho.'
      }
    ]
  },
  {
    slug: 'portao',
    name: 'Portão',
    zone: 'Sul',
    description: 'O Portão é um dos bairros mais tradicionais e populosos de Curitiba, com polos comerciais como o Shopping Palladium e o Venturi Shopping na Avenida República Argentina e João Bettega. A Loovi assegura proteção completa contra colisão, furto, roubo e danos a terceiros com socorro 24 horas.',
    landmarks: ['Shopping Palladium', 'Shopping Ventura', 'Terminal do Portão', 'Igreja do Portão'],
    mainAvenues: ['Avenida República Argentina', 'Avenida João Bettega', 'Rua Itacolomi', 'Rua Doutor Pedro Ivo'],
    avgArrivalMinutes: 15,
    faqs: [
      {
        q: 'Qual o valor do guincho Loovi no bairro Portão?',
        a: 'O guincho 24h é gratuito e já está incluso no valor da sua assinatura mensal Loovi.'
      }
    ]
  },
  {
    slug: 'prado-velho',
    name: 'Prado Velho',
    zone: 'Central',
    description: 'Bairro universitário que abriga a PUCPR e o Teatro Paiol, cortado pela Rua Imaculada Conceição e Linha Verde. O seguro Loovi atende universitários e residentes sem cobrar taxas extras pela idade do motorista.',
    landmarks: ['PUCPR - Pontifícia Universidade Católica do Paraná', 'Teatro Paiol', 'Avenida Salgado Filho'],
    mainAvenues: ['Rua Imaculada Conceição', 'Linha Verde', 'Avenida Salgado Filho'],
    avgArrivalMinutes: 14,
    faqs: [
      {
        q: 'Estudante da PUCPR pode contratar o seguro sem nome dos pais?',
        a: 'Sim! A contratação pode ser em seu próprio nome sem análise de perfil.'
      }
    ]
  },
  {
    slug: 'reboucas',
    name: 'Rebouças',
    zone: 'Central',
    description: 'Bairro tradicional de perfil misto residencial e universitário, onde ficam o campus da UTFPR e a Avenida Marechal Floriano Peixoto. Com tráfego intenso a caminho do Centro, a Loovi oferece cobertura completa para terceiros e vidros.',
    landmarks: ['UTFPR - Universidade Tecnológica', 'Estádio Durival Britto e Silva', 'Avenida Silva Jardim'],
    mainAvenues: ['Avenida Marechal Floriano Peixoto', 'Avenida Visconde de Guarapuava', 'Avenida Silva Jardim'],
    avgArrivalMinutes: 12,
    faqs: [
      {
        q: 'Cobre roubo de carro estacionado na rua no Rebouças?',
        a: 'Sim! Proteção completa contra roubo e furto qualificado com ressarcimento de até 100% da FIPE.'
      }
    ]
  },
  {
    slug: 'riviera',
    name: 'Riviera',
    zone: 'Oeste',
    description: 'Localizado no extremo oeste na divisa com Campo Magro, o bairro Riviera tem perfil essencialmente residencial e de chácaras. A Loovi assegura socorro 24h e reboque confiável para veículos na região.',
    landmarks: ['Divisa com Campo Magro', 'Rua Eduardo Sprada (extensão)', 'Represa do Passaúna (proximidades)'],
    mainAvenues: ['Rua Eduardo Sprada', 'Estrada da Riviera'],
    avgArrivalMinutes: 24,
    faqs: [
      {
        q: 'A Loovi atende no bairro Riviera?',
        a: 'Sim, cobrimos todas as áreas urbanas e rurais mapeadas no bairro Riviera.'
      }
    ]
  },
  {
    slug: 'santa-candida',
    name: 'Santa Cândida',
    zone: 'Norte',
    description: 'Ponto final da Linha Norte do BRT de Curitiba na Avenida Paraná, o Santa Cândida faz divisa com Colombo e atrai milhares de motoristas diariamente. Garanta proteção contra colisões na rodovia e vias do bairro com o Seguro Loovi.',
    landmarks: ['Terminal do Santa Cândida', 'Avenida Paraná', 'Acesso a Colombo (PR-417)'],
    mainAvenues: ['Avenida Paraná', 'Rua Theodoro Makiolka', 'Estrada das Olarias'],
    avgArrivalMinutes: 20,
    faqs: [
      {
        q: 'Como funciona a proteção da Loovi para quem reside no Santa Cândida?',
        a: 'Proteção veicular completa com guincho 24h, assistência para pane e indenização FIPE.'
      }
    ]
  },
  {
    slug: 'santa-felicidade',
    name: 'Santa Felicidade',
    zone: 'Norte',
    description: 'Famoso polo gastronômico italiano de Curitiba, Santa Felicidade atrai multidões aos fins de semana ao longo da Avenida Manoel Ribas e Via do Vinho. Com alto fluxo de turistas e carros locais, contratar Loovi com a executiva Bárbara Durães garante tranquilidade em qualquer passeio.',
    landmarks: ['Avenida Manoel Ribas', 'Restaurante Madalosso', 'Praça de Santa Felicidade', 'Portal de Santa Felicidade'],
    mainAvenues: ['Avenida Manoel Ribas', 'Rua Via Veneto', 'Rua Toaldo Tulio', 'Rua Fredolin Wolf'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'O Seguro Loovi cobre batidas no estacionamento dos restaurantes em Santa Felicidade?',
        a: 'Sim! Cobertura completa contra colisão parcial ou total em vias públicas e locais privados.'
      }
    ]
  },
  {
    slug: 'santa-quiteria',
    name: 'Santa Quitéria',
    zone: 'Oeste',
    description: 'Vizinho do Portão e Seminário, o bairro Santa Quitéria possui vocação residencial e acadêmica com a Uniandrade na Avenida Iguaçu. A Loovi entrega seguro barato e transparente para moradores do bairro.',
    landmarks: ['Uniandrade', 'Avenida Iguaçu (extensão)', 'Rua Professor Arthur Parada'],
    mainAvenues: ['Avenida Iguaçu', 'Rua Professor Arthur Parada', 'Rua João Alencar Guimarães'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'Tenho um carro ano 2008 no Santa Quitéria, posso fazer o seguro?',
        a: 'Sim, a Loovi aceita veículos fabricados a partir de 1986 sem complicações.'
      }
    ]
  },
  {
    slug: 'santo-inacio',
    name: 'Santo Inácio',
    zone: 'Oeste',
    description: 'O bairro Santo Inácio abriga o Parque Barigui e o campus da Universidade Tuiuti do Paraná (UTP), com vias de acesso como a Rodovia do Café (BR-277). Conte com a Loovi para guincho imediato na região.',
    landmarks: ['Parque Barigui', 'Universidade Tuiuti do Paraná (UTP)', 'BR-277'],
    mainAvenues: ['BR-277', 'Rua Candido Hartmann', 'Rua Padre Ladislau Kula'],
    avgArrivalMinutes: 15,
    faqs: [
      {
        q: 'Estudante da Tuiuti do Paraná no Santo Inácio paga menos no seguro Loovi?',
        a: 'A Loovi tem planos promocionais sem cobrança extra para jovens universitários.'
      }
    ]
  },
  {
    slug: 'seminario',
    name: 'Seminário',
    zone: 'Central',
    description: 'Localizado entre o Batel e o Campina do Siqueira, o Seminário é conhecido pela Avenida Nossa Senhora Aparecida e Colégio Franciscano Seignabo. A Loovi atende a região com socorro 24h de padrão VIP.',
    landmarks: ['Avenida Nossa Senhora Aparecida', 'Colégio Seignabo', 'Igreja do Seminário'],
    mainAvenues: ['Avenida Nossa Senhora Aparecida', 'Rua Gabriel de Lara', 'Rua Deputado Nilson Ribas'],
    avgArrivalMinutes: 14,
    faqs: [
      {
        q: 'A Loovi cobre danos a terceiros para moradores do Seminário?',
        a: 'Sim! Até R$ 100.000 para ressarcimento de danos materiais e corporais a terceiros.'
      }
    ]
  },
  {
    slug: 'sitio-cercado',
    name: 'Sítio Cercado',
    zone: 'Sul',
    description: 'O Sítio Cercado é um dos bairros mais populosos da zona sul de Curitiba, com centro comercial forte na Rua Izaac Ferreira da Cruz e Bairro Novo. Para proteger seu carro ou instrumento de trabalho (Uber e 99), o Seguro Loovi ativada por Bárbara Durães entrega 100% FIPE e assistência 24h descomplicada.',
    landmarks: ['Rua Izaac Ferreira da Cruz', 'Terminal do Sítio Cercado', 'Bairro Novo', 'Praça do Xaxim/Sítio Cercado'],
    mainAvenues: ['Rua Izaac Ferreira da Cruz', 'Rua São José dos Pinhais', 'Rua Tijucas do Sul', 'Rua David Tows'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'Qual o número de WhatsApp da executiva Bárbara Durães no Sítio Cercado?',
        a: 'Entre em contato pelo WhatsApp (41) 99232-8005 para simulação em menos de 3 minutos.'
      }
    ]
  },
  {
    slug: 'sao-braz',
    name: 'São Braz',
    zone: 'Norte',
    description: 'Bairro residencial da zona norte vizinho de Santa Felicidade, cortado pela Avenida Toaldo Tulio. Garanta a proteção contra roubo, furto e colisões para seu veículo no São Braz com o plano mensal Loovi.',
    landmarks: ['Avenida Toaldo Tulio', 'Clube Trieste (proximidades)', 'Unidade de Saúde São Braz'],
    mainAvenues: ['Avenida Toaldo Tulio', 'Rua Antonio Escorsin', 'Rua Juruaçu'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'O guincho da Loovi atende rapidamente na Av. Toaldo Tulio no São Braz?',
        a: 'Sim, equipes de emergência posicionadas estrategicamente na zona norte.'
      }
    ]
  },
  {
    slug: 'sao-francisco',
    name: 'São Francisco',
    zone: 'Central',
    description: 'Bairro histórico de Curitiba, lar da Feirinha do Largo da Ordem e ruínas de São Francisco. Por suas ruas de paralelepípedo e alto movimento cultural noturno, ter o seguro Loovi protege seu carro contra furtos e avarias de funilaria.',
    landmarks: ['Largo da Ordem', 'Feirinha de Domingo', 'Ruínas de São Francisco', 'Museu Paranaense'],
    mainAvenues: ['Rua Kenderski', 'Rua Jaime Reis', 'Rua Trajano Reis', 'Rua Inácio Lustosa'],
    avgArrivalMinutes: 12,
    faqs: [
      {
        q: 'O seguro cobre furto de veículo parado no Largo da Ordem no São Francisco?',
        a: 'Sim, cobertura integral contra furto qualificado e roubo com rastreador gratuito.'
      }
    ]
  },
  {
    slug: 'sao-joao',
    name: 'São João',
    zone: 'Norte',
    description: 'Próximo ao Parque Tingui, o bairro São João combina natureza e residências na zona norte. Mantenha seu carro protegido com guincho 24h e proteção para vidros da Loovi.',
    landmarks: ['Parque Tingui (divisa)', 'Memorial Ucraniano (proximidades)', 'Rua Fredolin Wolf'],
    mainAvenues: ['Rua Fredolin Wolf', 'Rua Wellington de Oliveira'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'O Seguro Loovi atende ocorrências no Parque Tingui no São João?',
        a: 'Sim, guincho e socorro para acidentes ou quebras nos arredores do parque.'
      }
    ]
  },
  {
    slug: 'sao-lourenco',
    name: 'São Lourenço',
    zone: 'Norte',
    description: 'Famoso pelo Parque São Lourenço e Centro de Criatividade, o bairro conta com vias arborizadas como a Rua Mateus Leme e Anita Garibaldi. Faça sua cotação Loovi pelo celular sem burocracia com a executiva Bárbara Durães.',
    landmarks: ['Parque São Lourenço', 'Centro de Criatividade de Curitiba', 'Rua Mateus Leme'],
    mainAvenues: ['Rua Mateus Leme', 'Avenida Anita Garibaldi', 'Rua Brasilino Moura'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'Preciso comprovar renda para fazer o Seguro Loovi no São Lourenço?',
        a: 'Não! Não há análise financeira nem consulta ao SPC/Serasa.'
      }
    ]
  },
  {
    slug: 'sao-miguel',
    name: 'São Miguel',
    zone: 'Oeste',
    description: 'Na divisa com a Cidade Industrial e Araucária, o bairro São Miguel tem forte perfil industrial e de transporte. A Loovi assegura proteção veicular com custo-benefício imbatível.',
    landmarks: ['Divisa com Araucária', 'Acesso à Rodovia do Xisto', 'Polo Industrial'],
    mainAvenues: ['Rodovia do Xisto (BR-476)', 'Rua Doutor Valério Sobania'],
    avgArrivalMinutes: 22,
    faqs: [
      {
        q: 'Cobre sinistro na Rodovia do Xisto no São Miguel?',
        a: 'Sim, a cobertura contra colisão e terceiros é válida em todas as rodovias federativas.'
      }
    ]
  },
  {
    slug: 'taboao',
    name: 'Taboão',
    zone: 'Norte',
    description: 'No limite norte com Almirante Tamandaré, o Taboão abriga o Parque Tanguá e pedreiras desativadas. A Loovi oferece assistência de guincho, pane mecânica e chaveiro 24h na região.',
    landmarks: ['Parque Tanguá (divisa)', 'Pedreira Paulo Leminski (proximidades)', 'Divisa com Almirante Tamandaré'],
    mainAvenues: ['Rua Mateus Leme', 'Rua Doutor Eugênio Bertolli'],
    avgArrivalMinutes: 20,
    faqs: [
      {
        q: 'Atende moradores do Taboão na divisa de Curitiba?',
        a: 'Sim, o socorro atende em toda a área urbana do Taboão.'
      }
    ]
  },
  {
    slug: 'taruma',
    name: 'Tarumã',
    zone: 'Leste',
    description: 'O Tarumã abriga o Ginásio do Tarumã, o Jockey Club do Paraná e a Avenida Victor Ferreira do Amaral. Para quem transita rumo a Pinhais ou Centro, o Seguro Loovi garante proteção total.',
    landmarks: ['Ginásio do Tarumã', 'Jockey Club do Paraná', 'Avenida Victor Ferreira do Amaral'],
    mainAvenues: ['Avenida Victor Ferreira do Amaral', 'Rua Konrad Adenauer', 'Avenida Nossa Senhora da Luz'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'Como funciona o carro reserva no bairro Tarumã?',
        a: 'Em caso de colisão ou roubo coberto, o veículo reserva por 7 dias pode ser retirado em locadoras da região.'
      }
    ]
  },
  {
    slug: 'tatuquara',
    name: 'Tatuquara',
    zone: 'Sul',
    description: 'O Tatuquara é um importante polo populacional e de serviços da zona sul de Curitiba, com a Rua Eneas Marques dos Santos e Terminal do Tatuquara. Garanta 100% da FIPE e socorro 24h com mensalidades que cabem no seu bolso.',
    landmarks: ['Terminal do Tatuquara', 'Rua Eneas Marques dos Santos', 'UPA Tatuquara'],
    mainAvenues: ['Rua Eneas Marques dos Santos', 'Rua Pero Vaz de Caminha', 'BR-116'],
    avgArrivalMinutes: 22,
    faqs: [
      {
        q: 'Como simular seguro para carro de leilão ou rebaixado no Tatuquara?',
        a: 'Basta enviar as fotos do veículo pelo WhatsApp da executiva Bárbara Durães para vistoria digital.'
      }
    ]
  },
  {
    slug: 'tingui',
    name: 'Tingui',
    zone: 'Norte',
    description: 'Vizinho do Bacacheri e Bairro Alto, o Tingui conta com a Avenida Paraná e o Parque Bacacheri nas proximidades. Proteja seu automóvel contra acidentes e furtos com a consultoria de Bárbara Durães.',
    landmarks: ['Parque Bacacheri (divisa)', 'Avenida Paraná', 'Rua Edmundo Alberto Mercer'],
    mainAvenues: ['Avenida Paraná', 'Rua Edmundo Alberto Mercer', 'Rua Monteiro Lobato'],
    avgArrivalMinutes: 18,
    faqs: [
      {
        q: 'O seguro Loovi tem cobertura para roubo no bairro Tingui?',
        a: 'Sim, indenização de até 100% da Tabela FIPE em caso de roubo ou furto qualificado.'
      }
    ]
  },
  {
    slug: 'uberaba',
    name: 'Uberaba',
    zone: 'Leste',
    description: 'Extenso bairro da zona leste cortado pela Avenida das Torres (Comendador Franco) e BR-277. Com intenso fluxo de passageiros rumo ao Aeroporto Afonso Pena, ter o seguro Loovi garante reboque imediato e proteção contra danos a terceiros.',
    landmarks: ['Avenida das Torres', 'Viaduto do Uberaba', 'Acesso a São José dos Pinhais'],
    mainAvenues: ['Avenida Comendador Franco', 'Rua Capitão Leônidas Marques', 'BR-277'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'Uberaba tem atendimento rápido de guincho na Av. das Torres?',
        a: 'Sim, equipes de plantão na Av. das Torres chegam em média em 15 minutos.'
      }
    ]
  },
  {
    slug: 'umbara',
    name: 'Umbará',
    zone: 'Sul',
    description: 'Conhecido por suas chácaras, cultura italiana/polonesa e Parque Lago Azul, o Umbará fica na zona sul cortado pela Rua Nicola Pellanda. Proteja seu carro contra imprevistos em vias rurais e urbanas com a Loovi.',
    landmarks: ['Parque Lago Azul', 'Rua Nicola Pellanda', 'Igreja do Umbará'],
    mainAvenues: ['Rua Nicola Pellanda', 'Estrada do Ganchinho', 'Rua Bley Zorning'],
    avgArrivalMinutes: 22,
    faqs: [
      {
        q: 'A Loovi atende socorro em vias do Umbará?',
        a: 'Sim, incluindo reboque e assistência mecânica em toda a extensão do Umbará.'
      }
    ]
  },
  {
    slug: 'vila-izabel',
    name: 'Vila Izabel',
    zone: 'Central',
    description: 'Bairro nobre e residencial vizinho da Água Verde e Portão, cortado pela Avenida República Argentina e Rua Guararapes. Os moradores da Vila Izabel aproveitam a agilidade e o custo acessível do Seguro Loovi.',
    landmarks: ['Avenida República Argentina', 'Rua Guararapes', 'Avenida Iguaçu (divisa)'],
    mainAvenues: ['Avenida República Argentina', 'Rua Guararapes', 'Rua Pará'],
    avgArrivalMinutes: 14,
    faqs: [
      {
        q: 'A executiva Bárbara Durães faz cotação de seguro na Vila Izabel?',
        a: 'Sim, cotação personalizada enviada no WhatsApp em minutos.'
      }
    ]
  },
  {
    slug: 'vista-alegre',
    name: 'Vista Alegre',
    zone: 'Norte',
    description: 'Com o Bosque Alemão e vias sinuosas perto do Pilarzinho e Mercês, o Vista Alegre exige atenção no trânsito. O seguro Loovi entrega cobertura completa para terceiros e vidros.',
    landmarks: ['Bosque Alemão', 'Torre Panorâmica (proximidades)', 'Rua Desembargador Hugo Simas'],
    mainAvenues: ['Rua Desembargador Hugo Simas', 'Rua Jacarezinho', 'Rua Arthur Leinig'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'O seguro cobre colisão nas curvas do Vista Alegre?',
        a: 'Sim, cobertura completa contra batidas com franquia reduzida.'
      }
    ]
  },
  {
    slug: 'xaxim',
    name: 'Xaxim',
    zone: 'Sul',
    description: 'O Xaxim é um importante polo comercial da zona sul de Curitiba, com destaque para a Rua Francisco Derosso e Avenida Brasília. Ter o Seguro Loovi garante rastreador sem custo e 100% da FIPE ativada com a consultora Bárbara Durães.',
    landmarks: ['Rua Francisco Derosso', 'Avenida Brasília', 'Shopping Sports'],
    mainAvenues: ['Rua Francisco Derosso', 'Avenida Brasília', 'Rua David Tows', 'Rua Waldemar Loureiro Campos'],
    avgArrivalMinutes: 16,
    faqs: [
      {
        q: 'Qual o valor da mensalidade do Seguro Loovi no Xaxim?',
        a: 'Planos a partir de R$ 98,56/mês com pagamento recorrente mensal.'
      }
    ]
  }
];
