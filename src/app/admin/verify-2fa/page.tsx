'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Verify2FAPage() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/admin/verify-2fa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        toast.error('Codice non valido');
        return;
      }

      router.push('/admin/dashboard');
      toast.success('2FA verificato!');
    } catch (error) {
      toast.error('Errore nella verifica');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-dark-900 text-center mb-4 font-display">
          Verifica 2FA
        </h1>
        <p className="text-center text-dark-600 mb-8">
          Inserisci il codice da Google Authenticator
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-dark-800 mb-2">
              Codice (6 cifre)
            </label>
            <input
              type="text"
              maxLength={6}
              pattern="\d{6}"
              required
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-geotapp-500 text-center text-2xl tracking-widest"
              placeholder="000000"
            />
          </div>

          <button
            type="submit"
            disabled={loading || code.length !== 6}
            className="w-full px-6 py-3 bg-geotapp-500 text-white font-medium rounded-lg hover:bg-geotapp-600 transition disabled:opacity-50"
          >
            {loading ? 'Verifica in corso...' : 'Verifica'}
          </button>
        </form>
      </div>
    </div>
  );
}
