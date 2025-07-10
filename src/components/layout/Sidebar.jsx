import React from 'react';
import { PiChartPieSliceFill } from "react-icons/pi";
// İkonları daha sonra ekleyeceğiz, şimdilik sadece iskeleti yapalım.

const Sidebar = () => {
  return (
    // Tailwind class'ları ile stilendirme
    <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
      <img src="/src/assets/cropped-cropped-DairySense.png" alt="Logo" className="object-cover" />

      {/* Menü Linkleri */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-black bg-[#F5F5F5] rounded-lg">
          <PiChartPieSliceFill className='w-6 h-6 mr-3' />
          Kontrol Paneli
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-black bg-[#F5F5F5] rounded-lg">
          <PiChartPieSliceFill className='w-6 h-6 mr-3' />
          Raporlar
        </a>
        {/* Diğer menü elemanlarını buraya ekleyebilirsiniz... */}
      </nav>

      {/* Kullanıcı Bilgisi */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">Vet. Furkan Acar</p>
            </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;