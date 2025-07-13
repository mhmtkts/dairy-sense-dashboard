import InfoCard from "../components/dashboard/InfoCard";
import { FiChevronDown } from "react-icons/fi";
import Chart from "../components/dashboard/Chart";
import StatusList from "../components/dashboard/StatusList";

const DashboardPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-bold text-gray-800">Overview</h1>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          <span>Bugün</span>
          <FiChevronDown />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <InfoCard
          title="Son 24 Saat Süt"
          value="7,265"
          change="+11.01%"
          bgColor="bg-[#E9ECFA]"
        />
        <InfoCard
          title="Dün Toplam Süt"
          value="3,671"
          change="-0.03%"
          bgColor="bg-[#E4F0FC]"
        />
        <InfoCard
          title="Sağılan İnek Sayısı"
          value="156"
          change="+15.03%"
          bgColor="bg-[#E9ECFA]"
        />
        <InfoCard
          title="Ortalama Süt"
          value="2,318"
          change="+6.08%"
          bgColor="bg-[#E4F0FC]"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4 w-full">
          <Chart />
        </div>
        <div className="lg:w-1/4 w-full">
          <StatusList />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;