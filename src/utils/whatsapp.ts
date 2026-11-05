import { ADMIN_PHONE_INTL, STORE_NAME } from '../data/mockData';
import { OrderFormData, SellFormData } from '../types';

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateInvoiceId(prefix = 'INV'): string {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  return `${prefix}-${dateStr}-${randomNum}`;
}

export function createBuyWhatsAppUrl(order: OrderFormData): { url: string; invoiceId: string; message: string } {
  const invoiceId = generateInvoiceId('ORDER');
  const deliveryLabel =
    order.deliveryMethod === 'display_box'
      ? 'Display Box (World Aman)'
      : order.deliveryMethod === 'donation_box'
      ? 'Donation Box'
      : 'Trade Langsung In-Game';

  const message = `Halo Admin ${STORE_NAME} (${ADMIN_PHONE_INTL}),
Saya ingin melakukan PEMBELIAN di website:

📋 *RINCIAN PESANAN:*
• No. Invoice: *${invoiceId}*
• Produk: *${order.productName}*
• Jumlah: *${order.quantity}x*
• Total Harga: *${formatRupiah(order.totalPriceIdr)}*
• Metode Pembayaran: *${order.paymentMethod}*

🎮 *DATA GROWTOPIA:*
• GrowID Pembeli: *${order.growId}*
• World Tujuan: *${order.worldName}*
• Cara Pengiriman: *${deliveryLabel}*
${order.notes ? `• Catatan: ${order.notes}\n` : ''}
Mohon kirimkan nomor rekening / QRIS pembayaran resmi agar pesanan segera diproses. Terima kasih!`;

  const url = `https://wa.me/${ADMIN_PHONE_INTL}?text=${encodeURIComponent(message)}`;
  return { url, invoiceId, message };
}

export function createSellWhatsAppUrl(sell: SellFormData): { url: string; sellId: string; message: string } {
  const sellId = generateInvoiceId('TAMPUNG');

  const message = `Halo Admin ${STORE_NAME} (${ADMIN_PHONE_INTL}),
Saya ingin MENJUAL / MENCAIRKAN (Tampung) di website:

📋 *RINCIAN PENJUALAN:*
• No. Pengajuan: *${sellId}*
• Kategori: *${sell.lockType === 'Account' ? 'Akun Growtopia' : `${sell.amount} ${sell.lockType}`}*
• Estimasi Dana Diterima: *${formatRupiah(sell.expectedPriceIdr)}*
${sell.accountDetails ? `• Spek Akun / Detail: *${sell.accountDetails}*\n` : ''}

🎮 *DATA TRADE GROWTOPIA:*
• GrowID Penjual: *${sell.growId}*

💳 *REKENING PENCAIRAN DANA:*
• Metode: *${sell.payoutMethod}*
• No. Rekening / E-Wallet: *${sell.accountNumber}*
• Atas Nama (A/N): *${sell.accountHolderName}*
• No. WhatsApp: *${sell.customerPhone}*
${sell.notes ? `• Catatan Tambahan: ${sell.notes}\n` : ''}
Saya siap trade ke World admin untuk verifikasi dan serah terima lock. Mohon infokan World trade admin. Terima kasih!`;

  const url = `https://wa.me/${ADMIN_PHONE_INTL}?text=${encodeURIComponent(message)}`;
  return { url, sellId, message };
}

export function createDirectAdminWhatsAppUrl(topic = 'Konsultasi'): string {
  const msg = `Halo Admin ${STORE_NAME}, saya ingin bertanya mengenai ${topic} Diamond Lock / Akun Growtopia. Apakah admin sedang online?`;
  return `https://wa.me/${ADMIN_PHONE_INTL}?text=${encodeURIComponent(msg)}`;
}
