"use client";

import { useState, useMemo } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Paper,
  Chip,
  Divider,
  Alert,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Bolao } from "@/lib/storage";
import { LotteryType, PrizeTier } from "@/lib/lottery-types";

interface ResultCheckerProps {
  bolao: Bolao;
  lotteryConfig: LotteryType;
}

interface GameResult {
  participantName: string;
  gameNumbers: number[];
  matchedNumbers: number[];
  matchCount: number;
  prize: PrizeTier | null;
}

export function ResultChecker({ bolao, lotteryConfig }: ResultCheckerProps) {
  const [open, setOpen] = useState(false);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const toggleNumber = (num: number) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num));
    } else if (selectedNumbers.length < lotteryConfig.numbersCount) {
      setSelectedNumbers([...selectedNumbers, num].sort((a, b) => a - b));
    }
  };

  const handleCheckResults = () => {
    if (selectedNumbers.length === 0) {
      return;
    }
    setDrawnNumbers([...selectedNumbers]);
    setShowResults(true);
  };

  const clearResults = () => {
    setDrawnNumbers([]);
    setShowResults(false);
    setSelectedNumbers([]);
  };

  const handleClose = () => {
    setOpen(false);
    clearResults();
  };

  // Calculate results for all games
  const results = useMemo<GameResult[]>(() => {
    if (drawnNumbers.length === 0) return [];

    const gameResults: GameResult[] = [];

    bolao.participants.forEach((participant) => {
      participant.games.forEach((game) => {
        const matchedNumbers = game.numbers.filter((n) =>
          drawnNumbers.includes(n)
        );
        const matchCount = matchedNumbers.length;

        // Find prize tier
        const prize =
          lotteryConfig.prizeTiers.find((tier) => matchCount >= tier.matches) ||
          null;

        gameResults.push({
          participantName: participant.name,
          gameNumbers: game.numbers,
          matchedNumbers,
          matchCount,
          prize,
        });
      });
    });

    // Sort by match count (highest first)
    return gameResults.sort((a, b) => b.matchCount - a.matchCount);
  }, [drawnNumbers, bolao.participants, lotteryConfig.prizeTiers]);

  // Get winners (those with prizes)
  const winners = results.filter((r) => r.prize !== null);
  const hasWinners = winners.length > 0;
  const bestMatch = results.length > 0 ? results[0] : null;
  const minPrizeMatches =
    lotteryConfig.prizeTiers[lotteryConfig.prizeTiers.length - 1]?.matches || 0;

  // Generate all possible numbers for the grid
  const allNumbers = Array.from({ length: lotteryConfig.maxNumber }, (_, i) => i + 1);

  return (
    <>
      <Button
        variant="contained"
        fullWidth
        startIcon={<SearchIcon />}
        onClick={() => setOpen(true)}
        sx={{
          bgcolor: lotteryConfig.color,
          color: "white",
          "&:hover": { bgcolor: lotteryConfig.color, filter: "brightness(0.9)" },
        }}
      >
        Verificar Resultado
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center" gap={1}>
              <SearchIcon sx={{ color: lotteryConfig.color }} />
              <Typography variant="h6">
                Verificar Resultado - {lotteryConfig.name}
              </Typography>
            </Box>
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent>
          {/* Number Selection Grid */}
          <Paper
            sx={{
              p: 3,
              mb: 3,
              bgcolor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap" gap={1}>
              <Typography variant="subtitle1" fontWeight="bold">
                Clique nos números sorteados ({selectedNumbers.length}/{lotteryConfig.numbersCount}):
              </Typography>
              {selectedNumbers.length > 0 && (
                <Chip
                  label={`Selecionados: ${selectedNumbers.map(n => String(n).padStart(2, '0')).join(' - ')}`}
                  sx={{
                    bgcolor: lotteryConfig.color,
                    color: "white",
                    fontWeight: "bold",
                  }}
                />
              )}
            </Box>

            {/* Number Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
                gap: 0.5,
                maxHeight: 280,
                overflowY: "auto",
                mb: 2,
              }}
            >
              {allNumbers.map((num) => {
                const isSelected = selectedNumbers.includes(num);
                return (
                  <Box
                    key={num}
                    onClick={() => toggleNumber(num)}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      bgcolor: isSelected ? lotteryConfig.color : "rgba(255,255,255,0.08)",
                      color: isSelected ? "white" : "rgba(255,255,255,0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: isSelected ? "bold" : "normal",
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      border: isSelected ? `2px solid ${lotteryConfig.color}` : "1px solid rgba(255,255,255,0.15)",
                      transition: "all 0.15s ease",
                      "&:hover": {
                        bgcolor: isSelected ? lotteryConfig.color : "rgba(255,255,255,0.15)",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    {String(num).padStart(2, "0")}
                  </Box>
                );
              })}
            </Box>

            {/* Action Buttons */}
            <Box display="flex" gap={2} flexWrap="wrap">
              <Button
                variant="contained"
                onClick={handleCheckResults}
                disabled={selectedNumbers.length === 0}
                sx={{
                  bgcolor: lotteryConfig.color,
                  "&:hover": {
                    bgcolor: lotteryConfig.color,
                    filter: "brightness(0.9)",
                  },
                  px: 4,
                  flex: 1,
                }}
              >
                Verificar ({selectedNumbers.length} números)
              </Button>
              {(showResults || selectedNumbers.length > 0) && (
                <Button variant="outlined" onClick={clearResults}>
                  Limpar Tudo
                </Button>
              )}
            </Box>

            {/* Drawn numbers display after verification */}
            {showResults && drawnNumbers.length > 0 && (
              <Box mt={3} p={2} bgcolor="rgba(34, 197, 94, 0.1)" borderRadius={2}>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  ✅ Números do resultado oficial:
                </Typography>
                <Box display="flex" gap={1} flexWrap="wrap">
                  {drawnNumbers.map((n) => (
                    <Box
                      key={n}
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        bgcolor: lotteryConfig.color,
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        boxShadow: `0 0 8px ${lotteryConfig.color}`,
                      }}
                    >
                      {String(n).padStart(2, "0")}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Paper>

          {/* Results */}
          {showResults && (
            <>
              {/* Winners Summary */}
              {hasWinners ? (
                <Alert
                  severity="success"
                  icon={<CelebrationIcon />}
                  sx={{
                    mb: 3,
                    bgcolor: "rgba(34, 197, 94, 0.15)",
                    border: "1px solid rgba(34, 197, 94, 0.3)",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    🎉 PARABÉNS! Temos ganhadores!
                  </Typography>
                  <Typography>
                    {winners.length} jogo(s) premiado(s)! O melhor resultado foi{" "}
                    <strong>{winners[0].prize?.name}</strong> com{" "}
                    {winners[0].matchCount} acertos por {winners[0].participantName}.
                  </Typography>
                </Alert>
              ) : (
                <Alert
                  severity="info"
                  sx={{
                    mb: 3,
                    bgcolor: "rgba(59, 130, 246, 0.15)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    😔 Sem ganhadores desta vez
                  </Typography>
                  <Typography>
                    Mínimo necessário: {minPrizeMatches} acertos.{" "}
                    {bestMatch && (
                      <>
                        O melhor resultado foi {bestMatch.matchCount} acerto(s) por{" "}
                        {bestMatch.participantName}.
                      </>
                    )}
                  </Typography>
                </Alert>
              )}

              {/* Prize tiers legend */}
              <Box mb={3}>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  Faixas de premiação ({lotteryConfig.name}):
                </Typography>
                <Box display="flex" gap={1} flexWrap="wrap">
                  {lotteryConfig.prizeTiers.map((tier) => (
                    <Chip
                      key={tier.matches}
                      label={`${tier.name} (${tier.matches} acertos)`}
                      size="small"
                      sx={{
                        bgcolor: "rgba(34, 197, 94, 0.2)",
                        color: "#22c55e",
                        border: "1px solid rgba(34, 197, 94, 0.3)",
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* All games ranked */}
              <Typography variant="h6" fontWeight="bold" mb={2}>
                <EmojiEventsIcon
                  sx={{ verticalAlign: "middle", mr: 1, color: "#fbbf24" }}
                />
                Ranking de Resultados
              </Typography>

              <Box display="flex" flexDirection="column" gap={2}>
                {results.map((result, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: 2,
                      bgcolor: result.prize
                        ? "rgba(34, 197, 94, 0.1)"
                        : "rgba(255,255,255,0.03)",
                      border: result.prize
                        ? "2px solid rgba(34, 197, 94, 0.5)"
                        : "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                      flexWrap="wrap"
                      gap={1}
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        <Typography
                          sx={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            bgcolor:
                              index === 0
                                ? "#fbbf24"
                                : index === 1
                                ? "#94a3b8"
                                : index === 2
                                ? "#cd7f32"
                                : "rgba(255,255,255,0.1)",
                            color: index < 3 ? "#000" : "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            fontSize: "0.875rem",
                          }}
                        >
                          {index + 1}
                        </Typography>
                        <Typography fontWeight="bold">
                          {result.participantName}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Chip
                          label={`${result.matchCount} acertos`}
                          size="small"
                          sx={{
                            bgcolor: result.matchCount > 0
                              ? lotteryConfig.color
                              : "rgba(255,255,255,0.1)",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        />
                        {result.prize && (
                          <Chip
                            label={`🏆 ${result.prize.name}`}
                            size="small"
                            sx={{
                              bgcolor: "#22c55e",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    {/* Game numbers with highlights */}
                    <Box display="flex" gap={0.5} flexWrap="wrap">
                      {result.gameNumbers.map((num) => {
                        const isMatch = result.matchedNumbers.includes(num);
                        return (
                          <Box
                            key={num}
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: "50%",
                              bgcolor: isMatch
                                ? "#22c55e"
                                : "rgba(255,255,255,0.1)",
                              color: isMatch ? "white" : "rgba(255,255,255,0.6)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: isMatch ? "bold" : "normal",
                              fontSize: "0.75rem",
                              border: isMatch
                                ? "2px solid #16a34a"
                                : "1px solid rgba(255,255,255,0.2)",
                              boxShadow: isMatch
                                ? "0 0 8px rgba(34, 197, 94, 0.5)"
                                : "none",
                            }}
                          >
                            {String(num).padStart(2, "0")}
                          </Box>
                        );
                      })}
                    </Box>
                  </Paper>
                ))}
              </Box>
            </>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
