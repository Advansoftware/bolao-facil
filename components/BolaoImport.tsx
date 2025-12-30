"use client";

import { useState, useRef } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Alert,
  InputAdornment,
  Chip,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import WarningIcon from "@mui/icons-material/Warning";
import { LOTTERY_TYPES } from "@/lib/lottery-types";
import { createBolao, Bolao, addParticipant, addGame, toggleParticipantPaid, getBolao } from "@/lib/storage";

interface ImportedGame {
  numbers: number[];
}

interface ImportedParticipant {
  name: string;
  paid: boolean;
  games: ImportedGame[];
}

interface ImportedBolao {
  name: string;
  year?: number;
  lotteryType?: string;
  pricePerGame?: number;
  minGamesPerParticipant?: number;
  maxGamesPerParticipant?: number;
  participants: ImportedParticipant[];
}

interface ImportedData {
  exportVersion?: string;
  exportedAt?: string;
  bolao: ImportedBolao;
}

interface BolaoImportProps {
  onImportComplete: (bolao: Bolao) => void;
}

export function BolaoImport({ onImportComplete }: BolaoImportProps) {
  const [open, setOpen] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [importedData, setImportedData] = useState<ImportedData | null>(null);
  
  // Config form state
  const [name, setName] = useState("");
  const [lotteryType, setLotteryType] = useState("mega-sena");
  const [year, setYear] = useState(new Date().getFullYear());
  const [pricePerGame, setPricePerGame] = useState(5);
  const [minGames, setMinGames] = useState(1);
  const [maxGames, setMaxGames] = useState<number | "">(10);
  
  // Missing fields indicators
  const [missingFields, setMissingFields] = useState<string[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content) as ImportedData;
        
        // Validate basic structure
        if (!data.bolao) {
          throw new Error("Arquivo JSON inválido: campo 'bolao' não encontrado");
        }
        
        if (!data.bolao.name) {
          throw new Error("Arquivo JSON inválido: nome do bolão não encontrado");
        }
        
        if (!data.bolao.participants || !Array.isArray(data.bolao.participants)) {
          throw new Error("Arquivo JSON inválido: participantes não encontrados");
        }

        setImportedData(data);
        
        // Pre-fill form with imported data
        setName(data.bolao.name);
        setYear(data.bolao.year || new Date().getFullYear());
        setPricePerGame(data.bolao.pricePerGame || 5);
        setMinGames(data.bolao.minGamesPerParticipant || 1);
        setMaxGames(data.bolao.maxGamesPerParticipant || 10);
        
        // Check for missing required fields
        const missing: string[] = [];
        if (!data.bolao.lotteryType) {
          missing.push("Tipo de Loteria");
          setLotteryType("mega-sena"); // Default
        } else {
          setLotteryType(data.bolao.lotteryType);
        }
        
        setMissingFields(missing);
        
        // Close file dialog and open config dialog
        setOpen(false);
        setConfigOpen(true);
        setError(null);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao processar arquivo JSON");
      }
    };
    
    reader.onerror = () => {
      setError("Erro ao ler o arquivo");
    };
    
    reader.readAsText(file);
    
    // Reset input
    if (event.target) {
      event.target.value = "";
    }
  };

  const handleImport = () => {
    if (!importedData) return;
    
    try {
      // Create the bolão
      const newBolao = createBolao(
        name,
        lotteryType,
        year,
        pricePerGame,
        minGames,
        typeof maxGames === "number" ? maxGames : undefined
      );
      
      // Add participants and their games
      importedData.bolao.participants.forEach((p) => {
        const participant = addParticipant(newBolao.id, p.name);
        
        if (participant) {
          // Add games
          p.games.forEach((game) => {
            addGame(newBolao.id, participant.id, game.numbers);
          });
          
          // Set paid status
          if (p.paid) {
            toggleParticipantPaid(newBolao.id, participant.id);
          }
        }
      });
      
      // Get the updated bolão
      const finalBolao = getBolao(newBolao.id);
      
      if (finalBolao) {
        onImportComplete(finalBolao);
      }
      
      // Reset state
      setConfigOpen(false);
      setImportedData(null);
      setMissingFields([]);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao importar bolão");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setError(null);
  };

  const handleConfigClose = () => {
    setConfigOpen(false);
    setImportedData(null);
    setMissingFields([]);
  };

  const participantCount = importedData?.bolao.participants.length || 0;
  const totalGames = importedData?.bolao.participants.reduce(
    (acc, p) => acc + p.games.length, 0
  ) || 0;

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<UploadFileIcon />}
        onClick={() => setOpen(true)}
        sx={{
          borderColor: "rgba(255,255,255,0.3)",
          color: "white",
          "&:hover": {
            borderColor: "#22c55e",
            bgcolor: "rgba(34, 197, 94, 0.1)",
          },
        }}
      >
        Importar Bolão
      </Button>

      {/* File Selection Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box display="flex" alignItems="center" gap={1}>
            <UploadFileIcon sx={{ color: "#22c55e" }} />
            Importar Bolão de Arquivo JSON
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography sx={{ mb: 3, color: "text.secondary" }}>
              Selecione um arquivo JSON exportado anteriormente para importar um bolão completo
              com todos os participantes e jogos.
            </Typography>
            
            <input
              type="file"
              accept=".json"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleFileSelect}
              startIcon={<UploadFileIcon />}
              sx={{
                bgcolor: "#22c55e",
                "&:hover": { bgcolor: "#16a34a" },
                py: 2,
              }}
            >
              Selecionar Arquivo .JSON
            </Button>
            
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>

      {/* Configuration Dialog */}
      <Dialog open={configOpen} onClose={handleConfigClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box display="flex" alignItems="center" gap={1}>
            <UploadFileIcon sx={{ color: "#22c55e" }} />
            Configurar Bolão Importado
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            {missingFields.length > 0 && (
              <Alert severity="warning" icon={<WarningIcon />} sx={{ mb: 3 }}>
                <Typography variant="body2" fontWeight="bold">
                  Os seguintes campos não estavam no arquivo e precisam ser preenchidos:
                </Typography>
                <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {missingFields.map((field) => (
                    <Chip key={field} label={field} size="small" color="warning" />
                  ))}
                </Box>
              </Alert>
            )}
            
            <Box sx={{ mb: 2, p: 2, bgcolor: "rgba(34, 197, 94, 0.1)", borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Dados encontrados no arquivo:
              </Typography>
              <Typography variant="body1" fontWeight="bold" sx={{ color: "#22c55e" }}>
                {participantCount} participantes • {totalGames} jogos
              </Typography>
            </Box>
            
            <TextField
              fullWidth
              label="Nome do Bolão"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            
            <FormControl fullWidth sx={{ mb: 2 }} required>
              <InputLabel>Tipo de Loteria</InputLabel>
              <Select
                value={lotteryType}
                label="Tipo de Loteria"
                onChange={(e) => setLotteryType(e.target.value)}
              >
                {LOTTERY_TYPES.map((type) => (
                  <MenuItem key={type.id} value={type.id}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          bgcolor: type.color,
                        }}
                      />
                      {type.name}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <TextField
              fullWidth
              label="Ano"
              type="number"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Valor por Jogo"
              type="number"
              value={pricePerGame}
              onChange={(e) => setPricePerGame(Number(e.target.value))}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
              sx={{ mb: 2 }}
            />
            
            <Box display="flex" gap={2}>
              <TextField
                fullWidth
                label="Mín. Jogos/Participante"
                type="number"
                value={minGames}
                onChange={(e) => setMinGames(Number(e.target.value))}
              />
              <TextField
                fullWidth
                label="Máx. Jogos/Participante"
                type="number"
                value={maxGames}
                onChange={(e) => setMaxGames(e.target.value ? Number(e.target.value) : "")}
              />
            </Box>
            
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfigClose}>Cancelar</Button>
          <Button
            variant="contained"
            onClick={handleImport}
            disabled={!name}
            sx={{ bgcolor: "#22c55e", "&:hover": { bgcolor: "#16a34a" } }}
          >
            Importar Bolão
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
