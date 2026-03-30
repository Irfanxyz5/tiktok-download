import { useState, useEffect, useRef } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const ClipboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
  </svg>
);
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const TelegramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);
const MusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
  </svg>
);
const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeTab, setActiveTab] = useState("mp4");
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = "TikDown — TikTok Video & Audio Downloader";
  }, []);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      inputRef.current?.focus();
    } catch {
      inputRef.current?.focus();
    }
  };

  const handleDownload = async () => {
    if (!url.trim()) { setError("Masukkan link TikTok terlebih dahulu."); return; }
    if (!url.includes("tiktok.com") && !url.includes("vm.tiktok") && !url.includes("vt.tiktok")) {
      setError("URL tidak valid. Gunakan link dari TikTok."); return;
    }
    setLoading(true); setError(""); setResult(null);
    try {
      const res = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}&hd=1`);
      const data = await res.json();
      if (data.code === 0 && data.data) {
        setResult(data.data);
      } else {
        setError("Gagal mengambil data. Pastikan link TikTok valid dan publik.");
      }
    } catch {
      setError("Terjadi kesalahan jaringan. Coba lagi beberapa saat.");
    } finally {
      setLoading(false);
    }
  };

  const triggerDownload = (fileUrl, filename) => {
    const a = document.createElement("a");
    a.href = fileUrl; a.download = filename; a.target = "_blank";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  const copyCode = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  // ─── Theme Classes ───────────────────────────────────────────────────────
  const t = {
    bg: dark ? "bg-[#0d0b1a]" : "bg-[#f2eefe]",
    text: dark ? "text-[#e8e0ff]" : "text-[#2d1b69]",
    muted: dark ? "text-[#9b8fc2]" : "text-[#7b68ae]",
    nav: dark ? "bg-[#110e22]/90 border-[#2a2050]" : "bg-[#f7f3ff]/90 border-[#d4c9f0]",
    card: dark ? "bg-[#160f2e] border-[#2a2050]" : "bg-[#ffffff] border-[#d4c9f0]",
    input: dark ? "bg-[#1a1234] border-[#3a2f6a] text-[#e8e0ff] placeholder-[#5c4e8c] focus:border-[#a78bfa]" : "bg-[#fff] border-[#c4b5e8] text-[#2d1b69] placeholder-[#a78bfa] focus:border-[#7c3aed]",
    btn: "bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#ec4899]",
    pill: dark ? "bg-[#1e1540] text-[#c4b5e8]" : "bg-[#ede9fe] text-[#6d28d9]",
    codeBlock: dark ? "bg-[#0a0818] border-[#2a2050] text-[#c4b5e8]" : "bg-[#f5f0ff] border-[#d4c9f0] text-[#4c1d95]",
    resultCard: dark ? "bg-[#140d2b] border-[#3a2f6a]" : "bg-[#f5f0ff] border-[#c4b5e8]",
  };

  const codeExamples = {
    fetch: `// Fetch TikTok video info
const response = await fetch(
  "https://www.tikwm.com/api/?url=" + 
  encodeURIComponent(tiktokUrl) + "&hd=1"
);
const data = await response.json();

if (data.code === 0) {
  const video = data.data;
  console.log(video.play);    // MP4 no watermark
  console.log(video.wmplay);  // MP4 with watermark
  console.log(video.music);   // MP3 audio
}`,
    axios: `import axios from "axios";

const getTikTok = async (tiktokUrl) => {
  const { data } = await axios.get(
    "https://www.tikwm.com/api/",
    { params: { url: tiktokUrl, hd: 1 } }
  );
  
  return {
    mp4: data.data.play,       // No watermark
    mp4wm: data.data.wmplay,   // With watermark  
    mp3: data.data.music,      // Audio only
    thumb: data.data.cover,    // Thumbnail
    title: data.data.title,    // Caption
    author: data.data.author,  // Creator info
  };
};`,
    response: `// Response Structure
{
  "code": 0,          // 0 = success
  "msg": "success",
  "data": {
    "id": "7180xxxxxx",
    "title": "video caption here",
    "play": "https://…/mp4-no-wm.mp4",   // ← MP4
    "wmplay": "https://…/mp4-wm.mp4",    // ← With WM
    "hdplay": "https://…/mp4-hd.mp4",    // ← HD
    "music": "https://…/audio.mp3",      // ← MP3
    "music_info": { "title": "…", "author": "…" },
    "author": { "nickname": "…", "avatar": "…" },
    "cover": "https://…/thumb.jpg",
    "duration": 15,
    "play_count": 120000,
    "digg_count": 5400
  }
}`,
  };

  return (
    <div className={`min-h-screen ${t.bg} ${t.text} transition-colors duration-300 font-sans`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Plus Jakarta Sans', sans-serif; }
        h1,h2,h3,h4,.font-display { font-family: 'Syne', sans-serif; }
        .font-mono { font-family: 'DM Mono', monospace; }
        .glow-text { text-shadow: 0 0 40px rgba(167,139,250,0.6); }
        .glow-card { box-shadow: 0 0 0 1px rgba(124,58,237,0.2), 0 20px 60px rgba(124,58,237,0.08); }
        .glow-btn { box-shadow: 0 0 30px rgba(167,139,250,0.4), 0 4px 16px rgba(236,72,153,0.25); }
        .glow-btn:hover { box-shadow: 0 0 50px rgba(167,139,250,0.6), 0 8px 24px rgba(236,72,153,0.4); }
        .noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E"); }
        .step-line::before { content:''; position:absolute; top:50%; left:-50%; width:50%; height:1px; background: linear-gradient(90deg, transparent, rgba(167,139,250,0.3)); }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes pulse-glow { 0%,100%{ opacity:0.6; } 50%{ opacity:1; } }
        @keyframes float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-8px); } }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .mesh-bg { background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(236,72,153,0.08), transparent); }
        .mesh-bg-light { background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(167,139,250,0.2), transparent), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(236,72,153,0.1), transparent); }
        .ig-hover:hover { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888) !important; color: white !important; border-color: transparent !important; }
        .gh-hover:hover { background: #24292e !important; color: white !important; border-color: transparent !important; }
        .tg-hover:hover { background: #2CA5E0 !important; color: white !important; border-color: transparent !important; }
        .tab-active { background: linear-gradient(135deg, #7c3aed, #a855f7); color: white; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: rgba(124,58,237,0.4); border-radius: 3px; }
        .result-img { transition: transform 0.3s; } .result-img:hover { transform: scale(1.02); }
      `}</style>

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${t.nav} border-b backdrop-blur-lg transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#ec4899] flex items-center justify-center shadow-lg shadow-purple-900/40 group-hover:shadow-purple-900/60 transition-all">
              <TikTokIcon />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              Tik<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#f472b6]">Down</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {[["Mp4", "download"], ["Mp3", "download"], ["Cara Download", "cara"], ["Contact", "contact"], ["API Docs", "api"]].map(([label, id]) => (
              <button key={label} onClick={() => scrollTo(id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:text-[#a78bfa] ${t.muted}`}>
                {label}
              </button>
            ))}
            <button onClick={() => setDark(!dark)}
              className={`ml-3 w-9 h-9 rounded-xl flex items-center justify-center transition-all ${dark ? "bg-[#1e1540] text-[#a78bfa] hover:bg-[#2a1f55]" : "bg-[#ede9fe] text-[#7c3aed] hover:bg-[#ddd6fe]"}`}>
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={() => setDark(!dark)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${dark ? "bg-[#1e1540] text-[#a78bfa]" : "bg-[#ede9fe] text-[#7c3aed]"}`}>
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button onClick={() => setMobileMenu(!mobileMenu)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${dark ? "bg-[#1e1540] text-[#a78bfa]" : "bg-[#ede9fe] text-[#7c3aed]"}`}>
              {mobileMenu ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className={`md:hidden border-t ${dark ? "border-[#2a2050] bg-[#110e22]" : "border-[#d4c9f0] bg-[#f7f3ff]"} px-4 py-3 flex flex-col gap-1`}>
            {[["Mp4", "download"], ["Mp3", "download"], ["Cara Download", "cara"], ["Contact", "contact"], ["API Docs", "api"]].map(([label, id]) => (
              <button key={label} onClick={() => scrollTo(id)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${t.muted} hover:text-[#a78bfa]`}>
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero / Download Section ────────────────────────────────────────── */}
      <section id="hero" className={`relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden ${dark ? "mesh-bg" : "mesh-bg-light"}`}>
        {/* BG Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl ${dark ? "bg-purple-900/20" : "bg-purple-200/60"}`} />
          <div className={`absolute top-20 -right-32 w-80 h-80 rounded-full blur-3xl ${dark ? "bg-pink-900/20" : "bg-pink-200/50"}`} />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium font-mono mb-6 border ${dark ? "border-[#3a2f6a] bg-[#1a1234] text-[#a78bfa]" : "border-[#c4b5e8] bg-[#f0ebff] text-[#6d28d9]"}`}>
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse-glow inline-block" />
            Free · No Watermark · Tanpa Daftar
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 glow-text">
            Download TikTok<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#e879f9] to-[#f472b6]">
              Video & Audio
            </span>
          </h1>
          <p className={`text-lg mb-12 max-w-xl mx-auto ${t.muted}`}>
            Download video TikTok tanpa watermark dalam format MP4 & MP3. Gratis, cepat, dan tanpa perlu login.
          </p>

          {/* ── Download Form ── */}
          <div id="download" className={`${t.card} rounded-2xl border p-5 sm:p-6 glow-card`}>
            {/* Tabs */}
            <div className={`flex gap-1 p-1 rounded-xl mb-5 ${dark ? "bg-[#0d0b1a]" : "bg-[#ede9fe]"}`}>
              {[["mp4", "MP4 Video"], ["mp3", "MP3 Audio"]].map(([k, v]) => (
                <button key={k} onClick={() => setActiveTab(k)}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold font-display transition-all ${activeTab === k ? "tab-active shadow-lg shadow-purple-900/30" : t.muted}`}>
                  {v}
                </button>
              ))}
            </div>

            <div className="flex gap-2 items-center">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  value={url}
                  onChange={e => { setUrl(e.target.value); setError(""); }}
                  onKeyDown={e => e.key === "Enter" && handleDownload()}
                  placeholder="Tempel link TikTok di sini…"
                  className={`w-full ${t.input} border rounded-xl px-4 py-3.5 text-sm outline-none transition-colors pr-12`}
                />
                <button onClick={handlePaste} title="Paste dari clipboard"
                  className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${dark ? "text-[#6b5fa0] hover:text-[#a78bfa]" : "text-[#a78bfa] hover:text-[#7c3aed]"}`}>
                  <ClipboardIcon />
                </button>
              </div>
              <button onClick={handleDownload} disabled={loading}
                className={`${t.btn} text-white font-semibold px-5 py-3.5 rounded-xl flex items-center gap-2 transition-all glow-btn hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`}>
                {loading ? (
                  <svg className="animate-spin-slow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" strokeOpacity=".25"/><path d="M12 2a10 10 0 0 1 10 10" /></svg>
                ) : <DownloadIcon />}
                {loading ? "Loading…" : "Download"}
              </button>
            </div>

            {error && (
              <p className="mt-3 text-sm text-[#f87171] flex items-center gap-1.5">
                <span>⚠</span> {error}
              </p>
            )}

            {/* ── Result ── */}
            {result && (
              <div className={`mt-5 ${t.resultCard} rounded-xl border p-4`}>
                <div className="flex gap-4">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                    <img src={result.cover} alt="thumb" className="w-full h-full object-cover result-img" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium line-clamp-2 mb-1 ${t.text}`}>{result.title || "TikTok Video"}</p>
                    <p className={`text-xs ${t.muted}`}>@{result.author?.unique_id || result.author?.nickname}</p>
                    {result.duration && <p className={`text-xs ${t.muted} mt-1`}>Durasi: {result.duration}s</p>}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeTab === "mp4" && <>
                    <button onClick={() => triggerDownload(result.play, "tiktok-nowm.mp4")}
                      className="flex-1 min-w-[120px] py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white text-xs font-semibold flex items-center justify-center gap-1.5 glow-btn hover:scale-[1.02] transition-all">
                      <DownloadIcon /> MP4 No Watermark
                    </button>
                    <button onClick={() => triggerDownload(result.wmplay, "tiktok-wm.mp4")}
                      className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] ${dark ? "border-[#3a2f6a] text-[#a78bfa] hover:bg-[#2a1f55]" : "border-[#c4b5e8] text-[#7c3aed] hover:bg-[#ede9fe]"}`}>
                      <DownloadIcon /> MP4 + Watermark
                    </button>
                  </>}
                  {activeTab === "mp3" && (
                    <button onClick={() => triggerDownload(result.music, "tiktok-audio.mp3")}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#ec4899] to-[#a855f7] text-white text-xs font-semibold flex items-center justify-center gap-2 glow-btn hover:scale-[1.02] transition-all">
                      <MusicIcon size={16} /> Download MP3
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Cara Download ──────────────────────────────────────────────────── */}
      <section id="cara" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className={`text-xs font-mono font-medium px-3 py-1 rounded-full ${t.pill} mb-3 inline-block`}>Tutorial</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              Cara <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#f472b6]">Download</span>
            </h2>
            <p className={`${t.muted} max-w-md mx-auto text-sm`}>
              Ikuti 3 langkah mudah ini untuk download video TikTok favoritmu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className={`hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.4)] to-transparent`} />

            {[
              {
                num: "01", icon: <LinkIcon />, color: "from-[#7c3aed] to-[#a855f7]",
                title: "Salin Link TikTok",
                desc: "Buka aplikasi TikTok, cari video yang ingin didownload, lalu tap tombol Share → Salin Tautan."
              },
              {
                num: "02", icon: <ClipboardIcon />, color: "from-[#a855f7] to-[#ec4899]",
                title: "Tempel & Klik Download",
                desc: "Kembali ke TikDown, tempel link di kolom input (gunakan ikon clipboard), pilih format MP4 atau MP3, lalu klik tombol Download."
              },
              {
                num: "03", icon: <DownloadIcon />, color: "from-[#ec4899] to-[#f97316]",
                title: "File Tersimpan!",
                desc: "File akan langsung terdownload ke perangkatmu. MP4 tanpa watermark, kualitas HD tersedia."
              },
            ].map((step, i) => (
              <div key={i} className={`relative ${t.card} rounded-2xl border p-6 glow-card hover:scale-[1.02] transition-all duration-300 group`}>
                <div className={`absolute -top-3 left-6 text-xs font-mono font-bold px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white shadow-lg`}>
                  {step.num}
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-4 mt-2 shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className={`text-sm leading-relaxed ${t.muted}`}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className={`mt-8 ${t.card} rounded-2xl border p-5 flex flex-wrap gap-4`}>
            <p className={`text-sm font-semibold ${t.text} w-full`}>Tips Penting:</p>
            {[
              "✅ Pastikan akun TikTok bersifat publik, bukan private",
              "✅ Gunakan link langsung dari aplikasi TikTok",
              "✅ MP4 No Watermark = kualitas terbaik untuk share",
              "✅ MP3 cocok untuk dijadikan ringtone atau konten musik",
            ].map((tip, i) => (
              <span key={i} className={`text-xs px-3 py-1.5 rounded-lg ${t.pill}`}>{tip}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────────────────── */}
      <section id="contact" className={`py-20 px-4 sm:px-6 relative overflow-hidden`}>
        <div className={`absolute inset-0 ${dark ? "bg-[#0f0c20]" : "bg-[#ede9fe]/50"}`} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className={`text-xs font-mono font-medium px-3 py-1 rounded-full ${t.pill} mb-3 inline-block`}>Hubungi Kami</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Temukan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#f472b6]">Kami</span>
          </h2>
          <p className={`${t.muted} mb-12 text-sm max-w-sm mx-auto`}>
            Punya pertanyaan atau ingin berkolaborasi? Reach out melalui platform favoritmu.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
            {[
              {
                icon: <InstagramIcon />,
                label: "Instagram",
                handle: "@ipanzx",
                href: "https://instagram.com/ipanzx",
                cls: "ig-hover",
                desc: "Follow untuk konten update"
              },
              {
                icon: <GitHubIcon />,
                label: "GitHub",
                handle: "@ipanzx",
                href: "https://github.com/ipanzx",
                cls: "gh-hover",
                desc: "Open source & projects"
              },
              {
                icon: <TelegramIcon />,
                label: "Telegram",
                handle: "@ipanzx",
                href: "https://t.me/ipanzx",
                cls: "tg-hover",
                desc: "Chat langsung & support"
              },
            ].map((sm, i) => (
              <a key={i} href={sm.href} target="_blank" rel="noopener noreferrer"
                className={`${t.card} border rounded-2xl p-6 flex flex-col items-center gap-3 glow-card transition-all duration-300 ${sm.cls} hover:border-transparent hover:shadow-xl hover:scale-[1.05] group`}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 group-hover:bg-white/20 bg-gradient-to-br from-white/5 to-white/0">
                  {sm.icon}
                </div>
                <div>
                  <p className="font-display font-bold">{sm.label}</p>
                  <p className={`text-sm font-mono ${t.muted} group-hover:text-white/80 transition-colors`}>{sm.handle}</p>
                  <p className={`text-xs mt-1 ${t.muted} group-hover:text-white/70 transition-colors`}>{sm.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── API Documentation ───────────────────────────────────────────────── */}
      <section id="api" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className={`text-xs font-mono font-medium px-3 py-1 rounded-full ${t.pill} mb-3 inline-block`}>Developer</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              Dokumentasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#f472b6]">API</span>
            </h2>
            <p className={`${t.muted} text-sm max-w-md mx-auto`}>
              Integrasikan TikTok Downloader ke aplikasi atau website kamu dengan mudah menggunakan API berikut.
            </p>
          </div>

          {/* Base URL */}
          <div className={`${t.card} rounded-2xl border p-5 mb-6 glow-card`}>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-lg bg-[#10b981] text-white text-xs font-mono font-bold">GET</span>
              <code className={`text-sm font-mono ${dark ? "text-[#c4b5e8]" : "text-[#6d28d9]"}`}>
                https://www.tikwm.com/api/
              </code>
            </div>
            <div className={`flex items-start gap-3 text-sm ${t.muted}`}>
              <span className="mt-0.5">📌</span>
              <p>Endpoint resmi dari <strong className={t.text}>tikwm.com</strong>. Gratis, tanpa auth key, support HD & no-watermark download.</p>
            </div>
          </div>

          {/* Parameters */}
          <div className={`${t.card} rounded-2xl border p-5 mb-6 glow-card`}>
            <h3 className="font-display font-bold text-base mb-4">Query Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className={`${dark ? "border-b border-[#2a2050]" : "border-b border-[#d4c9f0]"}`}>
                    <th className={`text-left pb-3 pr-4 font-semibold ${t.muted}`}>Parameter</th>
                    <th className={`text-left pb-3 pr-4 font-semibold ${t.muted}`}>Type</th>
                    <th className={`text-left pb-3 pr-4 font-semibold ${t.muted}`}>Required</th>
                    <th className={`text-left pb-3 font-semibold ${t.muted}`}>Deskripsi</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {[
                    ["url", "string", "✅ Ya", "URL video TikTok yang ingin didownload"],
                    ["hd", "0 | 1", "Opsional", "Set 1 untuk kualitas HD (default: 0)"],
                    ["web", "0 | 1", "Opsional", "Set 1 untuk response format web-friendly"],
                  ].map(([p, type, req, desc], i) => (
                    <tr key={i} className={`${dark ? "border-b border-[#1e1540]" : "border-b border-[#ede9fe]"}`}>
                      <td className="py-3 pr-4"><code className="font-mono text-[#a78bfa] text-xs">{p}</code></td>
                      <td className={`py-3 pr-4 font-mono text-xs ${t.muted}`}>{type}</td>
                      <td className="py-3 pr-4 text-xs">{req}</td>
                      <td className={`py-3 text-xs ${t.muted}`}>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Code Examples */}
          <div className="space-y-5">
            {[
              { id: "fetch", lang: "JavaScript (Fetch)", icon: "🌐", code: codeExamples.fetch },
              { id: "axios", lang: "Axios / React", icon: "⚛️", code: codeExamples.axios },
              { id: "response", lang: "Response Structure", icon: "📦", code: codeExamples.response },
            ].map(({ id, lang, icon, code }) => (
              <div key={id} className={`${t.card} rounded-2xl border glow-card overflow-hidden`}>
                <div className={`flex items-center justify-between px-5 py-3 border-b ${dark ? "border-[#2a2050]" : "border-[#d4c9f0]"}`}>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <span className={`text-xs font-mono ml-2 ${t.muted}`}>{icon} {lang}</span>
                  </div>
                  <button onClick={() => copyCode(id, code)}
                    className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg transition-all ${copiedCode === id ? "bg-[#10b981]/20 text-[#10b981]" : dark ? "bg-[#1e1540] text-[#9b8fc2] hover:text-[#a78bfa]" : "bg-[#ede9fe] text-[#7c3aed] hover:bg-[#ddd6fe]"}`}>
                    {copiedCode === id ? <><CheckIcon /> Copied!</> : <><CodeIcon /> Copy</>}
                  </button>
                </div>
                <pre className={`${t.codeBlock} p-5 text-xs font-mono overflow-x-auto leading-relaxed`}>
                  <code>{code}</code>
                </pre>
              </div>
            ))}
          </div>

          {/* Response Fields */}
          <div className={`mt-6 ${t.card} rounded-2xl border p-5 glow-card`}>
            <h3 className="font-display font-bold text-base mb-4">Field Response Penting</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { field: "data.play", type: "string", desc: "URL MP4 tanpa watermark" },
                { field: "data.wmplay", type: "string", desc: "URL MP4 dengan watermark" },
                { field: "data.hdplay", type: "string", desc: "URL MP4 kualitas HD" },
                { field: "data.music", type: "string", desc: "URL MP3 audio saja" },
                { field: "data.cover", type: "string", desc: "URL thumbnail video" },
                { field: "data.title", type: "string", desc: "Caption/judul video" },
                { field: "data.author", type: "object", desc: "Info kreator (nama, avatar)" },
                { field: "data.duration", type: "number", desc: "Durasi video dalam detik" },
              ].map(({ field, type, desc }, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${dark ? "bg-[#0d0b1a]" : "bg-[#f5f0ff]"}`}>
                  <code className="text-[#a78bfa] font-mono text-xs shrink-0 mt-0.5">{field}</code>
                  <div>
                    <span className={`text-xs font-mono ${t.muted}`}>{type}</span>
                    <p className={`text-xs ${t.muted} mt-0.5`}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className={`border-t ${dark ? "border-[#2a2050] bg-[#0d0b1a]" : "border-[#d4c9f0] bg-[#f2eefe]"} py-8 px-4 sm:px-6 text-center`}>
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#ec4899] flex items-center justify-center">
            <TikTokIcon />
          </div>
          <span className="font-display font-bold">Tik<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#f472b6]">Down</span></span>
        </div>
        <p className={`text-xs ${t.muted}`}>
          © 2025 TikDown by{" "}
          <a href="https://github.com/ipanzx" target="_blank" rel="noopener noreferrer"
            className="text-[#a78bfa] hover:underline">@ipanzx</a>
          . Powered by tikwm.com API.
        </p>
        <p className={`text-xs ${t.muted} mt-1`}>Website ini tidak berafiliasi dengan TikTok Inc.</p>
      </footer>
    </div>
  );
}
