import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Responsive, WidthProvider } from "react-grid-layout";
import InfoCard from "../components/dashboard/InfoCard";
import { FiChevronDown } from "react-icons/fi";
import Chart from "../components/dashboard/Chart";
import StatusList from "../components/dashboard/StatusList";
import MilkProduction from "../components/dashboard/MilkProduction";
import InventoryDonut from "../components/dashboard/InventoryDonut";


const ResponsiveGridLayout = WidthProvider(Responsive);

const DashboardPage = () => {
  const { isRightPanelOpen } = useOutletContext();

  const initialLayouts = {
    lg: [
      { i: "info1", x: 0, y: 0, w: 6, h: 2 },
      { i: "info2", x: 6, y: 0, w: 6, h: 2 },
      { i: "info3", x: 12, y: 0, w: 6, h: 2 },
      { i: "info4", x: 18, y: 0, w: 6, h: 2 },
      { i: "chart", x: 0, y: 2, w: 18, h: 8 },
      { i: "status", x: 18, y: 2, w: 6, h: 8 },
      { i: "milk", x: 0, y: 10, w: 12, h: 8 },
      { i: "donut", x: 12, y: 10, w: 12, h: 8 },
    ],
    md: [
      { i: "info1", x: 0, y: 0, w: 5, h: 2 },
      { i: "info2", x: 5, y: 0, w: 5, h: 2 },
      { i: "info3", x: 0, y: 2, w: 5, h: 2 },
      { i: "info4", x: 5, y: 2, w: 5, h: 2 },
      { i: "chart", x: 0, y: 4, w: 10, h: 8 },
      { i: "status", x: 0, y: 12, w: 10, h: 8 },
      { i: "milk", x: 0, y: 20, w: 10, h: 8 },
      { i: "donut", x: 0, y: 28, w: 10, h: 8 },
    ],
    sm: [
      { i: "info1", x: 0, y: 0, w: 6, h: 2 },
      { i: "info2", x: 0, y: 2, w: 6, h: 2 },
      { i: "info3", x: 0, y: 4, w: 6, h: 2 },
      { i: "info4", x: 0, y: 6, w: 6, h: 2 },
      { i: "chart", x: 0, y: 8, w: 6, h: 8 },
      { i: "status", x: 0, y: 16, w: 6, h: 8 },
      { i: "milk", x: 0, y: 24, w: 6, h: 8 },
      { i: "donut", x: 0, y: 32, w: 6, h: 8 },
    ],
  };

  const [layouts, setLayouts] = useState(() => {
    try {
      const savedLayouts = localStorage.getItem("dashboard-layouts");
      return savedLayouts ? JSON.parse(savedLayouts) : initialLayouts;
    } catch (error) {
      console.error("Failed to parse layouts from localStorage", error);
      return initialLayouts;
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 350); 

    return () => clearTimeout(timer);
  }, [isRightPanelOpen]);

  const handleLayoutChange = (layout, allLayouts) => {
    try {
      localStorage.setItem("dashboard-layouts", JSON.stringify(allLayouts));
      setLayouts(allLayouts);
    } catch (error) {
      console.error("Failed to save layouts to localStorage", error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Overview</h1>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50">
          <span>Bugün</span>
          <FiChevronDown />
        </button>
      </div>

      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 24, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        onLayoutChange={handleLayoutChange}
        margin={[15, 15]}
        compactType="vertical"
      >
        {/* DEĞİŞİKLİK: Tüm div'lerden "flex" sınıfı kaldırıldı */}
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
      </ResponsiveGridLayout>
    </div>
  );
};

export default DashboardPage;