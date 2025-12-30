import type { Metadata } from "next";
import { Box, Container, Typography, Paper, Chip, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AdSense } from "@/components/AdSense";

export const metadata: Metadata = {
  title: "Diferenças Entre Mega-Sena, Lotofácil e Quina | Guia Completo",
  description:
    "Entenda as regras, probabilidades e estratégias de cada loteria. Descubra qual é a melhor opção para seu bolão com comparações detalhadas.",
  openGraph: {
    title: "Guia Completo: Diferenças Entre Mega-Sena, Lotofácil e Quina",
    description: "Comparativo completo entre as principais loterias do Brasil",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Guia Completo: Diferenças Entre Mega-Sena, Lotofácil e Quina",
  description: "Entenda as regras, probabilidades e estratégias de cada loteria brasileira",
  datePublished: "2024-12-30",
  dateModified: "2024-12-30",
  author: { "@type": "Organization", name: "Bolão Fácil" },
  publisher: {
    "@type": "Organization",
    name: "Bolão Fácil",
    logo: { "@type": "ImageObject", url: "https://bolaofacil.com.br/icon.svg" },
  },
};

export default function ArtigoDiferencasLoteriasPage() {
  const lotteryComparison = [
    {
      name: "Mega-Sena",
      numbers: "6 de 60",
      minBet: "6 números",
      maxBet: "20 números",
      minPrice: "R$ 5,00",
      draws: "Quarta e Sábado",
      mainPrize: "6 acertos",
      probability: "1 em 50.063.860",
    },
    {
      name: "Lotofácil",
      numbers: "15 de 25",
      minBet: "15 números",
      maxBet: "20 números",
      minPrice: "R$ 3,00",
      draws: "Segunda a Sábado",
      mainPrize: "15 acertos",
      probability: "1 em 3.268.760",
    },
    {
      name: "Quina",
      numbers: "5 de 80",
      minBet: "5 números",
      maxBet: "15 números",
      minPrice: "R$ 2,50",
      draws: "Todos os dias",
      mainPrize: "5 acertos",
      probability: "1 em 24.040.016",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Box sx={{ minHeight: "100vh", bgcolor: "#0a0a0f" }}>
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Box sx={{ mb: 4, display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "rgba(255,255,255,0.5)", "&:hover": { color: "#22c55e" } }}>Início</Typography>
            </Link>
            <Typography sx={{ color: "rgba(255,255,255,0.3)" }}>/</Typography>
            <Link href="/blog" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "rgba(255,255,255,0.5)", "&:hover": { color: "#22c55e" } }}>Blog</Typography>
            </Link>
            <Typography sx={{ color: "rgba(255,255,255,0.3)" }}>/</Typography>
            <Typography sx={{ color: "#22c55e" }}>Diferenças Entre Loterias</Typography>
          </Box>

          <Box sx={{ mb: 5 }}>
            <Chip label="Comparativo" sx={{ bgcolor: "rgba(59, 130, 246, 0.2)", color: "#3b82f6", fontWeight: 600, mb: 3, border: "1px solid rgba(59, 130, 246, 0.4)" }} />
            <Typography variant="h3" component="h1" sx={{ fontWeight: 800, color: "white", mb: 3, lineHeight: 1.2 }}>
              Guia Completo: Diferenças Entre Mega-Sena, Lotofácil e Quina
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", mb: 2 }}>
              Entenda as regras, probabilidades, custos e estratégias de cada loteria. Descubra qual é a melhor opção para seu bolão.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
              Publicado em 30 de dezembro de 2024 • 10 min de leitura
            </Typography>
          </Box>

          <Divider sx={{ mb: 5, borderColor: "rgba(255,255,255,0.1)" }} />

          <Box sx={{ mb: 5 }}><AdSense slot="inArticle" format="auto" /></Box>

          <Paper sx={{ p: { xs: 3, md: 5 }, bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 3 }}>
            <Box sx={{ "& h2": { color: "#3b82f6", mt: 5, mb: 3, fontSize: "1.8rem", fontWeight: 700 }, "& h3": { color: "rgba(255,255,255,0.9)", mt: 4, mb: 2, fontSize: "1.4rem", fontWeight: 600 }, "& p": { color: "rgba(255,255,255,0.7)", mb: 3, lineHeight: 1.8, fontSize: "1.05rem" }, "& ul, & ol": { color: "rgba(255,255,255,0.7)", mb: 3, pl: 4, lineHeight: 1.8 }, "& li": { mb: 1.5 }, "& strong": { color: "rgba(255,255,255,0.9)", fontWeight: 600 } }}>
              
              <Typography paragraph>
                Escolher a loteria certa para seu bolão pode fazer toda a diferença. Cada modalidade tem suas características únicas, probabilidades diferentes e estratégias específicas. Neste guia completo, vamos comparar as três loterias mais populares do Brasil.
              </Typography>

              <Typography variant="h2">Tabela Comparativa Rápida</Typography>
              <TableContainer component={Paper} sx={{ mb: 4, bgcolor: "rgba(0,0,0,0.3)" }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: "rgba(59, 130, 246, 0.1)" }}>
                      <TableCell sx={{ color: "white", fontWeight: 700 }}>Característica</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: 700 }}>Mega-Sena</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: 700 }}>Lotofácil</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: 700 }}>Quina</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      ["Números escolhidos", "6 de 60", "15 de 25", "5 de 80"],
                      ["Aposta mínima", "R$ 5,00", "R$ 3,00", "R$ 2,50"],
                      ["Sorteios", "Qua e Sáb", "Seg a Sáb", "Todos os dias"],
                      ["Prêmio principal", "6 acertos", "15 acertos", "5 acertos"],
                      ["Probabilidade", "1 em 50M", "1 em 3,2M", "1 em 24M"],
                    ].map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell sx={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>{row[0]}</TableCell>
                        <TableCell sx={{ color: "rgba(255,255,255,0.7)" }}>{row[1]}</TableCell>
                        <TableCell sx={{ color: "rgba(255,255,255,0.7)" }}>{row[2]}</TableCell>
                        <TableCell sx={{ color: "rgba(255,255,255,0.7)" }}>{row[3]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography variant="h2">Mega-Sena: O Maior Prêmio do Brasil</Typography>
              
              <Typography variant="h3">Como Funciona</Typography>
              <Typography paragraph>
                A Mega-Sena é a loteria mais famosa do Brasil. Você escolhe de 6 a 20 números entre 1 e 60. Ganha quem acertar 4 (quadra), 5 (quina) ou 6 (sena) números. Os sorteios acontecem às quartas e sábados.
              </Typography>

              <Typography variant="h3">Probabilidades</Typography>
              <ul>
                <li><strong>Sena (6 números):</strong> 1 em 50.063.860</li>
                <li><strong>Quina (5 números):</strong> 1 em 154.518</li>
                <li><strong>Quadra (4 números):</strong> 1 em 2.332</li>
              </ul>

              <Typography variant="h3">Custos</Typography>
              <ul>
                <li>6 números: R$ 5,00</li>
                <li>7 números: R$ 35,00</li>
                <li>8 números: R$ 140,00</li>
                <li>9 números: R$ 420,00</li>
                <li>10 números: R$ 1.050,00</li>
              </ul>

              <Typography variant="h3">Ideal Para Bolão?</Typography>
              <Typography paragraph>
                <strong>Sim!</strong> A Mega-Sena é perfeita para bolões porque os custos de apostas maiores podem ser divididos entre muitas pessoas. Um jogo de 10 números que custa R$ 1.050 pode ser dividido entre 20 pessoas, custando apenas R$ 52,50 por pessoa.
              </Typography>

              <Typography variant="h2">Lotofácil: Mais Chances de Ganhar</Typography>
              
              <Typography variant="h3">Como Funciona</Typography>
              <Typography paragraph>
                Na Lotofácil, você escolhe entre 15 e 20 números de um total de 25. Ganha quem acertar 11, 12, 13, 14 ou 15 números. É a loteria com mais sorteios semanais (segunda a sábado).
              </Typography>

              <Typography variant="h3">Probabilidades</Typography>
              <ul>
                <li><strong>15 acertos:</strong> 1 em 3.268.760</li>
                <li><strong>14 acertos:</strong> 1 em 21.792</li>
                <li><strong>13 acertos:</strong> 1 em 692</li>
                <li><strong>12 acertos:</strong> 1 em 60</li>
                <li><strong>11 acertos:</strong> 1 em 11</li>
              </ul>

              <Typography variant="h3">Custos</Typography>
              <ul>
                <li>15 números: R$ 3,00</li>
                <li>16 números: R$ 48,00</li>
                <li>17 números: R$ 408,00</li>
                <li>18 números: R$ 2.448,00</li>
              </ul>

              <Typography variant="h3">Ideal Para Bolão?</Typography>
              <Typography paragraph>
                <strong>Muito bom!</strong> A Lotofácil tem a melhor relação custo-benefício. As chances de ganhar prêmios menores (11, 12, 13 acertos) são muito maiores, o que significa que seu bolão pode ter retorno mais frequente.
              </Typography>

              <Typography variant="h2">Quina: Sorteios Diários</Typography>
              
              <Typography variant="h3">Como Funciona</Typography>
              <Typography paragraph>
                Na Quina, você escolhe de 5 a 15 números entre 1 e 80. Ganha quem acertar 2 (duque), 3 (terno), 4 (quadra) ou 5 (quina) números. Única loteria com sorteios todos os dias.
              </Typography>

              <Typography variant="h3">Probabilidades</Typography>
              <ul>
                <li><strong>Quina (5 números):</strong> 1 em 24.040.016</li>
                <li><strong>Quadra (4 números):</strong> 1 em 64.106</li>
                <li><strong>Terno (3 números):</strong> 1 em 866</li>
                <li><strong>Duque (2 números):</strong> 1 em 36</li>
              </ul>

              <Typography variant="h3">Custos</Typography>
              <ul>
                <li>5 números: R$ 2,50</li>
                <li>6 números: R$ 15,00</li>
                <li>7 números: R$ 52,50</li>
                <li>8 números: R$ 140,00</li>
                <li>9 números: R$ 315,00</li>
              </ul>

              <Typography variant="h3">Ideal Para Bolão?</Typography>
              <Typography paragraph>
                <strong>Ótima opção!</strong> A Quina é a mais barata e tem sorteios diários, perfeita para bolões que querem jogar com frequência sem gastar muito.
              </Typography>

              <Typography variant="h2">Qual Escolher Para Seu Bolão?</Typography>

              <Typography variant="h3">Escolha Mega-Sena se:</Typography>
              <ul>
                <li>Você quer concorrer aos maiores prêmios</li>
                <li>Tem um grupo grande disposto a investir mais</li>
                <li>Prefere sorteios menos frequentes (2x por semana)</li>
                <li>Quer a emoção do maior prêmio do Brasil</li>
              </ul>

              <Typography variant="h3">Escolha Lotofácil se:</Typography>
              <ul>
                <li>Quer mais chances de ganhar algum prêmio</li>
                <li>Prefere retornos mais frequentes (mesmo que menores)</li>
                <li>Tem um grupo pequeno ou médio</li>
                <li>Quer sorteios quase diários</li>
              </ul>

              <Typography variant="h3">Escolha Quina se:</Typography>
              <ul>
                <li>Quer jogar com frequência gastando pouco</li>
                <li>Prefere sorteios diários</li>
                <li>Tem um orçamento mais limitado</li>
                <li>Quer um meio termo entre prêmio e probabilidade</li>
              </ul>

              <Typography variant="h2">Estratégias Para Cada Loteria</Typography>

              <Typography variant="h3">Mega-Sena</Typography>
              <ul>
                <li>Faça apostas de 8 a 10 números em bolão</li>
                <li>Combine números pares e ímpares</li>
                <li>Evite sequências óbvias (1,2,3,4,5,6)</li>
                <li>Considere fazer mais jogos em concursos especiais</li>
              </ul>

              <Typography variant="h3">Lotofácil</Typography>
              <ul>
                <li>Aposte em 16 ou 17 números para melhor custo-benefício</li>
                <li>Distribua os números por toda a cartela</li>
                <li>Jogue com mais frequência devido ao custo menor</li>
                <li>Aproveite os sorteios de segunda a sábado</li>
              </ul>

              {/* Ad in Content */}
              <Box sx={{ my: 4 }}>
                <AdSense slot="inArticle" format="auto" />
              </Box>

              <Typography variant="h2">3. Quina: A Opção Diária</Typography>
              <ul>
                <li>Faça múltiplos jogos de 6 ou 7 números</li>
                <li>Aproveite os sorteios diários</li>
                <li>Varie os números entre os jogos</li>
                <li>Considere jogar em concursos especiais (São João)</li>
              </ul>

              <Typography variant="h2">Conclusão</Typography>
              <Typography paragraph>
                Não existe uma "melhor" loteria - tudo depende dos seus objetivos e do perfil do seu grupo. A Mega-Sena oferece os maiores prêmios, a Lotofácil as melhores chances, e a Quina o melhor custo-benefício para jogos frequentes.
              </Typography>
              <Typography paragraph>
                O ideal pode ser até combinar diferentes loterias no seu bolão! Use o <Link href="/gerenciador" style={{ color: "#3b82f6", fontWeight: 600 }}>Bolão Fácil</Link> para gerenciar bolões de qualquer modalidade de forma profissional e gratuita.
              </Typography>
            </Box>
          </Paper>

          <Box sx={{ my: 5 }}><AdSense slot="inArticle" format="auto" /></Box>

          <Paper sx={{ p: 4, mt: 6, textAlign: "center", background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.05) 100%)", border: "1px solid rgba(59, 130, 246, 0.2)", borderRadius: 3 }}>
            <Typography variant="h5" sx={{ color: "white", fontWeight: 700, mb: 2 }}>Organize seu bolão agora!</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 3 }}>Gerencie bolões de qualquer loteria com o Bolão Fácil</Typography>
            <Link href="/gerenciador" style={{ textDecoration: "none" }}>
              <Chip label="Começar Agora →" sx={{ bgcolor: "#3b82f6", color: "#fff", fontWeight: 700, fontSize: "1rem", px: 3, py: 3, cursor: "pointer", "&:hover": { bgcolor: "#2563eb" } }} />
            </Link>
          </Paper>

          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Link href="/blog" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#3b82f6", fontWeight: 600, "&:hover": { textDecoration: "underline" } }}>← Voltar para o Blog</Typography>
            </Link>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
}
