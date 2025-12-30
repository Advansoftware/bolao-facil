"use client";

import { useState } from "react";
import {
  Box,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  IconButton,
  Alert,
  Zoom,
} from "@mui/material";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface FeedbackData {
  id: string;
  message: string;
  type: "sugestao" | "bug" | "outro";
  createdAt: string;
}

export function FeedbackButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!message.trim()) return;

    // Por enquanto, salva no localStorage
    // Futuramente pode enviar para um backend ou serviço de email
    const feedbacks: FeedbackData[] = JSON.parse(
      localStorage.getItem("bolao_feedbacks") || "[]"
    );

    const newFeedback: FeedbackData = {
      id: Date.now().toString(),
      message: message.trim(),
      type: "sugestao",
      createdAt: new Date().toISOString(),
    };

    feedbacks.push(newFeedback);
    localStorage.setItem("bolao_feedbacks", JSON.stringify(feedbacks));

    setSubmitted(true);
    setMessage("");

    // Fecha após 2 segundos
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 2000);
  };

  const handleClose = () => {
    setOpen(false);
    setSubmitted(false);
    setMessage("");
  };

  return (
    <>
      {/* Floating Button */}
      <Zoom in={true}>
        <Fab
          color="primary"
          aria-label="feedback"
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            bgcolor: "#22c55e",
            "&:hover": {
              bgcolor: "#16a34a",
            },
            zIndex: 1000,
          }}
        >
          <FeedbackIcon />
        </Fab>
      </Zoom>

      {/* Feedback Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "#0a0a0f",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      >
        <DialogTitle>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center" gap={1}>
              <FeedbackIcon sx={{ color: "#22c55e" }} />
              <Typography variant="h6" color="white">
                Enviar Sugestão
              </Typography>
            </Box>
            <IconButton onClick={handleClose} size="small" sx={{ color: "rgba(255,255,255,0.5)" }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent>
          {submitted ? (
            <Box textAlign="center" py={4}>
              <CheckCircleIcon sx={{ fontSize: 64, color: "#22c55e", mb: 2 }} />
              <Typography variant="h6" color="white" mb={1}>
                Obrigado pelo feedback!
              </Typography>
              <Typography color="rgba(255,255,255,0.6)">
                Sua sugestão foi registrada.
              </Typography>
            </Box>
          ) : (
            <>
              <Typography color="rgba(255,255,255,0.7)" mb={2}>
                Tem alguma sugestão de melhoria para o Bolão Fácil? Queremos ouvir você!
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Descreva sua sugestão ou ideia de melhoria..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "rgba(255,255,255,0.05)",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#22c55e",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                }}
              />
              <Alert
                severity="info"
                sx={{
                  mt: 2,
                  bgcolor: "rgba(59, 130, 246, 0.1)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  "& .MuiAlert-message": {
                    color: "rgba(255,255,255,0.7)",
                  },
                }}
              >
                Seu feedback é armazenado localmente. Em breve teremos um canal oficial para receber sugestões.
              </Alert>
            </>
          )}
        </DialogContent>

        {!submitted && (
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button onClick={handleClose} sx={{ color: "rgba(255,255,255,0.5)" }}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              onClick={handleSubmit}
              disabled={!message.trim()}
              sx={{
                bgcolor: "#22c55e",
                "&:hover": {
                  bgcolor: "#16a34a",
                },
                "&.Mui-disabled": {
                  bgcolor: "rgba(34, 197, 94, 0.3)",
                  color: "rgba(255,255,255,0.3)",
                },
              }}
            >
              Enviar Sugestão
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
}
