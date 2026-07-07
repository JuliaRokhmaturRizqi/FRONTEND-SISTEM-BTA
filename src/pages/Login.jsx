import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('Masuk');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mencoba login dengan: ${credentials.username}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans">
      
      {/* Kontainer Utama (Card Besar) */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden min-h-[600px]">
        
        {/* SISI KIRI (Form Login) - SEKARANG BERWARNA HIJAU */}
        <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center items-center relative bg-bta-green animate-fade-in-left z-20">
          
          <div className="w-full max-w-sm rounded-3xl p-8 text-white">
            
            {/* Header / Tabs Form */}
            <div className="flex justify-center space-x-6 mb-8 border-b border-white/20">
              <button 
                onClick={() => setActiveTab('Masuk')}
                className={`pb-3 font-bold text-sm transition-all duration-300 ${
                  activeTab === 'Masuk' 
                    ? 'text-bta-yellow border-b-2 border-bta-yellow' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Masuk Sistem
              </button>
              <button 
                onClick={() => setActiveTab('Bantuan')}
                className={`pb-3 font-bold text-sm transition-all duration-300 ${
                  activeTab === 'Bantuan' 
                    ? 'text-bta-yellow border-b-2 border-bta-yellow' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Bantuan
              </button>
            </div>

            {/* Form Inputs */}
            {activeTab === 'Masuk' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="relative group">
                  {/* Label diubah menjadi kuning agar kontras */}
                  <label className="text-xs font-bold text-bta-yellow uppercase tracking-wider transition-colors">
                    NIM / Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    // Input transparan dengan border bawah putih transparan, fokus menjadi kuning
                    className="w-full mt-1 bg-transparent border-0 border-b-2 border-white/30 px-0 py-2 text-white focus:ring-0 focus:border-bta-yellow transition-colors placeholder-white/40"
                    placeholder="Masukkan NIM Anda"
                    required
                  />
                </div>

                <div className="relative group">
                  <label className="text-xs font-bold text-bta-yellow uppercase tracking-wider transition-colors">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    className="w-full mt-1 bg-transparent border-0 border-b-2 border-white/30 px-0 py-2 text-white focus:ring-0 focus:border-bta-yellow transition-colors placeholder-white/40 tracking-widest"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {/* Tombol Masuk - Tetap bta-yellow agar mencolok */}
                <button
                  type="submit"
                  className="w-full mt-8 bg-bta-yellow text-bta-black font-extrabold py-3.5 rounded-xl transition-all duration-300 shadow-md hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
                >
                  Masuk
                </button>

                <div className="text-center mt-6">
                   <a href="#" className="text-xs font-bold text-white hover:text-bta-yellow transition-colors">
                     Lupa Password?
                   </a>
                </div>
              </form>
            )}

            {activeTab === 'Bantuan' && (
              <div className="text-center text-sm text-gray-200 py-8 animate-fade-in-left">
                <p>Seluruh mahasiswa baru otomatis terdaftar. Gunakan <span className="font-bold text-bta-yellow">NIM</span> sebagai username untuk mengakses SIM BTA.</p>
              </div>
            )}
          </div>
        </div>

        {/* SISI KANAN (Branding & Ilustrasi) - SEKARANG BERWARNA PUTIH */}
        <div className="md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden animate-fade-in-right">
          
          {/* Ornamen Latar Belakang (Bubble) - Disesuaikan untuk latar putih */}
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-bta-green/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-bta-yellow/10 rounded-full blur-3xl"></div>

          {/* Header Logo Kanan */}
          <div className="flex items-center justify-end space-x-3 z-10">
            <span className="font-extrabold text-xl tracking-wide text-bta-green">Al Mukarom</span>
            {/* Ikon menggunakan latar hijau dan logo kuning */}
            <div className="bg-bta-green p-2 rounded-lg shadow-md">
              <svg className="w-6 h-6 text-bta-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
          </div>

          {/* Area Tengah: Ilustrasi dengan Animasi Melayang (Floating) */}
          <div className="flex-grow flex flex-col items-center justify-center z-10 py-12 md:py-0">
             <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center animate-float">
                {/* Frame belakang disesuaikan */}
                <div className="absolute inset-0 bg-bta-yellow/20 border border-bta-yellow/40 rounded-3xl rotate-12 transition-transform duration-700 hover:rotate-[24deg]"></div>
                <div className="absolute inset-0 bg-bta-green/10 border border-bta-green/20 rounded-3xl -rotate-6 transition-transform duration-700 hover:-rotate-12"></div>
                
                {/* Ikon Tengah - Latar Hijau, Ikon Kuning/Putih */}
                <div className="relative bg-bta-green p-6 rounded-2xl shadow-xl">
                   <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                   </svg>
                </div>
             </div>
          </div>

          {/* Footer Kanan - Teks abu-abu agar terbaca di latar putih */}
          <div className="z-10 text-xs text-gray-400 text-center md:text-right font-medium">
            Copyright © 2026, SIM BTA UNUHA. All rights reserved
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;