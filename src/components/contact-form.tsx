"use client";

import { useState } from "react";

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
        const payload = await response.json();
        throw new Error(payload.message ?? "Errore durante l'invio");
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Nome e cognome
          <input
            type="text"
            required
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            placeholder="Mario Rossi"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email di lavoro
          <input
            type="email"
            required
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            placeholder="tuonome@azienda.com"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Azienda
          <input
            type="text"
            value={form.company}
            onChange={(event) => handleChange("company", event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            placeholder="GeoTapp"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Piano di interesse
          <select
            value={form.plan}
            onChange={(event) => handleChange("plan", event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
          >
            <option value="">Seleziona</option>
            <option value="Starter">Starter</option>
            <option value="Growth">Growth</option>
            <option value="Enterprise">Enterprise</option>
          </select>
        </label>
      </div>
      <label className="text-sm font-medium text-slate-700">
        Dicci di cosa hai bisogno
        <textarea
          required
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className="mt-2 h-32 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
          placeholder="Richiedici informazioni ..."
        />
      </label>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {statusMessage && (
          <p
            className={`text-sm ${
              state === "success" ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {statusMessage}
          </p>
        )}
        <button
          type="submit"
          disabled={state === "loading"}
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {state === "loading" ? "Invio in corso..." : "Invia la richiesta"}
        </button>
      </div>
    </form>
  );
}
