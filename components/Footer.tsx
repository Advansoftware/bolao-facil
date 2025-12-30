"use client";

import { Box, Container, Typography, Link as MuiLink, Grid } from "@mui/material";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    legal: [
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Termos de Uso", href: "/termos" },
      { label: "Sobre", href: "/sobre" },
    ],
    blog: [
      { label: "Blog", href: "/blog" },
      { label: "Como Organizar Bolão", href: "/blog/como-organizar-bolao-mega-sena" },
      { label: "Guia de Loterias", href: "/blog/diferencas-mega-sena-lotofacil-quina" },
    ],
    app: [
      { label: "Início", href: "/" },
      { label: "Gerenciador", href: "/gerenciador" },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        bgcolor: "rgba(0,0,0,0.3)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* App */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#22c55e",
                fontWeight: 700,
                mb: 2,
                fontSize: "1rem",
              }}
            >
              Bolão Fácil
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {footerLinks.app.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  passHref
                  legacyBehavior
                >
                  <MuiLink
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      "&:hover": {
                        color: "#22c55e",
                      },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Blog */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontWeight: 600,
                mb: 2,
                fontSize: "1rem",
              }}
            >
              Conteúdo
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {footerLinks.blog.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  passHref
                  legacyBehavior
                >
                  <MuiLink
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      "&:hover": {
                        color: "#22c55e",
                      },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Legal */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontWeight: 600,
                mb: 2,
                fontSize: "1rem",
              }}
            >
              Legal
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  passHref
                  legacyBehavior
                >
                  <MuiLink
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      "&:hover": {
                        color: "#22c55e",
                      },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* About */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontWeight: 600,
                mb: 2,
                fontSize: "1rem",
              }}
            >
              Sobre o Bolão Fácil
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.875rem",
                lineHeight: 1.6,
              }}
            >
              A melhor ferramenta gratuita para organizar bolões de loteria
              entre amigos. 100% privado e seguro.
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom */}
        <Box
          sx={{
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.875rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            © {currentYear} Bolão Fácil. Todos os direitos reservados.
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.75rem",
              textAlign: { xs: "center", md: "right" },
            }}
          >
            Este site não tem vínculo com a Caixa Econômica Federal.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
