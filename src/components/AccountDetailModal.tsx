import React from 'react';
import { X, ShieldCheck, Mail, Sparkles, Crown, MessageCircle, CheckCircle2, Lock } from 'lucide-react';
import { AccountListing } from '../types';
import { formatRupiah } from '../utils/whatsapp';
import { ADMIN_PHONE_NUMBER } from '../data/mockData';

interface AccountDetailModalProps {
  account: AccountListing | null;
  onClose: () => void;
  onBuyAccount: (account: AccountListing) => void;
}

export const AccountDetailModal: React.FC<AccountDetailModalProps> = ({
  account,
  onClose,
  onBuyAccount,
}) => {
  if (!account) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-950/80 border border-amber-600/60 text-amber-300">
              {account.tier}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-md">
              {account.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Top Banner / Image & Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            <div className="sm:col-span-5 relative rounded-xl overflow-hidden border border-slate-800 h-52 bg-slate-950">
              <img
                src={account.image}
                alt={account.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-2 left-2 text-[11px] font-mono font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                GrowID: {account.growIdDisplay}
              </div>
            </div>

            <div className="sm:col-span-7 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Level Karakter</span>
                <span className="text-base font-bold font-mono text-cyan-400">Level {account.level}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Koleksi Cincin</span>
                <span className="text-base font-bold font-mono text-amber-400">{account.ringCount} Rings Master</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Slot Backpack</span>
                <span className="text-base font-bold font-mono text-white">{account.backpackSlots} Slots</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Status Email Akun</span>
                <span className="text-xs font-bold text-emerald-400 truncate block mt-0.5">{account.emailStatus}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Deskripsi &amp; Profil Akun
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
              {account.description}
            </p>
          </div>

          {/* Inventory Items List */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Item Langka &amp; Aset Utama di Inventory
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {account.inventoryHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center gap-2 text-xs text-slate-200"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Warranty Guarantee */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2 text-xs text-emerald-300">
            <div className="flex items-center gap-2 font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garansi 100% Data Bersih &amp; Pendampingan Sampai Tuntas</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Setelah pembayaran, admin akan memandu Anda secara live melalui WhatsApp ({ADMIN_PHONE_NUMBER}) untuk mengganti password Growtopia, menghubungkan email baru milik Anda, dan menyalakan 2-Factor Authentication hingga akun 100% aman di tangan Anda.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] text-slate-500 uppercase tracking-wider">
              Harga Take All
            </div>
            <div className="text-2xl font-extrabold font-mono text-white">
              {formatRupiah(account.priceIdr)}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onBuyAccount(account);
            }}
            className="py-3 px-6 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-2 shadow-lg shadow-amber-950 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pesan Akun Ini ke WA Admin</span>
          </button>
        </div>
      </div>
    </div>
  );
};
