import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ThumbsUp } from 'lucide-react';
import { REVIEWS } from '../data/mockData';
import { formatRupiah } from '../utils/whatsapp';

export const ReviewsAndProof: React.FC = () => {
  return (
    <section id="testimoni" className="py-12 border-b border-slate-800/80 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-2">
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>Reputasi &amp; Testimoni Pembeli</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Bukti Transaksi &amp; Ulasan Nyata
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Kepercayaan komunitas adalah prioritas utama kami. Ribuan transaksi sukses telah diselesaikan dengan aman.
            </p>
          </div>

          <div className="flex items-center gap-4 p-3 bg-slate-950 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs text-slate-300">
              <strong className="text-white font-mono text-sm">4.99 / 5.0</strong> dari 1.250+ Transaksi
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-3 hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono">{review.timeAgo}</span>
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="font-bold text-white text-sm font-mono flex items-center gap-1.5">
                    <span>{review.growId}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${
                      review.type === 'Jual DL'
                        ? 'bg-amber-950/60 border-amber-800/80 text-amber-300'
                        : review.type === 'Beli Akun'
                        ? 'bg-purple-950/60 border-purple-800/80 text-purple-300'
                        : 'bg-cyan-950/60 border-cyan-800/80 text-cyan-300'
                    }`}
                  >
                    {review.type}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="truncate max-w-[150px]">{review.item}</span>
                <span className="font-bold text-white">{formatRupiah(review.nominalIdr)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
