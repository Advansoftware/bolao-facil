import type { Metadata } from "next";
import { Box, Container, Typography, Paper, Grid, Chip } from "@mui/material";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import CodeIcon from "@mui/icons-material/Code";

export const metadata: Metadata = {
  title: "Sobre o Bolão Fácil",
  description:
    "Conheça o Bolão Fácil, a melhor ferramenta gratuita para organizar bolões de loteria entre amigos. 100% privado, seguro e fácil de usar.",
};

export default function SobrePage() {
  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: "#22c55e" }} />,
      title: "100% Privado",
      description: "Seus dados ficam apenas no seu navegador. Nada é enviado para servidores externos.",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: "#22c55e" }} />,
      title: "Rápido e Simples",
      description: "Interface intuitiva para criar e gerenciar bolões em segundos.",
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#22c55e" }} />,
      title: "Totalmente Gratuito",
      description: "Sem taxas, sem assinaturas, sem cadastro. Use quanto quiser.",
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: "#22c55e" }} />,
      title: "Tecnologia Moderna",
      description: "Desenvolvido com Next.js, React e TypeScript para máxima performance.",
    },
  ];

  const technologies = [
    "Next.js 14",
    "React 18",
    "TypeScript",
    "Material-UI",
    "LocalStorage API",
    "PWA",
  ];

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
            Sobre o Bolão Fácil
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "1.2rem" }}>
            A melhor ferramenta para organizar bolões de loteria entre amigos
          </Typography>
        </Box>

        {/* Main Content */}
        <Paper
          sx={{
            p: { xs: 3, md: 5 },
            bgcolor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 3,
            mb: 6,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#22c55e", fontWeight: 700, mb: 3 }}
          >
            Nossa Missão
          </Typography>
          <Typography
            paragraph
            sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}
          >
            O Bolão Fácil nasceu da necessidade de simplificar a organização de bolões de loteria
            entre amigos, familiares e colegas de trabalho. Sabemos que gerenciar participantes,
            jogos e pagamentos pode ser complicado e trabalhoso, especialmente quando feito em
            planilhas ou papel.
          </Typography>
          <Typography
            paragraph
            sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}
          >
            Nossa missão é fornecer uma ferramenta gratuita, simples e eficiente que permita
            qualquer pessoa organizar bolões de forma profissional, sem complicação e com total
            controle sobre seus dados.
          </Typography>

          <Typography
            variant="h4"
            sx={{ color: "#22c55e", fontWeight: 700, mb: 3, mt: 5 }}
          >
            Como Funciona
          </Typography>
          <Typography
            paragraph
            sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.8, mb: 2 }}
          >
            O Bolão Fácil é uma aplicação web moderna que funciona diretamente no seu navegador.
            Diferente de outras plataformas, todos os seus dados são armazenados localmente no seu
            dispositivo, garantindo máxima privacidade e segurança.
          </Typography>
          <Typography
            paragraph
            sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.8, mb: 2 }}
          >
            Você pode criar quantos bolões quiser, adicionar participantes, registrar jogos,
            controlar pagamentos e exportar tudo em PDF para compartilhar com o grupo. Tudo isso
            sem precisar criar conta ou fornecer dados pessoais.
          </Typography>

          <Typography
            variant="h4"
            sx={{ color: "#22c55e", fontWeight: 700, mb: 3, mt: 5 }}
          >
            Compromisso com a Privacidade
          </Typography>
          <Typography
            paragraph
            sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.8, mb: 2 }}
          >
            Levamos sua privacidade a sério. Por isso, optamos por uma arquitetura que mantém todos
            os dados dos seus bolões armazenados localmente no seu navegador. Isso significa que:
          </Typography>
          <Box component="ul" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", pl: 4, mb: 3 }}>
            <li>Não temos acesso aos seus dados de bolões</li>
            <li>Não armazenamos informações pessoais em servidores</li>
            <li>Você tem controle total sobre suas informações</li>
            <li>Seus dados não são compartilhados com terceiros</li>
          </Box>
          <Typography
            paragraph
            sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Para mais detalhes, consulte nossa{" "}
            <Link href="/privacidade" style={{ color: "#22c55e" }}>
              Política de Privacidade
            </Link>
            .
          </Typography>
        </Paper>

        {/* Features Grid */}
        <Typography
          variant="h4"
          sx={{ color: "white", fontWeight: 700, mb: 4, textAlign: "center" }}
        >
          Por Que Escolher o Bolão Fácil?
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                sx={{
                  p: 3,
                  height: "100%",
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 3,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(34, 197, 94, 0.3)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: 600, mb: 1 }}
                >
                  {feature.title}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Technologies */}
        <Paper
          sx={{
            p: { xs: 3, md: 5 },
            bgcolor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 3,
            mb: 6,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#22c55e", fontWeight: 700, mb: 3, textAlign: "center" }}
          >
            Tecnologias Utilizadas
          </Typography>
          <Typography
            paragraph
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.1rem",
              textAlign: "center",
              mb: 4,
            }}
          >
            Desenvolvido com as melhores e mais modernas tecnologias web
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                sx={{
                  bgcolor: "rgba(34, 197, 94, 0.15)",
                  color: "#22c55e",
                  fontWeight: 600,
                  fontSize: "1rem",
                  px: 2,
                  py: 3,
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                }}
              />
            ))}
          </Box>
        </Paper>

        {/* Disclaimer */}
        <Paper
          sx={{
            p: { xs: 3, md: 4 },
            bgcolor: "rgba(251, 191, 36, 0.1)",
            border: "1px solid rgba(251, 191, 36, 0.3)",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#fbbf24", fontWeight: 700, mb: 2 }}
          >
            ⚠️ Aviso Importante
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
            O Bolão Fácil é uma ferramenta de gerenciamento e organização. Não somos afiliados,
            patrocinados ou endossados pela Caixa Econômica Federal ou qualquer outra entidade de
            loteria. Não vendemos bilhetes, não processamos apostas e não garantimos prêmios. Você
            deve adquirir bilhetes oficiais através dos canais autorizados.
          </Typography>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}
