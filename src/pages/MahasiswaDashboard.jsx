import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Memanggil Navbar pintar kita

const MahasiswaDashboard = () => {
  // 1. STATE SIMULASI (Data Seamless Login)
  const [userData] = useState({
    nama: "Julia Rokhmatur Rizqi",
    nim: "230101001",
    prodi: "Informatika",
    penempatan: "MQ 2", 
  });

  // Status Administrasi: 'Belum Bayar' | 'Menunggu' | 'Tervalidasi'
  const [paymentStatus, setPaymentStatus] = useState('Belum Bayar'); 
  
  // Simulasi Waktu Kelas (Ubah ke true untuk melihat tombol presensi menyala)
  const isClassTime = false; 
  
  // Simulasi Nilai (Ubah null menjadi angka, misal 85 atau 60, untuk melihat logika kelulusan)
  const [gradeData] = useState({
    nilai: null, 
    huruf: "-",
  });

  // Fungsi simulasi upload
  const handleUploadClick = () => {
    alert("Berhasil mengunggah slip pembayaran Rp100.000!");
    setPaymentStatus('Menunggu');
  };

  // Logika Kunci Akses (Terkunci jika administrasi belum tervalidasi)
  const isLocked = paymentStatus !== 'Tervalidasi';

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-bta-black pb-12">
      
      {/* Memasang Smart Navbar di atas halaman */}
      <Navbar role="mahasiswa" userName={userData.nama} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8 animate-fade-in-left">
        
        {/* BANNER UTAMA & PENGUMUMAN PENEMPATAN */}
        <div className="bg-bta-green rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center border-b-8 border-bta-yellow">
          {/* Ornamen Banner */}
          <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 w-full md:w-2/3 mb-6 md:mb-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Ahlan wa Sahlan, {userData.nama}!
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Anda terdaftar sebagai mahasiswa prodi {userData.prodi}. Seluruh informasi penempatan kelas, presensi, dan kelulusan akan diatur melalui dasbor ini.
            </p>
          </div>
          
          {/* Kartu Pengumuman Penempatan */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-center min-w-[180px] shadow-inner">
            <p className="text-xs text-bta-yellow font-bold uppercase tracking-widest mb-2">Penempatan Kelas</p>
            <p className="text-4xl font-extrabold text-white">{userData.penempatan}</p>
            <button className="mt-4 text-xs font-bold text-white bg-white/20 hover:bg-bta-yellow hover:text-bta-black px-4 py-2 rounded-lg transition-colors w-full">
              Unduh Modul
            </button>
          </div>
        </div>

        {/* 3-COLUMN GRID: ADMINISTRASI, PRESENSI, PENILAIAN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* KOLOM 1: Administrasi & Pembayaran */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden">
            {/* Indikator Garis Atas */}
            <div className={`absolute top-0 left-0 w-full h-1.5 ${paymentStatus === 'Tervalidasi' ? 'bg-green-500' : 'bg-bta-yellow'}`}></div>
            
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-extrabold text-bta-green">Administrasi</h2>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                paymentStatus === 'Tervalidasi' ? 'bg-green-100 text-green-700' : 
                paymentStatus === 'Menunggu' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
              }`}>
                {paymentStatus}
              </span>
            </div>
            
            <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
              Silakan unggah bukti pembayaran BTA sebesar Rp100.000 agar akun Anda terhubung penuh ke fitur kelas.
            </p>
            
            <button 
              onClick={handleUploadClick}
              disabled={paymentStatus === 'Tervalidasi' || paymentStatus === 'Menunggu'}
              className={`w-full py-3 rounded-xl font-bold transition-all duration-300 shadow-sm ${
                paymentStatus === 'Tervalidasi' ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :
                paymentStatus === 'Menunggu' ? 'bg-yellow-50 text-yellow-600 cursor-not-allowed border border-yellow-200' :
                'bg-bta-yellow text-bta-black hover:bg-yellow-400 hover:shadow-md'
              }`}
            >
              {paymentStatus === 'Tervalidasi' ? 'Administrasi Selesai' : 
               paymentStatus === 'Menunggu' ? 'Menunggu Verifikasi Staff' : 'Unggah Bukti Bayar'}
            </button>
          </div>

          {/* KOLOM 2: Presensi Kelas (Terkunci jika belum validasi) */}
          <div className={`bg-white p-6 rounded-3xl shadow-sm border border-gray-200 flex flex-col relative transition-all duration-500 ${isLocked ? 'opacity-60 grayscale' : ''}`}>
            
            {/* Overlay Gembok jika terkunci */}
            {isLocked && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/50 backdrop-blur-[2px] rounded-3xl">
                <span className="text-4xl mb-2">🔒</span>
                <span className="text-xs font-bold text-bta-green bg-white px-3 py-1 rounded-full shadow">Selesaikan Administrasi</span>
              </div>
            )}

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-extrabold text-bta-green">Presensi Kelas</h2>
              <div className="bg-green-50 p-2 rounded-lg text-bta-green">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
              Tombol absensi hanya akan aktif secara otomatis pada jadwal kelas Anda (Jumat & Sabtu).
            </p>
            <button 
              disabled={isLocked || !isClassTime}
              className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                isClassTime && !isLocked
                ? 'bg-bta-green text-bta-yellow hover:bg-green-800 shadow-md' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isClassTime && !isLocked ? 'Isi Kehadiran Sekarang' : 'Di Luar Jadwal Kelas'}
            </button>
          </div>

          {/* KOLOM 3: Penilaian & Kelulusan (Terkunci jika belum validasi) */}
          <div className={`bg-white p-6 rounded-3xl shadow-sm border border-gray-200 flex flex-col relative transition-all duration-500 ${isLocked ? 'opacity-60 grayscale' : ''}`}>
             
             {isLocked && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/50 backdrop-blur-[2px] rounded-3xl"></div>
            )}

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-extrabold text-bta-green">Hasil Akhir</h2>
              <div className="bg-green-50 p-2 rounded-lg text-bta-green">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              </div>
            </div>
            
            {/* Logika Tampilan Nilai */}
            {gradeData.nilai !== null ? (
              <div className="flex flex-col flex-grow">
                 <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Skor Total</p>
                      <p className="text-4xl font-extrabold text-bta-green">{gradeData.nilai} <span className="text-xl text-gray-300">/ {gradeData.huruf}</span></p>
                    </div>
                    <span className={`px-3 py-1.5 rounded-lg text-xs font-bold ${gradeData.nilai >= 69 ? 'bg-bta-green text-bta-yellow' : 'bg-red-500 text-white'}`}>
                      {gradeData.nilai >= 69 ? 'LULUS' : 'MENGULANG'}
                    </span>
                 </div>
                 
                 {gradeData.nilai >= 69 ? (
                    <button className="w-full mt-auto bg-bta-green text-bta-yellow hover:bg-green-800 py-3 rounded-xl font-bold transition-all shadow-md">
                      Unduh Sertifikat
                    </button>
                 ) : (
                    <div className="mt-auto p-4 bg-red-50 text-red-700 text-xs font-bold rounded-xl border border-red-200 text-center leading-relaxed">
                      Standar tidak terpenuhi. Anda diwajibkan mendaftar Kelas Semester Pendek.
                    </div>
                 )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center