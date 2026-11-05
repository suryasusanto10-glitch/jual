# Platform Jual Beli Diamond Lock & Akun Growtopia Terpercaya

Platform marketplace e-commerce gaming bertema dark modern untuk transaksi Diamond Lock (DL, BGL, WL) dan Akun Growtopia terpercaya, dilengkapi kalkulator konversi harga otomatis, formulir transaksi dua arah (Beli & Jual/Tampung), panduan keamanan anti-scam, serta generator invoice langsung terhubung ke WhatsApp Admin resmi **089601488635**.

### User Review & Critical Decisions

> [!IMPORTANT]
> Keputusan desain dan fitur utama telah diselaraskan berdasarkan preferensi yang Anda pilih:
> - **Gaya Visual**: Dark modern gaming bernuansa Growtopia dengan aksen emas lock (*amber/gold*) dan cyan (*diamond lock glow*) berlatar slate pekat, tanpa elemen murahan atau clutter.
> - **Katalog Produk**: Meliputi paket Diamond Lock (DL), Blue Gem Lock (BGL), World Lock (WL), dan Akun Growtopia berbagai tier (Akun Farm, Akun Builder, Akun Level Tinggi & Ringmaster, Akun Sultan/Collector).
> - **Alur WhatsApp**: Formulir interaktif dua arah — mode **Beli** (pilih item/DL, masukkan GrowID & World dengan display box, kalkulasi total harga) dan mode **Jual / Tampung DL & Titip Jual Akun** (masukkan jumlah lock/spek akun, rate harga, nomor WA pengirim) yang menghasilkan pesan otomatis yang rapi dan terformat ke WhatsApp Admin di **089601488635**.

- **Nomor Admin WhatsApp**: `089601488635` (terformat internasional: `+6289601488635`).
- **Sistem Pembayaran yang Didukung**: QRIS, Bank Transfer (BCA, Mandiri, BRI, BNI), dan E-Wallet (Dana, GoPay, OVO) dengan konfirmasi admin instan 1–5 menit.

---

### 1. Overview & Core Concept

- **Apa yang Dibangun**: Sebuah web portal e-commerce khusus komunitas Growtopia Indonesia yang menghubungkan pembeli dan penjual DL/Akun dengan sistem keamanan terverifikasi oleh admin berpengalaman.
- **Target Pengguna**: Pemain Growtopia (Growtopians) dari pemula hingga tier Sultan yang membutuhkan pasokan Diamond Lock cepat, aman, bebas rollback/scam, atau ingin menjual hasil panen lock serta akun mereka dengan harga terbaik.
- **Nilai Utama**: 
  - **Kecepatan Proses**: Transaksi trade in-game atau pengiriman akun diselesaikan dalam hitungan menit (estimasi 1–5 menit).
  - **Keamanan & Reputasi**: Prosedur standar trade world ber-display box aman, verifikasi email akun 100% clean, invoice transaksi instan, serta panduan anti-scam.
  - **Transparansi Rate**: Live kalkulator konversi DL/BGL ke Rupiah dan sebaliknya tanpa biaya tersembunyi.

---

### 2. User Experience & Visual Design

- **Alur Pengguna (User Flows)**:
  1. **Beranda & Quick Action**: Pengunjung disambut hero banner modern dengan status rate hari ini, tombol cepat "Beli DL Sekarang", "Jual DL / Tampung", dan "Lihat Akun Siap Pakai".
  2. **Kalkulator & Live Converter**: Pengguna dapat memasukkan jumlah WL/DL/BGL yang ingin dibeli atau dijual untuk melihat total harga Rupiah secara real-time berdasarkan rate promo aktif.
  3. **Katalog Diamond Lock & Akun**: 
     - Tab filter: *Semua Produk*, *Diamond Lock (DL/BGL)*, *Akun Sultan*, *Akun Farm*, *Paket Pemula*.
     - Modal Detail Akun: Informasi detail inventori akun, level, role status, ringmaster/legendary items, world lock balance, dan status email/clean title.
  4. **Formulir Transaksi Dua Arah (Order Modal & Sell Modal)**:
     - **Formulir Beli**: Input GrowID, World penerima, catatan, pilihan metode bayar -> Review rincian -> Klik "Kirim Pesanan ke WhatsApp Admin" (otomatis membuka WhatsApp dengan format order rapi).
     - **Formulir Jual / Tampung**: Input GrowID penjual, jumlah DL/BGL yang ingin dijual, nomor rekening/e-wallet untuk pembayaran dari admin -> Klik "Ajukan Jual ke WhatsApp".
  5. **Fitur Keamanan & Cara Transaksi (Escrow/SOP Trade)**: 5 langkah mudah transaksi aman di Growtopia (pembayaran aman, janji temu di World private, trade via display box / donation box ber-password, verifikasi, selesai).
  6. **Testimoni & Bukti Transaksi**: Galeri transaksi sukses terkini yang memberikan rasa percaya tinggi kepada calon pembeli.

