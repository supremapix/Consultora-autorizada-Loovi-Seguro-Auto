const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://loovi-barbara-duraes.com.br';
const TODAY = new Date().toISOString().split('T')[0];

function parseTsArray(filePath, varName) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Simple regex parser for JS/TS exported object arrays
  const items = [];
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  const nameRegex = /name:\s*['"]([^'"]+)['"]/g;
  
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    items.push(match[1]);
  }
  return items;
}

// Read raw contents for full text generation
const bairrosRaw = fs.readFileSync(path.join(__dirname, '../src/data/bairrosData.ts'), 'utf8');
const cidadesRaw = fs.readFileSync(path.join(__dirname, '../src/data/cidadesData.ts'), 'utf8');
const regioesRaw = fs.readFileSync(path.join(__dirname, '../src/data/regioesData.ts'), 'utf8');
const blogRaw = fs.readFileSync(path.join(__dirname, '../src/data/blogData.ts'), 'utf8');

const bairrosSlugs = parseTsArray(path.join(__dirname, '../src/data/bairrosData.ts'));
const cidadesSlugs = parseTsArray(path.join(__dirname, '../src/data/cidadesData.ts'));
const regioesSlugs = parseTsArray(path.join(__dirname, '../src/data/regioesData.ts'));
const blogSlugs = parseTsArray(path.join(__dirname, '../src/data/blogData.ts'));

console.log(`Parsed: ${bairrosSlugs.length} bairros, ${cidadesSlugs.length} cidades, ${regioesSlugs.length} regiões, ${blogSlugs.length} blog posts.`);

// 1. GENERATE SITEMAP.XML
const mainRoutes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/bairros-curitiba', priority: '0.9', changefreq: 'weekly' },
  { url: '/cidades-regiao-metropolitana', priority: '0.9', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/sobre', priority: '0.8', changefreq: 'monthly' },
  { url: '/coberturas', priority: '0.8', changefreq: 'monthly' },
  { url: '/seguro-app-uber', priority: '0.9', changefreq: 'weekly' },
  { url: '/faq', priority: '0.8', changefreq: 'monthly' },
  { url: '/politica-de-privacidade', priority: '0.3', changefreq: 'yearly' },
  { url: '/termos-de-uso', priority: '0.3', changefreq: 'yearly' },
];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

mainRoutes.forEach(route => {
  sitemapXml += `  <url>
    <loc>${DOMAIN}${route.url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>\n`;
});

// Bairros
bairrosSlugs.forEach(slug => {
  sitemapXml += `  <url>
    <loc>${DOMAIN}/bairro/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

// Regiões
regioesSlugs.forEach(slug => {
  sitemapXml += `  <url>
    <loc>${DOMAIN}/regiao/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
});

// Cidades
cidadesSlugs.forEach(slug => {
  sitemapXml += `  <url>
    <loc>${DOMAIN}/cidade/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

// Blog Posts
blogSlugs.forEach(slug => {
  sitemapXml += `  <url>
    <loc>${DOMAIN}/blog/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

sitemapXml += `</urlset>\n`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapXml, 'utf8');
console.log('sitemap.xml successfully generated!');

// 2. GENERATE ROBOTS.TXT
const robotsTxt = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsTxt, 'utf8');
console.log('robots.txt successfully generated!');

