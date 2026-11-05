import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ADMIN_PHONE_NUMBER } from '../data/mockData';
import { createDirectAdminWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const directUrl = createDirectAdminWhatsAppUrl('Fast Response');

  return (
    <aside aria-label="Floating WhatsApp contact" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 group">
      <a
        href={directUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat WhatsApp Admin ${ADMIN_PHONE_NUMBER}`}
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-full shadow-2xl shadow-emerald-500/40 border border-emerald-300 transition-all hover:scale-105 active:scale-95"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 text-slate-950 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="font-extrabold">Chat Admin WA</span>
          <span className="text-[10px] font-mono text-slate-900 font-semibold">{ADMIN_PHONE_NUMBER}</span>
        </div>
      </a>
    </aside>
  );
};
