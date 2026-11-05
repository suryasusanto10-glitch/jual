import React from 'react';
import { ShieldCheck, MessageCircle, Gem, ExternalLink } from 'lucide-react';
import { ADMIN_PHONE_NUMBER, STORE_NAME } from '../data/mockData';
import { createDirectAdminWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const directWaUrl = createDirectAdminWhatsAppUrl('Transaksi');

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080C15]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-amber-500 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#0B1120] rounded-[7px] flex items-center justify-center">
              <Gem className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
              {STORE_NAME}
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Admin Online ({ADMIN_PHONE_NUMBER})</span>
            </div>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Clean Single-Line) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => onNavigate('katalog-lock')}
            className={`transition-colors whitespace-nowrap hover:text-cyan-400 ${
              activeSection === 'katalog-lock' ? 'text-cyan-400 font-semibold' : ''
            }`}
          >
            Katalog Lock (DL & BGL)
          </button>
          <button
            onClick={() => onNavigate('kalkulator')}
            className={`transition-colors whitespace-nowrap hover:text-cyan-400 ${
              activeSection === 'kalkulator' ? 'text-cyan-400 font-semibold' : ''
            }`}
          >
            Kalkulator Rate
          </button>
          <button
            onClick={() => onNavigate('katalog-akun')}
            className={`transition-colors whitespace-nowrap hover:text-cyan-400 ${
              activeSection === 'katalog-akun' ? 'text-cyan-400 font-semibold' : ''
            }`}
          >
            Katalog Akun
          </button>
          <button
            onClick={() => onNavigate('jual-lock')}
            className={`transition-colors whitespace-nowrap hover:text-amber-400 ${
              activeSection === 'jual-lock' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Jual DL (Tampung)
          </button>
          <button
            onClick={() => onNavigate('panduan')}
            className={`transition-colors whitespace-nowrap hover:text-cyan-400 ${
              activeSection === 'panduan' ? 'text-cyan-400 font-semibold' : ''
            }`}
          >
            SOP & Keamanan
          </button>
          <button
            onClick={() => onNavigate('testimoni')}
            className={`transition-colors whitespace-nowrap hover:text-cyan-400 ${
              activeSection === 'testimoni' ? 'text-cyan-400 font-semibold' : ''
            }`}
          >
            Testimoni
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={directWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md shadow-emerald-900/30 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp Admin</span>
            <span className="sm:hidden">WA Admin</span>
          </a>
        </div>
      </div>
    </header>
  );
};