- **Identitas Visual & Tema**:
  - **Aesthetic Direction**: Dark Modern Gaming Theme dengan estetika *high-end gaming marketplace*.
  - **Color Palette**:
    - Canvas Utama: Deep Slate Charcoal (`#090D16` dan `#0F172A`)
    - Card & Surface: Elevated Slate Glass (`#1E293B` dengan border hairline `rgba(255,255,255,0.08)`)
    - Gold / Lock Accent: Amber Glow (`#F59E0B` / `#D97706` representasi World Lock & Golden Lock)
    - Diamond / Cyan Accent: Diamond Glow (`#06B6D4` / `#38BDF8` representasi Diamond Lock & BGL)
    - Success & Trust: Emerald Mint (`#10B981`)
  - **Tipografi**:
    - Display / Heading: *Plus Jakarta Sans* (Weight 700 / 800) untuk headline tegas dan berwibawa.
    - Body Text: *Plus Jakarta Sans* (Weight 400 / 500) yang nyaman dibaca.
    - Angka & Harga: *Tabular figures* (`tabular-nums font-mono`) untuk nominal harga dan jumlah lock yang presisi.
  - **Top Bar Contract**:
    - Zone 1: Wordmark brand bersih: `GT Store Express` (dengan aksen lock)
    - Zone 2: Navigasi ringkas satu baris: `Katalog DL`, `Jual DL`, `Katalog Akun`, `Cara Transaksi`, `Testimoni`
    - Zone 3: Tombol kontak cepat `Hubungi Admin WhatsApp`

---

### 3. Key Product Decisions & Trade-Offs

- **Integrasi WhatsApp URL Scheme**:
  - *Keputusan*: Menggunakan dynamic formatted WhatsApp URL (`https://wa.me/6289601488635?text=...`) dengan pesan template yang terstruktur rapi memuat Nomor ID Invoice, Jenis Transaksi, Nama GrowID, Nama World, Jumlah Pesanan, dan Estimasi Total.
  - *Alasan*: Komunitas gamer Growtopia di Indonesia 99% melakukan konfirmasi pembayaran dan koordinasi world trade secara real-time via WhatsApp, sehingga integrasi ini paling instan, praktis, dan ramah pengguna.
- **Kalkulator Dinamis & Rate Tracker**:
  - *Keputusan*: Kalkulator interaktif dua arah yang bisa menghitung baik pembelian maupun penjualan dengan slider dan input numerik cepat (1 DL, 5 DL, 10 DL, 50 DL, 1 BGL).
  - *Alasan*: Mengurangi waktu tanya-jawab berulang ke admin dan mempercepat konversi transaksi.
- **Sistem Penyimpanan Data**:
  - *Keputusan*: Menggunakan client-state interaktif dengan riwayat transaksi lokal (`localStorage`) untuk draft pesanan, favorit item, dan simulasi status pesanan, dipadukan data katalog akun dan lock yang kaya dan realistis.

---

### 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────────┐
│                      GT STORE EXPRESS APP                       │
├─────────────────────────────────────────────────────────────────┤
│ Top Navigation (Brand · Nav Links · Fast WhatsApp CTA)          │
├─────────────────────────────────────────────────────────────────┤
│ Hero Section (Rate Banner · Key Guarantees · Instant Actions)   │
├───────────────────────────────┬─────────────────────────────────┤
│ Live Rate Calculator          │ Trust & Escrow Guarantee Box    │
│ (Beli DL / Jual DL Slider)    │ (5 Langkah Aman Trade World)    │
├───────────────────────────────┴─────────────────────────────────┤
│ Catalog Tabs: [Semua] [Diamond Lock] [BGL] [Akun Growtopia]    │
│   ├── Diamond Lock Package Cards (Stok, Bonus, Harga, Order)    │
│   └── Account Showcase Cards (Spec, Level, Items, Inspect View) │
├─────────────────────────────────────────────────────────────────┤
│ Transaction Modals & Engine:                                    │
│   ├── Order Modal (GrowID, World, Pembayaran, Generator WA)     │
│   ├── Sell / Tampung Modal (Penjualan Lock ke Admin)            │
│   └── Account Detail Modal (Full Inventory & Screenshots)       │
├─────────────────────────────────────────────────────────────────┤
│ Customer Reviews & Live Proof Feed (Testimoni Transaksi Sukses) │
├─────────────────────────────────────────────────────────────────┤
│ WhatsApp Floating Quick Button + Footer                         │
└─────────────────────────────────────────────────────────────────┘
```

- **Struktur State Utama**:
  - `activeTab`: Navigasi tampilan dan filter katalog (`all`, `locks`, `accounts`, `calculator`, `guide`).
  - `calculatorState`: Jumlah lock yang diinput, tipe aksi (`buy` vs `sell`), dan kalkulasi otomatis.
  - `selectedProduct`: Item yang sedang dilihat atau dimasukkan ke checkout modal.
  - `orderFormData`: Data GrowID, World Name, Pilihan Pembayaran, Catatan tambahan.
  - `sellFormData`: Data GrowID penjual, jumlah DL/BGL, nomor e-wallet/bank tujuan pencairan dana.
  - `notificationToast`: Feedback saat kode invoice di-copy atau pesanan dialihkan ke WhatsApp.
