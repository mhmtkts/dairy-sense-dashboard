import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiSearch, FiSun, FiGlobe } from 'react-icons/fi';
import { IoMdStarOutline } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsGrid3X3Gap } from "react-icons/bs";
import { MdHistory } from "react-icons/md"

const Navbar = () => {

  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLanguage);
  }

  return (
    <header className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
      {/* Sol Taraf: İkonlar ve Breadcrumbs */}
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
          <FiMenu size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
          <IoMdStarOutline size={22} />
        </button>
        <div>
          {/* 4. Hard-coded metinleri t() fonksiyonu ile değiştir */}
          <span className="text-gray-500">{t('dashboard')} /</span>
          <span className="font-semibold text-gray-800"> {t('default')}</span>
        </div>
      </div>

      {/* Orta: Arama Çubuğu */}
      <div className="relative ml-auto mr-4 w-1/5">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder={t('search_cow')} // 4. Hard-coded metni değiştir
          className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-10 pr-4  focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Sağ Taraf: İkonlar */}
      <div className="flex items-center space-x-2">
        {/* 5. Dil değiştirme butonu */}
        <button 
          onClick={handleLanguageChange}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-600 flex items-center gap-1"
          title={t('change_language')}
        >
          <FiGlobe size={20} />
          <span className="font-semibold uppercase">{i18n.language}</span>
        </button>
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