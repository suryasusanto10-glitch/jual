import React from 'react';
import { Gem, ShieldCheck, MessageCircle, Phone, Clock, CreditCard } from 'lucide-react';
import { ADMIN_PHONE_NUMBER, STORE_NAME } from '../data/mockData';
import { createDirectAdminWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const directWa = createDirectAdminWhatsAppUrl('Pertanyaan Umum');

  return (
    <footer className="bg-[#05080F] border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Gem className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {STORE_NAME}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Pusat marketplace jual-beli Diamond Lock (DL/BGL/WL) dan Akun Growtopia terpercaya di Indonesia. Mengutamakan kecepatan trade 1–5 menit, garansi anti rollback, dan perlindungan penuh dari admin resmi.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <span>Jam Operasional:</span>
              <strong className="text-slate-300">08.00 – 24.00 WIB (Setiap Hari)</strong>
            </div>
          </div>

          {/* Kontak Admin Resmi */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Kontak Resmi Admin
            </h4>
            <div className="space-y-2">
              <a
                href={directWa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono">{ADMIN_PHONE_NUMBER}</span>
              </a>
              <div className="text-[11px] text-slate-500">
                Hubungi via WhatsApp untuk konfirmasi order, tampung DL, atau konsultasi akun.
              </div>
            </div>
          </div>

          {/* Metode Pembayaran */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Metode Pembayaran
            </h4>
            <div className="space-y-1 text-slate-300 text-xs">
              <div>• QRIS All Payment (Otomatis)</div>
              <div>• Bank BCA, Mandiri, BRI, SeaBank</div>
              <div>• DANA, GoPay, OVO, ShopeePay</div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {STORE_NAME}. Hak cipta dilindungi.
          </div>
          <div className="text-center sm:text-right max-w-lg leading-relaxed">
            Growtopia adalah merek dagang terdaftar milik Ubisoft Entertainment. Layanan ini merupakan marketplace komunitas independen pihak ketiga.
          </div>
        </div>
      </div>
    </footer>
  );
};
