import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, Lock, Clock, MessageSquare, HelpCircle } from 'lucide-react';
import { ADMIN_PHONE_NUMBER } from '../data/mockData';

export const SecurityGuide: React.FC = () => {
  return (
    <section id="panduan" className="py-12 border-b border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Security Illustration */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-900 shadow-2xl">
              <img
                src="/src/assets/images/growtopia_safe_vault_1793921384716.jpg"
                alt="Secure Growtopia Escrow Vault"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Jaminan Keamanan 100% Anti Rollback</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Semua lock berasal dari hasil panen farm murni & trade legal. Bukan dari glitch/bug atau metode ilegal yang berisiko banned.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Step Safe SOP & Anti-Scam Warning */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Standar Prosedur Operasional (SOP)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Cara Transaksi Aman &amp; Cepat 1–5 Menit
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Kami menerapkan sistem transaksi transparan demi menjaga keamanan aset GrowID dan uang Anda:
              </p>
            </div>

            {/* Steps Container */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-600/50 text-cyan-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Pilih Produk &amp; Kirim Data ke WA</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Pilih paket DL/Akun di web, isi GrowID &amp; World Anda, lalu klik tombol kirim pesanan untuk mendapatkan invoice resmi ke nomor <strong className="text-cyan-300">{ADMIN_PHONE_NUMBER}</strong>.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-600/50 text-cyan-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Transfer Pembayaran Sesuai Total</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Lakukan pembayaran via QRIS All Payment, Transfer Bank (BCA, Mandiri, BRI), atau E-Wallet (DANA, GoPay, OVO). Konfirmasi bukti transfer ke chat WhatsApp admin.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-600/50 text-cyan-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Pertemuan di World Trade Aman</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Admin akan masuk ke world Anda atau mengundang Anda ke world private admin. Pastikan world tujuan memiliki <strong>Display Box</strong> atau <strong>Donation Box</strong> bertuliskan GrowID Anda.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-600/50 text-cyan-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Serah Terima Lock / Akun (1–3 Menit)</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Lock langsung didrop ke display box Anda. Untuk transaksi akun, admin akan memberikan ID, password, dan memandu pemindahan email secara langsung.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-600/50 text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  5
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Selesai &amp; Beri Review</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Transaksi selesai dengan aman! Berikan rating dan testimoni untuk reputasi bersama.
                  </p>
                </div>
              </div>
            </div>

            {/* Anti-Scam Warning Box */}
            <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/40 text-xs text-red-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-red-300 font-semibold block text-sm">PERINGATAN WASPADA PENIPUAN (ANTI-SCAM):</strong>
                Nomor WhatsApp resmi admin HANYA SATU: <strong className="text-white bg-red-900/60 px-1.5 py-0.5 rounded font-mono">{ADMIN_PHONE_NUMBER}</strong>. Jangan pernah percaya jika ada pihak yang menghubungi Anda mengatasnamakan admin dengan nomor berbeda!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
