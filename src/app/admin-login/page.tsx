"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") ?? "/admin";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload.message ?? "Credenziali errate");
      }

      router.push(redirectPath);
    } catch (error) {
      setStatus((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md space-y-6 rounded-3xl border border-white/10 bg-slate-900/40 p-8 text-white shadow-[0_20px_80px_rgba(2,6,23,0.6)] backdrop-blur">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
            GeoTapp Admin
          </p>
          <h1 className="text-2xl font-semibold">Accedi al pannello</h1>
          <p className="text-sm text-slate-300">
            Usa le credenziali dedicate per gestire contenuti e integrazioni.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="text-sm font-medium text-slate-200">
            Username
            <input
              type="text"
              required
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-white focus:outline-none"
              placeholder="MikeAdmin"
            />
          </label>
          <label className="text-sm font-medium text-slate-200">
            Password
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-white focus:outline-none"
              placeholder="••••••••"
            />
          </label>
          {status && (
            <p className="text-sm text-red-300">{status}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-white py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Accesso in corso..." : "Entra"}
          </button>
        </form>
        <p className="text-center text-xs text-slate-400">
          Le credenziali sono definite nelle variabili <code>ADMIN_USERNAME</code> e{" "}
          <code>ADMIN_PASSWORD</code>.
        </p>
      </div>
    </main>
  );
}