// 3. GENERATE LLMS.TXT
const llmsTxt = `# Seguro Auto Loovi — Curitiba e Região Metropolitana

> Site oficial da Executiva e Consultora Autorizada Bárbara Durães (CNPJ 40.404.570/0001-61). Cotação de Seguro Auto Loovi sem análise de perfil, com 100% da Tabela FIPE, guincho 24h nacional e pagamento mensal recorrente sem bloquear limite do cartão de crédito.

## Resumo e Identidade
- **Consultora Responsável:** Bárbara Hanna Alves Durães (CNPJ 40.404.570/0001-61)
- **Atuação:** Consultora e executiva autorizada da Loovi (CW Technology Ltda, CNPJ 34.504.257/0001-00) / LTI Seguros S.A. (CNPJ 47.006.254/0001-80).
- **Regulamentação SUSEP:** Processo Sandbox nº 15414.649321/2021-55.
- **Área Principal:** Todos os 75 bairros de Curitiba/PR e 15 cidades da Região Metropolitana (São José dos Pinhais, Pinhais, Colombo, Araucária, Campo Largo, Fazenda Rio Grande, Almirante Tamandaré, etc.).
- **Preço Base:** A partir de R$ 98,56/mês via assinatura recorrente no cartão de crédito (sem comprometer o limite total) ou Pix.

## Canais de Atendimento Direto
- **WhatsApp Cotação Instantânea:** (41) 99232-8005 (https://wa.me/5541992328005)
- **Telefone Curitiba / PR:** (41) 99232-8005
- **Telefone Fixo / MG:** (31) 99630-5336
- **E-mail:** barbara.lovvi@outlook.com
- **Central de Emergência e Assistência 24h (Loovi nacional):** 0800 948 4888
- **Comunicação de Roubo / Furto 24h:** 0800 607 2007

## Principais Recursos e Diferenciais do Seguro Loovi
- **100% Tabela FIPE:** Indenização integral garantida para colisão total, roubo ou furto.
- **Sem Análise de Perfil:** Sem variação por idade do condutor, gênero, estado civil ou CEP do bairro.
- **Sem Consulta SPC/Serasa:** Aceitação garantida para motoristas com restrições de crédito.
- **Sem Alienação do Veículo:** O carro continua 100% no seu nome.
- **Carros Especiais e Antigos:** Aceitação para veículos a partir de 1986, rebaixados, com GNV, leilão e modificados.
- **Proteção Completa para Uber, 99 e Apps:** Indenização FIPE sem descontos por uso comercial e opção de carro reserva de 7 ou 15 dias.
- **Assistência 24 Horas em Todo o Brasil:** Guincho 0800, socorro mecânico, pane elétrica, pane seca (falta de combustível), chaveiro, troca de pneus, recarga de bateria e hotel para ocupantes.
- **Proteção contra Terceiros:** R$ 100.000,00 para danos materiais e corporais.
- **Cobertura de Vidros, Faróis e Lanterna:** Reparo e substituição inclusos nas opções de apólice.

## Estrutura de Páginas e Links Principais
- [Página Inicial](${DOMAIN}/): Apresentação do serviço, simulador interativo em 3 etapas, depoimentos e tabela de coberturas.
- [Coberturas Completas](${DOMAIN}/coberturas): Detalhes de colisão, furto, roubo, terceiros (R$ 100 mil), guincho e franquia reduzida (5% FIPE).
- [Seguro para Uber e Apps](${DOMAIN}/seguro-app-uber): Plano especial para motoristas de aplicativo e táxis com 100% FIPE.
- [Guia dos 75 Bairros de Curitiba](${DOMAIN}/bairros-curitiba): Lista completa com tempo médio de atendimento de guincho e rodovias por bairro.
- [Cidades da Região Metropolitana](${DOMAIN}/cidades-regiao-metropolitana): Cobertura detalhada em São José dos Pinhais, Pinhais, Colombo, Araucária, Campo Largo, etc.
- [Blog e Guias Práticos](${DOMAIN}/blog): Dicas para economizar no seguro auto, análise da SUSEP, comparativo com proteções veiculares informais.
- [Quem Somos — Bárbara Durães](${DOMAIN}/sobre): Apresentação da executiva, CNPJ, histórico e endereço de atendimento.
- [Perguntas Frequentes (FAQ)](${DOMAIN}/faq): Respostas sobre vistoria digital, vigência imediata, prazos de indenização e regulamentação.
- [Política de Privacidade](${DOMAIN}/politica-de-privacidade): Conformidade com LGPD.
- [Termos de Uso](${DOMAIN}/termos-de-uso): Condições do portal.

## Documentação Detalhada
Para obter o arquivo de contexto completo com todas as informações dos 75 bairros, 15 cidades, 46 regiões populares, artigos do blog e FAQ, acesse [llms-full.txt](${DOMAIN}/llms-full.txt).
`;

