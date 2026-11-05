import React, { useState } from 'react';
import { UserCheck, ShieldCheck, Mail, Sparkles, Eye, MessageCircle, Crown, CheckCircle } from 'lucide-react';
import { ACCOUNT_LISTINGS, ADMIN_PHONE_NUMBER } from '../data/mockData';
import { AccountListing, AccountTier } from '../types';
import { formatRupiah } from '../utils/whatsapp';

interface AccountCatalogProps {
  onInspectAccount: (account: AccountListing) => void;
  onBuyAccount: (account: AccountListing) => void;
}

export const AccountCatalog: React.FC<AccountCatalogProps> = ({
  onInspectAccount,
  onBuyAccount,
}) => {
  const [activeTier, setActiveTier] = useState<'ALL' | AccountTier>('ALL');

  const filteredAccounts = ACCOUNT_LISTINGS.filter((acc) => {
    if (activeTier === 'ALL') return true;
    return acc.tier === activeTier;
  });

  return (
    <section id="katalog-akun" className="py-12 border-b border-slate-800/80 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-2">
              <Crown className="w-3.5 h-3.5" />
              <span>Akun Growtopia Pilihan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Katalog Akun Siap Pakai &amp; Bergaransi
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Semua akun telah melewati audit kelayakan: bebas suspend, email clean first-hand, dan pendampingan ganti data hingga selesai.
            </p>
          </div>

          {/* Interactive Tier Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            {(['ALL', 'Sultan', 'Ringmaster', 'Farm & Builder', 'Starter Clean'] as const).map(
              (tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setActiveTier(tier)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTier === tier
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tier === 'ALL' ? 'Semua Akun' : tier}
                </button>
              )
            )}
          </div>
        </div>

        {/* Account Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredAccounts.map((account) => {
            const isSultan = account.tier === 'Sultan';

            return (
              <div
                key={account.id}
                className={`rounded-2xl bg-slate-900/90 border transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:border-slate-600 ${
                  isSultan
                    ? 'border-amber-500/50 shadow-xl shadow-amber-500/10'
                    : 'border-slate-800'
                }`}
              >
                {/* Visual Top Split: Image + Essential Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-0 border-b border-slate-800">
                  <div className="sm:col-span-5 relative h-52 sm:h-auto overflow-hidden bg-slate-950">
                    <img
                      src={account.image}
                      alt={account.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-transparent to-slate-900/90" />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md border border-slate-700 text-amber-300">
                        {account.tier}
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-7 p-5 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-1">
                        <span>GrowID: <strong className="text-white font-mono">{account.growIdDisplay}</strong></span>
                        <span className="text-cyan-400 font-bold font-mono">Lvl {account.level}</span>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                        {account.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {account.description}
                      </p>
                    </div>

                    {/* Quick Specs List */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{account.rolesSummary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Koleksi Cincin: <strong>{account.ringCount} Rings</strong> · Tas {account.backpackSlots} Slot</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span className="text-emerald-400 font-medium">{account.emailStatus}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Price & Action Handlers */}
                <div className="p-4 sm:p-5 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase tracking-wider">
                      Harga Akun (Full Data)
                    </div>
                    <div className="text-2xl font-extrabold font-mono text-white">
                      {formatRupiah(account.priceIdr)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => onInspectAccount(account)}
                      className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Cek Spek</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onBuyAccount(account)}
                      className="flex-1 sm:flex-initial py-2.5 px-5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-amber-500/20"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Beli Akun via WA</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
