'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function AdminDashboard() {
  const router = useRouter();
  const [settings, setSettings] = useState({
    googleAnalyticsId: '',
    googleAdsId: '',
    microsoftAzureKey: '',
    adSenseId: '',
  });
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Controlla se l'utente è loggato
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  const handleSettingsSave = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      await fetch('/api/admin/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(settings),
      });
      toast.success('Impostazioni salvate!');
    } catch (error) {
      toast.error('Errore nel salvataggio');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-dark-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Settings */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-dark-900 mb-6">Impostazioni Tracking</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-dark-800 mb-2">
                  Google Analytics ID
                </label>
                <input
                  type="text"
                  value={settings.googleAnalyticsId}
                  onChange={(e) => setSettings({ ...settings, googleAnalyticsId: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="G-XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-800 mb-2">
                  Google Ads ID
                </label>
                <input
                  type="text"
                  value={settings.googleAdsId}
                  onChange={(e) => setSettings({ ...settings, googleAdsId: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="AW-XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-800 mb-2">
                  Microsoft Azure Key
                </label>
                <input
                  type="password"
                  value={settings.microsoftAzureKey}
                  onChange={(e) => setSettings({ ...settings, microsoftAzureKey: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Chiave Azure"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-800 mb-2">
                  AdSense ID
                </label>
                <input
                  type="text"
                  value={settings.adSenseId}
                  onChange={(e) => setSettings({ ...settings, adSenseId: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="ca-pub-xxxxxxxxxxxxxxxx"
                />
              </div>

              <button
                onClick={handleSettingsSave}
                disabled={loading}
                className="w-full px-6 py-3 bg-geotapp-500 text-white font-medium rounded-lg hover:bg-geotapp-600 transition disabled:opacity-50"
              >
                {loading ? 'Salvataggio...' : 'Salva Impostazioni'}
              </button>
            </div>
          </div>

          {/* Pages Management */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-dark-900 mb-6">Gestione Pagine</h2>

            <p className="text-dark-600 mb-6">
              Gestisci le pagine del sito tramite il CMS Strapi integrato. 
              Le modifiche saranno visibili immediatamente.
            </p>

            <a
              href={process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            >
              Accedi al CMS Strapi
            </a>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-dark-900 mb-4">Pagine Disponibili</h3>
              <ul className="space-y-2 text-sm text-dark-600">
                <li>✓ Home</li>
                <li>✓ Pricing</li>
                <li>✓ Features</li>
                <li>✓ Chi Siamo</li>
                <li>✓ Blog</li>
                <li>✓ Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
