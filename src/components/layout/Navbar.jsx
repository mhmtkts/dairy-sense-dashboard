import React from 'react';
// FiMenu ikonunu import listesine ekliyoruz
import { FiMenu, FiSearch, FiSun } from 'react-icons/fi';
import { IoMdStarOutline } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsGrid3X3Gap } from "react-icons/bs";
import { MdHistory } from "react-icons/md"

const Navbar = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
      {/* Sol Taraf: İkonlar ve Breadcrumbs */}
      <div className="flex items-center gap-2">
        {/* Sidebar'ı açıp kapatacak ikon */}
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
          <FiMenu size={20} />
        </button>

        {/* Favori ikonu */}
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
          <IoMdStarOutline size={22} />
        </button>
        
        {/* Breadcrumbs */}
        <div>
          <span className="text-gray-500">Kontrol Paneli /</span>
          <span className="font-semibold text-gray-800"> Varsayılan</span>
        </div>


      </div>

      {/* Orta: Arama Çubuğu */}
      <div className="relative ml-auto mr-4 w-1/5"> {/* Konumlandırmayı düzenledik */}
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="İnek Ara"
          className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-10 pr-4  focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Sağ Taraf: İkonlar */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
          <FiSun size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
          <MdHistory size={22} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
          <IoNotificationsOutline size={22} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
          <BsGrid3X3Gap size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;