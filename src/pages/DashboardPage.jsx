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
      { i: "info1", x: 0, y: 0, w: 12, h: 4 },
      { i: "info2", x: 12, y: 0, w: 12, h: 4 },
      { i: "info3", x: 24, y: 0, w: 12, h: 4 },
      { i: "info4", x: 36, y: 0, w: 12, h: 4 },
      { i: "chart", x: 0, y: 4, w: 32, h: 14 },
      { i: "status", x: 32, y: 4, w: 16, h: 14 },
      { i: "milk", x: 0, y: 14, w: 24, h: 10 },
      { i: "donut", x: 24, y: 14, w: 24, h: 10 },
    ],
    md: [
      { i: "info1", x: 0, y: 0, w: 5, h: 4 },
      { i: "info2", x: 5, y: 0, w: 5, h: 4 },
      { i: "info3", x: 10, y: 4, w: 5, h: 4 },
      { i: "info4", x: 15, y: 4, w: 5, h: 4 },
      { i: "chart", x: 0, y: 8, w: 15, h: 13 },
      { i: "status", x: 15, y: 17, w: 5, h: 13 },
      { i: "milk", x: 0, y: 26, w: 10, h: 10 },
      { i: "donut", x: 10, y: 35, w: 10, h: 10 },
    ],
    sm: [
      { i: "info1", x: 0, y: 0, w: 3, h: 4 },
      { i: "info2", x: 3, y: 4, w: 3, h: 4 },
      { i: "info3", x: 6, y: 8, w: 3, h: 4 },
      { i: "info4", x: 9, y: 12, w: 3, h: 4 },
      { i: "chart", x: 0, y: 16, w: 9, h: 12 },
      { i: "status", x: 9, y: 25, w: 3, h: 12 },
      { i: "milk", x: 0, y: 34, w: 6, h: 10 },
      { i: "donut", x: 6, y: 43, w: 6, h: 10 },
    ],
    xs: [
      { i: "info1", x: 0, y: 0, w: 4, h: 4 },
      { i: "info2", x: 0, y: 4, w: 4, h: 4 },
      { i: "info3", x: 0, y: 8, w: 4, h: 4 },
      { i: "info4", x: 0, y: 12, w: 4, h: 4 },
      { i: "chart", x: 0, y: 16, w: 4, h: 9 },
      { i: "status", x: 0, y: 25, w: 4, h: 9 },
      { i: "milk", x: 0, y: 34, w: 4, h: 9 },
      { i: "donut", x: 0, y: 43, w: 4, h: 9 },
    ],
    xxs: [
      { i: "info1", x: 0, y: 0, w: 2, h: 4 },
      { i: "info2", x: 0, y: 4, w: 2, h: 4 },
      { i: "info3", x: 0, y: 8, w: 2, h: 4 },
      { i: "info4", x: 0, y: 12, w: 2, h: 4 },
      { i: "chart", x: 0, y: 16, w: 2, h: 9 },
      { i: "status", x: 0, y: 25, w: 2, h: 9 },
      { i: "milk", x: 0, y: 34, w: 2, h: 9 },
      { i: "donut", x: 0, y: 43, w: 2, h: 9 },
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
      window.dispatchEvent(new Event("resize"));
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
        cols={{ lg: 48, md: 20, sm: 12, xs: 4, xxs: 2 }}
        rowHeight={20}
        onLayoutChange={handleLayoutChange}
        margin={[15, 15]}
        compactType="vertical"
      >
        <div
          key="info1"
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          <InfoCard
            title="Son 24 Saat Süt"
            value="7,265"
            change="+11.01%"
            bgColor="bg-[#E9ECFA]"
          />
        </div>
        <div
          key="info2"
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          <InfoCard
            title="Dün Toplam Süt"
            value="3,671"
            change="-0.03%"
            bgColor="bg-[#E4F0FC]"
          />
        </div>
        <div
          key="info3"
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          <InfoCard
            title="Sağılan İnek Sayısı"
            value="156"
            change="+15.03%"
            bgColor="bg-[#E9ECFA]"
          />
        </div>
        <div
          key="info4"
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          <InfoCard
            title="Ortalama Süt"
            value="2,318"
            change="+6.08%"
            bgColor="bg-[#E4F0FC]"
          />
        </div>

        <div
          key="chart"
          className="bg-[#F8F8F8] rounded-2xl shadow-sm overflow-hidden"
        >
          <Chart />
        </div>
        <div
          key="status"
          className="bg-[#F8F8F8] rounded-2xl shadow-sm overflow-hidden"
        >
          <StatusList />
        </div>
        <div
          key="milk"
          className="bg-[#F8F8F8] rounded-2xl shadow-sm overflow-hidden"
        >
          <MilkProduction />
        </div>
        <div
          key="donut"
          className="bg-[#F8F8F8]  rounded-2xl shadow-sm overflow-hidden"
        >
          <InventoryDonut />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default DashboardPage;
