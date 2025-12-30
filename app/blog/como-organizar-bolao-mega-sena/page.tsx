import type { Metadata } from "next";
import { Box, Container, Typography, Paper, Chip, Divider } from "@mui/material";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AdSense } from "@/components/AdSense";

export const metadata: Metadata = {
  title: "Como Organizar um Bolão de Mega-Sena Entre Amigos | Bolão Fácil",
  description:
    "Guia completo passo a passo para organizar seu bolão de Mega-Sena. Aprenda a gerenciar participantes, calcular valores, registrar jogos e evitar problemas comuns.",
  openGraph: {
    title: "Como Organizar um Bolão de Mega-Sena Entre Amigos",
    description: "Guia completo para organizar bolões de Mega-Sena com sucesso",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Como Organizar um Bolão de Mega-Sena Entre Amigos",
  description:
    "Guia completo passo a passo para organizar seu bolão de Mega-Sena com amigos, familiares ou colegas de trabalho.",
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

export default function ArtigoBolaoMegaSenaPage() {
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
            <Typography sx={{ color: "#22c55e" }}>Como Organizar Bolão</Typography>
          </Box>

          {/* Article Header */}
          <Box sx={{ mb: 5 }}>
            <Chip
              label="Guia Completo"
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
              Como Organizar um Bolão de Mega-Sena Entre Amigos
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", mb: 2 }}>
              Guia completo passo a passo para organizar seu bolão de Mega-Sena com amigos,
              familiares ou colegas de trabalho. Aprenda tudo sobre gestão de participantes,
              cálculo de cotas e documentação adequada.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
              Publicado em 30 de dezembro de 2024 • 8 min de leitura
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
                Organizar um bolão de Mega-Sena pode parecer complicado à primeira vista, mas com as
                ferramentas e conhecimentos certos, o processo se torna simples e até divertido. Neste
                guia completo, vamos te ensinar tudo que você precisa saber para organizar um bolão de
                sucesso.
              </Typography>

              <Typography variant="h2">O Que é um Bolão de Loteria?</Typography>
              <Typography paragraph>
                Um bolão é uma forma de aumentar suas chances de ganhar na loteria através da união de
                recursos com outras pessoas. Em vez de fazer apostas individuais, um grupo de pessoas se
                junta para fazer múltiplas apostas, dividindo tanto os custos quanto os prêmios
                proporcionalmente.
              </Typography>
              <Typography paragraph>
                <strong>Vantagens de fazer bolão:</strong>
              </Typography>
              <ul>
                <li>
                  <strong>Mais jogos por menos dinheiro:</strong> Você pode participar de várias apostas
                  pagando apenas uma fração do valor total
                </li>
                <li>
                  <strong>Maiores chances de ganhar:</strong> Quanto mais jogos, maior a probabilidade
                  de acertar
                </li>
                <li>
                  <strong>Diversão em grupo:</strong> Compartilhar a experiência com amigos torna tudo
                  mais emocionante
                </li>
                <li>
                  <strong>Flexibilidade:</strong> Você pode escolher quanto quer investir
                </li>
              </ul>

              <Typography variant="h2">Passo a Passo para Organizar seu Bolão</Typography>

              <Typography variant="h3">1. Defina o Grupo de Participantes</Typography>
              <Typography paragraph>
                O primeiro passo é decidir quem vai participar do bolão. Pode ser um grupo de amigos,
                familiares, colegas de trabalho ou até uma combinação desses. Algumas dicas importantes:
              </Typography>
              <ul>
                <li>
                  <strong>Escolha pessoas confiáveis:</strong> A confiança é fundamental em um bolão
                </li>
                <li>
                  <strong>Defina um número mínimo e máximo:</strong> Isso ajuda no planejamento
                  financeiro
                </li>
                <li>
                  <strong>Crie um grupo no WhatsApp:</strong> Facilita a comunicação e transparência
                </li>
                <li>
                  <strong>Deixe claro as regras desde o início:</strong> Evita mal-entendidos futuros
                </li>
              </ul>

              <Typography variant="h3">2. Estabeleça as Regras do Bolão</Typography>
              <Typography paragraph>
                Antes de começar, é essencial que todos concordem com as regras. Defina claramente:
              </Typography>
              <ul>
                <li>
                  <strong>Valor da cota:</strong> Quanto cada participante vai pagar por jogo
                </li>
                <li>
                  <strong>Número de jogos:</strong> Quantas apostas serão feitas
                </li>
                <li>
                  <strong>Prazo de pagamento:</strong> Até quando os participantes devem pagar
                </li>
                <li>
                  <strong>Divisão de prêmios:</strong> Como será feita a distribuição em caso de ganho
                </li>
                <li>
                  <strong>Responsável:</strong> Quem será o organizador e guardará os bilhetes
                </li>
              </ul>

              {/* Ad in Content */}
              <Box sx={{ my: 4 }}>
                <AdSense slot="inArticle" format="auto" />
              </Box>

              <Typography variant="h3">3. Calcule os Valores</Typography>
              <Typography paragraph>
                A matemática do bolão é simples, mas precisa ser clara para todos. Veja como calcular:
              </Typography>
              <Typography paragraph>
                <strong>Fórmula básica:</strong>
              </Typography>
              <ul>
                <li>Valor total do bolão = Número de jogos × Preço por jogo</li>
                <li>Valor por participante = Valor total ÷ Número de participantes</li>
                <li>Cotas por participante = Número de jogos que cada um quer fazer</li>
              </ul>
              <Typography paragraph>
                <strong>Exemplo prático:</strong> Se você tem 10 amigos e cada um quer fazer 2 jogos de
                R$ 5,00:
              </Typography>
              <ul>
                <li>Total de jogos: 10 × 2 = 20 jogos</li>
                <li>Valor total: 20 × R$ 5,00 = R$ 100,00</li>
                <li>Valor por pessoa: R$ 100,00 ÷ 10 = R$ 10,00</li>
              </ul>

              <Typography variant="h3">4. Escolha os Números</Typography>
              <Typography paragraph>
                Existem diferentes estratégias para escolher os números do bolão:
              </Typography>
              <ul>
                <li>
                  <strong>Surpresinha:</strong> Deixe o sistema escolher aleatoriamente (mais rápido)
                </li>
                <li>
                  <strong>Números da sorte:</strong> Cada participante escolhe seus números favoritos
                </li>
                <li>
                  <strong>Análise estatística:</strong> Use números mais ou menos sorteados (não aumenta
                  chances reais)
                </li>
                <li>
                  <strong>Combinação:</strong> Misture diferentes estratégias
                </li>
              </ul>

              <Typography variant="h3">5. Registre Tudo</Typography>
              <Typography paragraph>
                A documentação é crucial para evitar problemas. Use o{" "}
                <Link href="/gerenciador" style={{ color: "#22c55e" }}>
                  Bolão Fácil
                </Link>{" "}
                para:
              </Typography>
              <ul>
                <li>Registrar todos os participantes e seus jogos</li>
                <li>Controlar quem já pagou e quem ainda deve</li>
                <li>Gerar um PDF com todos os detalhes do bolão</li>
                <li>Ter um comprovante digital de tudo</li>
              </ul>

              <Typography variant="h3">6. Faça as Apostas</Typography>
              <Typography paragraph>
                Com tudo organizado, é hora de fazer as apostas oficiais:
              </Typography>
              <ul>
                <li>
                  <strong>Lotéricas:</strong> Leve os números escolhidos e faça as apostas
                </li>
                <li>
                  <strong>App da Caixa:</strong> Você pode apostar online pelo aplicativo oficial
                </li>
                <li>
                  <strong>Guarde os bilhetes:</strong> Mantenha em local seguro e tire fotos
                </li>
                <li>
                  <strong>Compartilhe comprovantes:</strong> Envie fotos dos bilhetes no grupo
                </li>
              </ul>

              <Typography variant="h3">7. Acompanhe o Sorteio</Typography>
              <Typography paragraph>
                No dia do sorteio, organize uma forma de todos acompanharem juntos:
              </Typography>
              <ul>
                <li>Marque um local para assistir ao sorteio em grupo (opcional)</li>
                <li>Crie expectativa no grupo do WhatsApp</li>
                <li>Confira os números assim que saírem</li>
                <li>Comunique imediatamente se houver prêmio</li>
              </ul>

              <Typography variant="h2">Dicas de Ouro para um Bolão de Sucesso</Typography>

              <Typography variant="h3">Transparência é Fundamental</Typography>
              <Typography paragraph>
                Mantenha tudo às claras. Compartilhe fotos dos bilhetes, extratos de pagamento e
                qualquer informação relevante. A transparência evita desconfianças e fortalece o grupo.
              </Typography>

              <Typography variant="h3">Documente Tudo</Typography>
              <Typography paragraph>
                Além de usar ferramentas como o Bolão Fácil, mantenha registros físicos. Tire fotos dos
                bilhetes, salve conversas importantes e guarde comprovantes de pagamento.
              </Typography>

              <Typography variant="h3">Defina um Responsável Confiável</Typography>
              <Typography paragraph>
                O organizador do bolão tem uma responsabilidade grande. Escolha alguém organizado,
                confiável e que tenha tempo para gerenciar tudo adequadamente.
              </Typography>

              <Typography variant="h3">Estabeleça Prazos Claros</Typography>
              <Typography paragraph>
                Defina datas limite para pagamento e confirmação de participação. Isso evita correria de
                última hora e garante que tudo seja feito a tempo.
              </Typography>

              <Typography variant="h3">Prepare-se para Ganhar (e para Não Ganhar)</Typography>
              <Typography paragraph>
                Tenha um plano claro de como proceder em caso de prêmio. Quem vai buscar? Como será a
                divisão? Onde guardar o dinheiro? Mas também mantenha expectativas realistas - a loteria
                é um jogo de sorte.
              </Typography>

              <Typography variant="h2">Erros Comuns a Evitar</Typography>
              <ul>
                <li>
                  <strong>Não documentar adequadamente:</strong> Sempre registre tudo por escrito
                </li>
                <li>
                  <strong>Aceitar pagamentos atrasados:</strong> Seja firme com os prazos
                </li>
                <li>
                  <strong>Não compartilhar os bilhetes:</strong> Todos devem ter acesso às informações
                </li>
                <li>
                  <strong>Fazer apostas sem confirmação:</strong> Só aposte depois que todos pagarem
                </li>
                <li>
                  <strong>Não ter regras claras de divisão:</strong> Defina tudo antes do primeiro jogo
                </li>
              </ul>

              <Typography variant="h2">Divisão de Prêmios</Typography>
              <Typography paragraph>
                A divisão de prêmios deve ser proporcional à participação de cada um. Se alguém fez 2
                jogos e outro fez 5, o segundo deve receber proporcionalmente mais. A fórmula é:
              </Typography>
              <Typography paragraph>
                <strong>Prêmio individual = (Jogos do participante ÷ Total de jogos) × Prêmio total</strong>
              </Typography>
              <Typography paragraph>
                Exemplo: Prêmio de R$ 10.000 com 20 jogos totais. Quem fez 2 jogos recebe: (2 ÷ 20) ×
                R$ 10.000 = R$ 1.000
              </Typography>

              <Typography variant="h2">Conclusão</Typography>
              <Typography paragraph>
                Organizar um bolão de Mega-Sena não precisa ser complicado. Com planejamento,
                transparência e as ferramentas certas, você pode criar uma experiência divertida e
                organizada para todos os participantes.
              </Typography>
              <Typography paragraph>
                Use o{" "}
                <Link href="/gerenciador" style={{ color: "#22c55e", fontWeight: 600 }}>
                  Bolão Fácil
                </Link>{" "}
                para gerenciar tudo de forma profissional e gratuita. Nossa plataforma cuida de todos os
                cálculos, controles e documentação, deixando você livre para aproveitar a experiência com
                seus amigos.
              </Typography>
              <Typography paragraph>
                Boa sorte no seu bolão! 🍀
              </Typography>
            </Box>
          </Paper>

          {/* Ad */}
          <Box sx={{ my: 5 }}>
            <AdSense slot="inArticle" format="auto" />
          </Box>

          {/* CTA */}
          <Paper
            sx={{
              p: 4,
              mt: 6,
              textAlign: "center",
              background:
                "linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.05) 100%)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" sx={{ color: "white", fontWeight: 700, mb: 2 }}>
              Pronto para organizar seu bolão?
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 3 }}>
              Use o Bolão Fácil gratuitamente e organize tudo de forma profissional
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
