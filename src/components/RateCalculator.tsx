import React, { useState } from 'react';
import { Calculator, ArrowRight, RefreshCw, Zap, CheckCircle2 } from 'lucide-react';
import { RATES } from '../data/mockData';
import { formatRupiah } from '../utils/whatsapp';
import { LockType } from '../types';

interface RateCalculatorProps {
  onProceedOrder: (type: LockType, amount: number, totalPrice: number) => void;
  onProceedSell: (type: LockType, amount: number, expectedPrice: number) => void;
}

export const RateCalculator: React.FC<RateCalculatorProps> = ({
  onProceedOrder,
  onProceedSell,
}) => {
  const [mode, setMode] = useState<'BUY' | 'SELL'>('BUY');
  const [lockType, setLockType] = useState<LockType>('DL');
  const [amount, setAmount] = useState<number>(5);

  const getRate = () => {
    return RATES[mode][lockType];
  };

  const calculateTotal = () => {
    const rate = getRate();
    return amount * rate;
  };

  const handlePreset = (val: number) => {
    setAmount(val);
  };

  const handleProceed = () => {
    const total = calculateTotal();
    if (mode === 'BUY') {
      onProceedOrder(lockType, amount, total);
    } else {
      onProceedSell(lockType, amount, total);
    }
  };

  return (
    <section id="kalkulator" className="py-12 border-b border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs text-cyan-400 font-medium mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Otomatis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Hitung Estimasi Harga Transaksi
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Pilih transaksi beli atau jual, masukkan jumlah lock, dan sistem akan menghitung total harga rupiah secara akurat tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
          {/* Mode Switcher */}
          <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-950 rounded-xl mb-6 border border-slate-800">
            <button
              type="button"
              onClick={() => setMode('BUY')}
              className={`py-2.5 px-4 rounded-lg font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                mode === 'BUY'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Saya Ingin Beli Lock</span>
            </button>

            <button
              type="button"
              onClick={() => setMode('SELL')}
              className={`py-2.5 px-4 rounded-lg font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                mode === 'SELL'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Saya Ingin Jual (Tampung)</span>
            </button>
          </div>

          {/* Lock Type Selector */}
          <div className="mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Pilih Jenis Lock
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['WL', 'DL', 'BGL'] as LockType[]).map((type) => {
                const isSelected = lockType === type;
                const unitRate = RATES[mode][type];
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setLockType(type);
                      if (type === 'BGL' && amount > 20) setAmount(1);
                      if (type === 'WL' && amount < 10) setAmount(100);
                      if (type === 'DL' && (amount < 1 || amount > 100)) setAmount(5);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? mode === 'BUY'
                          ? 'border-cyan-500 bg-cyan-950/40 text-white'
                          : 'border-amber-500 bg-amber-950/40 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-sm text-white">
                      {type === 'WL' ? 'World Lock' : type === 'DL' ? 'Diamond Lock' : 'Blue Gem Lock'}
                    </div>
                    <div className="text-xs font-mono text-slate-400 mt-1">
                      {formatRupiah(unitRate)} / {type}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Amount input & Slider */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Jumlah {lockType}
              </label>
              <span className="text-xs text-slate-400">
                Min 1 {lockType}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="number"
                min={1}
                max={lockType === 'BGL' ? 50 : 500}
                value={amount || ''}
                onChange={(e) => setAmount(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-lg font-mono font-bold text-white focus:outline-none focus:border-cyan-500"
              />
              <span className="font-bold text-sm text-slate-300 font-mono shrink-0 px-3 py-3 rounded-xl bg-slate-800 border border-slate-700">
                {lockType}
              </span>
            </div>

            {/* Quick preset chips */}
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="text-xs text-slate-500">Pilihan Cepat:</span>
              {(lockType === 'BGL' ? [1, 2, 3, 5, 10] : lockType === 'DL' ? [1, 5, 10, 25, 50, 100] : [50, 100, 200, 500]).map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handlePreset(preset)}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-colors ${
                    amount === preset
                      ? 'bg-slate-700 text-white font-bold'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  {preset} {lockType}
                </button>
              ))}
            </div>
          </div>

          {/* Result Calculation Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 mb-6">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>{mode === 'BUY' ? 'Total Pembayaran Anda:' : 'Estimasi Dana Masuk Rekening:'}</span>
              <span className="font-mono">{amount} {lockType} × {formatRupiah(getRate())}</span>
            </div>

            <div className="flex items-baseline justify-between">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-300">
                {formatRupiah(calculateTotal())}
              </div>
              <div className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Rate Resmi Admin</span>
              </div>
            </div>
          </div>

          {/* Primary Action */}
          <button
            type="button"
            onClick={handleProceed}
            className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
              mode === 'BUY'
                ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 hover:from-cyan-300 hover:to-cyan-200 shadow-cyan-500/20'
                : 'bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 hover:from-amber-300 hover:to-amber-200 shadow-amber-500/20'
            }`}
          >
            <span>{mode === 'BUY' ? 'Lanjut Pembelian ke WhatsApp' : 'Lanjut Penjualan ke WhatsApp'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
