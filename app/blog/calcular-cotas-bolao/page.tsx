import type { Metadata } from "next";
import { Box, Container, Typography, Paper, Chip, Divider } from "@mui/material";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AdSense } from "@/components/AdSense";

export const metadata: Metadata = {
  title: "Como Calcular Cotas de Bolão Corretamente | Tutorial Completo",
  description: "Aprenda as fórmulas e métodos para calcular cotas de bolão de forma justa. Exemplos práticos, calculadora e dicas para evitar erros.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Como Calcular Cotas de Bolão Corretamente",
  description: "Tutorial completo sobre cálculo de cotas em bolões de loteria",
  datePublished: "2024-12-30",
  author: { "@type": "Organization", name: "Bolão Fácil" },
  publisher: { "@type": "Organization", name: "Bolão Fácil", logo: { "@type": "ImageObject", url: "https://bolaofacil.com.br/icon.svg" } },
};

export default function ArtigoCalcularCotasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Box sx={{ minHeight: "100vh", bgcolor: "#0a0a0f" }}>
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Box sx={{ mb: 4, display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/"><Typography sx={{ color: "rgba(255,255,255,0.5)", "&:hover": { color: "#22c55e" } }}>Início</Typography></Link>
            <Typography sx={{ color: "rgba(255,255,255,0.3)" }}>/</Typography>
            <Link href="/blog"><Typography sx={{ color: "rgba(255,255,255,0.5)", "&:hover": { color: "#22c55e" } }}>Blog</Typography></Link>
            <Typography sx={{ color: "rgba(255,255,255,0.3)" }}>/</Typography>
            <Typography sx={{ color: "#22c55e" }}>Calcular Cotas</Typography>
          </Box>

          <Box sx={{ mb: 5 }}>
            <Chip label="Tutorial" sx={{ bgcolor: "rgba(245, 158, 11, 0.2)", color: "#f59e0b", fontWeight: 600, mb: 3 }} />
            <Typography variant="h3" component="h1" sx={{ fontWeight: 800, color: "white", mb: 3, lineHeight: 1.2 }}>
              Como Calcular Cotas de Bolão Corretamente
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", mb: 2 }}>
              Aprenda as fórmulas essenciais, veja exemplos práticos e evite erros comuns no cálculo de cotas do seu bolão.
            </Typography>
          </Box>

          <Divider sx={{ mb: 5, borderColor: "rgba(255,255,255,0.1)" }} />
          <Box sx={{ mb: 5 }}><AdSense slot="inArticle" format="auto" /></Box>

          <Paper sx={{ p: { xs: 3, md: 5 }, bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 3 }}>
            <Box sx={{ "& h2": { color: "#f59e0b", mt: 5, mb: 3, fontSize: "1.8rem", fontWeight: 700 }, "& h3": { color: "rgba(255,255,255,0.9)", mt: 4, mb: 2, fontSize: "1.4rem", fontWeight: 600 }, "& p": { color: "rgba(255,255,255,0.7)", mb: 3, lineHeight: 1.8, fontSize: "1.05rem" }, "& ul": { color: "rgba(255,255,255,0.7)", mb: 3, pl: 4 }, "& li": { mb: 1.5 }, "& strong": { color: "rgba(255,255,255,0.9)" } }}>
              
              <Typography paragraph>
                Calcular cotas de bolão corretamente é fundamental para garantir justiça e transparência entre todos os participantes. Neste tutorial, você vai aprender tudo sobre cálculos de cotas, divisão de prêmios e como evitar os erros mais comuns.
              </Typography>

              <Typography variant="h2">Fórmulas Básicas</Typography>

              <Typography variant="h3">1. Valor Total do Bolão</Typography>
              <Typography paragraph><strong>Fórmula:</strong> Número de Jogos × Preço por Jogo</Typography>
              <Typography paragraph><strong>Exemplo:</strong> 20 jogos × R$ 5,00 = R$ 100,00</Typography>

              <Typography variant="h3">2. Valor por Participante (Divisão Igual)</Typography>
              <Typography paragraph><strong>Fórmula:</strong> Valor Total ÷ Número de Participantes</Typography>
              <Typography paragraph><strong>Exemplo:</strong> R$ 100,00 ÷ 10 pessoas = R$ 10,00 por pessoa</Typography>

              <Typography variant="h3">3. Valor por Participante (Divisão Proporcional)</Typography>
              <Typography paragraph><strong>Fórmula:</strong> (Jogos do Participante ÷ Total de Jogos) × Valor Total</Typography>
              <Typography paragraph><strong>Exemplo:</strong> Se alguém fez 3 jogos de um total de 20: (3 ÷ 20) × R$ 100 = R$ 15,00</Typography>

              <Typography variant="h2">Métodos de Divisão</Typography>

              <Typography variant="h3">Método 1: Divisão Igual</Typography>
              <Typography paragraph>Todos pagam o mesmo valor, independente de quantos jogos fizeram. Mais simples, mas menos justo se houver diferença grande na participação.</Typography>
              <ul>
                <li><strong>Vantagem:</strong> Cálculo simples e rápido</li>
                <li><strong>Desvantagem:</strong> Pode ser injusto se participações forem muito diferentes</li>
                <li><strong>Ideal para:</strong> Grupos pequenos com participação similar</li>
              </ul>

              <Typography variant="h3">Método 2: Divisão Proporcional</Typography>
              <Typography paragraph>Cada um paga proporcionalmente aos jogos que fez. Mais justo e recomendado.</Typography>
              <ul>
                <li><strong>Vantagem:</strong> Totalmente justo para todos</li>
                <li><strong>Desvantagem:</strong> Cálculo um pouco mais complexo</li>
                <li><strong>Ideal para:</strong> Qualquer tamanho de grupo</li>
              </ul>

              <Typography variant="h2">Exemplos Práticos</Typography>

              <Typography variant="h3">Exemplo 1: Divisão Igual Simples</Typography>
              <Typography paragraph><strong>Cenário:</strong> 5 amigos, 15 jogos de R$ 5,00 cada</Typography>
              <ul>
                <li>Valor total: 15 × R$ 5,00 = R$ 75,00</li>
                <li>Valor por pessoa: R$ 75,00 ÷ 5 = R$ 15,00</li>
                <li>Cada um paga R$ 15,00</li>
              </ul>

              <Typography variant="h3">Exemplo 2: Divisão Proporcional</Typography>
              <Typography paragraph><strong>Cenário:</strong> 4 pessoas, 20 jogos de R$ 5,00</Typography>
              <ul>
                <li>João: 8 jogos → (8 ÷ 20) × R$ 100 = R$ 40,00</li>
                <li>Maria: 6 jogos → (6 ÷ 20) × R$ 100 = R$ 30,00</li>
                <li>Pedro: 4 jogos → (4 ÷ 20) × R$ 100 = R$ 20,00</li>
                <li>Ana: 2 jogos → (2 ÷ 20) × R$ 100 = R$ 10,00</li>
                <li>Total: R$ 40 + R$ 30 + R$ 20 + R$ 10 = R$ 100 ✓</li>
              </ul>

              <Typography variant="h2">Divisão de Prêmios</Typography>

              <Typography variant="h3">Regra de Ouro</Typography>
              <Typography paragraph>A divisão de prêmios deve seguir a mesma proporção da participação. Se alguém pagou 20% do bolão, deve receber 20% do prêmio.</Typography>

              <Typography variant="h3">Fórmula de Divisão de Prêmio</Typography>
              <Typography paragraph><strong>Prêmio Individual = (Jogos do Participante ÷ Total de Jogos) × Prêmio Total</strong></Typography>

              <Typography variant="h3">Exemplo Prático</Typography>
              <Typography paragraph><strong>Cenário:</strong> Bolão ganhou R$ 50.000, total de 25 jogos</Typography>
              <ul>
                <li>Quem fez 5 jogos: (5 ÷ 25) × R$ 50.000 = R$ 10.000</li>
                <li>Quem fez 10 jogos: (10 ÷ 25) × R$ 50.000 = R$ 20.000</li>
                <li>Quem fez 10 jogos: (10 ÷ 25) × R$ 50.000 = R$ 20.000</li>
              </ul>

              <Typography variant="h2">Erros Comuns a Evitar</Typography>
              <ul>
                <li><strong>Não arredondar corretamente:</strong> Use sempre 2 casas decimais</li>
                <li><strong>Esquecer de somar tudo:</strong> Sempre confira se a soma bate com o total</li>
                <li><strong>Misturar métodos:</strong> Use o mesmo método para pagamento e prêmio</li>
                <li><strong>Não documentar:</strong> Registre todos os cálculos por escrito</li>
                <li><strong>Aceitar valores quebrados:</strong> Defina como lidar com centavos antes</li>
              </ul>

              <Typography variant="h2">Dicas Importantes</Typography>
              <ul>
                <li>Use uma calculadora ou ferramenta como o <Link href="/gerenciador" style={{ color: "#f59e0b" }}>Bolão Fácil</Link></li>
                <li>Sempre mostre os cálculos para o grupo</li>
                <li>Defina regras de arredondamento antes de começar</li>
                <li>Mantenha registro de todos os valores</li>
                <li>Confirme com todos antes de fazer as apostas</li>
              </ul>

              <Typography variant="h2">Conclusão</Typography>
              <Typography paragraph>
                Calcular cotas corretamente é essencial para um bolão justo e transparente. Use sempre a divisão proporcional quando houver diferença na participação, e documente tudo claramente.
              </Typography>
              <Typography paragraph>
                O <Link href="/gerenciador" style={{ color: "#f59e0b", fontWeight: 600 }}>Bolão Fácil</Link> faz todos esses cálculos automaticamente para você, garantindo precisão e transparência total.
              </Typography>
            </Box>
          </Paper>

          <Box sx={{ my: 5 }}><AdSense slot="inArticle" format="auto" /></Box>

          <Paper sx={{ p: 4, mt: 6, textAlign: "center", background: "linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.05) 100%)", border: "1px solid rgba(245, 158, 11, 0.2)", borderRadius: 3 }}>
            <Typography variant="h5" sx={{ color: "white", fontWeight: 700, mb: 2 }}>Deixe o Bolão Fácil calcular para você!</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 3 }}>Cálculos automáticos, precisos e transparentes</Typography>
            <Link href="/gerenciador"><Chip label="Começar Agora →" sx={{ bgcolor: "#f59e0b", color: "#000", fontWeight: 700, px: 3, py: 3, cursor: "pointer" }} /></Link>
          </Paper>

          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Link href="/blog"><Typography sx={{ color: "#f59e0b", fontWeight: 600 }}>← Voltar para o Blog</Typography></Link>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
}
