import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const weeklyProductionData = [
  { day: 'Linux', value: 18000, color: '#a7b5fe' },
  { day: 'Mac', value: 31000, color: '#80e6d9' },
  { day: 'İOS', value: 22000, color: '#333333' },
  { day: 'Windows', value: 36000, color: '#63b3ed' },
  { day: 'Android', value: 14000, color: '#a7b5fe' },
  { day: 'Other', value: 26000, color: '#80e6d9' },
];

const MilkProduction = () => {
  return (
    <div className="bg-[#F8F8F8] p-6 rounded-2xl shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800 text-lg">Haftalık Süt Üretimi</h3>
      </div>

      <div className="flex-grow w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={weeklyProductionData}
            margin={{ top: 5, right: 20, left: -15, bottom: 5 }}
            barCategoryGap="20%"
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickFormatter={(value) => (value === 0 ? '0' : `${value / 1000}K`)}
              ticks={[0, 10000, 20000, 30000]}

            />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              contentStyle={{
                borderRadius: '0.75rem',
                borderColor: '#E5E7EB',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {weeklyProductionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MilkProduction;