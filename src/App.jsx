import React from 'react';
import Sidebar from './components/layout/Sidebar'; // Birazdan bu bileşeni oluşturacağız

function App() {
  return (
    // Ana konteyner: tüm ekranı kaplar ve flexbox düzenini kullanır
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sol Menü Bileşeni */}
      <Sidebar />

      {/* Ana İçerik Alanı */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Navbar ve Dashboard kartları buraya gelecek */}
        <h1 className="text-2xl font-bold text-gray-800">Dashboard İçeriği</h1>
      </main>
    </div>
  );
}

export default App;