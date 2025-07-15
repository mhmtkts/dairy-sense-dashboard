import { useTranslation } from 'react-i18next';
import { PiChartPieSliceFill } from "react-icons/pi";
import { PiShoppingBagOpen } from "react-icons/pi";
import { GoFileDirectory } from "react-icons/go";
import { LiaIdCardAltSolid } from "react-icons/lia";
import { PiIdentificationCard } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { PiNotebookLight } from "react-icons/pi";
import { PiChatsCircle } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { IoIosPerson } from "react-icons/io";
import { useSidebar } from '../../context/SidebarContext';

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();

  const navLinkClasses = ({ isActive }) => 
    `flex items-center px-4 py-3 text-sm font-medium rounded-2xl ${
      isActive 
        ? 'bg-[#F5F5F5]'
        : 'text-gray-700 hover:bg-gray-100'
  }`;

  const {t} = useTranslation();

  return (
     <aside className={`
        bg-white text-gray-800 border-r border-gray-200
        flex flex-col flex-shrink-0
        transition-all duration-300 ease-in-out
        fixed md:relative inset-y-0 left-0 z-30 
        transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0

        ${isSidebarOpen ? 'w-56' : 'md:w-20'}
      `}
    >
      <div className="flex items-center justify-center h-20  px-4">
       <img src="/src/assets/cropped-cropped-DairySense.png" alt="Logo" className="object-cover" />
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavLink to="/" className={navLinkClasses}>
          <PiChartPieSliceFill className='w-6 h-6 mr-3 flex-shrink-0' />
          {isSidebarOpen && <span className="whitespace-nowrap">{t('dashboard')}</span>}
        </NavLink>
        <NavLink to="/reports" className={navLinkClasses}>
          <PiShoppingBagOpen className='w-6 h-6 mr-3 flex-shrink-0' />
          {isSidebarOpen && <span className="whitespace-nowrap">{t('reports')}</span>}
        </NavLink>
        <NavLink to="/protocols" className={navLinkClasses}>
          <GoFileDirectory className='w-6 h-6 mr-3 flex-shrink-0' />
          {isSidebarOpen && <span className="whitespace-nowrap">{t('protocols')}</span>}
        </NavLink>
        <NavLink to="/events" className={navLinkClasses}>
          <LiaIdCardAltSolid className='w-6 h-6 mr-3 flex-shrink-0' />
          {isSidebarOpen && <span className="whitespace-nowrap">{t('defined_events')}</span>}
        </NavLink>
        <NavLink to="/agenda" className={navLinkClasses}>
          <PiIdentificationCard className='w-6 h-6 mr-3 flex-shrink-0' />
          {isSidebarOpen && <span className="whitespace-nowrap">{t('settings')}</span>}
        </NavLink>
        <NavLink to="/users" className={navLinkClasses}>
          <GrGroup className='w-6 h-6 mr-3 flex-shrink-0' />
          {isSidebarOpen && <span className="whitespace-nowrap">{t('defined_events2')}</span>}
        </NavLink>
        <NavLink to="/treatments" className={navLinkClasses}>
          <PiNotebookLight className='w-6 h-6 mr-3 flex-shrink-0' />
          {isSidebarOpen && <span className="whitespace-nowrap">{t('treatments')}</span>}
        </NavLink>
        <NavLink to="/chats" className={navLinkClasses}>
          <PiChatsCircle className='w-6 h-6 mr-3 flex-shrink-0' />
          {isSidebarOpen && <span className="whitespace-nowrap">{t('agenda')}</span>}
        </NavLink>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
            <div className="w-7 h-7 bg-gray-300 rounded-full flex-shrink-0">
              <IoIosPerson className="w-7 h-7 pl-0.5 pr-0.5 text-gray-500" />
            </div>
            {isSidebarOpen && (
              <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800 whitespace-nowrap">Vet. Furkan Acar</p>
              </div>
            )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;