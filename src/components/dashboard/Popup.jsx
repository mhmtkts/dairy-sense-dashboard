import React from 'react';
import { FiX } from 'react-icons/fi';

const Popup = ({ isOpen, onClose, title }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} 
    >
      <div 
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <FiX size={24} />
        </button>
        
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        
        <p className="text-gray-600">
          Bu pop-up, seçilen içeriğin detaylarını göstermek için açılmıştır.
          Case study gereği burası örnek bir içerikle doldurulmuştur.
        </p>
      </div>
    </div>
  );
};

export default Popup;