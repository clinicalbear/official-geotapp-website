"use client";

import { useState } from "react";
import {
  Alert,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    plan: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setState("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(payload?.message ?? "Errore durante l'invio");
      }

      setState("success");
      setStatusMessage("Richiesta inviata! Ti ricontatteremo entro 24 ore.");
      setForm({ name: "", email: "", company: "", plan: "", message: "" });
    } catch (error) {
      setState("error");
      setStatusMessage((error as Error).message);
    }
  };

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Nome e cognome"
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Email di lavoro"
            type="email"
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Azienda"
            value={form.company}
            onChange={(event) => handleChange("company", event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Piano di interesse"
            value={form.plan}
            onChange={(event) => handleChange("plan", event.target.value)}
            select
            fullWidth
          >
            <MenuItem value="">Seleziona</MenuItem>
            <MenuItem value="Starter">Starter</MenuItem>
            <MenuItem value="Growth">Growth</MenuItem>
            <MenuItem value="Enterprise">Enterprise</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Dicci di cosa hai bisogno"
            value={form.message}
            onChange={(event) => handleChange("message", event.target.value)}
            required
            fullWidth
            multiline
            minRows={4}
          />
        </Grid>
      </Grid>
      <Stack spacing={2} direction={{ xs: "column", md: "row" }} alignItems={{ md: "center" }}>
        {statusMessage && (
          <Alert severity={state === "success" ? "success" : "error"} sx={{ flex: 1 }}>
            {statusMessage}
          </Alert>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={state === "loading"}
          sx={{ minWidth: 200 }}
        >
          {state === "loading" ? "Invio in corso..." : "Invia la richiesta"}
        </Button>
      </Stack>
      {!statusMessage && (
        <Typography variant="caption" color="text.secondary">
          Compilando il form accetti i termini del trattamento dati secondo la privacy policy.
        </Typography>
      )}
    </Stack>
  );
}
