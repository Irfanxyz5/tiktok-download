# 🎵 TikDown — TikTok Video & Audio Downloader

> Download TikTok MP4 (no watermark) & MP3, gratis dan tanpa login.  
> Built by [@ipanzx](https://github.com/ipanzx) · React Vite + Tailwind CSS

---

## ✨ Fitur

- 🎬 Download MP4 tanpa watermark & dengan watermark
- 🎵 Download audio MP3 dari video TikTok
- 🌗 Dark mode (purple deep) / Light mode (lavender soft)
- 📋 Paste link langsung dari clipboard
- 📱 Fully responsive (mobile-first)
- 📄 Dokumentasi API lengkap buat developer
- ⚡ Powered by tikwm.com API (gratis, no auth key)

---

## 🚀 Setup & Instalasi

### 1. Clone / Download project
```bash
# Atau extract folder ini
cd tikdown
```

### 2. Install dependencies
```bash
npm install
```

### 3. Jalankan development server
```bash
npm run dev
# Buka http://localhost:3000
```

### 4. Build untuk production
```bash
npm run build
# Output di folder /dist
```

---

## 🌐 Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Atau drag & drop folder `dist` ke [vercel.com/new](https://vercel.com/new).

---

## 🔌 API yang Digunakan

```
GET https://www.tikwm.com/api/?url={TIKTOK_URL}&hd=1
```

**Parameter:**
| Param | Type | Wajib | Keterangan |
|-------|------|-------|-----------|
| `url` | string | ✅ | URL video TikTok |
| `hd`  | 0\|1 | ❌ | 1 = kualitas HD |

**Response Fields:**
| Field | Keterangan |
|-------|-----------|
| `data.play` | MP4 tanpa watermark |
| `data.wmplay` | MP4 dengan watermark |
| `data.hdplay` | MP4 HD |
| `data.music` | MP3 audio |
| `data.cover` | Thumbnail URL |
| `data.title` | Caption video |
| `data.author` | Info kreator |

---

## 📁 Struktur Project

```
tikdown/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx        ← Komponen utama (semua section)
│   ├── main.jsx       ← Entry point React
│   └── index.css      ← Tailwind CSS
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🎨 Tech Stack

- **React 18** — UI Framework
- **Vite 5** — Build tool super cepat
- **Tailwind CSS 3** — Utility-first CSS
- **tikwm.com API** — TikTok scraper backend
- **Google Fonts** — Syne, DM Mono, Plus Jakarta Sans

---

## 📬 Contact

- Instagram: [@ipanzx](https://instagram.com/ipanzx)
- GitHub: [@ipanzx](https://github.com/ipanzx)
- Telegram: [@ipanzx](https://t.me/ipanzx)

---

> Website ini tidak berafiliasi dengan TikTok Inc.  
> Hanya untuk keperluan edukasi dan penggunaan pribadi.
