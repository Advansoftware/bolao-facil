import type { Metadata } from "next";
import { Box, Container, Typography, Paper } from "@mui/material";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do Bolão Fácil. Saiba como seus dados são tratados e protegidos em nossa plataforma.",
};

export default function PrivacidadePage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#0a0a0f" }}>
      <Container maxWidth="md" sx={{ py: 8 }}>
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
            Política de Privacidade
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </Typography>
        </Box>

        <Paper
          sx={{
            p: { xs: 3, md: 5 },
            bgcolor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 3,
          }}
        >
          <Box sx={{ "& h2": { color: "#22c55e", mt: 4, mb: 2, fontSize: "1.5rem", fontWeight: 700 }, "& h3": { color: "rgba(255,255,255,0.9)", mt: 3, mb: 1.5, fontSize: "1.2rem", fontWeight: 600 }, "& p": { color: "rgba(255,255,255,0.7)", mb: 2, lineHeight: 1.8 }, "& ul": { color: "rgba(255,255,255,0.7)", mb: 2, pl: 3 }, "& li": { mb: 1 } }}>
            
            <Typography paragraph>
              O Bolão Fácil está comprometido em proteger sua privacidade. Esta Política de Privacidade
              explica como coletamos, usamos e protegemos suas informações quando você utiliza nossa plataforma.
            </Typography>

            <Typography variant="h2">1. Informações que Coletamos</Typography>

            <Typography variant="h3">1.1 Dados Armazenados Localmente</Typography>
            <Typography paragraph>
              O Bolão Fácil é uma aplicação que funciona principalmente no seu navegador. Todos os dados
              relacionados aos seus bolões, participantes e jogos são armazenados localmente no seu
              dispositivo através do localStorage do navegador. Isso significa que:
            </Typography>
            <ul>
              <li>Seus dados de bolões não são enviados para nossos servidores</li>
              <li>Você tem controle total sobre suas informações</li>
              <li>Os dados permanecem apenas no dispositivo onde você criou os bolões</li>
              <li>Nenhuma informação pessoal é compartilhada com terceiros através da nossa aplicação</li>
            </ul>

            <Typography variant="h3">1.2 Dados de Navegação</Typography>
            <Typography paragraph>
              Podemos coletar informações não pessoais sobre como você interage com nosso site, incluindo:
            </Typography>
            <ul>
              <li>Endereço IP</li>
              <li>Tipo de navegador e dispositivo</li>
              <li>Páginas visitadas e tempo de permanência</li>
              <li>Origem do acesso (referrer)</li>
            </ul>

            <Typography variant="h2">2. Como Usamos suas Informações</Typography>
            <Typography paragraph>
              As informações coletadas são utilizadas para:
            </Typography>
            <ul>
              <li>Melhorar a experiência do usuário na plataforma</li>
              <li>Analisar padrões de uso e otimizar funcionalidades</li>
              <li>Detectar e prevenir fraudes ou abusos</li>
              <li>Cumprir obrigações legais quando necessário</li>
            </ul>

            <Typography variant="h2">3. Cookies e Tecnologias Similares</Typography>
            <Typography paragraph>
              Utilizamos cookies e tecnologias similares para:
            </Typography>
            <ul>
              <li>Manter suas preferências e configurações</li>
              <li>Analisar o tráfego do site através de ferramentas de análise</li>
              <li>Exibir anúncios relevantes através do Google AdSense</li>
            </ul>
            <Typography paragraph>
              Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas
              funcionalidades do site.
            </Typography>

            <Typography variant="h2">4. Google AdSense</Typography>
            <Typography paragraph>
              Utilizamos o Google AdSense para exibir anúncios em nosso site. O Google pode usar cookies
              para exibir anúncios baseados em suas visitas anteriores ao nosso site e a outros sites.
              Você pode desativar o uso de cookies pelo Google acessando as{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#22c55e" }}
              >
                Configurações de anúncios do Google
              </a>
              .
            </Typography>

            <Typography variant="h2">5. Compartilhamento de Dados</Typography>
            <Typography paragraph>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
            </Typography>
            <ul>
              <li>Quando exigido por lei ou ordem judicial</li>
              <li>Para proteger nossos direitos legais</li>
              <li>Com provedores de serviços que nos auxiliam (como Google Analytics e AdSense)</li>
            </ul>

            <Typography variant="h2">6. Segurança dos Dados</Typography>
            <Typography paragraph>
              Implementamos medidas de segurança para proteger suas informações contra acesso não
              autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão
              pela internet é 100% seguro.
            </Typography>

            <Typography variant="h2">7. Seus Direitos (LGPD)</Typography>
            <Typography paragraph>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </Typography>
            <ul>
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
              <li>Revogar o consentimento</li>
            </ul>
            <Typography paragraph>
              Como seus dados de bolões são armazenados localmente no seu navegador, você pode excluí-los
              a qualquer momento limpando os dados do site nas configurações do navegador.
            </Typography>

            <Typography variant="h2">8. Dados de Menores</Typography>
            <Typography paragraph>
              Nosso serviço não é direcionado a menores de 18 anos. Não coletamos intencionalmente
              informações de menores.
            </Typography>

            <Typography variant="h2">9. Links para Sites de Terceiros</Typography>
            <Typography paragraph>
              Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas
              de privacidade desses sites. Recomendamos que você leia as políticas de privacidade de cada
              site que visitar.
            </Typography>

            <Typography variant="h2">10. Alterações nesta Política</Typography>
            <Typography paragraph>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças
              significativas publicando a nova política nesta página e atualizando a data de "última
              atualização".
            </Typography>

            <Typography variant="h2">11. Consentimento</Typography>
            <Typography paragraph>
              Ao usar o Bolão Fácil, você concorda com esta Política de Privacidade e com o processamento
              de seus dados conforme descrito aqui.
            </Typography>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}
