import React, { useState } from 'react';
import { Gem, ShieldCheck, Zap, Sparkles, Check, ArrowRight } from 'lucide-react';
import { LOCK_PACKAGES } from '../data/mockData';
import { LockPackage, LockType } from '../types';
import { formatRupiah } from '../utils/whatsapp';

interface LockCatalogProps {
  onSelectPackage: (pkg: LockPackage) => void;
}

export const LockCatalog: React.FC<LockCatalogProps> = ({ onSelectPackage }) => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | LockType>('ALL');

  const filteredPackages = LOCK_PACKAGES.filter((item) => {
    if (activeFilter === 'ALL') return true;
    return item.type === activeFilter;
  });

  return (
    <section id="katalog-lock" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-semibold mb-2">
              <Gem className="w-3.5 h-3.5" />
              <span>Katalog Resmi Lock</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Pilihan Paket Diamond Lock &amp; BGL
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Stock selalu diperbarui secara real-time. Trade aman via Display Box / In-Game Trade.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveFilter('ALL')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeFilter === 'ALL'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Semua Lock
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('DL')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeFilter === 'DL'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Diamond Lock (DL)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('BGL')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeFilter === 'BGL'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Blue Gem Lock (BGL)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('WL')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeFilter === 'WL'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              World Lock (WL)
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => {
            const isBGL = pkg.type === 'BGL';
            const isHighlight = pkg.popular || pkg.bestValue;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl bg-slate-900/90 border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:translate-y-[-2px] ${
                  isHighlight
                    ? isBGL
                      ? 'border-sky-500/50 shadow-lg shadow-sky-500/10'
                      : 'border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Visual Header / Banner for item */}
                <div className="p-5 pb-4 border-b border-slate-800/80 bg-slate-950/50">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-medium text-slate-400">
                      Stok: {pkg.stock} pack
                    </span>
                    {pkg.popular && (
                      <span className="text-[11px] font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800/80 px-2 py-0.5 rounded">
                        Paling Laris
                      </span>
                    )}
                    {pkg.bestValue && (
                      <span className="text-[11px] font-bold text-amber-300 bg-amber-950/80 border border-amber-800/80 px-2 py-0.5 rounded">
                        Hemat Maksimal
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                        isBGL
                          ? 'bg-sky-950/80 border-sky-500/40 text-sky-400 shadow-md shadow-sky-500/20'
                          : pkg.type === 'DL'
                          ? 'bg-cyan-950/80 border-cyan-500/40 text-cyan-400 shadow-md shadow-cyan-500/20'
                          : 'bg-amber-950/80 border-amber-500/40 text-amber-400 shadow-md shadow-amber-500/20'
                      }`}
                    >
                      <Gem className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="font-bold text-white text-base leading-snug">
                        {pkg.name}
                      </h3>
                      {pkg.bonus && (
                        <div className="text-xs text-amber-400 font-semibold mt-0.5">
                          {pkg.bonus}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="pt-2 border-t border-slate-800/60 flex items-baseline justify-between">
                    <div>
                      <div className="text-[11px] text-slate-500 uppercase tracking-wider">
                        Harga Total
                      </div>
                      <div className="text-xl font-extrabold font-mono text-white">
                        {formatRupiah(pkg.priceIdr)}
                      </div>
                    </div>
                    <div className="text-right text-[11px] text-slate-400">
                      <div>1-5 Menit</div>
                      <div className="text-emerald-400 font-medium">Ready Drop</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      isHighlight
                        ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <span>Beli Sekarang</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