fs.writeFileSync(path.join(__dirname, '../public/llms.txt'), llmsTxt, 'utf8');
console.log('llms.txt successfully generated!');

// 4. GENERATE LLMS-FULL.TXT
let llmsFullTxt = `# Seguro Auto Loovi — Contexto Completo para Modelos de Linguagem (LLMs)

> Este arquivo contém a documentação completa do portal da consultora autorizada Bárbara Durães para cotação e contratação do Seguro Auto Loovi em Curitiba e Região Metropolitana.

${llmsTxt}

---

# CONTEÚDO INTEGRAL DAS SEÇÕES DO SITE

## 1. Informações Institucionais e Regulatórias
- **Consultora Autorizada:** Bárbara Hanna Alves Durães
- **CNPJ:** 40.404.570/0001-61
- **Endereço Comercial:** Rua São Pedro, 593 — Apto 504, Cabral — Curitiba/PR — CEP 80035-020
- **Representação Oficial:** Loovi (CW Technology Ltda., CNPJ 34.504.257/0001-00)
- **Seguradora Parceira:** LTI Seguros S.A. (CNPJ 47.006.254/0001-80)
- **Registro SUSEP:** Processo Sandbox Regulatório nº 15414.649321/2021-55.
- **WhatsApp Direto:** (41) 99232-8005
- **E-mail:** barbara.lovvi@outlook.com

---

## 2. Coberturas e Regras do Contrato
- **Indenização:** 100% da Tabela FIPE vigente no momento do sinistro para perda total, roubo ou furto não localizado.
- **Franquia em Colisão Parcial:**
  - Veículos de passeio populares/nacionais: 5% da Tabela FIPE (mínimo de R$ 2.500,00).
  - Veículos diferenciados/SUVs: 8% da Tabela FIPE (mínimo de R$ 3.500,00).
  - Veículos importados/luxo: 10% da Tabela FIPE (mínimo de R$ 5.000,00).
- **Danos a Terceiros (RCF-V):** Cobertura de até R$ 100.000,00 para danos materiais e corporais causados a terceiros sem cobrança de franquia para reparar o terceiro.
- **Assistência 24 Horas:** Reboque (guincho) 0800 nacional com quilometragem ampliada conforme o plano, chaveiro, pane elétrica, pane mecânica, auxílio na falta de combustível (pane seca), troca de pneus com estepe e recarga de bateria.
- **Carro Reserva:** Opcional de 7 ou 15 dias de carro reserva em caso de sinistro coberto.
- **Vidros, Faróis e Retrovisores:** Troca e reparo com pequena coparticipação.

---

## 3. Principais Dúvidas Respondidas (FAQ)

### O Seguro Loovi é aprovado pela SUSEP?
Sim, a Loovi opera como representante de seguros da LTI Seguros S.A., seguradora aprovada e fiscalizada pela SUSEP no Sandbox Regulatório (Processo nº 15414.649321/2021-55).

### Como funciona o pagamento mensal?
É feito por assinatura recorrente no cartão de crédito, assim como serviços de streaming. Não é um parcelamento de apólice anual que bloqueia R$ 3.000 do limite, e sim uma cobrança mensal automática de R$ 98,56/mês em média.

### Quem mora em bairro de alto risco paga mais caro?
Não. A Loovi não faz análise de perfil nem diferencia preço por CEP, idade, sexo ou estado civil. O preço é determinado pelo modelo e valor de mercado do veículo.

### Aceita carros com passagem por leilão ou sinistrados?
Sim! A Loovi é uma das poucas seguradoras que aceita veículos vindos de leilão, recuperados de financiamento e rebaixados legalizados.

### Motorista de aplicativo (Uber/99) tem cobertura?
Sim! A cobertura comercial é 100% garantida com indenização de 100% da Tabela FIPE sem letras miúdas.

---

## 4. Relação dos 75 Bairros Oficiais de Curitiba Cobertos

Os 75 bairros de Curitiba possuem atendimento prioritário de guincho 24h e socorro rápido:
Abranches, Água Verde, Ahú, Alto Boqueirão, Alto da Glória, Alto da Rua XV, Atuba, Augusta, Bacacheri, Bairro Alto, Barreirinha, Batel, Bigorrilho (Champagnat), Boa Vista, Bom Retiro, Boqueirão, Butiatuvinha, Cabral, Cachoeira, Cajuru, Campina do Siqueira, Campo Comprido, Campo de Santana, Capão da Imbuia, Capão Raso, Cascatinha, Caximba, Centro, Centro Cívico, Cidade Industrial (CIC), Cristo Rei, Fanny, Ganchinho, Guabirotuba, Guaíra, Hauer, Hugo Lange, Jardim Botânico, Jardim das Américas, Jardim Social, Juvevê, Lindóia, Mercês, Mossunguê (Ecoville), Novo Mundo, Orleans, Parolin, Pilarzinho, Pinheirinho, Portão, Prado Velho, Rebouças, Riviera, Santa Cândida, Santa Felicidade, Santa Quitéria, Santo Inácio, São Braulio / São Braz, São Francisco, São João, São Lourenço, Semiprecioso / Sítio Cercado, Taboão, Tarumã, Tatuquara, Tingui, Uberaba, Umbará, Vila Izabel, Vista Alegre, Xaxim.

---

## 5. Cidades da Região Metropolitana de Curitiba (RMC) Atendidas
1. **São José dos Pinhais** (Aeroporto Afonso Pena, BR-277, BR-376, Contorno Leste)
2. **Pinhais** (PR-415 / Rodovia João Leopoldo Jacomel, Av. Camilo di Lellis)
3. **Colombo** (Estrada da Ribeira BR-476, Rodovia da Uva PR-417)
4. **Araucária** (REPAR, Rodovia do Xisto BR-476)
5. **Campo Largo** (BR-277 saída interior, Av. Centenário)
6. **Fazenda Rio Grande** (BR-116 sentido Santa Catarina)
7. **Almirante Tamandaré** (Rodovia dos Minérios PR-092)
8. **Piraquara** (PR-415, Barragem do Piraquara)
9. **Campina Grande do Sul** (BR-116 sentido São Paulo / Régis Bittencourt)
10. **Quatro Barras** (Contorno Leste, Graciosa)
11. **Campo Magro** (PR-090 Estrada de Manoel Ribas)
12. **Itaperuçu** (PR-092)
13. **Mandirituba** (BR-116)
14. **Balsa Nova** (BR-277 / PR-510)
15. **Contenda** (BR-476)

---

## 6. Artigos do Blog e Conteúdo Educativo

### Artigo 1: Como Economizar no Seguro Auto em Curitiba sem Perder Coberturas
Discute a eliminação da análise de perfil tradicional, a migração do modelo de apólice anual travando cartão para a assinatura mensal recorrente, e a importância dos 100% da Tabela FIPE sem descontos por perfil.

### Artigo 2: Seguro Auto Loovi Vale a Pena? Análise Completa e SUSEP
Análise técnica do processo Sandbox nº 15414.649321/2021-55 da SUSEP e da operação conjunta com a LTI Seguros S.A., ressaltando a velocidade do socorro 24h em Curitiba.

### Artigo 3: Seguro para Uber e 99 em Curitiba: Por que Escolher a Loovi?
Guia para motoristas de aplicativo que precisam de 100% da Tabela FIPE, carro reserva e proteção contra acidentes com passageiros ou terceiros na capital paranaense.

---

## 7. Dados de Contato para Atendimento e Cotação
- **Bárbara Durães:** Executiva Autorizada Loovi
- **WhatsApp:** (41) 99232-8005
- **Atendimento Online:** Segunda a Segunda, simulação expressa em 3 minutos.
`;

fs.writeFileSync(path.join(__dirname, '../public/llms-full.txt'), llmsFullTxt, 'utf8');
console.log('llms-full.txt successfully generated!');
