import type { Metadata } from "next";
import { Box, Container, Typography, Paper, Chip, Divider } from "@mui/material";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AdSense } from "@/components/AdSense";

export const metadata: Metadata = {
  title: "Como Resgatar seu Prêmio de Loteria com Segurança | Bolão Fácil",
  description:
    "Ganhou na loteria? Parabéns! Veja o guia passo a passo de como resgatar seu prêmio na Caixa com total segurança e discrição.",
  openGraph: {
    title: "Como Resgatar seu Prêmio de Loteria com Segurança",
    description: "Guia essencial para novos milionários: segurança e procedimentos",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Como Resgatar seu Prêmio de Loteria com Segurança",
  description:
    "Guia passo a passo de como resgatar prêmios de loteria com segurança, anonimato e discrição.",
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

export default function ArtigoResgatePremioPage() {
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
            <Typography sx={{ color: "#22c55e" }}>Resgate de Prêmios</Typography>
          </Box>

          {/* Article Header */}
          <Box sx={{ mb: 5 }}>
            <Chip
              label="Segurança Financeira"
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
              Como Resgatar seu Prêmio de Loteria com Segurança
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", mb: 2 }}>
              Ganhar na loteria é o sonho de muitos, mas saber o que fazer com o bilhete premiado é
              crucial. Aprenda a proteger sua identidade e seu dinheiro.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
              Publicado em 30 de dezembro de 2024 • 5 min de leitura
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
                O momento em que você confere os números e percebe que ganhou é de pura euforia. Porém,
                imediatamente após a comemoração, a prioridade deve ser a segurança. Prêmios de loteria
                atraem atenção indesejada, e o sigilo é seu maior aliado.
              </Typography>

              <Typography variant="h2">1. Assine o Verso do Bilhete</Typography>
              <Typography paragraph>
                A primeira coisa a fazer, antes mesmo de contar para alguém, é escrever seu <strong>nome
                completo e CPF</strong> no verso do bilhete premiado.
              </Typography>
              <Typography paragraph>
                O bilhete de loteria é um título "ao portador". Isso significa que quem estiver com ele
                na mão pode sacar o prêmio. Ao colocar seus dados, você torna o bilhete intransferível.
                Ninguém mais poderá sacar o valor além de você, mesmo em caso de perda ou roubo.
              </Typography>

              <Typography variant="h2">2. Onde Sacar?</Typography>
              <ul>
                <li>
                  <strong>Prêmios até R$ 2.259,20:</strong> Podem ser sacados em qualquer casa lotérica
                  ou agência da Caixa Econômica Federal.
                </li>
                <li>
                  <strong>Acima de R$ 2.259,20:</strong> Exclusivamente nas agências da Caixa. Não vá à
                  lotérica com um bilhete milionário!
                </li>
                <li>
                  <strong>Acima de R$ 10.000,00:</strong> O pagamento não é imediato. A agência tem o
                  prazo de D+2 (dois dias úteis) para liberar o valor após sua apresentação.
                </li>
              </ul>

              {/* Ad in Content */}
              <Box sx={{ my: 4 }}>
                <AdSense slot="inArticle" format="auto" />
              </Box>

              <Typography variant="h2">3. Discrição na Agência</Typography>
              <Typography paragraph>
                Ao chegar na agência bancária, não saia gritando que ganhou na loteria.
              </Typography>
              <ul>
                <li>Procure a triagem ou o gerente de atendimento.</li>
                <li>Diga apenas que deseja tratar de assuntos de "Loterias" ou "Investimentos".</li>
                <li>
                  Evite agências pequenas onde todos se conhecem, se possível vá a uma agência central
                  em outra região da cidade.
                </li>
                <li>
                  O gerente levará você para uma sala reservada para conferir o bilhete e iniciar o
                  processo.
                </li>
              </ul>

              <Typography variant="h2">4. Documentos Necessários</Typography>
              <ul>
                <li>Bilhete premiado original (em perfeito estado).</li>
                <li>RG e CPF originais.</li>
                <li>Comprovante de residência (opcional, mas recomendado para abertura de conta).</li>
              </ul>

              <Typography variant="h2">Dica Pro: O "Boca Fechada"</Typography>
              <Typography paragraph>
                O maior risco para um ganhador de loteria é a própria língua. Evite contar para vizinhos,
                amigos distantes ou postar nas redes sociais. Quanto menos pessoas souberem, mais segura
                será sua vida e a de sua família. Conte apenas para quem é estritamente essencial no
                primeiro momento.
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
