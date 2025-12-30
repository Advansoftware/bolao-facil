import type { Metadata } from "next";
import { Box, Container, Typography, Paper, Grid, Chip } from "@mui/material";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const metadata: Metadata = {
  title: "Blog - Bolão Fácil",
  description:
    "Aprenda tudo sobre bolões de loteria: como organizar, calcular cotas, gerenciar participantes e muito mais. Guias completos e dicas práticas.",
  openGraph: {
    title: "Blog - Bolão Fácil",
    description: "Guias e dicas sobre organização de bolões de loteria",
  },
};

const blogPosts = [
  {
    slug: "como-organizar-bolao-mega-sena",
    title: "Como Organizar um Bolão de Mega-Sena Entre Amigos",
    description:
      "Guia completo passo a passo para organizar seu bolão de Mega-Sena. Aprenda a gerenciar participantes, calcular valores e evitar problemas comuns.",
    date: "2024-12-30",
    readTime: "8 min",
    category: "Guia Completo",
    color: "#22c55e",
  },
  {
    slug: "diferencas-mega-sena-lotofacil-quina",
    title: "Guia Completo: Diferenças Entre Mega-Sena, Lotofácil e Quina",
    description:
      "Entenda as regras, probabilidades e estratégias de cada loteria. Descubra qual é a melhor opção para seu bolão.",
    date: "2024-12-30",
    readTime: "10 min",
    category: "Comparativo",
    color: "#3b82f6",
  },
  {
    slug: "calcular-cotas-bolao",
    title: "Como Calcular Cotas de Bolão Corretamente",
    description:
      "Aprenda as fórmulas e métodos para calcular cotas de forma justa. Exemplos práticos e calculadora interativa.",
    date: "2024-12-30",
    readTime: "6 min",
    category: "Tutorial",
    color: "#f59e0b",
  },
  {
    slug: "dicas-gerenciar-boloes",
    title: "Dicas para Gerenciar Bolões de Loteria com Sucesso",
    description:
      "Estratégias comprovadas para organizar participantes, controlar pagamentos e evitar conflitos no seu bolão.",
    date: "2024-12-30",
    readTime: "7 min",
    category: "Dicas",
    color: "#8b5cf6",
  },
  {
    slug: "bolao-mega-virada",
    title: "Bolão da Mega da Virada: Como Organizar e Maximizar Chances",
    description:
      "Guia especial para o maior sorteio do ano. Quando começar, como gerenciar grandes grupos e checklist completo.",
    date: "2024-12-30",
    readTime: "9 min",
    category: "Especial",
    color: "#ec4899",
  },
  {
    slug: "o-que-e-fechamento-loterico",
    title: "O Que é Fechamento Lotérico e Como Funciona?",
    description:
      "Descubra como utilizar a matemática a seu favor para gastar menos em apostas com mais números (garantindo prêmios secundários).",
    date: "2024-12-30",
    readTime: "6 min",
    category: "Estratégia",
    color: "#e11d48",
  },
  {
    slug: "como-resgatar-premio-seguranca",
    title: "Como Resgatar seu Prêmio de Loteria com Segurança",
    description:
      "Ganhou? Parabéns! Veja o guia passo a passo de como resgatar seu prêmio na Caixa com total segurança e discrição.",
    date: "2024-12-30",
    readTime: "5 min",
    category: "Segurança",
    color: "#0891b2",
  },
  {
    slug: "probabilidade-chances-ganhar",
    title: "Probabilidades: Quais as Reais Chances de Ganhar?",
    description:
      "Análise matemática honesta sobre suas chances na Mega-Sena, Lotofácil e Quina. Entenda a estatística por trás do jogo.",
    date: "2024-12-30",
    readTime: "7 min",
    category: "Matemática",
    color: "#7c3aed",
  },
];

export default function BlogPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#0a0a0f" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#22c55e",
                fontWeight: 700,
                fontSize: "1.2rem",
                mb: 3,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              ← Voltar para o Início
            </Typography>
          </Link>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              mb: 2,
            }}
          >
            📚 Blog do Bolão Fácil
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "1.2rem" }}>
            Guias, dicas e tutoriais sobre organização de bolões de loteria
          </Typography>
        </Box>

        {/* Blog Posts Grid */}
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid key={post.slug} size={{ xs: 12, md: 6 }}>
              <Link
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    bgcolor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.05)",
                      borderColor: `${post.color}50`,
                      transform: "translateY(-4px)",
                      boxShadow: `0 8px 24px ${post.color}20`,
                    },
                  }}
                >
                  {/* Category Badge */}
                  <Chip
                    label={post.category}
                    size="small"
                    sx={{
                      bgcolor: `${post.color}20`,
                      color: post.color,
                      fontWeight: 600,
                      mb: 2,
                      border: `1px solid ${post.color}40`,
                    }}
                  />

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {post.description}
                  </Typography>

                  {/* Meta */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      alignItems: "center",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <CalendarMonthIcon sx={{ fontSize: 18 }} />
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <AccessTimeIcon sx={{ fontSize: 18 }} />
                      {post.readTime} de leitura
                    </Box>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Paper
          sx={{
            p: 5,
            mt: 8,
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.05) 100%)",
            border: "1px solid rgba(34, 197, 94, 0.2)",
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "white", fontWeight: 700, mb: 2 }}
          >
            Pronto para organizar seu bolão?
          </Typography>
          <Typography
            sx={{ color: "rgba(255,255,255,0.7)", mb: 3, fontSize: "1.1rem" }}
          >
            Use o Bolão Fácil gratuitamente e organize seus bolões de forma profissional
          </Typography>
          <Link href="/gerenciador" style={{ textDecoration: "none" }}>
            <Chip
              label="Começar Agora →"
              sx={{
                bgcolor: "#22c55e",
                color: "#000",
                fontWeight: 700,
                fontSize: "1rem",
                px: 3,
                py: 3,
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "#16a34a",
                },
              }}
            />
          </Link>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}
