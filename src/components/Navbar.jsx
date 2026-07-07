import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ role = 'mahasiswa', userName = 'Pengguna' }) => {
  const location = useLocation(); // Untuk mengecek URL saat ini

  // Definisi menu dinamis berdasarkan Role
  const menuList = {
    mahasiswa: [
      { nama: 'Dashboard', path: '/mahasiswa' },
      { nama: 'Administrasi', path: '/mahasiswa/administrasi' },
      { nama: 'Presensi', path: '/mahasiswa/presensi' },
      { nama: 'Sertifikat', path: '/mahasiswa/sertifikat' },
    ],
    tutor: [
      { nama: 'Dashboard', path: '/tutor' },
      { nama: 'Kelasku', path: '/tutor/kelas' },
      { nama: 'Absensi Saya', path: '/tutor/absensi' },
      { nama: 'Manajemen Nilai', path: '/tutor/nilai' },
    ],
    staff: [
      { nama: 'Dashboard', path: '/staff' },
      { nama: 'Verifikasi Berkas', path: '/staff/verifikasi-berkas' },
      { nama: 'Verifikasi Nilai', path: '/staff/verifikasi-nilai' },
      { nama: 'Plotting Kelas', path: '/staff/plotting' },
      { nama: 'Data Master', path: '/staff/master' },
    ],
    superadmin: [ // Pak Ulin
      { nama: 'Dashboard Eksekutif', path: '/pusat' },
      { nama: 'Approval Akhir', path: '/pusat/approval' },
      { nama: 'Monitoring Kinerja', path: '/pusat/monitoring' },
    ],
    rektorat: [
      { nama: 'Dashboard Eksekutif', path: '/rektorat' },
      { nama: 'Pusat Laporan', path: '/rektorat/laporan' },
    ]
  };

  const currentMenu = menuList[role] || [];

  return (
    // Implementasi Palet: Latar Hijau Gelap (bta-green)
    <nav className="bg-bta-green shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3">
             <div className="bg-white p-1.5 rounded-lg text-bta-green">
                {/* Ikon Buku */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
             </div>
            <span className="font-extrabold text-xl text-white tracking-wider">Al Mukarom</span>
          </div>

          {/* Menu Navigasi Tengah */}
          <div className="hidden md:flex space-x-1">
            {currentMenu.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    isActive 
                      // Implementasi Palet: Teks kuning dan background transparan jika aktif
                      ? 'text-bta-yellow bg-white/10' 
                      // Jika tidak aktif: Teks putih standar, hover menjadi kuning
                      : 'text-white hover:text-bta-yellow hover:bg-white/5'
                  }`}
                >
                  {item.nama}
                </Link>
              );
            })}
          </div>

          {/* Profil User Kanan */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-bold text-white">{userName}</p>
              {/* Implementasi Palet: Teks label kuning untuk role */}
              <p className="text-xs text-bta-yellow uppercase tracking-wider">{role}</p>
            </div>
            {/* Avatar dengan warna dasar putih dan outline kuning */}
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-bta-green font-extrabold border-2 border-bta-yellow">
              {userName.charAt(0)}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;