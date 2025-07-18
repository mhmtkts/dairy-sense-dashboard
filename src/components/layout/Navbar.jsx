import { useTranslation } from 'react-i18next';
import { FiSearch, FiSun, FiGlobe, FiMenu } from 'react-icons/fi';
import { RiBookletLine } from "react-icons/ri";
import { IoMdStarOutline } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { useSidebar } from '../../context/SidebarContext';
import { useRightPanel } from '../../context/RightPanelContext';
import { useLocation } from 'react-router-dom';

const Navbar = ({ toggleMobileSidebar }) => {
  const { t, i18n } = useTranslation();
  const { toggleSidebar } = useSidebar();
  const { toggleRightPanel } = useRightPanel();
  const location = useLocation();

  const pageTitles = {
    '/': 'default',
    '/reports': 'reports',
    '/protocols': 'protocols',
    '/events': 'defined_events',
    '/agenda': 'settings',
    '/users': 'defined_events2',
    '/treatments': 'treatments',
    '/chats': 'agenda',
  };

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLanguage);
  };

  const currentPageTitleKey = pageTitles[location.pathname] || 'dashboard';

  return (
    <header className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center gap-2">
        <button onClick={toggleMobileSidebar} className="p-2 rounded-full hover:bg-gray-100 text-gray-600 md:hidden">
          <FiMenu size={22} />
        </button>

        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
          >
            <RiBookletLine size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
            <IoMdStarOutline size={22} />
          </button>
          <div className="flex items-center gap-4">
            <span className="text-gray-500">{t('dashboard')}</span>
            <span className="text-gray-500">/</span>
            <span className="font-semibold text-gray-800">{t(currentPageTitleKey)}</span>
          </div>
        </div>
      </div>

      <div className="relative ml-auto mr-4 w-1/5 hidden md:block">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder={t('search_cow')}
          className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-10 pr-4  focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex items-center space-x-2">
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
        <button 
          onClick={toggleRightPanel}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
        >
          <RiBookletLine size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;