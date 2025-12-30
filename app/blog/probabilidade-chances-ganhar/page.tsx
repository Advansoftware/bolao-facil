import type { Metadata } from "next";
import { Box, Container, Typography, Paper, Chip, Divider } from "@mui/material";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AdSense } from "@/components/AdSense";

export const metadata: Metadata = {
  title: "Probabilidades: Quais as Reais Chances de Ganhar na Loteria? | Bolão Fácil",
  description:
    "Análise matemática e honesta sobre as probabilidades de ganhar na Mega-Sena, Lotofácil e outras loterias. Entenda a sorte e a estatística.",
  openGraph: {
    title: "Probabilidades: Quais as Reais Chances de Ganhar na Loteria?",
    description: "Matemática vs Sorte: Entenda suas reais chances",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Probabilidades: Quais as Reais Chances de Ganhar na Loteria?",
  description:
    "Análise detalhada das probabilidades matemáticas de ganhar nas principais loterias do Brasil.",
  datePublished: "2024-12-30",
  dateModified: "2024-12-30",
  author: {
    "@type": "Organization",
    name: "Bolão Fácil",
  },
  publisher: {
    "@type": "Organization",
    name: "Bolão Fácil",
    logo: {
      "@type": "ImageObject",
      url: "https://bolaofacil.com.br/icon.svg",
    },
  },
};

export default function ArtigoProbabilidadesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Box sx={{ minHeight: "100vh", bgcolor: "#0a0a0f" }}>
        <Container maxWidth="md" sx={{ py: 8 }}>
          {/* Breadcrumb */}
          <Box sx={{ mb: 4, display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "rgba(255,255,255,0.5)", "&:hover": { color: "#22c55e" } }}>
                Início
              </Typography>
            </Link>
            <Typography sx={{ color: "rgba(255,255,255,0.3)" }}>/</Typography>
            <Link href="/blog" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "rgba(255,255,255,0.5)", "&:hover": { color: "#22c55e" } }}>
                Blog
              </Typography>
            </Link>
            <Typography sx={{ color: "rgba(255,255,255,0.3)" }}>/</Typography>
            <Typography sx={{ color: "#22c55e" }}>Probabilidades e Estatística</Typography>
          </Box>

          {/* Article Header */}
          <Box sx={{ mb: 5 }}>
            <Chip
              label="Matemática e Curiosidades"
              sx={{
                bgcolor: "rgba(34, 197, 94, 0.2)",
                color: "#22c55e",
                fontWeight: 600,
                mb: 3,
                border: "1px solid rgba(34, 197, 94, 0.4)",
              }}
            />
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 800,
                color: "white",
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Probabilidades: Quais as Reais Chances de Ganhar na Loteria?
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", mb: 2 }}>
              Muitos apostam acreditando em sorte ou intuição, mas a loteria é um jogo de matemática
              pura. Vamos analisar os números friamente e descobrir onde é "mais fácil" ganhar.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
              Publicado em 30 de dezembro de 2024 • 7 min de leitura
            </Typography>
          </Box>

          <Divider sx={{ mb: 5, borderColor: "rgba(255,255,255,0.1)" }} />

          {/* Ad */}
          <Box sx={{ mb: 5 }}>
            <AdSense slot="inArticle" format="auto" />
          </Box>

          {/* Article Content */}
          <Paper
            sx={{
              p: { xs: 3, md: 5 },
              bgcolor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                "& h2": {
                  color: "#22c55e",
                  mt: 5,
                  mb: 3,
                  fontSize: "1.8rem",
                  fontWeight: 700,
                },
                "& h3": {
                  color: "rgba(255,255,255,0.9)",
                  mt: 4,
                  mb: 2,
                  fontSize: "1.4rem",
                  fontWeight: 600,
                },
                "& p": {
                  color: "rgba(255,255,255,0.7)",
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                },
                "& ul, & ol": {
                  color: "rgba(255,255,255,0.7)",
                  mb: 3,
                  pl: 4,
                  lineHeight: 1.8,
                },
                "& li": {
                  mb: 1.5,
                },
                "& strong": {
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 600,
                },
              }}
            >
              <Typography paragraph>
                "É mais fácil ser atingido por um raio do que ganhar na Mega-Sena." Você já ouviu essa
                frase, certo? Mas será que ela é verdadeira? E como a Lotofácil se compara com a Mega em
                termos puramente matemáticos?
              </Typography>

              <Typography variant="h2">A Matemática Não Mente</Typography>
              <Typography paragraph>
                Para calcular a probabilidade de ganhar na loteria, usamos análise combinatória. Basicamente,
                dividimos o número de combinações que você jogou pelo número total de combinações
                possíveis.
              </Typography>

              <Typography variant="h3">Mega-Sena: O Sonho Difícil</Typography>
              <ul>
                <li><strong>Total de combinações possíveis (60 números, escolhendo 6):</strong> 50.063.860</li>
                <li><strong>Sua aposta simples:</strong> 1 combinação</li>
                <li><strong>Chance:</strong> 1 em 50.063.860</li>
              </ul>
              <Typography paragraph>
                Para colocar em perspectiva: imagine um estádio do Maracanã lotado com 78 mil pessoas. O
                Maracanã precisaria ser lotado 641 vezes para ter 50 milhões de pessoas. Ganhar na Mega é
                como se apenas UMA pessoa, dentre todos esses 641 estádios lotados, fosse a escolhida.
              </Typography>

              {/* Ad in Content */}
              <Box sx={{ my: 4 }}>
                <AdSense slot="inArticle" format="auto" />
              </Box>

              <Typography variant="h3">Lotofácil: O Nome já Diz</Typography>
              <ul>
                <li><strong>Total de combinações possíveis (25 números, escolhendo 15):</strong> 3.268.760</li>
                <li><strong>Chance:</strong> 1 em 3.268.760</li>
              </ul>
              <Typography paragraph>
                A Lotofácil é, matematicamente, cerca de <strong>15 vezes mais fácil</strong> de ganhar
                o prêmio principal do que a Mega-Sena. É por isso que os prêmios costumam ser menores e
                saem com muito mais frequência (e muitas vezes para mais de um ganhador).
              </Typography>

              <Typography variant="h2">Apostas Múltiplas: Aumentando as Chances</Typography>
              <Typography paragraph>
                A única forma real de aumentar suas chances é jogando mais combinações. E é aqui que os
                bolões brilham.
              </Typography>
              <Typography paragraph>
                Se você joga 6 números na Mega (R$ 5,00), sua chance é 1 em 50 milhões.
                Se você entra em um bolão e o grupo joga 10 números (R$ 1.050,00), a chance cai para 1 em
                238.399.
              </Typography>
              <Typography paragraph>
                Ainda é difícil? Sim. Mas você transformou uma chance "impossível" em uma chance
                "remotamente plausível".
              </Typography>

              <Typography variant="h2">O Mito dos "Números que Mais Saem"</Typography>
              <Typography paragraph>
                Muitos sites vendem listas de números "quentes" ou "atrasados". A verdade matemática é
                dura: <strong>as bolas não têm memória</strong>.
              </Typography>
              <Typography paragraph>
                O fato de o número 10 ter saído no sorteio passado não muda em nada a probabilidade de ele
                sair no próximo. Em cada sorteio, todos os números têm exatamente a mesma chance de serem
                sorteados, independente do passado. Estatísticas passadas são curiosidades, não previsão
                de futuro.
              </Typography>

              <Typography variant="h2">Conclusão</Typography>
              <Typography paragraph>
                Loteria deve ser encarada como diversão, não como investimento. A matemática mostra que a
                casa sempre ganha no longo prazo. Jogue com responsabilidade, participe de bolões para
                gastar menos e aumentar as chances, e divirta-se com a possibilidade de sonhar!
              </Typography>
            </Box>
          </Paper>

          {/* Ad */}
          <Box sx={{ my: 5 }}>
            <AdSense slot="inArticle" format="auto" />
          </Box>

          {/* Back to Blog */}
          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Link href="/blog" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#22c55e",
                  fontWeight: 600,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                ← Voltar para o Blog
              </Typography>
            </Link>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
}
