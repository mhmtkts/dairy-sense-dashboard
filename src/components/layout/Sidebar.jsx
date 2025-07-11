import React from 'react';
import { PiChartPieSliceFill } from "react-icons/pi";
import { PiShoppingBagOpen } from "react-icons/pi";
import { GoFileDirectory } from "react-icons/go";
import { LiaIdCardAltSolid } from "react-icons/lia";
import { PiIdentificationCard } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { PiNotebookLight } from "react-icons/pi";
import { PiChatsCircle } from "react-icons/pi";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {

  const navLinkClasses = ({ isActive }) => 
    `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
      isActive 
        ? 'bg-[#F5F5F5]'
        : 'text-gray-700 hover:bg-gray-100'
  }`;

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
      <img src="/src/assets/cropped-cropped-DairySense.png" alt="Logo" className="object-cover" />

      {/* Menü Linkleri */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavLink to="/" className={navLinkClasses}>
          <PiChartPieSliceFill className='w-6 h-6 mr-3' />
          Kontrol Paneli
        </NavLink>
        <NavLink to="/reports" className={navLinkClasses}>
          <PiShoppingBagOpen className='w-6 h-6 mr-3' />
          Raporlar
        </NavLink>
        <NavLink to="/protocols" className={navLinkClasses}>
          <GoFileDirectory className='w-6 h-6 mr-3' />
          Protokoller
        </NavLink>
        <NavLink to="/events" className={navLinkClasses}>
          <LiaIdCardAltSolid className='w-6 h-6 mr-3' />
          Tanımlı Olaylar
        </NavLink>
        <NavLink to="/agenda" className={navLinkClasses}>
          <PiIdentificationCard className='w-6 h-6 mr-3' />
          Ayarlar
        </NavLink>
        <NavLink to="/users" className={navLinkClasses}>
          <GrGroup className='w-6 h-6 mr-3' />
          Tanımlanmış Olaylar
        </NavLink>
        <NavLink to="/treatments" className={navLinkClasses}>
          <PiNotebookLight className='w-6 h-6 mr-3' />
          Tedaviler
        </NavLink>
        <NavLink to="/chats" className={navLinkClasses}>
          <PiChatsCircle className='w-6 h-6 mr-3' />
          Ajanda
        </NavLink>
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