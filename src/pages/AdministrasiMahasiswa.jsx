import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const AdministrasiMahasiswa = () => {
  // State untuk menyimpan file dan pratinjau (preview)
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('idle'); // 'idle', 'uploading', 'success'

  // Menangani saat mahasiswa memilih file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Membuat URL sementara untuk menampilkan gambar di browser
      setPreviewUrl(URL.createObjectURL(file));
      setUploadStatus('idle');
    }
  };

  // Menangani proses submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setUploadStatus('uploading');

    // Simulasi proses ke server (loading 2 detik)
    setTimeout(() => {
      setUploadStatus('success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-bta-black pb-12">
      <Navbar role="mahasiswa" userName="Julia Rokhmatur Rizqi" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 animate-fade-in-left">
        
        {/* Tombol Kembali */}
        <Link to="/mahasiswa" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-bta-green mb-6 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          
          {/* Header Halaman */}
          <div className="bg-bta-green p-8 text-white">
            <h1 className="text-2xl font-extrabold mb-2">Administrasi Pembayaran</h1>
            <p className="text-gray-200 text-sm opacity-90">
              Silakan unggah bukti transfer atau slip pembayaran BTA sebesar <span className="font-bold text-bta-yellow">Rp100.000</span> untuk mengaktifkan fitur presensi dan penilaian.
            </p>
          </div>

          <div className="p-8">
            
            {/* Instruksi Pembayaran */}
            <div className="bg-yellow-50 border-l-4 border-bta-yellow p-4 mb-8 rounded-r-lg">
              <h3 className="text-sm font-bold text-yellow-800 mb-1">Informasi Rekening Tujuan:</h3>
              <p className="text-xs text-yellow-700">Bank BSI: <span className="font-bold font-mono text-sm">7123456789</span> a.n. Pusat Keaswajaan UNUHA</p>
              <p className="text-xs text-yellow-700 mt-1">Pastikan nama pengirim pada struk terlihat jelas.</p>
            </div>

            {/* Form Upload */}
            {uploadStatus === 'success' ? (
              // Tampilan Jika Sukses
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-left">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-xl font-extrabold text-bta-green mb-2">Unggah Berhasil!</h3>
                <p className="text-gray-500 text-sm max-w-md">
                  Bukti pembayaran Anda sedang diverifikasi oleh Staff. Anda dapat mengecek statusnya secara berkala di halaman Dashboard.
                </p>
                <Link to="/mahasiswa" className="mt-8 bg-bta-green text-bta-yellow font-bold py-3 px-8 rounded-xl hover:bg-green-800 transition-colors shadow-md">
                  Kembali ke Dashboard
                </Link>
              </div>
            ) : (
              // Tampilan Form Input
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-bta-green mb-4">Upload Bukti Transfer (JPG/PNG)</label>
                  
                  {/* Area Pratinjau (Preview) / Area Drop */}
                  <div className="relative border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors flex flex-col items-center justify-center overflow-hidden min-h-[250px]">
                    
                    {previewUrl ? (
                      <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                        <img src={previewUrl} alt="Preview" className="max-h-64 object-contain rounded-lg shadow-sm mb-4" />
                        <button 
                          type="button" 
                          onClick={() => { setSelectedFile(null); setPreviewUrl(null); }}
                          className="text-xs font-bold text-red-500 hover:text-red-700 bg-red-50 px-4 py-2 rounded-full transition-colors"
                        >
                          Hapus & Ganti File
                        </button>
                      </div>
                    ) : (
                      <div className="text-center p-10 pointer-events-none">
                        <svg className="mx-auto h-12 w-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                        <p className="text-sm text-gray-500 font-medium">Klik kotak ini untuk memilih file</p>
                        <p className="text-xs text-gray-400 mt-1">Maksimal ukuran file: 2MB</p>
                      </div>
                    )}

                    {/* Input File asli disembunyikan dan ditimpa di atas kotak dashed */}
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileChange}
                      className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer ${previewUrl ? 'hidden' : 'block'}`}
                    />
                  </div>
                </div>

                {/* Tombol Submit */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!selectedFile || uploadStatus === 'uploading'}
                    className={`flex items-center justify-center px-8 py-3.5 rounded-xl font-bold transition-all duration-300 min-w-[200px] ${
                      !selectedFile 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : uploadStatus === 'uploading'
                        ? 'bg-bta-green opacity-70 text-bta-yellow cursor-wait'
                        : 'bg-bta-green text-bta-yellow hover:bg-green-800 shadow-lg hover:-translate-y-1'
                    }`}
                  >
                    {uploadStatus === 'uploading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-bta-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Mengunggah...
                      </>
                    ) : (
                      'Kirim Bukti Pembayaran'
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </main>
    </div>
  );
};

export default AdministrasiMahasiswa;