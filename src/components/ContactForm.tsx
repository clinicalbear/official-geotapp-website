'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { submitContact } from '@/lib/api';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitContact(formData);
      toast.success('Messaggio inviato! Ti risponderemo al più presto.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast.error('Errore nell\'invio del messaggio. Riprova più tardi.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: '#e8ecf8' }}>
          Nome
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#e8ecf8'
          }}
          placeholder="Il tuo nome"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: '#e8ecf8' }}>
          Email
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#e8ecf8'
          }}
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: '#e8ecf8' }}>
          Azienda
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#e8ecf8'
          }}
          placeholder="Nome azienda"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: '#e8ecf8' }}>
          Messaggio
        </label>
        <textarea
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 min-h-32"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#e8ecf8'
          }}
          placeholder="Il tuo messaggio..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 font-medium rounded-lg transition transform hover:scale-105 disabled:opacity-50 bg-geotapp-primary text-white hover:bg-geotapp-600 shadow-lg"
      >
        {loading ? 'Invio in corso...' : 'Invia Messaggio'}
      </button>
    </form>
  );
}
