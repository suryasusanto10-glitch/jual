import React from 'react';
import { ShieldCheck, Zap, Lock, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { RATES, ADMIN_PHONE_NUMBER } from '../data/mockData';
import { formatRupiah } from '../utils/whatsapp';

interface HeroSectionProps {
  onOpenBuyModal: () => void;
  onOpenSellModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBuyModal,
  onOpenSellModal,
  onNavigate,
}) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 lg:pt-10 lg:pb-16 border-b border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust badge kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Rekber & Store Terpercaya Growtopia Indonesia</span>
              <span className="text-slate-600">·</span>
              <span className="text-amber-400 font-semibold">Ready Stock</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Jual Beli <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200">Diamond Lock</span> &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Akun Growtopia</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Layanan transaksi instan 1–5 menit bergaransi legalitas dan keamanan penuh. Beli atau jual Diamond Lock, BGL, World Lock, serta akun siap pakai langsung via WhatsApp Admin resmi <strong className="text-white underline decoration-cyan-500/50 underline-offset-4">{ADMIN_PHONE_NUMBER}</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBuyModal}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Zap className="w-4 h-4" />
                <span>Beli Diamond Lock</span>
              </button>

              <button
                onClick={onOpenSellModal}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-amber-300 bg-amber-950/40 border border-amber-500/40 hover:bg-amber-900/40 hover:border-amber-400 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Jual / Tampung DL</span>
              </button>

              <button
                onClick={() => onNavigate('katalog-akun')}
                className="flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
              >
                <span>Lihat Akun Siap Pakai</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quick Guarantees Strip */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-7 h-7 rounded bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">1–5 Menit</div>
                  <div className="text-slate-400 text-[11px]">Trade Instant</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-7 h-7 rounded bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">100% Anti-Rollback</div>
                  <div className="text-slate-400 text-[11px]">Lock Murni Legal</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-7 h-7 rounded bg-amber-950/60 border border-amber-800/50 flex items-center justify-center shrink-0">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">SOP Escrow Aman</div>
                  <div className="text-slate-400 text-[11px]">Display Box Trade</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/60 shadow-2xl group">
              <img
                src="/src/assets/images/hero_growtopia_store_1793921383375.jpg"
                alt="Growtopia Diamond Locks and Blue Gem Locks Showcase"
                className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Overlay card info */}
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-cyan-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Market Rate Terupdate Hari Ini
                  </span>
                  <span className="text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded text-[10px] font-mono">
                    LIVE
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-slate-400 text-[11px]">Beli Diamond Lock</div>
                    <div className="text-cyan-300 font-bold font-mono text-sm">{formatRupiah(RATES.BUY.DL)} / DL</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-slate-400 text-[11px]">Tampung / Jual DL</div>
                    <div className="text-amber-400 font-bold font-mono text-sm">{formatRupiah(RATES.SELL.DL)} / DL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Rates KPI Ticker Bar */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow-inner grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="pt-2 md:pt-0 md:px-3 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Beli Diamond Lock</span>
            <div className="text-lg font-bold font-mono text-cyan-400">{formatRupiah(RATES.BUY.DL)} <span className="text-xs text-slate-400 font-normal">/ DL</span></div>
            <div className="text-[11px] text-emerald-400">Tersedia 500+ DL</div>
          </div>

          <div className="pt-2 md:pt-0 md:px-3 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Beli Blue Gem Lock</span>
            <div className="text-lg font-bold font-mono text-sky-400">{formatRupiah(RATES.BUY.BGL)} <span className="text-xs text-slate-400 font-normal">/ BGL</span></div>
            <div className="text-[11px] text-emerald-400">1 BGL = 100 DL</div>
          </div>

          <div className="pt-2 md:pt-0 md:px-3 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Admin Tampung DL</span>
            <div className="text-lg font-bold font-mono text-amber-400">{formatRupiah(RATES.SELL.DL)} <span className="text-xs text-slate-400 font-normal">/ DL</span></div>
            <div className="text-[11px] text-slate-400">Dana Cair 2 Menit</div>
          </div>

          <div className="pt-2 md:pt-0 md:px-3 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Admin Tampung BGL</span>
            <div className="text-lg font-bold font-mono text-yellow-400">{formatRupiah(RATES.SELL.BGL)} <span className="text-xs text-slate-400 font-normal">/ BGL</span></div>
            <div className="text-[11px] text-slate-400">BCA / DANA / QRIS</div>
          </div>
        </div>
      </div>
    </section>
  );
};
