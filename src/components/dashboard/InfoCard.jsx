import React from 'react';

const InfoCard = ({ icon, title, value, change, iconBgColor }) => {
  const isPositive = change && change.startsWith('+');
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBgColor} mr-4`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        {change && (
          <p className={`text-sm font-medium ${changeColor}`}>{change}</p>
        )}
      </div>
    </div>
  );
};

export default InfoCard;