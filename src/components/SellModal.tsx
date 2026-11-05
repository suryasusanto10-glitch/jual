import React, { useState } from 'react';
import { X, RefreshCw, MessageCircle, ShieldCheck, Wallet, ArrowRight } from 'lucide-react';
import { RATES, PAYOUT_METHODS, ADMIN_PHONE_NUMBER } from '../data/mockData';
import { formatRupiah, createSellWhatsAppUrl } from '../utils/whatsapp';
import { LockType, SellFormData } from '../types';

interface SellModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetType?: LockType;
  presetAmount?: number;
}

export const SellModal: React.FC<SellModalProps> = ({
  isOpen,
  onClose,
  presetType = 'DL',
  presetAmount = 10,
}) => {
  if (!isOpen) return null;

  const [category, setCategory] = useState<LockType | 'Account'>(presetType);
  const [amount, setAmount] = useState<number>(presetAmount);
  const [accountDetails, setAccountDetails] = useState<string>('');
  const [customPrice, setCustomPrice] = useState<number>(0);
  const [growId, setGrowId] = useState<string>('');
  const [payoutMethod, setPayoutMethod] = useState<string>('DANA');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [accountHolderName, setAccountHolderName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const calculateExpectedPrice = () => {
    if (category === 'Account') {
      return customPrice || 500000;
    }
    const rate = RATES.SELL[category as LockType];
    return (amount || 1) * rate;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!growId.trim()) {
      setErrorMsg('Mohon masukkan GrowID Anda.');
      return;
    }
    if (!accountNumber.trim()) {
      setErrorMsg('Mohon masukkan Nomor Rekening atau Nomor E-Wallet pencairan.');
      return;
    }
    if (!accountHolderName.trim()) {
      setErrorMsg('Mohon masukkan Nama Pemilik Rekening (Atas Nama).');
      return;
    }

    setErrorMsg('');
    const sellData: SellFormData = {
      lockType: category,
      amount: category === 'Account' ? 1 : amount,
      accountDetails: category === 'Account' ? accountDetails.trim() : undefined,
      expectedPriceIdr: calculateExpectedPrice(),
      growId: growId.trim(),
      payoutMethod,
      accountNumber: accountNumber.trim(),
      accountHolderName: accountHolderName.trim(),
      customerPhone: customerPhone.trim() || '-',
      notes: notes.trim(),
    };

    const { url } = createSellWhatsAppUrl(sellData);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Formulir Jual / Tampung DL &amp; Akun</h3>
              <p className="text-xs text-slate-400">Cairkan lock Anda ke saldo rekening/e-wallet via Admin ({ADMIN_PHONE_NUMBER})</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/50 text-xs text-red-300">
              {errorMsg}
            </div>
          )}

          {/* Category Choice */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Apa yang Ingin Anda Jual?
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['DL', 'BGL', 'WL', 'Account'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`py-2 px-2 rounded-xl border text-center transition-all ${
                    category === cat
                      ? 'border-amber-500 bg-amber-950/50 text-white font-bold'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs">
                    {cat === 'Account' ? 'Akun GT' : cat === 'DL' ? 'Diamond Lock' : cat === 'BGL' ? 'Blue Gem' : 'World Lock'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity or Account details */}
          {category !== 'Account' ? (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300">
                  Jumlah {category} yang Dijual
                </label>
                <span className="text-xs text-amber-400 font-mono">
                  Rate Tampung: {formatRupiah(RATES.SELL[category as LockType])} / {category}
                </span>
              </div>
              <input
                type="number"
                min={1}
                value={amount || ''}
                onChange={(e) => setAmount(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-base font-mono font-bold text-white focus:outline-none focus:border-amber-500"
              />

              <div className="pt-2 border-t border-slate-800 flex items-baseline justify-between">
                <span className="text-xs text-slate-400">Total Dana yang Anda Terima:</span>
                <span className="text-xl font-bold font-mono text-amber-400">
                  {formatRupiah(calculateExpectedPrice())}
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Rincian Spek Akun yang Ingin Dijual
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Contoh: Level 65, 5 Ring, Role Farmer Lvl 8, Email Bersih siap ganti"
                  value={accountDetails}
                  onChange={(e) => setAccountDetails(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Ekspektasi Harga Jual (Rp)
                </label>
                <input
                  type="number"
                  placeholder="Contoh: 750000"
                  value={customPrice || ''}
                  onChange={(e) => setCustomPrice(parseInt(e.target.value) || 0)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          )}

          {/* In-Game Data */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              GrowID Anda (Penjual) <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: FarmerPro_GT"
              value={growId}
              onChange={(e) => setGrowId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Payout Details */}
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <span className="text-xs font-semibold text-amber-400 block uppercase tracking-wider">
              Rekening / E-Wallet Pencairan Dana:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Bank / E-Wallet
                </label>
                <select
                  value={payoutMethod}
                  onChange={(e) => setPayoutMethod(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  {PAYOUT_METHODS.map((pm) => (
                    <option key={pm.id} value={pm.name}>
                      {pm.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  No. Rekening / No. HP
                </label>
                <input
                  type="text"
                  required
                  placeholder="08123456789 atau 5410xxxx"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Atas Nama (A/N)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama Pemilik Rekening"
                  value={accountHolderName}
                  onChange={(e) => setAccountHolderName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* WhatsApp Penjual */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Nomor WhatsApp Anda
            </label>
            <input
              type="tel"
              placeholder="08xxxxxxxxxx"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-amber-950 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ajukan Jual / Tampung ke WA Admin ({ADMIN_PHONE_NUMBER})</span>
          </button>
        </form>
      </div>
    </div>
  );
};
