'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function AdminLoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!res.ok) {
        toast.error('Username o password non validi');
        return;
      }

      const data = await res.json();
      localStorage.setItem('adminToken', data.token);

      // Se 2FA è abilitato, vai a pagina verifica
      if (data.requires2FA) {
        router.push('/admin/verify-2fa');
      } else {
        router.push('/admin/dashboard');
      }

      toast.success('Login effettuato!');
    } catch (error) {
      toast.error('Errore nel login');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-dark-900 text-center mb-8 font-display">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-dark-800 mb-2">
              Username
            </label>
            <input
              type="text"
              required
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-geotapp-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-800 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-geotapp-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-geotapp-500 text-white font-medium rounded-lg hover:bg-geotapp-600 transition disabled:opacity-50"
          >
            {loading ? 'Login in corso...' : 'Accedi'}
          </button>
        </form>

        <p className="text-center text-sm text-dark-600 mt-6">
          Contatta l'amministratore se hai perso le credenziali.
        </p>
      </div>
    </div>
  );
}
