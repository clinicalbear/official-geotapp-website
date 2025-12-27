import type { Metadata } from 'next'
import { Inter, Unbounded } from 'next/font/google'
import './globals.css'
import { clsx } from 'clsx';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const unbounded = Unbounded({ subsets: ['latin'], variable: '--font-unbounded' })

export const metadata: Metadata = {
  title: 'GeoTapp - The Future of Automation',
  description: 'AI-Powered Tools for WordPress and Business Automation. Zenith SEO, Super WP, GeoTapp FLOW.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, unbounded.variable, "bg-background text-text-primary font-sans antialiased selection:bg-primary selection:text-black")}>
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Glow Effects (Subtle for Light Mode) */}
          <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-sky-100 blur-[120px] opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full z-0" />
          <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-purple-100 blur-[120px] opacity-60 translate-x-1/2 translate-y-1/2 pointer-events-none rounded-full z-0" />

          <CartDrawer />

          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
        <Toaster position="bottom-right"
          toastOptions={{
            style: {
              background: '#fff',
              color: '#0f172a',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }
          }}
        />
      </body>
    </html>
  )
}
