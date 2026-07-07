import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx'; 
import MahasiswaDashboard from './pages/MahasiswaDashboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman paling awal saat web dibuka */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Halaman Form Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Halaman Khusus Mahasiswa */}
        <Route path="/mahasiswa" element={<MahasiswaDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;