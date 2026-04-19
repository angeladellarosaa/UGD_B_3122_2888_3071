'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const CORRECT_EMAIL = "beni@gmail.com";
    const CORRECT_PASSWORD = "beni123";
    
    let emailError = '';
    let passwordError = '';

    if (!email) emailError = "Email wajib diisi!";
    else if (!/\S+@\S+\.\S+/.test(email)) emailError = "Format email salah.";

    if (!password) passwordError = "Password wajib diisi!";

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    if (email === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
      router.push('/dashboard/fleet');
    } else {
      setErrors({ 
        email: email !== CORRECT_EMAIL ? "Email tidak terdaftar." : "", 
        password: password !== CORRECT_PASSWORD ? "Password salah." : "" 
      });
    }
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-mono text-xs">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2000" 
          alt="Cruise Ship Port" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-1"></div>
      </div>

      <div className="relative z-10 w-full max-w-xl px-6 flex flex-col items-center">
        <div className="text-center mb-10">
          <h1 className="text-white text-3xl font-bold tracking-[0.3em] uppercase opacity-90">
            WELCOME BACK
          </h1>
        </div>

        <div className="w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[4rem] p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
          <div className="flex items-center gap-4 mb-10 self-start">
            <div className="bg-white p-3 rounded-2xl shadow-lg">
              <div className="w-7 h-7 bg-[#0a051a] rounded-sm"></div> 
            </div>
            <span className="text-white font-black tracking-tight text-xl uppercase">PrimeLog Fleet</span>
          </div>

          <div className="self-start mb-10">
            <h2 className="text-white text-3xl font-bold">Login</h2>
            <p className="text-white/60 text-[10px] mt-1 uppercase tracking-widest">Sistem Pemantauan Armada Samudra Nusantara</p>
          </div>

          <form className="w-full space-y-7" onSubmit={handleLogin}>
            
            <div>
              <label className="text-white/80 text-[10px] font-bold mb-2 block uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <span className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${errors.email ? 'text-red-500' : 'text-gray-400 group-focus-within:text-[#bc66ff]'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="beni@samudratechnusantara.ac.id"
                  className={`w-full bg-white text-black py-4 pl-16 pr-6 rounded-2xl focus:outline-none transition-all border-2 text-base font-bold
                    ${errors.email ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-transparent focus:border-[#bc66ff]'}`}
                />
              </div>
              {errors.email && <p className="text-red-400 text-[10px] mt-2 ml-1 italic font-bold">⚠️ {errors.email}</p>}
            </div>

            <div>
              <label className="text-white/80 text-[10px] font-bold mb-2 block uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <span className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${errors.password ? 'text-red-500' : 'text-gray-400 group-focus-within:text-[#bc66ff]'}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className={`w-full bg-white text-black py-4 pl-16 pr-14 rounded-2xl focus:outline-none transition-all border-2 text-base font-bold
                    ${errors.password ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-transparent focus:border-[#bc66ff]'}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#bc66ff] transition-colors"
                >
                  {showPassword ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  )}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-[10px] mt-2 ml-1 italic font-bold">⚠️ {errors.password}</p>}
            </div>

            <button type="submit" className="w-full bg-[#0095ff] hover:bg-[#007cd6] text-white font-black py-4 rounded-2xl shadow-[0_8px_20px_rgba(0,149,255,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 mt-8 uppercase tracking-[0.2em] text-xs">
              Masuk ke Sistem
            </button>
          </form>

          <div className="mt-14 text-center text-[9px] text-white/30 tracking-widest uppercase">
            Secured by Samudra Technology Nusantara — Analytics Div. 2026
          </div>
        </div>
      </div>
    </main>
  );
}