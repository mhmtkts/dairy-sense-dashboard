import { useState, useEffect } from 'react';
import { PiSunDim } from 'react-icons/pi';

const WeatherWidget = ({ isSidebarOpen }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const lat = 41.01;
    const lon = 28.98;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeather(data.current_weather);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

 const renderContent = () => {
    if (loading) {
      return <span className="text-xs text-gray-500">Yükleniyor...</span>;
    }
    if (error || !weather) {
      return <span className="text-xs text-red-500">Hata</span>;
    }

    if (isSidebarOpen) {
      return (
        <>
          <PiSunDim className="w-6 h-6 text-yellow-500 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
              {Math.round(weather.temperature)}°C
            </p>
            <p className="text-xs text-gray-500 whitespace-nowrap">İstanbul</p>
          </div>
        </>
      );
    } else {
      return (
        <span className="font-bold text-gray-800">
          {Math.round(weather.temperature)}°
        </span>
      );
    }
  };

  return (
    <div className={`flex items-center px-4 py-3 transition-all duration-300 ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}>
      {renderContent()}
    </div>
  );
};

export default WeatherWidget;