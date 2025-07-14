import { useState } from "react";
import GridLayout from "react-grid-layout";
import InfoCard from "../components/dashboard/InfoCard";
import { FiChevronDown } from "react-icons/fi";
import Chart from "../components/dashboard/Chart";
import StatusList from "../components/dashboard/StatusList";
import MilkProduction from "../components/dashboard/MilkProduction";
import InventoryDonut from "../components/dashboard/InventoryDonut";

// Gerekli CSS dosyalarını projenizin ana giriş noktasına (örn: main.jsx) eklemeyi unutmayın:
// import 'react-grid-layout/css/styles.css';
// import 'react-grid-layout/css/resizable.css';

const DashboardPage = () => {
  // 1. Tüm bileşenler için başlangıç layout'unu tanımla
  const initialLayout = [
    // Üst sıradaki bilgi kartları
    { i: "info1", x: 0, y: 0, w: 5, h: 3.5 },
    { i: "info2", x: 5, y: 0, w: 5, h: 3.5 },
    { i: "info3", x: 10, y: 0, w: 5, h: 3.5 },
    { i: "info4", x: 15, y: 0, w: 5, h: 3.5 },

    // Alt sıradaki grafikler ve listeler
    { i: "chart", x: 0, y: 2, w: 15, h: 12 },
    { i: "status", x: 15, y: 2, w: 5, h: 12 },
    { i: "milk", x: 0, y: 11, w: 10, h: 10 },
    { i: "donut", x: 10, y: 11, w: 10, h: 10 },
  ];

  // 2. Layout'u state'te tut ve tarayıcı hafızasından (localStorage) yükle
  const [layout, setLayout] = useState(() => {
    try {
      const savedLayout = localStorage.getItem("dashboard-layout");
      return savedLayout ? JSON.parse(savedLayout) : initialLayout;
    } catch (error) {
      console.error("Failed to parse layout from localStorage", error);
      return initialLayout;
    }
  });

  // 3. Layout her değiştiğinde (sürükleme/boyutlandırma) değişikliği kaydet
  const handleLayoutChange = (newLayout) => {
    try {
      localStorage.setItem("dashboard-layout", JSON.stringify(newLayout));
      setLayout(newLayout);
    } catch (error) {
      console.error("Failed to save layout to localStorage", error);
    }
  };

  return (
    <div className="space-y-4">
      {/* Sayfa Başlığı */}
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-bold text-gray-800">Overview</h1>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          <span>Bugün</span>
          <FiChevronDown />
        </button>
      </div>

      {/* Sürükle-Bırak Izgara Alanı */}
      <GridLayout
        className="layout"
        layout={layout}
        cols={24}
        rowHeight={20} // Daha hassas kontrol için satır yüksekliği
        width={1200} // Genişlik (genellikle dinamik olarak ayarlanır, ama sabit de olabilir)
        onLayoutChange={handleLayoutChange}
        margin={[15, 15]} // Elemanlar arası boşluk [yatay, dikey]
        compactType="vertical" // Çakışmaları önlemek için dikey sıkıştırma
      >
        {/* Bilgi Kartları */}
        <div key="info1" className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <InfoCard title="Son 24 Saat Süt" value="7,265" change="+11.01%" bgColor="bg-[#E9ECFA]" />
        </div>
        <div key="info2" className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <InfoCard title="Dün Toplam Süt" value="3,671" change="-0.03%" bgColor="bg-[#E4F0FC]" />
        </div>
        <div key="info3" className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <InfoCard title="Sağılan İnek Sayısı" value="156" change="+15.03%" bgColor="bg-[#E9ECFA]" />
        </div>
        <div key="info4" className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <InfoCard title="Ortalama Süt" value="2,318" change="+6.08%" bgColor="bg-[#E4F0FC]" />
        </div>

        {/* Ana Grafikler ve Listeler */}
        <div key="chart" className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <Chart />
        </div>
        <div key="status" className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <StatusList />
        </div>
        <div key="milk" className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <MilkProduction />
        </div>
        <div key="donut" className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <InventoryDonut />
        </div>
      </GridLayout>
    </div>
  );
};

export default DashboardPage;