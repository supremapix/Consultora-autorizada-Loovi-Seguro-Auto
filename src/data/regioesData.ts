export interface RegiaoInfo {
  slug: string;
  name: string;
  parentBairro: string;
  description: string;
  avgArrivalMinutes: number;
}

export const REGIOES_POPULARES: RegiaoInfo[] = [
  { slug: 'vila-sandra', name: 'Vila Sandra', parentBairro: 'Cidade Industrial (CIC)', description: 'A Vila Sandra é uma tradicional e densa comunidade da Cidade Industrial de Curitiba. A Loovi assegura proteção completa de 100% da FIPE, guincho 24h e rastreador gratuito para os motoristas da Vila Sandra.', avgArrivalMinutes: 18 },
  { slug: 'neoville', name: 'Neoville', parentBairro: 'Cidade Industrial (CIC)', description: 'Bairro planejado moderno dentro do CIC/Pinheirinho com novos condomínio e comércios. Moradores do Neoville contam com a executiva Bárbara Durães para contratar o Seguro Loovi 100% online.', avgArrivalMinutes: 16 },
  { slug: 'vitoria-regia', name: 'Vitória Régia', parentBairro: 'Cidade Industrial (CIC)', description: 'Importante conjunto na zona sul da CIC, próximo à Contorno Sul. Proteja seu carro particular ou de aplicativo contra roubo, furto e colisão com a Loovi.', avgArrivalMinutes: 20 },
  { slug: 'caiua', name: 'Caiuá', parentBairro: 'Cidade Industrial (CIC)', description: 'Comunidade vibrante da zona oeste da CIC com intenso fluxo de veículos. A Loovi oferece assistência 24h em caso de panes, furto de pneu e reboque.', avgArrivalMinutes: 18 },
  { slug: 'sabara', name: 'Sabará', parentBairro: 'Cidade Industrial (CIC)', description: 'O Sabará conta com transporte e vias de ligação interna. Proteção veicular democrática sem análise de perfil para os motoristas do Sabará.', avgArrivalMinutes: 20 },
  { slug: 'nossa-senhora-da-luz', name: 'Nossa Senhora da Luz', parentBairro: 'Cidade Industrial (CIC)', description: 'Histórica comunidade do CIC, um dos primeiros conjuntos habitacionais planejados. A Loovi garante 100% FIPE e seguro para Uber no Nossa Senhora da Luz.', avgArrivalMinutes: 18 },
  { slug: 'conquista', name: 'Conquista', parentBairro: 'Cidade Industrial (CIC)', description: 'Localidade residencial no CIC com atrativas opções de moradia. Garanta seu seguro de carro a partir de R$ 98,56/mês.', avgArrivalMinutes: 20 },
  { slug: 'gabineto', name: 'Gabineto', parentBairro: 'Cidade Industrial (CIC)', description: 'Conjunto residencial no CIC perto da Eduardo Sprada. Cotação rápida pelo WhatsApp sem burocracia.', avgArrivalMinutes: 18 },
  { slug: 'itatiaia', name: 'Itatiaia', parentBairro: 'Cidade Industrial (CIC)', description: 'Região populosa da CIC com grande número de veículos de passeio e trabalho. Proteção completa contra danos a terceiros até R$ 100 mil.', avgArrivalMinutes: 18 },
  { slug: 'santa-helena', name: 'Santa Helena', parentBairro: 'Cidade Industrial (CIC)', description: 'Região residencial no CIC com forte senso comunitário. Seguro Loovi sem consulta ao SPC/Serasa.', avgArrivalMinutes: 20 },
  { slug: 'atenas', name: 'Atenas', parentBairro: 'Cidade Industrial (CIC)', description: 'Conjunto residencial Atenas na zona oeste de Curitiba. Assistência 24h e socorro de bateria rápida.', avgArrivalMinutes: 18 },
  { slug: 'osvaldo-cruz', name: 'Osvaldo Cruz', parentBairro: 'Cidade Industrial (CIC)', description: 'Importante subdivisão habitacional no CIC perto de indústrias e serviços. Cobertura de 100% FIPE.', avgArrivalMinutes: 20 },
  { slug: 'barigui-regiao-cic', name: 'Barigui (região CIC)', parentBairro: 'Cidade Industrial (CIC)', description: 'Área do rio Barigui no trecho da CIC, com rotas de forte circulação de carga e passageiros. Reboque 24h descomplicado.', avgArrivalMinutes: 18 },
  { slug: 'cic-central', name: 'CIC Central', parentBairro: 'Cidade Industrial (CIC)', description: 'Coração comercial e administrativo da Cidade Industrial de Curitiba. Atendimento prioritário por Bárbara Durães.', avgArrivalMinutes: 16 },
  { slug: 'vila-verde', name: 'Vila Verde', parentBairro: 'Cidade Industrial (CIC)', description: 'Extensa área residencial do CIC perto de Araucária. Proteção garantida para carros antigos e de aplicativo.', avgArrivalMinutes: 20 },
  { slug: 'vila-pantanal', name: 'Vila Pantanal', parentBairro: 'Alto Boqueirão', description: 'Localizada no Alto Boqueirão perto do Zoológico. Socorro mecânico e reboque disponível 24 horas por dia.', avgArrivalMinutes: 20 },
  { slug: 'vila-torres', name: 'Vila Torres', parentBairro: 'Prado Velho', description: 'Área do Prado Velho próxima à PUCPR e Guabirotuba. Rastreamento inteligente e cobertura de colisão.', avgArrivalMinutes: 14 },
  { slug: 'vila-das-torres', name: 'Vila das Torres', parentBairro: 'Prado Velho', description: 'Região de forte conexão comunitária perto da Av. das Torres. Proteção Loovi sem análise de perfil.', avgArrivalMinutes: 14 },
  { slug: 'vila-parolin', name: 'Vila Parolin', parentBairro: 'Parolin', description: 'Região populosa no Parolin perto da Linha Verde. Seguro veicular sem burocracia.', avgArrivalMinutes: 15 },
  { slug: 'vila-hauer', name: 'Vila Hauer', parentBairro: 'Hauer', description: 'Subdivisão tradicional do Hauer com grande concentração de oficinas e lojas. Guincho imediato.', avgArrivalMinutes: 16 },
  { slug: 'vila-guaira', name: 'Vila Guaíra', parentBairro: 'Guaíra', description: 'Área residencial aconchegante no Guaíra perto da Av. Kennedy. Cotação em 3 minutos pelo WhatsApp.', avgArrivalMinutes: 15 },
  { slug: 'vila-oficinas', name: 'Vila Oficinas', parentBairro: 'Cajuru', description: 'Famosa área do Cajuru onde ficam oficinas ferroviárias históricas e comércios locais. Proteção total contra roubo e furto.', avgArrivalMinutes: 18 },
  { slug: 'vila-osternack', name: 'Vila Osternack', parentBairro: 'Sítio Cercado', description: 'Subdivisão importante do Sítio Cercado com dezenas de milhares de moradores. 100% FIPE para Uber e particulares.', avgArrivalMinutes: 20 },
  { slug: 'vila-sao-pedro', name: 'Vila São Pedro', parentBairro: 'Xaxim', description: 'Tradicional comunidade do Xaxim perto da Linha Verde. Atendimento rápido e amigável pela consultora Bárbara Durães.', avgArrivalMinutes: 16 },
  { slug: 'vila-audi', name: 'Vila Audi', parentBairro: 'Uberaba', description: 'Região do Uberaba de Cima perto de São José dos Pinhais. Proteção garantida contra colisões e terceiros.', avgArrivalMinutes: 18 },
  { slug: 'jardim-gabineto', name: 'Jardim Gabineto', parentBairro: 'Cidade Industrial (CIC)', description: 'Loteamento do Gabineto na CIC com ruas calmas e residências. Rastreamento veicular grátis.', avgArrivalMinutes: 18 },
  { slug: 'jardim-itatiaia', name: 'Jardim Itatiaia', parentBairro: 'Cidade Industrial (CIC)', description: 'Região do Itatiaia com fácil acesso ao Contorno Sul. Assistência 24h sem limites.', avgArrivalMinutes: 18 },
  { slug: 'jardim-kosmos', name: 'Jardim Kosmos', parentBairro: 'Capão Raso', description: 'Área tranquila do Capão Raso entre a Av. Brasília e a Av. das Indústrias. Cotação simplificada.', avgArrivalMinutes: 16 },
  { slug: 'jardim-da-ordem', name: 'Jardim da Ordem', parentBairro: 'Tatuquara', description: 'Um dos maiores conjuntos do Tatuquara. Cobertura completa de colisão, furto e guincho.', avgArrivalMinutes: 22 },
  { slug: 'pinheirinho-velho', name: 'Pinheirinho Velho', parentBairro: 'Pinheirinho', description: 'Núcleo original do Pinheirinho com forte tradição comercial. Atendimento da Loovi no WhatsApp.', avgArrivalMinutes: 16 },
  { slug: 'capao-raso-velho', name: 'Capão Raso Velho', parentBairro: 'Capão Raso', description: 'Área histórica do Capão Raso próxima à Av. República Argentina. Seguro mensal recorrente.', avgArrivalMinutes: 15 },
  { slug: 'portao-velho', name: 'Portão Velho', parentBairro: 'Portão', description: 'Região tradicional do Portão perto da Igreja do Portão e República Argentina. Troca de vidros e faróis.', avgArrivalMinutes: 15 },
  { slug: 'sitio-cercado-velho', name: 'Sítio Cercado Velho', parentBairro: 'Sítio Cercado', description: 'Miolo comercial antigo do Sítio Cercado perto da Izaac Ferreira da Cruz. Proteção transparente.', avgArrivalMinutes: 18 },
  { slug: 'umbara-de-cima', name: 'Umbará de Cima', parentBairro: 'Umbará', description: 'Parte alta do Umbará com chácaras e residências. Socorro de guincho sem complicação.', avgArrivalMinutes: 22 },
  { slug: 'umbara-de-baixo', name: 'Umbará de Baixo', parentBairro: 'Umbará', description: 'Região sul do Umbará em direção ao Ganchinho e Fazenda Rio Grande. Seguro aceito para carros antigos.', avgArrivalMinutes: 22 },
  { slug: 'boqueirao-velho', name: 'Boqueirão Velho', parentBairro: 'Boqueirão', description: 'Entorno histórico do Boqueirão com grande presença de famílias e comércios de rua.', avgArrivalMinutes: 18 },
  { slug: 'boqueirao-alto', name: 'Boqueirão Alto', parentBairro: 'Boqueirão', description: 'Área norte do Boqueirão próxima ao Hauer e Carmo. Proteção 100% FIPE.', avgArrivalMinutes: 16 },
  { slug: 'cajuru-alto', name: 'Cajuru Alto', parentBairro: 'Cajuru', description: 'Região mais elevada do Cajuru conectando à BR-277. Guincho 24h em todo o estado.', avgArrivalMinutes: 18 },
  { slug: 'uberaba-velho', name: 'Uberaba Velho', parentBairro: 'Uberaba', description: 'Núcleo histórico do Uberaba com vias tradicionais. Cobertura completa contra terremoto e tempestades.', avgArrivalMinutes: 16 },
  { slug: 'uberaba-de-cima', name: 'Uberaba de Cima', parentBairro: 'Uberaba', description: 'Parte do Uberaba perto da Av. das Torres e São José dos Pinhais. Seguro com carro reserva.', avgArrivalMinutes: 16 },
  { slug: 'boa-vista-norte', name: 'Boa Vista Norte', parentBairro: 'Boa Vista', description: 'Região norte do Boa Vista perto do Santa Cândida. Atendimento humanizado por Bárbara Durães.', avgArrivalMinutes: 18 },
  { slug: 'bairro-alto-norte', name: 'Bairro Alto Norte', parentBairro: 'Bairro Alto', description: 'Região do Bairro Alto em direção ao Atuba. Cobertura de acidentes e rastreador grátis.', avgArrivalMinutes: 20 },
  { slug: 'tingui-velho', name: 'Tingui Velho', parentBairro: 'Tingui', description: 'Localidade antiga do Tingui perto do Parque Bacacheri. Proteção contra terceiros até R$ 100 mil.', avgArrivalMinutes: 18 },
  { slug: 'orleans-velho', name: 'Orleans Velho', parentBairro: 'Orleans', description: 'Miolo histórico do Orleans perto do viaduto e BR-277. Proteção para carros de leilão e rebaixados.', avgArrivalMinutes: 20 },
  { slug: 'santa-felicidade-norte', name: 'Santa Felicidade Norte', parentBairro: 'Santa Felicidade', description: 'Região dos restaurantes e vinícolas ao norte do portal de Santa Felicidade. Reboque 24h.', avgArrivalMinutes: 18 },
  { slug: 'sao-braz-alto', name: 'São Braz Alto', parentBairro: 'São Braz', description: 'Parte elevada do São Braz perto de Campo Magro. Seguro auto sem consulta de perfil.', avgArrivalMinutes: 18 }
];
