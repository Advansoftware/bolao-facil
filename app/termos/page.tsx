import type { Metadata } from "next";
import { Box, Container, Typography, Paper } from "@mui/material";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do Bolão Fácil. Conheça as condições para utilização da nossa plataforma de gerenciamento de bolões.",
};

export default function TermosPage() {
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
            Termos de Uso
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
              Bem-vindo ao Bolão Fácil. Ao acessar e usar nossa plataforma, você concorda com os seguintes
              termos e condições. Por favor, leia-os cuidadosamente.
            </Typography>

            <Typography variant="h2">1. Aceitação dos Termos</Typography>
            <Typography paragraph>
              Ao acessar ou usar o Bolão Fácil, você concorda em cumprir e estar vinculado a estes Termos
              de Uso e à nossa Política de Privacidade. Se você não concordar com qualquer parte destes
              termos, não deve usar nossa plataforma.
            </Typography>

            <Typography variant="h2">2. Descrição do Serviço</Typography>
            <Typography paragraph>
              O Bolão Fácil é uma ferramenta gratuita de gerenciamento de bolões de loteria que permite aos
              usuários:
            </Typography>
            <ul>
              <li>Criar e organizar bolões de diferentes modalidades de loteria</li>
              <li>Gerenciar participantes e seus respectivos jogos</li>
              <li>Controlar pagamentos e cotas</li>
              <li>Exportar informações em formato PDF</li>
              <li>Armazenar dados localmente no navegador</li>
            </ul>

            <Typography variant="h2">3. Uso Aceitável</Typography>
            <Typography variant="h3">3.1 Você Concorda em:</Typography>
            <ul>
              <li>Usar a plataforma apenas para fins legais</li>
              <li>Não tentar acessar áreas restritas do sistema</li>
              <li>Não usar a plataforma para atividades fraudulentas ou ilegais</li>
              <li>Não sobrecarregar ou interferir com o funcionamento da plataforma</li>
              <li>Respeitar os direitos de propriedade intelectual</li>
            </ul>

            <Typography variant="h3">3.2 Você Não Deve:</Typography>
            <ul>
              <li>Usar a plataforma para jogos de azar comerciais ou ilegais</li>
              <li>Compartilhar conteúdo ofensivo, difamatório ou ilegal</li>
              <li>Tentar hackear, fazer engenharia reversa ou modificar a plataforma</li>
              <li>Usar bots, scrapers ou ferramentas automatizadas não autorizadas</li>
              <li>Violar quaisquer leis locais, estaduais ou federais</li>
            </ul>

            <Typography variant="h2">4. Responsabilidade do Usuário</Typography>
            <Typography paragraph>
              Você é totalmente responsável por:
            </Typography>
            <ul>
              <li>Manter a segurança de seus dados armazenados localmente</li>
              <li>Fazer backup de informações importantes</li>
              <li>Garantir a precisão dos dados inseridos na plataforma</li>
              <li>Cumprir todas as leis aplicáveis relacionadas a jogos de loteria</li>
              <li>Resolver disputas entre participantes de bolões</li>
            </ul>

            <Typography variant="h2">5. Limitações de Responsabilidade</Typography>
            <Typography paragraph>
              O Bolão Fácil é fornecido "como está" e "conforme disponível". Não garantimos que:
            </Typography>
            <ul>
              <li>O serviço será ininterrupto ou livre de erros</li>
              <li>Os resultados obtidos serão precisos ou confiáveis</li>
              <li>Quaisquer erros serão corrigidos</li>
              <li>O serviço atenderá às suas necessidades específicas</li>
            </ul>
            <Typography paragraph>
              Não nos responsabilizamos por:
            </Typography>
            <ul>
              <li>Perda de dados devido a problemas no navegador ou dispositivo</li>
              <li>Disputas entre participantes de bolões</li>
              <li>Decisões tomadas com base nas informações da plataforma</li>
              <li>Danos diretos, indiretos, incidentais ou consequenciais</li>
              <li>Resultados de apostas ou jogos de loteria</li>
            </ul>

            <Typography variant="h2">6. Disclaimer sobre Loterias</Typography>
            <Typography paragraph sx={{ fontWeight: 600, color: "#fbbf24" }}>
              IMPORTANTE: O Bolão Fácil é apenas uma ferramenta de gerenciamento e organização. Não somos
              afiliados, patrocinados ou endossados pela Caixa Econômica Federal ou qualquer outra entidade
              de loteria.
            </Typography>
            <ul>
              <li>Não vendemos bilhetes de loteria</li>
              <li>Não processamos apostas</li>
              <li>Não garantimos prêmios ou ganhos</li>
              <li>Não somos responsáveis por resultados de sorteios</li>
              <li>Você deve adquirir bilhetes oficiais através dos canais autorizados</li>
            </ul>

            <Typography variant="h2">7. Propriedade Intelectual</Typography>
            <Typography paragraph>
              Todo o conteúdo do Bolão Fácil, incluindo mas não limitado a:
            </Typography>
            <ul>
              <li>Design, layout e interface</li>
              <li>Código-fonte e funcionalidades</li>
              <li>Textos, gráficos e imagens</li>
              <li>Logotipos e marcas</li>
            </ul>
            <Typography paragraph>
              São de propriedade exclusiva do Bolão Fácil e protegidos por leis de direitos autorais e
              propriedade intelectual. Você não pode copiar, modificar, distribuir ou criar trabalhos
              derivados sem autorização expressa.
            </Typography>

            <Typography variant="h2">8. Armazenamento de Dados</Typography>
            <Typography paragraph>
              Os dados dos seus bolões são armazenados localmente no seu navegador (localStorage). Isso
              significa que:
            </Typography>
            <ul>
              <li>Você é responsável por fazer backup de seus dados</li>
              <li>Limpar os dados do navegador apagará seus bolões</li>
              <li>Os dados não são sincronizados entre dispositivos</li>
              <li>Não temos acesso aos seus dados de bolões</li>
              <li>Não podemos recuperar dados perdidos</li>
            </ul>

            <Typography variant="h2">9. Publicidade</Typography>
            <Typography paragraph>
              O Bolão Fácil pode exibir anúncios através do Google AdSense para manter o serviço gratuito.
              Ao usar nossa plataforma, você concorda com a exibição de anúncios e com a coleta de dados
              para fins publicitários conforme descrito em nossa Política de Privacidade.
            </Typography>

            <Typography variant="h2">10. Modificações do Serviço</Typography>
            <Typography paragraph>
              Reservamos o direito de:
            </Typography>
            <ul>
              <li>Modificar ou descontinuar o serviço a qualquer momento</li>
              <li>Alterar funcionalidades ou recursos</li>
              <li>Implementar limites de uso</li>
              <li>Atualizar estes Termos de Uso</li>
            </ul>
            <Typography paragraph>
              Faremos esforços razoáveis para notificar sobre mudanças significativas, mas não somos
              obrigados a fazê-lo.
            </Typography>

            <Typography variant="h2">11. Rescisão</Typography>
            <Typography paragraph>
              Podemos suspender ou encerrar seu acesso à plataforma imediatamente, sem aviso prévio, se:
            </Typography>
            <ul>
              <li>Você violar estes Termos de Uso</li>
              <li>Seu uso causar danos à plataforma ou a outros usuários</li>
              <li>For necessário por razões legais ou regulatórias</li>
            </ul>

            <Typography variant="h2">12. Lei Aplicável</Typography>
            <Typography paragraph>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Quaisquer
              disputas serão resolvidas nos tribunais brasileiros competentes.
            </Typography>

            <Typography variant="h2">13. Divisibilidade</Typography>
            <Typography paragraph>
              Se qualquer disposição destes termos for considerada inválida ou inexequível, as demais
              disposições permanecerão em pleno vigor e efeito.
            </Typography>

            <Typography variant="h2">14. Acordo Completo</Typography>
            <Typography paragraph>
              Estes Termos de Uso, juntamente com nossa Política de Privacidade, constituem o acordo
              completo entre você e o Bolão Fácil.
            </Typography>

            <Typography variant="h2">15. Aceitação</Typography>
            <Typography paragraph sx={{ fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
              Ao usar o Bolão Fácil, você reconhece que leu, entendeu e concorda em estar vinculado a estes
              Termos de Uso.
            </Typography>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}
