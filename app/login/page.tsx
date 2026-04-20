'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  
  // State untuk kesempatan login
  const [attempts, setAttempts] = useState(3);
  const [isLocked, setIsLocked] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) return;

    // Kredensial untuk pengujian
    const USER_EMAIL = "beni@gmail.com";
    const USER_PASSWORD = "beni123";
    const ADMIN_EMAIL = "admin@samudra.tech";
    const ADMIN_PASSWORD = "adminsuper123";
    
    let emailErr = '';
    let passwordErr = '';

    // Reset error tiap kali tombol ditekan
    setErrors({ email: '', password: '' });

    // Validasi input kosong
    if (!email) emailErr = "Email wajib diisi!";
    if (!password) passwordErr = "Password wajib diisi!";

    if (emailErr || passwordErr) {
      setErrors({ email: emailErr, password: passwordErr });
      return;
    }

    // Logika Pengecekan Kredensial
    const isAdmin = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
    const isUser = email === USER_EMAIL && password === USER_PASSWORD;

    if (isAdmin) {
      router.push('/admin');
    } else if (isUser) {
      router.push('/dashboard');
    } else {
      // Jika Salah, kurangi kesempatan
      const remainingAttempts = attempts - 1;
      setAttempts(remainingAttempts);

      if (email !== ADMIN_EMAIL && email !== USER_EMAIL) {
        emailErr = "Email tidak terdaftar!";
      } else {
        passwordErr = "Password yang Anda masukkan salah!";
      }

      setErrors({ email: emailErr, password: passwordErr });

      if (remainingAttempts <= 0) {
        setIsLocked(true);
      }
    }
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans p-6">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2000" 
          alt="Logo Samudra Technology Nusantara"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/60 z-1"></div>
      </div>

      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] z-0 -top-10 -right-10"></div>

      <div className="relative z-10 w-full max-w-[460px] flex flex-col items-center">
        <div className="text-center mb-10">
          <h1 className="text-white text-xl font-black tracking-[0.6em] uppercase opacity-90 drop-shadow-2xl">
            PT. SAMUDRA TECHNOLOGY NUSANTARA
          </h1>
        </div>

        <div className="w-full bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-[0_40px_80px_rgba(0,0,0,0.7)] ring-1 ring-white/5">
          
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
                <div className="bg-white p-2.5 rounded-2xl shadow-2xl">
                <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="w-14 h-14 object-contain"
                />
                </div>
                <div className="flex flex-col">
                <span className="text-white font-black text-2xl uppercase leading-none tracking-tight">AQUALYNX</span>
                <span className="text-purple-400 text-[9px] font-bold tracking-[0.2em] mt-1.5 uppercase opacity-90">Maritime Analytics</span>
                </div>
            </div>
            {/* Indikator Kesempatan Login */}
            <div className="text-right">
                <p className="text-white/40 text-[8px] uppercase tracking-widest font-bold">Attempts</p>
                <p className={`text-sm font-black ${attempts === 1 ? 'text-red-500 animate-pulse' : 'text-white'}`}>{attempts}/3</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            
            {/* INPUT EMAIL */}
            <div className="group">
              <label className="text-white/40 text-[10px] font-bold mb-2.5 block uppercase tracking-[0.2em] ml-1 transition-colors group-focus-within:text-purple-400">
                Email Address
              </label>
              <div className="relative">
                <span className={`absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 ${errors.email ? 'text-red-500' : 'text-gray-500 group-focus-within:text-purple-400'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <input 
                  type="email" 
                  value={email}
                  disabled={isLocked}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@samudra.tech"
                  className={`w-full bg-white/5 border-2 text-white py-4.5 pl-14 pr-6 rounded-2xl focus:outline-none transition-all duration-300 text-sm font-medium
                    ${errors.email ? 'border-red-500/40 bg-red-500/5 focus:border-red-500' : 'border-white/5 focus:border-purple-500/40 focus:bg-white/10'}`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-[10px] mt-2 ml-1 font-bold uppercase tracking-wider">{errors.email}</p>}
            </div>

            {/* INPUT PASSWORD */}
            <div className="group">
              <label className="text-white/40 text-[10px] font-bold mb-2.5 block uppercase tracking-[0.2em] ml-1 transition-colors group-focus-within:text-purple-400">
                Security Password
              </label>
              <div className="relative">
                <span className={`absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 ${errors.password ? 'text-red-500' : 'text-gray-500 group-focus-within:text-purple-400'}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  disabled={isLocked}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full bg-white/5 border-2 text-white py-4.5 pl-14 pr-14 rounded-2xl focus:outline-none transition-all duration-300 text-sm font-medium
                    ${errors.password ? 'border-red-500/40 bg-red-500/5 focus:border-red-500' : 'border-white/5 focus:border-purple-500/40 focus:bg-white/10'}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  )}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-[10px] mt-2 ml-1 font-bold uppercase tracking-wider">{errors.password}</p>}
            </div>

            {/* SUBMIT BUTTON */}
            <button 
              type="submit" 
              disabled={isLocked}
              className={`group relative w-full h-[58px] overflow-hidden rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-[0_15px_40px_rgba(147,51,234,0.3)] mt-2
                ${isLocked ? 'bg-gray-800 cursor-not-allowed shadow-none' : 'bg-purple-600 hover:bg-purple-500'}`}
            >
              <span className="relative text-white font-black uppercase tracking-[0.4em] text-[11px]">
                {isLocked ? 'Akses Terkunci' : 'Masuk ke Sistem'}
              </span>
            </button>
            
            {isLocked && (
              <p className="text-red-500 text-[9px] text-center font-bold uppercase tracking-widest animate-bounce">
                Terlalu banyak percobaan. Hubungi Admin STN.
              </p>
            )}
          </form>

          <div className="mt-12 text-center">
            <span className="text-white/20 text-[9px] tracking-[0.3em] uppercase block font-medium">
              STN — Maritime Analytics Div. 2026
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}