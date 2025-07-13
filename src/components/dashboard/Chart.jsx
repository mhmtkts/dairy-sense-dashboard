import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Görseldeki gibi iki veri serisi içeren yeni örnek veri
const data = [
  { month: 'Jan', saat24: 12000, ortalama10Gun: 9000 },
  { month: 'Feb', saat24: 8000, ortalama10Gun: 13000 },
  { month: 'Mar', saat24: 14000, ortalama10Gun: 21000 },
  { month: 'Apr', saat24: 24000, ortalama10Gun: 8000 },
  { month: 'May', saat24: 28000, ortalama10Gun: 15000 },
  { month: 'Jun', saat24: 21000, ortalama10Gun: 22000 },
  { month: 'Jul', saat24: 23000, ortalama10Gun: 31000 },
];

// Başlık sekmeleri için bileşen
const ChartTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Toplam Süt', 'Sağılan Hayvan Sayısı', 'Sağım Süresi'];
  return (
    <div className="flex items-center gap-6">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-sm pb-2 ${activeTab === tab ? 'font-bold text-gray-800 border-b-2 border-gray-800' : 'font-medium text-gray-400'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

// Veri serisi açıklamaları için bileşen
const ChartLegend = () => (
  <div className="flex items-center gap-4 text-xs text-gray-600">
    <div className="flex items-center pb-2 gap-2">
      <span className="w-2 h-2 pb-2 rounded-full bg-gray-800"></span>
      <span>24 Saat</span>
    </div>
    <div className="flex items-center pb-2 gap-2">
      <span className="w-2 h-2  rounded-full bg-[#ABB6D5]"></span>
      <span>10 Gün Ortalama</span>
    </div>
  </div>
);


const Chart = () => {
  const [activeTab, setActiveTab] = useState('Toplam Süt');

   return (
    <div className="bg-[#F8F8F8] p-6 rounded-2xl shadow-sm h-full flex flex-col">
      {/* Grafik Başlığı: Sekmeler ve Açıklamalar */}
      <div className="flex justify-between items-center mb-6">
        <ChartTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="h-4 w-px mb-2 bg-gray-300"></div>
        <ChartLegend />
      </div>

      {/* Grafik Alanı */}
      <div className="flex-grow w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            // Margin'i sıfırlayarak kontrolü eksenlere bırakıyoruz
            margin={{ top: 5, left: -30, bottom: 5 }}
          >
            <defs>
              {/* Ana alan dolgusu için degrade tanımı */}
              <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D1D5DB" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#D1D5DB" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9A9A9A', fontSize: 12 }} 
              // Etiket ile eksen arasına boşluk ekliyoruz
              tickMargin={10} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9A9A9A', fontSize: 12 }} 
              // 0 değerini "0K" yerine "0" olarak formatlıyoruz
              tickFormatter={(value) => (value === 0 ? '0' : `${value / 1000}K`)}
              // Eksenin başlangıç ve bitişini manuel ayarlıyoruz
              domain={[0, 'dataMax']}
              ticks={[0, 10000, 20000, 30000]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: '0.75rem',
                borderColor: '#E5E7EB',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              }}
            />
            {/* 10 Gün Ortalama (kesikli çizgi) */}
            <Area type="monotone" dataKey="ortalama10Gun" stroke="#ABB6D5" strokeWidth={2} strokeDasharray="5 5" fill="transparent" />
            {/* 24 Saat (düz çizgi ve dolgu) */}
            <Area type="monotone" dataKey="saat24" stroke="#4B5563" strokeWidth={2} fillOpacity={1} fill="url(#colorMain)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;