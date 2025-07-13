import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const InfoCard = ({ title, value, change, bgColor = 'bg-gray-50' }) => {
  const isPositive = change && !change.startsWith('-');
  
  const TrendIcon = isPositive ? FiTrendingUp : FiTrendingDown;

  return (
    <div className={`${bgColor} p-5  rounded-2xl flex flex-col justify-between h-full min-h-28`}>
      <p className="text-sm font-medium text-gray-900">{title}</p>
      
      <div className="flex justify-start gap-5 mt-2">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {change && (
          <div className={`flex items-center text-sm font-semibold text-gray-900`}>
            <span>{change}</span>
            <TrendIcon className="ml-2" size={14} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;