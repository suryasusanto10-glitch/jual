import React, { useState } from 'react';
import { X, MessageCircle, ShieldCheck, Copy, Check, Info, Gem, Zap } from 'lucide-react';
import { LockPackage, AccountListing, OrderFormData } from '../types';
import { PAYMENT_METHODS, ADMIN_PHONE_NUMBER } from '../data/mockData';
import { formatRupiah, createBuyWhatsAppUrl } from '../utils/whatsapp';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: LockPackage | null;
  selectedAccount?: AccountListing | null;
  customOrder?: { type: string; amount: number; price: number } | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedPackage,
  selectedAccount,
  customOrder,
}) => {
  if (!isOpen) return null;

  // Initial values based on what was passed
  const initialProductName = selectedAccount
    ? selectedAccount.title
    : selectedPackage
    ? selectedPackage.name
    : customOrder
    ? `${customOrder.amount} ${customOrder.type}`
    : '5 Diamond Locks';

  const initialUnitPrice = selectedAccount
    ? selectedAccount.priceIdr
    : selectedPackage
    ? selectedPackage.priceIdr
    : customOrder
    ? customOrder.price
    : 42000;

  const [quantity, setQuantity] = useState<number>(1);
  const [growId, setGrowId] = useState<string>('');
  const [worldName, setWorldName] = useState<string>('');
  const [deliveryMethod, setDeliveryMethod] = useState<'display_box' | 'donation_box' | 'in_game_trade'>('display_box');
  const [paymentMethod, setPaymentMethod] = useState<string>('QRIS (Semua Bank & E-Wallet)');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [copiedInvoice, setCopiedInvoice] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const totalPrice = initialUnitPrice * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!growId.trim()) {
      setErrorMsg('Mohon masukkan GrowID Anda.');
      return;
    }
    if (!worldName.trim()) {
      setErrorMsg('Mohon masukkan nama World tujuan trade / serah terima.');
      return;
    }

    setErrorMsg('');
    const orderData: OrderFormData = {
      productId: selectedAccount ? selectedAccount.id : selectedPackage ? selectedPackage.id : 'custom-order',
      productName: initialProductName,
      quantity,
      totalPriceIdr: totalPrice,
      growId: growId.trim(),
      worldName: worldName.trim().toUpperCase(),
      deliveryMethod,
      paymentMethod,
      customerPhone: customerPhone.trim(),
      notes: notes.trim(),
    };

    const { url } = createBuyWhatsAppUrl(orderData);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Formulir Pemesanan</h3>
              <p className="text-xs text-slate-400">Terhubung langsung ke WhatsApp Admin ({ADMIN_PHONE_NUMBER})</p>
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

          {/* Selected Product Summary Box */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Produk Terpilih:</span>
                <h4 className="text-sm font-bold text-white mt-0.5">{initialProductName}</h4>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Total Harga:</span>
                <span className="text-lg font-extrabold font-mono text-cyan-400">{formatRupiah(totalPrice)}</span>
              </div>
            </div>

            {!selectedAccount && (
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                <span>Jumlah Paket:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-white px-2">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* In-Game Data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                GrowID Penerima <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: GrowSellerID"
                value={growId}
                onChange={(e) => setGrowId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Nama World Tujuan <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: TRADEVAULT"
                value={worldName}
                onChange={(e) => setWorldName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 uppercase focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
          </div>

          {/* Delivery Method */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Metode Serah Terima di World
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setDeliveryMethod('display_box')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  deliveryMethod === 'display_box'
                    ? 'border-cyan-500 bg-cyan-950/40 text-white'
                    : 'border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-bold text-white">Display Box</div>
                <div className="text-[10px] text-slate-400">Paling Aman</div>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryMethod('donation_box')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  deliveryMethod === 'donation_box'
                    ? 'border-cyan-500 bg-cyan-950/40 text-white'
                    : 'border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-bold text-white">Donation Box</div>
                <div className="text-[10px] text-slate-400">Tinggal Drop</div>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryMethod('in_game_trade')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  deliveryMethod === 'in_game_trade'
                    ? 'border-cyan-500 bg-cyan-950/40 text-white'
                    : 'border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-bold text-white">Trade In-Game</div>
                <div className="text-[10px] text-slate-400">Tatap Muka</div>
              </button>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Pilihan Pembayaran
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
            >
              {PAYMENT_METHODS.map((pm) => (
                <option key={pm.id} value={pm.name}>
                  {pm.name}
                </option>
              ))}
            </select>
          </div>

          {/* Buyer Phone / Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                No. WhatsApp Anda (Opsional)
              </label>
              <input
                type="tel"
                placeholder="08xxxxxxxxxx"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Catatan Pesanan (Opsional)
              </label>
              <input
                type="text"
                placeholder="Contoh: World ada jam 8 malam"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Security Notice */}
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Format pesanan akan dikirim otomatis ke WhatsApp admin resmi <strong>{ADMIN_PHONE_NUMBER}</strong> untuk proses 1–5 menit.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Kirim Pesanan ke WhatsApp Admin ({ADMIN_PHONE_NUMBER})</span>
          </button>
        </form>
      </div>
    </div>
  );
};
