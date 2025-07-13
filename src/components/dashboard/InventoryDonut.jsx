import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const inventoryData = [
  { name: 'Tohumlanmamış', value: 52.1, color: '#374151' },
  { name: 'Tohumlanmış', value: 22.8, color: '#93C5FD' },
  { name: 'Gebe', value: 13.9, color: '#A7F3D0' },
  { name: 'Kuru', value: 11.2, color: '#C7D2FE' },
];

const CustomLegend = ({ data }) => (
  <div className="w-1/2 flex flex-col justify-center space-y-3">
    {data.map((entry, index) => (
      <div key={`legend-${index}`} className="flex items-center justify-between text-sm">
        <div className="flex items-center">
          <span className="w-2.5 h-2.5 rounded-full mr-3" style={{ backgroundColor: entry.color }}></span>
          <span className="text-gray-600">{entry.name}</span>
        </div>
        <span className="font-semibold text-gray-800">{entry.value}%</span>
      </div>
    ))}
  </div>
);

const InventoryDonut = () => {
  return (
    <div className="bg-[#F8F8F8] p-6 rounded-2xl shadow-sm h-full flex flex-col">
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 text-lg">İnek Envanteri</h3>
      </div>

      <div className="flex-grow flex items-center">
        <div className="w-1/2 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={inventoryData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                labelLine={false}
                label={false}
              >
                {inventoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <CustomLegend data={inventoryData} />
      </div>
    </div>
  );
};

export default InventoryDonut;