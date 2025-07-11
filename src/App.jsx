import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import DashboardPage from './pages/DashboardPage';

const PlaceholderPage = () => (
  <div className="p-4">
    <h2 className="text-xl text-gray-500">Bu sayfanın içeriği case study kapsamında değildir.</h2>
  </div>
);

function App() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Routes>
          {/* Ana sayfa için gerçek bileşeni göster */}
          <Route path="/" element={<DashboardPage />} />

          {/* Diğer tüm rotalar için SADECE yer tutucuyu göster */}
          <Route path="/reports" element={<PlaceholderPage />} />
          <Route path="/protocols" element={<PlaceholderPage />} />
          <Route path="/events" element={<PlaceholderPage />} />
          <Route path="/agenda" element={<PlaceholderPage />} />
          <Route path="/users" element={<PlaceholderPage />} />
          <Route path="/treatments" element={<PlaceholderPage />} />
          <Route path="/chats" element={<PlaceholderPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;