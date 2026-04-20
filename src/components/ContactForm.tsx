'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { submitContact } from '@/lib/api';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';

export default function ContactForm() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const c = getDictionary(locale).contact;
  const f = c.form;

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
      await submitContact({ ...formData, language: locale });
      toast.success(c.success);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast.error(c.error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: '#e8ecf8' }}
        >
          {f.name}
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
            color: '#e8ecf8',
          }}
          placeholder={f.name_placeholder}
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: '#e8ecf8' }}
        >
          {f.email}
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
            color: '#e8ecf8',
          }}
          placeholder={f.email_placeholder}
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: '#e8ecf8' }}
        >
          {f.company}
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#e8ecf8',
          }}
          placeholder={f.company_placeholder}
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: '#e8ecf8' }}
        >
          {f.message}
        </label>
        <textarea
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 min-h-32"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#e8ecf8',
          }}
          placeholder={f.message_placeholder}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 font-medium rounded-lg transition transform hover:scale-105 disabled:opacity-50 bg-geotapp-primary text-white hover:bg-geotapp-600 shadow-lg"
      >
        {loading ? f.submitting : f.submit}
      </button>
    </form>
  );
}
